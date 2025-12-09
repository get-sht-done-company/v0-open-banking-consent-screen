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
      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8 sm:pb-4 pr-3 pl-3 pt-3 pb-3">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 py-6 pb-1 pl-5 pr-5 pt-5">
            <div className="flex flex-col items-center justify-center mb-6 gap-4">
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
              <div>
                <Image
                  src="/boshhh-group-logo-text.webp"
                  alt="Boshhh Group"
                  width={150}
                  height={30}
                  className="w-auto h-5"
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

            <h2 className="text-lg font-semibold text-slate-900 tracking-tight mb-4">Connecting your bank is:</h2>

            {/* Trust Indicator 1 - Bank-grade security */}
            <div className="flex items-center mb-2 p-4 rounded-lg border gap-3 py-3 bg-purple-50 border-purple-200 px-3">
              <ShieldIcon className="w-5 h-5 flex-shrink-0 text-purple-600" aria-hidden="true" />
              <div>
                <p className="font-medium text-primary text-xs">100% Secure </p>
                <p className="text-xs mt-1 text-slate-700">
                  Your data is protected using regulated Open Banking technology.
                </p>
              </div>
            </div>

            {/* Trust Indicator 2 - Read-only access */}
            <div className="flex items-center mb-2 p-4 bg-[#C78E5F]/10 rounded-lg border border-[#C78E5F]/30 gap-3 py-3 px-3">
              <Lock className="w-5 h-5 text-[#C78E5F] flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="font-medium text-primary text-xs">Read-only access</p>
                <p className="text-xs mt-1 text-slate-700">
                  We can view your transactions, but never move, manage, or touch your money.
                </p>
              </div>
            </div>

            {/* Trust Indicator 3 - Required */}
            <div className="flex items-center mb-6 p-4 bg-[#C78E5F]/10 rounded-lg border border-[#C78E5F]/30 gap-3 py-3 px-3">
              <Lock className="w-5 h-5 text-[#C78E5F] flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="font-medium text-primary text-xs">Required</p>
                <p className="text-xs mt-1 text-slate-700">
                  A quick bank check lets our legal team verify affordability and confirm your eligibility.
                </p>
              </div>
            </div>

            {/* Checkbox Consent */}
            <div className="mb-6">
              <div className="p-4 rounded-lg border border-slate-200 bg-slate-50 transition-colors hover:bg-slate-100 focus-within:ring-2 focus-within:ring-[#C78E5F] focus-within:ring-offset-2 pl-3 pr-3 pb-3 pt-3">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-slate-300 focus:ring-2 focus:ring-[#C78E5F] focus:ring-offset-2 cursor-pointer transition-all"
                    style={{
                      accentColor: "#C78E5F",
                      colorScheme: "light",
                    }}
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
                className="w-full sm:w-auto sm:min-w-[200px] px-8 py-3 bg-[#C78E5F] text-white font-semibold rounded-lg hover:bg-[#B67D4F] focus:outline-none focus:ring-2 focus:ring-[#C78E5F] focus:ring-offset-2 disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed transition-all duration-200"
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
            className="w-full px-8 py-3 bg-[#C78E5F] text-white font-semibold rounded-lg hover:bg-[#B67D4F] focus:outline-none focus:ring-2 focus:ring-[#C78E5F] focus:ring-offset-2 disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed transition-all duration-200"
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
