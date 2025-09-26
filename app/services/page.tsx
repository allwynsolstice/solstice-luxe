
export default function ServicesPage() {
  return (
    <section className="container-max py-10">
      <span className="badge">WHAT WE DO</span>
      <h1 className="text-4xl font-bold mt-3">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-5 mt-4">
        <div className="card p-5"><h3 className="text-xl font-semibold">Custom Itineraries</h3><p className="text-muted mt-2">End-to-end planning tailored to your style.</p></div>
        <div className="card p-5"><h3 className="text-xl font-semibold">Hotel & Villa Booking</h3><p className="text-muted mt-2">Preferred perks at leading luxury properties.</p></div>
        <div className="card p-5"><h3 className="text-xl font-semibold">Experiences</h3><p className="text-muted mt-2">Private guides, tastings, yachts & more.</p></div>
      </div>
    </section>
  )
}
