
import Image from "next/image";

export default function Hero() {
  return (
    <section className="container-max grid md:grid-cols-2 gap-7 items-center py-10">
      <div className="card p-7" style={background:'linear-gradient(160deg,rgba(255,210,123,.08),rgba(159,211,255,.06))', border:'1px solid rgba(255,255,255,.08)'}>
        <span className="badge">BESPOKE LUXURY TRAVEL</span>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-3">
          Seamless journeys. Elevated stays.<br/>Tailored by Solstice Luxe Travel.
        </h1>
        <p className="text-muted mt-4">
          We craft one-of-a-kind itineraries with insider perks, VIP treatment, and stress-free planning—so every trip feels effortless and unforgettable.
        </p>
        <a href="/contact" className="inline-block mt-5 px-5 py-3 rounded-2xl font-semibold text-black" style={background:'linear-gradient(135deg,var(--brand),#ffc36b)'}>
          Start Your Trip
        </a>
      </div>
      <Image src="/assets/favicon-180.png" alt="hero" width={1200} height={800} className="rounded-3xl border border-white/10 h-[360px] object-cover w-full" />
    </section>
  )
}
