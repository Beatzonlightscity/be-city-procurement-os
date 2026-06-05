import { useState } from 'react'
import BECityButton from '@/components/BECityButton'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    schoolName: '',
    principalName: '',
    email: '',
    phone: '',
    district: '',
    procurementNeeds: '',
    budget: '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Send to backend - configure your email service
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSuccess(true)
        setFormData({
          schoolName: '',
          principalName: '',
          email: '',
          phone: '',
          district: '',
          procurementNeeds: '',
          budget: '',
        })
        setTimeout(() => setSuccess(false), 5000)
      } else {
        setError('Failed to submit form. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please contact us directly.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-becity-light to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-becity-blue-900 mb-4">
            Get a Procurement Quote
          </h1>
          <p className="text-xl text-gray-600">
            BE City makes school procurement simple, fast, and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-lg p-8 border-2 border-becity-light"
            >
              {success && (
                <div className="mb-6 p-4 bg-becity-success bg-opacity-10 border-l-4 border-becity-success text-becity-success rounded">
                  ✓ Your request received! We'll contact you within 24 hours.
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-becity-danger bg-opacity-10 border-l-4 border-becity-danger text-becity-danger rounded">
                  ✗ {error}
                </div>
              )}

              {/* School Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-becity-blue-900 mb-4">🏫 School Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="schoolName"
                    placeholder="School Name *"
                    value={formData.schoolName}
                    onChange={handleChange}
                    required
                    className="border-2 border-becity-light rounded-lg px-4 py-3 focus:border-becity-blue-900 focus:outline-none focus:ring-2 focus:ring-becity-blue-900 focus:ring-opacity-20 transition"
                  />
                  <input
                    type="text"
                    name="principalName"
                    placeholder="Principal / Contact Person *"
                    value={formData.principalName}
                    onChange={handleChange}
                    required
                    className="border-2 border-becity-light rounded-lg px-4 py-3 focus:border-becity-blue-900 focus:outline-none focus:ring-2 focus:ring-becity-blue-900 focus:ring-opacity-20 transition"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-becity-blue-900 mb-4">📞 Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2 border-becity-light rounded-lg px-4 py-3 focus:border-becity-blue-900 focus:outline-none focus:ring-2 focus:ring-becity-blue-900 focus:ring-opacity-20 transition"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-2 border-becity-light rounded-lg px-4 py-3 focus:border-becity-blue-900 focus:outline-none focus:ring-2 focus:ring-becity-blue-900 focus:ring-opacity-20 transition"
                  />
                </div>
              </div>

              {/* Location & Procurement Details */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-becity-blue-900 mb-4">📍 Location & Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className="border-2 border-becity-light rounded-lg px-4 py-3 focus:border-becity-blue-900 focus:outline-none focus:ring-2 focus:ring-becity-blue-900 focus:ring-opacity-20 transition"
                  >
                    <option value="">Select District / Province</option>
                    <option value="gauteng">Gauteng</option>
                    <option value="kwazulu-natal">KwaZulu-Natal</option>
                    <option value="western-cape">Western Cape</option>
                    <option value="eastern-cape">Eastern Cape</option>
                    <option value="limpopo">Limpopo</option>
                    <option value="mpumalanga">Mpumalanga</option>
                    <option value="free-state">Free State</option>
                    <option value="northern-cape">Northern Cape</option>
                    <option value="north-west">North West</option>
                  </select>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="border-2 border-becity-light rounded-lg px-4 py-3 focus:border-becity-blue-900 focus:outline-none focus:ring-2 focus:ring-becity-blue-900 focus:ring-opacity-20 transition"
                  >
                    <option value="">Estimated Annual Budget</option>
                    <option value="under-50k">Under R50,000</option>
                    <option value="50k-100k">R50,000 - R100,000</option>
                    <option value="100k-250k">R100,000 - R250,000</option>
                    <option value="250k-500k">R250,000 - R500,000</option>
                    <option value="500k-1m">R500,000 - R1,000,000</option>
                    <option value="over-1m">Over R1,000,000</option>
                  </select>
                </div>
              </div>

              {/* Procurement Needs */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-becity-blue-900 mb-4">📋 Procurement Needs</h3>
                <textarea
                  name="procurementNeeds"
                  placeholder="Tell us about your school's procurement needs (stationery, LTSM, cleaning supplies, printing, etc.)"
                  value={formData.procurementNeeds}
                  onChange={handleChange}
                  rows={5}
                  className="w-full border-2 border-becity-light rounded-lg px-4 py-3 focus:border-becity-blue-900 focus:outline-none focus:ring-2 focus:ring-becity-blue-900 focus:ring-opacity-20 transition"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <BECityButton
                  variant="primary"
                  size="lg"
                  disabled={loading}
                >
                  {loading ? '📤 Sending...' : '✉️ Send Quote Request'}
                </BECityButton>
                <a
                  href="https://wa.me/27614476896?text=Hello%20BE%20City%2C%20I%20need%20a%20procurement%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                We typically respond within 24 hours. Your information is secure and POPIA compliant.
              </p>
            </form>
          </div>

          {/* Sidebar: Contact Info & CTA */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-becity-blue-900 text-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">🚀 Quick Contact</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm opacity-80">WhatsApp / Call</p>
                  <a href="tel:+27614476896" className="text-lg font-bold hover:underline">
                    +27 61 447 6896
                  </a>
                </div>
                <div>
                  <p className="text-sm opacity-80">Email</p>
                  <a href="mailto:sales@becity.co.za" className="text-lg font-bold hover:underline break-all">
                    sales@becity.co.za
                  </a>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white border-2 border-becity-purple-900 rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-becity-blue-900 mb-3">📍 Visit Us</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>BE City Stationery Suppliers</strong><br />
                69-71 Van Riebeeck Avenue<br />
                Edenvale Ext 1, Gauteng<br />
                South Africa, 1610
              </p>
              <a
                href="https://maps.google.com/?q=69-71+Van+Riebeeck+Avenue+Edenvale"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-becity-purple-900 font-semibold hover:underline"
              >
                📍 Get Directions
              </a>
            </div>

            {/* Why Choose BE City */}
            <div className="bg-becity-light rounded-lg p-6">
              <h3 className="text-lg font-bold text-becity-blue-900 mb-4">✨ Why Choose BE City?</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ 24-hour quote response</li>
                <li>✓ BBBEE Level 1 certified</li>
                <li>✓ Reliable delivery system</li>
                <li>✓ Dedicated account support</li>
                <li>✓ Competitive pricing</li>
                <li>✓ 3,600+ schools trust us</li>
              </ul>
            </div>

            {/* Status Badge */}
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <p className="text-sm font-semibold text-green-800">✓ Online & Ready</p>
              <p className="text-xs text-green-700">We're active Monday-Friday 6AM-6PM, Saturday 8AM-2PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
