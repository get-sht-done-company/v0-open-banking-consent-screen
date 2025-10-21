"use client"

import { useState } from "react"
import { Lock } from "lucide-react"
import Image from "next/image"

// Utility function to convert text to sentence case
function toSentenceCase(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

export default function ConsentPage() {
  const [consent1, setConsent1] = useState(false)
  const [consent2, setConsent2] = useState(false)
  const [showError, setShowError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const userName = toSentenceCase("VITAII LOZOVOI")

  const handleSubmit = () => {
    if (!consent1 || !consent2) {
      setShowError(true)
      return
    }
    setShowError(false)
    setIsLoading(true)
    // Simulate submission
    setTimeout(() => {
      setIsLoading(false)
      // Handle actual submission here
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      {/* Header */}
      <header className="w-full px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto flex items-center justify-between px-3">
          <div className="flex items-center gap-3">
            <Image
              src="/barings-law-logo.webp"
              alt="Barings Law"
              width={200}
              height={60}
              className="h-15 w-auto"
              priority
            />
          </div>
          <div className="flex items-center">
            <Image
              src="/boshhh-group-logo.webp"
              alt="Boshhh Group"
              width={175}
              height={40}
              className="w-auto h-10"
              priority
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 transition-shadow">
            {/* Greeting */}
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 text-balance tracking-tight">
              Hi, {userName}
            </h1>

            {/* Supporting Copy */}
            <p className="text-slate-700 leading-relaxed mb-6 text-pretty text-sm">
              To help us assess your claim, this secure link allows you to connect your bank account using Open Banking.
              Boshhh Group Limited offers access to this service which is provided by Finexer who are authorised by the
              Financial Conduct Authority (FCA).
            </p>

            <p className="text-slate-700 leading-relaxed mb-6 text-pretty text-sm">
              This connection is read only, meaning we can only view your bank statements. We cannot make any changes or
              access your account in any other way. The information retrieved will solely be used to evidence your
              claim.
            </p>

            {/* Trust Row */}
            <div className="flex items-center gap-2 mb-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <Lock className="w-5 h-5 text-blue-600 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-blue-900 font-medium">Bank grade encryption. Read only access.</p>
            </div>

            {/* Consent Section */}
            <div className="mb-6">
              <p className="text-slate-900 font-semibold tracking-tight mb-3">
                Please tick the boxes to give your consent:
              </p>

              {/* Consent 1 */}
              <div className="p-4 rounded-lg border border-slate-200 bg-slate-50 transition-colors hover:bg-slate-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 mb-3">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={consent1}
                    onChange={(e) => {
                      setConsent1(e.target.checked)
                      setShowError(false)
                    }}
                    className="mt-1 w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer transition-all"
                    aria-describedby="consent-1-text"
                  />
                  <span id="consent-1-text" className="text-slate-700 leading-relaxed flex-1 text-xs">
                    I consent to Boshhh Group Limited access to my bank account information through Finexer, using Open
                    Banking services, solely for the purpose of retrieving my bank statements to support my claim. I
                    understand that Finexer, authorised and regulated by the Financial Conduct Authority (FCA) as an
                    Account Information Service Provider (AISP), is responsible for carrying out the regulated activity.
                    This consent will remain valid until I choose to withdraw it. I confirm that I have read and
                    understood the{" "}
                    <a
                      href="https://boshhhgroup.com/benefits-of-connecting-open-banking"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
              </div>

              {/* Consent 2 */}
              <div className="p-4 rounded-lg border border-slate-200 bg-slate-50 transition-colors hover:bg-slate-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={consent2}
                    onChange={(e) => {
                      setConsent2(e.target.checked)
                      setShowError(false)
                    }}
                    className="mt-1 w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer transition-all"
                    aria-describedby="consent-2-text"
                  />
                  <span id="consent-2-text" className="text-slate-700 leading-relaxed flex-1 text-xs">
                    I consent to the sharing of my read only bank statements, containing transactional data only, from
                    Boshhh Group Limited to Barings Limited in order to be used as evidence to support my claim.
                  </span>
                </label>
              </div>
            </div>

            {/* Error Message */}
            {showError && (
              <div
                className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800 animate-in fade-in slide-in-from-top-2 duration-300"
                role="alert"
              >
                Please check both consent boxes to continue.
              </div>
            )}

            {/* Primary Button */}
            <button
              onClick={handleSubmit}
              disabled={!consent1 || !consent2 || isLoading}
              className="w-full sm:w-auto sm:min-w-[200px] px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
              aria-label="Submit consent and start the process"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Processing...</span>
                </>
              ) : (
                "Accept and continue"
              )}
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row justify-center gap-4 text-xs text-slate-500 items-center">
          <p className="text-center sm:text-center">
            © 2025 Boshhh Group Limited. All rights reserved. Regulated by the FCA.
          </p>
        </div>
      </footer>
    </div>
  )
}
