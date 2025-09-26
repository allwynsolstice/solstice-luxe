
export default function ContactPage() {
  return (
    <section className="container-max py-10">
      <span className="badge">GET IN TOUCH</span>
      <h1 className="text-4xl font-bold mt-3">Contact Us</h1>
      <p className="text-muted mt-4">Email: info@solsticeluxetravel.com</p>
      <a href="mailto:info@solsticeluxetravel.com?subject=Trip%20Inquiry%20-%20Solstice%20Luxe%20Travel" className="inline-block mt-6 px-5 py-3 rounded-2xl font-semibold text-black" style={{background:'linear-gradient(135deg,var(--brand),#ffc36b)'}}>
        Plan with an Advisor
      </a>
    </section>
  )
}
