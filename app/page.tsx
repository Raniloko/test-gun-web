'use client'

import { useMemo, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Battery,
  Bike,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Crosshair,
  Filter,
  Hammer,
  MapPin,
  Menu,
  Minus,
  PackageCheck,
  Plus,
  Search,
  ShieldCheck,
  ShoppingBag,
  Store,
  UserRound,
  Wrench,
  X,
  Zap,
} from 'lucide-react'

type Product = {
  name: string
  brand: string
  price: string
  joule: string
  age: string
  drive: string
  image: string
  tag: string
  stock: string
}

const products: Product[] = [
  { name: 'HK416 A5 Sportline', brand: 'Umarex', price: '249,90 €', joule: 'ca. 1,4 J', age: 'FSK 18', drive: 'S-AEG', image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=900&q=85', tag: 'Bestseller', stock: 'Sofort lieferbar' },
  { name: 'Hi-Capa 5.1 Match', brand: 'Tokyo Marui', price: '189,00 €', joule: 'ca. 0,9 J', age: 'FSK 18', drive: 'GBB', image: 'https://images.unsplash.com/photo-1584285659284-2f4b2c02e34f?auto=format&fit=crop&w=900&q=85', tag: 'Neuheit', stock: 'Auf Lager' },
  { name: 'M4 CQB-R Gen. 2', brand: 'Specna Arms', price: '219,90 €', joule: 'ca. 0,5 J', age: 'FSK 14', drive: 'S-AEG', image: 'https://images.unsplash.com/photo-1588099768523-f4e6a6b48f27?auto=format&fit=crop&w=900&q=85', tag: 'FSK 14', stock: 'Abholung Hanau' },
  { name: 'VSR-10 Pro Sniper', brand: 'Action Army', price: '159,90 €', joule: 'ca. 1,8 J', age: 'FSK 18', drive: 'Federdruck', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85', tag: 'Top bewertet', stock: 'Sofort lieferbar' },
]

const categories = [
  { title: 'Langwaffen', sub: 'S-AEG · HPA · Bolt-Action', image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=1000&q=85' },
  { title: 'Kurzwaffen', sub: 'GBB · AEP · CO₂', image: 'https://images.unsplash.com/photo-1584285659284-2f4b2c02e34f?auto=format&fit=crop&w=1000&q=85' },
  { title: 'Tactical Gear', sub: 'Schutz · Tragesysteme · Zubehör', image: 'https://images.unsplash.com/photo-1521405924368-64c5b84bec60?auto=format&fit=crop&w=1000&q=85' },
  { title: 'BBs & Energie', sub: 'Präzisions-BBs · Gas · Akkus', image: 'https://images.unsplash.com/photo-1558980664-10ea2e25f49b?auto=format&fit=crop&w=1000&q=85' },
]

export default function Home() {
  const [cart, setCart] = useState<Product[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [ageOpen, setAgeOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [filterOpen, setFilterOpen] = useState(false)
  const filtered = useMemo(() => products.filter((p) => `${p.name} ${p.brand} ${p.drive}`.toLowerCase().includes(query.toLowerCase())), [query])
  const addToCart = (product: Product) => { setCart((current) => [...current, product]); setCartOpen(true) }
  const total = cart.reduce((sum, p) => sum + Number(p.price.replace('.', '').replace(',', '.').replace(' €', '')), 0)

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <div className="border-b border-[#f97316]/20 bg-[#f97316] px-4 py-2 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-[#0f172a] sm:text-xs">Lokaler Fachhandel &amp; Werkstatt in Hanau <span className="mx-2 opacity-50">•</span> Click &amp; Collect verfügbar <span className="mx-2 opacity-50">•</span> Diskreter FSK-geprüfter Versand mit DHL</div>
      <header className="sticky top-0 z-30 border-b border-slate-200/10 bg-[#f8fafc]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-4 py-4 lg:px-8">
          <button aria-label="Menü öffnen" className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}><Menu size={22} /></button>
          <a href="#top" className="flex min-w-fit items-center gap-2.5"><span className="grid size-9 place-items-center rounded-sm bg-[#f97316] text-[#0f172a]"><Crosshair size={22} strokeWidth={2.5} /></span><span className="leading-none"><b className="block text-sm tracking-[0.16em]">HANAU</b><small className="text-[9px] uppercase tracking-[0.3em] text-[#f97316]">Airsoft / Tactical Gear</small></span></a>
          <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-4 border-b border-slate-200/10 bg-[#f8fafc] p-5 text-xs font-semibold uppercase tracking-wider lg:static lg:flex lg:flex-row lg:items-center lg:gap-5 lg:border-0 lg:bg-transparent lg:p-0 lg:pl-8`}>
            {['Langwaffen', 'Kurzwaffen', 'Airsoft ab 14', 'BBs & Gas', 'Tactical Gear', 'Store & Werkstatt'].map((item) => <a key={item} href={item === 'Store & Werkstatt' ? '#store' : '#katalog'} className="transition-colors hover:text-[#f97316]">{item}</a>)}
          </nav>
          <div className="ml-auto flex items-center gap-3"><div className="hidden items-center gap-2 rounded-sm border border-slate-200/10 bg-slate-50 px-3 py-2 md:flex"><Search size={15} className="text-slate-900/45" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Produkte suchen..." className="w-36 bg-transparent text-xs outline-none placeholder:text-slate-900/35" /></div><button aria-label="Konto" className="hidden text-slate-900/70 hover:text-[#f97316] sm:block"><UserRound size={19} /></button><button onClick={() => setCartOpen(true)} className="relative text-slate-900/80 hover:text-[#f97316]" aria-label="Warenkorb öffnen"><ShoppingBag size={20} />{cart.length > 0 && <span className="absolute -right-2 -top-2 grid size-4 place-items-center rounded-full bg-[#f97316] text-[9px] font-bold text-[#0f172a]">{cart.length}</span>}</button></div>
        </div>
      </header>

      <section id="top" className="relative isolate overflow-hidden border-b border-slate-200/10"><div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_45%,rgba(249,115,22,.12),transparent_42%),linear-gradient(110deg,#f8fafc_28%,rgba(248,250,252,.88),#e2e8f0)]" /><div className="mx-auto grid max-w-[1440px] items-end gap-10 px-4 pb-16 pt-20 sm:pt-28 lg:grid-cols-[1fr_0.8fr] lg:px-8 lg:pb-24"><div><div className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#f97316]"><span className="h-px w-8 bg-[#f97316]" /> Seit 2011 · Hanau, Rhein-Main</div><h1 className="max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-0.05em] sm:text-7xl lg:text-[88px]">Präzision,<br /><span className="text-[#f97316]">Leidenschaft</span><br />&amp; Expertise.</h1><p className="mt-7 max-w-xl text-base leading-relaxed text-slate-900/55 sm:text-lg">Dein Airsoft-Fachgeschäft im Rhein-Main-Gebiet. Ausgewählte Ausrüstung, persönliche Beratung und eine eigene Werkstatt – direkt vor Ort in Hanau.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#katalog" className="inline-flex items-center gap-2 bg-[#f97316] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#0f172a] transition hover:bg-[#fb923c]">Katalog entdecken <ArrowRight size={16} /></a><a href="#store" className="inline-flex items-center gap-2 border border-slate-200/20 px-5 py-3 text-xs font-bold uppercase tracking-wider transition hover:border-[#f97316] hover:text-[#f97316]">Store &amp; Werkstatt <MapPin size={15} /></a></div></div><div className="relative hidden min-h-[320px] items-end justify-end lg:flex"><div className="absolute right-8 top-0 size-64 rounded-full border border-[#f97316]/20" /><div className="relative w-80 border border-slate-200/10 bg-[#ffffff]/80 p-5 backdrop-blur"><div className="mb-12 flex items-center justify-between text-[9px] uppercase tracking-[.2em] text-slate-900/45"><span>Hanau / 50.12° N</span><span>EST. 2011</span></div><div className="flex items-end justify-between"><div><p className="text-xs uppercase tracking-widest text-[#f97316]">Fachhandel</p><p className="mt-1 text-2xl font-medium">vor Ort.</p></div><div className="grid size-14 place-items-center rounded-full border border-[#f97316]/50"><Crosshair size={25} className="text-[#f97316]" /></div></div></div></div></div></section>

      <section className="border-b border-slate-200/10 bg-white"><div className="mx-auto grid max-w-[1440px] grid-cols-2 divide-x divide-y divide-white/10 sm:grid-cols-4 sm:divide-y-0"><Trust icon={<BadgeCheck />} title="Offiziell geprüft" text="F im Fünfeck" /><Trust icon={<Wrench />} title="Eigene Werkstatt" text="Service in Hanau" /><Trust icon={<PackageCheck />} title="Sicherer Versand" text="DHL Alterssichtprüfung" /><Trust icon={<ShieldCheck />} title="Erfahrene Beratung" text="Seit über 13 Jahren" /></div></section>

      <section id="katalog" className="mx-auto max-w-[1440px] px-4 py-16 lg:px-8 lg:py-24"><div className="mb-8 flex items-end justify-between"><div><p className="eyebrow">Entdecke unser Sortiment</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Für jedes Spielfeld.</h2></div><a href="#produkte" className="hidden items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f97316] sm:flex">Alle Kategorien <ArrowRight size={15} /></a></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{categories.map((category, index) => <a href="#produkte" key={category.title} className={`group relative min-h-64 overflow-hidden border border-slate-200/10 ${index === 0 ? 'sm:row-span-2 sm:min-h-[523px]' : ''}`}><img src={category.image} alt="" className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#090d0d] via-[#090d0d]/20 to-transparent" /><div className="relative flex h-full min-h-64 flex-col justify-end p-5"><span className="mb-2 text-[10px] uppercase tracking-widest text-[#f97316]">0{index + 1}</span><h3 className="text-xl font-semibold">{category.title}</h3><p className="mt-1 text-xs text-slate-900/55">{category.sub}</p><ArrowRight className="mt-5 text-slate-900/50 transition group-hover:translate-x-1 group-hover:text-[#f97316]" size={18} /></div></a>)}</div></section>

      <section id="produkte" className="border-y border-slate-200/10 bg-[#f1f5f9] py-16 lg:py-24"><div className="mx-auto max-w-[1440px] px-4 lg:px-8"><div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">Ausgewählt für dich</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Bestseller &amp; Neuheiten</h2></div><div className="flex items-center gap-2"><button className="grid size-9 place-items-center border border-slate-200/15 hover:border-[#f97316]" aria-label="Zurück"><ChevronLeft size={16} /></button><button className="grid size-9 place-items-center border border-slate-200/15 hover:border-[#f97316]" aria-label="Weiter"><ChevronRight size={16} /></button></div></div><div className="mb-5 flex items-center gap-3 text-xs text-slate-900/45"><button onClick={() => setFilterOpen(!filterOpen)} className="flex items-center gap-2 border border-slate-200/15 px-3 py-2 hover:border-[#f97316]"><Filter size={14} /> Filter <ChevronDown size={13} /></button>{query && <span>Suchergebnisse für „{query}“</span>}<span className="ml-auto">{filtered.length} Produkte</span></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{filtered.map((product) => <ProductCard key={product.name} product={product} onAdd={() => addToCart(product)} />)}</div></div></section>

      <section id="store" className="mx-auto grid max-w-[1440px] gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-24"><div><p className="eyebrow">Nicht nur online</p><h2 className="mt-3 max-w-lg text-4xl font-semibold leading-tight tracking-tight">Komm vorbei.<br /><span className="text-[#f97316]">Wir sind für dich da.</span></h2><p className="mt-6 max-w-lg leading-relaxed text-slate-900/55">Anfassen, ausprobieren, beraten lassen. In unserem Store in Hanau findest du unser komplettes Sortiment und Menschen, die ihren Sport genauso ernst nehmen wie du.</p><div className="mt-8 grid gap-5 sm:grid-cols-2"><Info icon={<MapPin />} title="Adresse" text={'Rodenbacher Chaussee 8\n63457 Hanau'} /><Info icon={<Clock3 />} title="Öffnungszeiten" text={'Di–Fr 10:00–18:30 Uhr\nSa 10:00–16:00 Uhr'} /><Info icon={<Store />} title="Click & Collect" text="Ausweisprüfung bei Abholung" /><Info icon={<Wrench />} title="Werkstatt" text="Tuning · Wartung · Reparatur" /></div></div><div className="relative min-h-[420px] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"><div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'linear-gradient(rgba(217,154,66,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(217,154,66,.22) 1px, transparent 1px)', backgroundSize: '48px 48px' }} /><div className="relative flex h-full flex-col items-center justify-center p-8 text-center"><div className="mb-5 grid size-16 place-items-center rounded-full border border-[#f97316]/50 text-[#f97316]"><MapPin size={28} /></div><p className="text-xs font-bold uppercase tracking-[.25em] text-[#f97316]">Dein Weg zu uns</p><h3 className="mt-3 text-2xl font-medium">Store &amp; Werkstatt Hanau</h3><p className="mt-3 max-w-xs text-sm text-slate-900/50">Parkplätze direkt vor dem Laden. Google Maps Ansicht folgt.</p><button className="mt-7 inline-flex items-center gap-2 border border-slate-200/20 px-5 py-3 text-xs font-bold uppercase tracking-wider hover:border-[#f97316] hover:text-[#f97316]">Route planen <ArrowRight size={15} /></button></div></div></section>

      <footer className="border-t border-slate-200/10 bg-[#0f172a]"><div className="mx-auto grid max-w-[1440px] gap-12 px-4 py-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-8"><div><div className="flex items-center gap-2.5"><span className="grid size-8 place-items-center bg-[#f97316] text-[#0f172a]"><Crosshair size={18} /></span><b className="text-sm tracking-[.16em]">HANAU AIRSOFT</b></div><p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-900/45">Dein Fachhandel für Airsoft, Tactical Gear und professionellen Service im Rhein-Main-Gebiet.</p></div><FooterCol title="Service" links={['Kontakt', 'Store & Werkstatt', 'Click & Collect', 'Versand & Lieferung']} /><FooterCol title="Rechtliches" links={['Impressum', 'AGB', 'Datenschutz', 'Widerrufsbelehrung']} /><FooterCol title="Hinweise" links={['Batteriegesetz', 'Elektroaltgeräte', 'Altersnachweis', 'Sicher transportieren']} /></div><div className="mx-auto flex max-w-[1440px] flex-col gap-4 border-t border-slate-200/10 px-4 py-6 text-[10px] uppercase tracking-widest text-slate-900/35 sm:flex-row sm:items-center sm:justify-between lg:px-8"><span>© 2024 Hanau Airsoft / Tactical Gear</span><span className="flex items-center gap-2"><Banknote size={14} /> Sicher bezahlen <span className="mx-1">·</span> <Bike size={14} /> DHL Paket mit Alterssichtprüfung</span></div></footer>

      {cartOpen && <div className="fixed inset-0 z-50 bg-slate-900/35" onClick={() => setCartOpen(false)}><aside onClick={(e) => e.stopPropagation()} className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-slate-200/10 bg-white shadow-2xl"><div className="flex items-center justify-between border-b border-slate-200/10 p-5"><div><p className="eyebrow">Deine Auswahl</p><h2 className="mt-1 text-xl font-semibold">Warenkorb <span className="text-slate-900/40">({cart.length})</span></h2></div><button onClick={() => setCartOpen(false)} aria-label="Warenkorb schließen"><X /></button></div><div className="flex-1 overflow-y-auto p-5">{cart.length === 0 ? <div className="flex h-full flex-col items-center justify-center text-center text-slate-900/45"><ShoppingBag size={38} strokeWidth={1} /><p className="mt-4">Dein Warenkorb ist noch leer.</p></div> : <div className="space-y-4">{cart.map((product, i) => <div key={`${product.name}-${i}`} className="flex gap-3 border-b border-slate-200/10 pb-4"><img src={product.image} alt="" className="size-20 object-cover" /><div className="min-w-0 flex-1"><p className="text-[10px] uppercase tracking-wider text-[#f97316]">{product.brand}</p><p className="mt-1 text-sm font-medium">{product.name}</p><p className="mt-2 text-sm">{product.price}</p></div><button onClick={() => setCart(cart.filter((_, index) => index !== i))} className="self-start text-slate-900/35 hover:text-slate-900" aria-label="Artikel entfernen"><X size={15} /></button></div>)}</div>}</div>{cart.length > 0 && <div className="border-t border-slate-200/10 p-5"><div className="mb-4 flex gap-3 border border-[#f97316]/30 bg-[#f97316]/10 p-3 text-xs leading-relaxed text-[#e8bd7e]"><ShieldCheck size={17} className="shrink-0" /> Dieser Warenkorb enthält FSK 18 Artikel. Bitte halte beim Checkout deinen Personalausweis bereit (DHL Alterssichtprüfung).</div><div className="mb-4 flex justify-between text-sm"><span className="text-slate-900/50">Zwischensumme</span><b>{total.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</b></div><button onClick={() => setAgeOpen(true)} className="flex w-full items-center justify-center gap-2 bg-[#f97316] py-3 text-xs font-bold uppercase tracking-wider text-[#0f172a]">Zur Kasse <ArrowRight size={15} /></button></div>}</aside></div>}
      {ageOpen && <div className="fixed inset-0 z-[60] grid place-items-center bg-slate-900/45 p-4"><div className="w-full max-w-md border border-[#f97316]/40 bg-white p-6 shadow-2xl sm:p-8"><div className="flex items-start justify-between"><div className="grid size-12 place-items-center rounded-full bg-[#f97316]/15 text-[#f97316]"><ShieldCheck /></div><button onClick={() => setAgeOpen(false)} aria-label="Dialog schließen"><X size={20} /></button></div><p className="eyebrow mt-7">Altersprüfung erforderlich</p><h2 className="mt-2 text-2xl font-semibold">Frei ab 18 Jahren</h2><p className="mt-4 text-sm leading-relaxed text-slate-900/55">Für diesen Artikel benötigen wir einen Altersnachweis. Beim Versand erfolgt die Identitätsprüfung durch DHL. Bei Click &amp; Collect prüfen wir deinen Ausweis direkt im Store.</p><div className="mt-6 space-y-3 rounded-sm border border-slate-200/10 bg-slate-50 p-4 text-xs text-slate-900/60"><div className="flex gap-2"><Check size={15} className="text-[#f97316]" /> Volljährigkeit bestätigen</div><div className="flex gap-2"><Check size={15} className="text-[#f97316]" /> Ausweis beim Empfang bereithalten</div></div><button onClick={() => setAgeOpen(false)} className="mt-6 w-full bg-[#f97316] py-3 text-xs font-bold uppercase tracking-wider text-[#0f172a]">Verstanden, weiter zur Kasse</button></div></div>}
    </main>
  )
}

function Trust({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) { return <div className="flex items-center gap-3 px-4 py-5 lg:px-8"><span className="text-[#f97316]">{icon}</span><div><p className="text-xs font-bold">{title}</p><p className="mt-1 text-[10px] text-slate-900/40">{text}</p></div></div> }
function Info({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) { return <div className="flex gap-3"><span className="text-[#f97316]">{icon}</span><div><p className="text-xs font-bold uppercase tracking-wider">{title}</p><p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-slate-900/50">{text}</p></div></div> }
function FooterCol({ title, links }: { title: string; links: string[] }) { return <div><h3 className="text-xs font-bold uppercase tracking-widest text-[#f97316]">{title}</h3><div className="mt-5 space-y-3">{links.map((link) => <a href="#" key={link} className="block text-sm text-slate-900/45 hover:text-slate-900">{link}</a>)}</div></div> }
function ProductCard({ product, onAdd }: { product: Product; onAdd: () => void }) { return <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:border-[#f97316]/50"><div className="relative aspect-[1.12] overflow-hidden bg-[#222b28]"><img src={product.image} alt={product.name} className="size-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute left-3 top-3 bg-[#f97316] px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-[#0f172a]">{product.tag}</span><span className="absolute right-3 top-3 border border-slate-200/25 bg-[#f8fafc]/80 px-2 py-1 text-[9px] font-bold uppercase tracking-wider">{product.age}</span></div><div className="p-4"><p className="text-[10px] uppercase tracking-widest text-[#f97316]">{product.brand}</p><h3 className="mt-2 font-medium">{product.name}</h3><div className="mt-3 flex items-center justify-between text-xs text-slate-900/45"><span>{product.drive} · {product.joule}</span><span className="flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-[#8aa36f]" /> {product.stock}</span></div><div className="mt-5 flex items-center justify-between border-t border-slate-200/10 pt-4"><b className="text-lg">{product.price}</b><button onClick={onAdd} className="grid size-9 place-items-center bg-[#f97316] text-[#0f172a] transition hover:bg-[#fb923c]" aria-label={`${product.name} in den Warenkorb`}><Plus size={18} /></button></div></div></article> }

function _unused() { return <><Battery /><Hammer /><Minus /><Zap /></> }
function _unused2() { return <Filter /> }
