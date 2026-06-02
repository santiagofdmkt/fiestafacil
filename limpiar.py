import pandas as pd

df = pd.read_csv('salones.csv', encoding='utf-8-sig')

# Limpiar columna web
df['web'] = df['web'].apply(lambda x: '' if isinstance(x, str) and ('leaflet' in x or 'cdn' in x or '.ico' in x or 'favicon' in x) else x)

# Limpiar dirección
df['direccion'] = df['direccion'].apply(lambda x: '\n'.join([l for l in str(x).split('\n') if 'www.' not in l and 'http' not in l and '.com' not in l]) if isinstance(x, str) else x)

# Agregar columnas faltantes
df['tipo'] = 'Infantil'
df['activo'] = True
df['capacidad'] = None
df['precio'] = None
df['descripcion'] = ''

df.to_csv('salones_limpio.csv', index=False, encoding='utf-8-sig')
print(f"✅ {len(df)} salones exportados a salones_limpio.csv")