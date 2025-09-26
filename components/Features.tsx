
export default function Features() {
  const features = [
    { title: "Hotel Privileges", desc: "Enjoy upgrades, daily breakfast, resort credits, and late checkout at top luxury brands."},
    { title: "End-to-End Planning", desc: "Flights, transfers, tours, dining—curated and confirmed with white-glove care."},
    { title: "Insider Access", desc: "Private guides, exclusive experiences, and coveted reservations worldwide."},
  ];
  return (
    <section className="container-max py-6">
      <div className="grid md:grid-cols-3 gap-5">
        {features.map((f,i)=> (
          <div key={i} className="card p-5">
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="text-muted mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
