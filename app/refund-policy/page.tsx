export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-dark text-white py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-mint mb-6">Refund Policy</h1>
        <p>
          At PixelMint.tech, client satisfaction is our priority. We follow a transparent refund
          process described below.
        </p>
        <h2 className="text-xl font-semibold text-mint">1. Eligibility for Refund</h2>
        <p>
          You may be eligible for a refund if:
          <ul className="list-disc ml-6 mt-2 text-gray-300">
            <li>The project has not started yet</li>
            <li>Project delivery is delayed without communication</li>
            <li>There’s a valid reason approved by our team</li>
          </ul>
        </p>
        <h2 className="text-xl font-semibold text-mint">2. Non-Refundable Situations</h2>
        <p>
          No refund will be issued if a significant part of the project is delivered or approved by
          you.
        </p>
        <h2 className="text-xl font-semibold text-mint">3. Request Process</h2>
        <p>
          Email:pixelminttt@gmail.com within 7 days of payment. Include reason, project reference,
          and transaction proof.
        </p>
        <p className="text-gray-400 text-sm">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </main>
  )
}
