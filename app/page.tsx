import Link from 'next/link'

const ZONAS = [
  { nombre: 'Palermo',   foto: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80' },
  { nombre: 'Belgrano',  foto: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=400&q=80' },
  { nombre: 'Caballito', foto: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&q=80' },
  { nombre: 'Recoleta',  foto: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
  { nombre: 'San Telmo', foto: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?w=400&q=80' },
  { nombre: 'Flores',    foto: 'https://images.unsplash.com/photo-1578922746465-3a80a228f223?w=400&q=80' },
  { nombre: 'Almagro',   foto: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&q=80' },
]

const SALONES_MOCK = [
  { id: '1', nombre: 'Salón El Principito', zona: 'Palermo',   capacidad: 80,  precio: 150000, foto: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80', tipo: 'Infantil' },
  { id: '2', nombre: 'La Casita Mágica',    zona: 'Belgrano',  capacidad: 60,  precio: 120000, foto: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=600&q=80', tipo: 'Infantil' },
  { id: '3', nombre: 'Salón Fantasía',      zona: 'Caballito', capacidad: 100, precio: 180000, foto: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80', tipo: 'Quinceañera' },
  { id: '4', nombre: 'Mundo Feliz',         zona: 'Recoleta',  capacidad: 70,  precio: 200000, foto: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', tipo: 'Infantil' },
  { id: '5', nombre: 'Salón Los Sueños',    zona: 'San Telmo', capacidad: 90,  precio: 160000, foto: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?w=600&q=80', tipo: 'Eventos' },
  { id: '6', nombre: 'El Castillo',         zona: 'Flores',    capacidad: 120, precio: 220000, foto: 'https://images.unsplash.com/photo-1578922746465-3a80a228f223?w=600&q=80', tipo: 'Infantil' },
  { id: '7', nombre: 'Salón Arcoiris',      zona: 'Almagro',   capacidad: 50,  precio: 100000, foto: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=80', tipo: 'Infantil' },
  { id: '8', nombre: 'Fiesta Total',        zona: 'Palermo',   capacidad: 150, precio: 280000, foto: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80', tipo: 'Eventos' },
]

const CATEGORIAS = [
  { label: 'Cumple infantil', icon: '🎈', desc: 'Hasta 12 años' },
  { label: 'Quinceañera',     icon: '👑', desc: '15 años' },
  { label: 'Cumple adultos',  icon: '🥂', desc: 'Toda la familia' },
  { label: 'Eventos',         icon: '🎊', desc: 'Empresas y más' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans w-full overflow-x-hidden">

      {/* NAV */}
      <header className="bg-white border-b border-zinc-100 sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight shrink-0" style={{ color: '#7C3AED' }}>
            fiesta<span style={{ color: '#F97316' }}>fácil</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#salones" className="text-zinc-500 hover:text-zinc-800 transition">Salones</Link>
            <Link href="#zonas" className="text-zinc-500 hover:text-zinc-800 transition">Por zona</Link>
            <Link href="/soy-salon" className="text-zinc-500 hover:text-zinc-800 transition font-medium">Soy salón</Link>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm text-zinc-600 hover:text-zinc-900 transition font-medium">Iniciar sesión</button>
            <button className="text-white text-sm font-semibold px-4 py-2 rounded-full transition" style={{ background: '#7C3AED' }}>
              Registrarse
            </button>
          </div>
          <div className="flex md:hidden items-center gap-2">
            <Link href="/soy-salon" className="text-xs font-semibold text-zinc-600 transition">Soy salón</Link>
            <button className="text-white text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: '#7C3AED' }}>
              Registrarse
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative py-14 md:py-24 px-4 text-center overflow-hidden w-full"
        style={{ background: 'linear-gradient(135deg, #faf5ff 0%, #ede9fe 50%, #fff7ed 100%)' }}>
        <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#F97316' }}>
          🎉 Encontrá el salón ideal para el cumple
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 leading-tight mb-3">
          El cumple perfecto<br />
          <span className="italic" style={{ color: '#7C3AED' }}>empieza por el salón</span>
        </h1>
        <p className="text-base md:text-lg text-zinc-500 max-w-lg mx-auto mb-10">
          Buscá, compará y reservá salones de fiestas infantiles en tu zona. Sin llamadas, sin vueltas.
        </p>
        <div className="max-w-2xl mx-auto w-full">
          <div className="flex justify-center gap-2 mb-5">
            {['Infantil', 'Quinceañera', 'Eventos'].map((tab, i) => (
              <button key={tab} className={`px-5 py-2 rounded-full text-sm font-semibold transition border ${
                i === 0 ? 'text-white border-transparent' : 'bg-white text-zinc-500 border-zinc-200'
              }`} style={i === 0 ? { background: '#7C3AED', borderColor: '#7C3AED' } : {}}>
                {tab}
              </button>
            ))}
          </div>
          <div className="flex gap-2 bg-white rounded-2xl p-2 shadow-lg border border-zinc-100">
            <input
              type="text"
              placeholder="¿En qué barrio o zona buscás?"
              className="flex-1 px-4 py-3 text-sm text-zinc-700 outline-none bg-transparent placeholder-zinc-400"
            />
            <button className="text-white font-semibold px-6 py-3 rounded-xl text-sm transition" style={{ background: '#7C3AED' }}>
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-zinc-100 py-6 w-full">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:flex md:justify-center gap-6 md:gap-16">
          {[
            { num: '200+', label: 'Salones disponibles' },
            { num: 'CABA', label: 'Capital Federal' },
            { num: '100%', label: 'Gratis para buscar' },
            { num: '⚡',   label: 'Reserva online' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold" style={{ color: '#7C3AED' }}>{s.num}</p>
              <p className="text-xs text-zinc-400 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIPOS DE EVENTO */}
      <section className="max-w-7xl mx-auto px-4 py-10 w-full">
        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1">Explorá por tipo</p>
        <h2 className="text-2xl font-bold text-zinc-900 mb-5">¿Qué tipo de festejo buscás?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {CATEGORIAS.map(cat => (
            <button key={cat.label} className="bg-white rounded-2xl p-4 text-left border border-zinc-100 hover:border-purple-400 hover:shadow-md transition">
              <span className="text-3xl mb-2 block">{cat.icon}</span>
              <p className="font-semibold text-zinc-800 text-sm">{cat.label}</p>
              <p className="text-xs text-zinc-400 mt-0.5">{cat.desc}</p>
            </button>
          ))}
        </div>
      </section>

      {/* SALONES DESTACADOS */}
      <section id="salones" className="max-w-7xl mx-auto px-4 py-10 w-full">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1">Destacados</p>
            <h2 className="text-2xl font-bold text-zinc-900">Salones más buscados</h2>
          </div>
          <Link href="/salones" className="text-sm font-medium hover:underline" style={{ color: '#7C3AED' }}>
            Ver más →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SALONES_MOCK.slice(0, 8).map(s => (
            <Link key={s.id} href={`/salon/${s.id}`}
              className="group block rounded-2xl overflow-hidden border border-zinc-100 hover:shadow-lg transition">
              <div className="relative h-44 bg-zinc-100 overflow-hidden">
                <img src={s.foto} alt={s.nombre} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute top-2 left-2 text-white text-xs font-semibold px-2 py-1 rounded-lg" style={{ background: '#7C3AED' }}>
                  {s.tipo}
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold text-zinc-800 line-clamp-1">{s.nombre}</p>
                <p className="text-xs text-zinc-400 mt-0.5">📍 {s.zona} · hasta {s.capacidad} personas</p>
                <p className="text-sm font-bold mt-2" style={{ color: '#F97316' }}>
                  $ {s.precio.toLocaleString('es-AR')}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PARA SALONES */}
      <section className="relative w-full py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #faf5ff 0%, #ede9fe 60%, #fff7ed 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-14">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 border"
              style={{ background: '#f3e8ff', borderColor: '#d8b4fe' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#7C3AED' }} />
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#7C3AED' }}>Para dueños de salones</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 leading-tight mb-5">
              Tus fechas llenas,<br />
              <span className="italic" style={{ color: '#7C3AED' }}>sin esfuerzo.</span>
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed mb-8 max-w-lg font-medium">
              Los padres de CABA ya buscan en FiestaFácil. Sumá tu salón y recibí consultas reales — sin pagar por cada click.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                { icon: '📩', title: 'Leads directos',          desc: 'El padre te contacta a vos, sin intermediarios.' },
                { icon: '🤝', title: 'Sin ataduras',            desc: 'Sin contrato largo — arrancás y parás cuando querés.' },
                { icon: '📅', title: 'Calendario online',       desc: 'Mostrá tu disponibilidad en tiempo real.' },
                { icon: '🏙️', title: 'Presente en todo el país', desc: 'Tu ciudad tiene su lugar, sin importar dónde estés.' },
              ].map(item => (
                <li key={item.title} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white border shadow-sm flex items-center justify-center text-xl shrink-0"
                    style={{ borderColor: '#e9d5ff' }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-800">{item.title}</p>
                    <p className="text-xs text-zinc-500 mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/soy-salon"
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full transition text-sm"
              style={{ background: '#7C3AED', boxShadow: '0 10px 30px rgba(124,58,237,0.3)' }}>
              Quiero sumar mi salón <span className="text-lg">→</span>
            </Link>
            <p className="text-xs text-zinc-400 mt-3 ml-1">Sin costo de alta · Sin permanencia mínima</p>
          </div>

          <div className="flex-shrink-0 w-full md:w-[360px]">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/60">
              <div className="px-7 py-8 text-white relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #9333ea)' }}>
                <div className="absolute top-[-30px] right-[-30px] w-40 h-40 rounded-full bg-white/10" />
                <p className="text-purple-200 text-xs font-bold uppercase tracking-widest mb-2 relative z-10">Este mes en FiestaFácil</p>
                <p className="text-4xl font-black relative z-10">200+</p>
                <p className="text-purple-100 text-sm mt-1 relative z-10 font-medium">salones activos en CABA</p>
              </div>
              <div className="bg-white px-7 py-6 space-y-5">
                {[
                  { num: 'CABA', label: 'Capital Federal primero',  icon: '📍' },
                  { num: '100%', label: 'Gratis para los padres',   icon: '✅' },
                  { num: '⚡',   label: 'Reserva online inmediata', icon: '📅' },
                ].map(s => (
                  <div key={s.label} className="flex items-center gap-4 border-b border-zinc-100 pb-5 last:border-0 last:pb-0">
                    <span className="text-xl">{s.icon}</span>
                    <span className="text-zinc-500 text-sm flex-1">{s.label}</span>
                    <span className="font-black text-xl" style={{ color: '#7C3AED' }}>{s.num}</span>
                  </div>
                ))}
              </div>
              <div className="px-7 py-4 border-t" style={{ background: '#faf5ff', borderColor: '#e9d5ff' }}>
                <p className="text-zinc-500 text-xs text-center leading-relaxed">
                  Más de <span className="text-zinc-800 font-bold">500 padres</span> buscan salones en FiestaFácil cada mes
                </p>
              </div>
            </div>
            <div className="mt-4 mx-4 bg-white rounded-2xl px-5 py-3.5 shadow-lg border border-zinc-100 flex items-center gap-3">
              <span className="text-2xl">🚀</span>
              <div>
                <p className="text-xs font-bold text-zinc-800">Expansión en curso</p>
                <p className="text-xs text-zinc-400">Nuevas zonas sumándose cada mes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZONAS */}
      <section id="zonas" className="bg-zinc-50 py-12 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1">Cobertura</p>
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">Salones por zona</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {ZONAS.map(zona => (
              <Link key={zona.nombre} href={`/zona/${encodeURIComponent(zona.nombre)}`}
                className="relative rounded-2xl overflow-hidden group hover:shadow-lg transition">
                <div className="h-28 relative">
                  <img src={zona.foto} alt={zona.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-2 right-2 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: '#7C3AED' }}>
                    Ver salones
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <p className="text-white text-xs font-semibold leading-tight">{zona.nombre}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SALONES RECIENTES */}
      <section className="max-w-7xl mx-auto px-4 py-12 w-full">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1">Nuevos en la plataforma</p>
            <h2 className="text-2xl font-bold text-zinc-900">Últimos salones incorporados</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SALONES_MOCK.slice(0, 6).map(s => (
            <Link key={s.id} href={`/salon/${s.id}`}
              className="group block rounded-2xl overflow-hidden border border-zinc-100 hover:shadow-lg transition">
              <div className="relative h-52 bg-zinc-100 overflow-hidden">
                <img src={s.foto} alt={s.nombre}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-bold text-lg">$ {s.precio.toLocaleString('es-AR')}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-zinc-800 line-clamp-2 mb-1">{s.nombre}</p>
                <p className="text-xs text-zinc-400 line-clamp-1">📍 {s.zona} · {s.tipo} · hasta {s.capacidad} personas</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/salones"
            className="inline-flex items-center gap-2 bg-white border border-zinc-200 text-zinc-600 font-semibold px-8 py-3 rounded-full transition text-sm hover:border-purple-400 hover:text-purple-600">
            Ver todos los salones →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-900 text-white pt-16 pb-8 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <p className="text-2xl font-bold mb-3">
                <span style={{ color: '#a78bfa' }}>fiesta</span><span style={{ color: '#fb923c' }}>fácil</span>
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                El buscador de salones de fiestas que entiende lo que necesitás.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-300 mb-4">Salones</p>
              <ul className="space-y-2 text-sm text-zinc-500">
                {['Cumple infantil', 'Quinceañera', 'Cumple adultos', 'Eventos'].map(l => (
                  <li key={l}><a href="#" className="hover:text-purple-400 transition">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-300 mb-4">Zonas</p>
              <ul className="space-y-2 text-sm text-zinc-500">
                {ZONAS.map(z => (
                  <li key={z.nombre}>
                    <Link href={`/zona/${encodeURIComponent(z.nombre)}`} className="hover:text-purple-400 transition">
                      {z.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-300 mb-4">Empresa</p>
              <ul className="space-y-2 text-sm text-zinc-500">
                {['Acerca de FiestaFácil', 'Soy salón', 'Contacto', 'Términos de uso', 'Privacidad'].map(l => (
                  <li key={l}><a href="#" className="hover:text-purple-400 transition">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-xs text-zinc-600">© 2026 FiestaFácil. Todos los derechos reservados.</p>
            <p className="text-xs text-zinc-600">Argentina</p>
          </div>
        </div>
      </footer>

    </div>
  )
}