"use client"

import { useState } from "react"
import { ShieldIcon, Lock } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function BankInfoPage() {
  const router = useRouter()
  const [consent, setConsent] = useState(false)

  const handleContinue = () => {
    // Navigate to the bank connection flow or next step
    router.push("/success")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      {/* Header */}
      <header className="w-full px-4 sm:px-6 lg:px-8 py-0">
        <div className="max-w-2xl mx-auto"></div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8 pt-4 pb-24 sm:pb-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10">
            <div className="flex items-center justify-center mb-6">
              <div className="rounded-2xl border border-slate-200 p-4 bg-white py-0 px-0">
                <Image
                  src="/sentinel-logo.webp"
                  alt="Sentinel Legal"
                  width={400}
                  height={160}
                  className="h-28 w-auto rounded-2xl"
                  priority
                />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 text-balance tracking-tight mb-4 text-center">
              You're nearly done
            </h1>

            {/* Intro Text */}
            <p className="text-slate-700 leading-relaxed text-pretty text-center mb-8">
              We now need to verify your bank details so our legal team can confirm your eligibility.
            </p>

            {/* Trust Indicator 1 - Bank-grade security */}
            <div className="flex items-center mb-2 p-4 rounded-lg border gap-3 px-4 py-3 bg-green-50 border-green-200">
              <ShieldIcon className="w-5 h-5 flex-shrink-0 text-green-600" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-primary">Bank-grade security</p>
                <p className="text-xs mt-1 text-slate-700">
                  Your data is protected using regulated Open Banking technology.
                </p>
              </div>
            </div>

            {/* Trust Indicator 2 - Read-only access */}
            <div className="flex items-center mb-2 p-4 bg-blue-50 rounded-lg border border-blue-100 gap-3 px-4 py-3">
              <Lock className="w-5 h-5 text-blue-600 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-primary">Read-only access</p>
                <p className="text-xs mt-1 text-slate-700">
                  We can view your transactions, but never move, manage, or touch your money.
                </p>
              </div>
            </div>

            {/* Trust Indicator 3 - Required */}
            <div className="flex items-center mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100 gap-3 px-4 py-3">
              <Lock className="w-5 h-5 text-blue-600 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-primary">Required</p>
                <p className="text-xs mt-1 text-slate-700">
                  A quick bank check lets our legal team verify affordability and confirm your eligibility.
                </p>
              </div>
            </div>

            {/* Checkbox Consent */}
            <div className="mb-6">
              <div className="p-4 rounded-lg border border-slate-200 bg-slate-50 transition-colors hover:bg-slate-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer transition-all"
                    aria-describedby="bank-consent-text"
                  />
                  <span id="bank-consent-text" className="text-slate-700 leading-relaxed flex-1 text-xs">
                    By continuing, you help us build the strongest possible case based on accurate financial
                    information. This does not affect your credit score, and you can revoke access at any time.
                  </span>
                </label>
              </div>
            </div>

            {/* Primary Button */}
            <div className="hidden sm:flex justify-center">
              <button
                onClick={handleContinue}
                disabled={!consent}
                className="w-full sm:w-auto sm:min-w-[200px] px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed transition-all duration-200"
                aria-label="Continue to bank connection"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed button at bottom for mobile viewports */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 sm:hidden">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={handleContinue}
            disabled={!consent}
            className="w-full px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Continue to bank connection"
          >
            Continue
          </button>
        </div>
      </div>

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
