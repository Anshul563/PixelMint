export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-dark text-white py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-mint mb-6">Privacy Policy</h1>
        <p>
          At PixelMint.tech, we respect your privacy. This Privacy Policy explains how we collect,
          use, and protect your personal data.
        </p>
        <h2 className="text-xl font-semibold text-mint">1. What We Collect</h2>
        <p>
          We may collect your name, email, contact info, project details, and usage data to improve
          our services.
        </p>
        <h2 className="text-xl font-semibold text-mint">2. How We Use It</h2>
        <p>
          Your data helps us communicate with you, deliver projects, and provide customer support.
        </p>
        <h2 className="text-xl font-semibold text-mint">3. Your Rights</h2>
        <p>
          You can request data deletion or correction anytime by contacting us at
          hello@pixelmint.tech.
        </p>
        <p className="text-gray-400 text-sm">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </main>
  )
}
