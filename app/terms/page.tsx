export default function TermsPage() {
  return (
    <main className="min-h-screen bg-dark text-white py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-mint mb-6">Terms & Conditions</h1>
        <p>
          These Terms govern your use of our website and services. By accessing PixelMint.tech, you
          agree to comply with them.
        </p>
        <h2 className="text-xl font-semibold text-mint">1. Use of Services</h2>
        <p>
          You agree not to misuse our services. We may restrict access for illegal, harmful, or
          abusive behavior.
        </p>
        <h2 className="text-xl font-semibold text-mint">2. Intellectual Property</h2>
        <p>
          All content and code delivered remain the property of PixelMint.tech unless agreed
          otherwise in writing.
        </p>
        <h2 className="text-xl font-semibold text-mint">3. Modifications</h2>
        <p>
          We may update these Terms at any time. Continued use implies acceptance of any changes.
        </p>
        <p className="text-gray-400 text-sm">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </main>
  )
}
