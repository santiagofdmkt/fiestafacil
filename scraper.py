from playwright.sync_api import sync_playwright
import pandas as pd
import time

BASE_URL = "https://www.paginasamarillas.com.ar/b/fiestas-salones/ciudad-de-buenos-aires"

salones = []

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    page = browser.new_page()

    # PASO 1 - recolectar links de fichas
    links = []
    for pagina in range(1, 6):
        url = f"{BASE_URL}?page={pagina}" if pagina > 1 else BASE_URL
        print(f"Recolectando links página {pagina}...")
        page.goto(url)
        page.wait_for_timeout(4000)

        anchors = page.query_selector_all('a[href*="/fichas/"]')
        for a in anchors:
            href = a.get_attribute('href')
            if href and '/fichas/' in href and href not in links:
                links.append(href)

        print(f"  → {len(links)} links acumulados")
        time.sleep(2)

    print(f"\nTotal links encontrados: {len(links)}")

    # PASO 2 - entrar a cada ficha
    for i, link in enumerate(links[:50]):
        url = f"https://www.paginasamarillas.com.ar{link}" if link.startswith('/') else link
        print(f"Procesando {i+1}/{min(len(links),50)}: {url}")
        
        try:
            page.goto(url)
            page.wait_for_timeout(3000)

            nombre    = page.query_selector('h1')
            direccion = page.query_selector('[class*="address"], [class*="Address"]')
            zona      = page.query_selector('[class*="locality"], [class*="Locality"]')
            telefono  = page.query_selector('[class*="phone"], [class*="Phone"], [href^="tel:"]')
            web       = page.query_selector('[class*="web"], [class*="Web"], [href^="http"]:not([href*="paginasamarillas"])')

            salones.append({
                'nombre':    nombre.inner_text().strip()    if nombre    else '',
                'direccion': direccion.inner_text().strip() if direccion else '',
                'zona':      zona.inner_text().strip()      if zona      else '',
                'telefono':  telefono.inner_text().strip()  if telefono  else '',
                'web':       web.get_attribute('href')      if web       else '',
            })
        except Exception as e:
            print(f"  Error: {e}")
        
        time.sleep(2)

    browser.close()

df = pd.DataFrame(salones)
df.to_csv('salones.csv', index=False, encoding='utf-8-sig')
print(f"\n✅ {len(salones)} salones exportados a salones.csv")