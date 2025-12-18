"use client"

import { useState } from "react"
import { ShieldIcon, Lock } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function BankInfoPage() {
  const router = useRouter()
  const [consent, setConsent] = useState(false)

  const handleContinue = () => {
    router.push("/success")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      <header className="w-full px-4 sm:px-6 lg:px-8 py-0">
        <div className="max-w-2xl mx-auto"></div>
      </header>

      <main className="flex-1 px-3 py-3 sm:px-6 lg:px-8 sm:pb-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 pt-8">
            <div className="flex flex-col items-center justify-center mb-6 gap-4">
              <div className="p-3 border border-slate-200 rounded-xl">
                <Image
                  src="/sentinel-logo.webp"
                  alt="Sentinel Legal"
                  width={150}
                  height={60}
                  className="h-auto w-full max-w-[150px]"
                  priority
                />
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-slate-500 font-sans font-normal" style={{ fontSize: "10px" }}>
                  Powered by
                </p>
                <Image
                  src="/boshhh-group-logo-text.webp"
                  alt="Boshhh Group"
                  width={150}
                  height={30}
                  className="w-auto h-5"
                />
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 text-balance tracking-tight mb-4 text-center">
              You're nearly done
            </h1>

            <p className="text-slate-700 leading-relaxed text-pretty text-center mb-8 text-base">
              By giving us read-only access to your transactions, we can speed up your refund by up to six weeks.
            </p>

            <h2 className="text-lg font-semibold text-slate-900 tracking-tight mb-4">Connecting your bank is:</h2>

            <div className="flex items-center mb-2 p-3 rounded-lg border gap-3 bg-purple-50 border-purple-200">
              <ShieldIcon className="w-5 h-5 flex-shrink-0 text-purple-600" aria-hidden="true" />
              <div>
                <p className="font-medium text-primary text-xs">100% Secure </p>
                <p className="text-xs mt-1 text-slate-700">
                  Your data is protected using regulated Open Banking technology.
                </p>
              </div>
            </div>

            <div className="flex items-center mb-2 p-3 bg-blue-50 rounded-lg border border-blue-100 gap-3">
              <Lock className="w-5 h-5 text-blue-600 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="font-medium text-primary text-xs">Read-only access</p>
                <p className="text-xs mt-1 text-slate-700">
                  We can view your transactions, but never move, manage, or touch your money.
                </p>
              </div>
            </div>

            <div className="flex items-center mb-6 p-3 bg-blue-50 rounded-lg border border-blue-100 gap-3">
              <Lock className="w-5 h-5 text-blue-600 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="font-medium text-primary text-xs">Required</p>
                <p className="text-xs mt-1 text-slate-700">
                  A quick bank check lets our legal team verify affordability and confirm your eligibility.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 transition-colors hover:bg-slate-100">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-slate-300 cursor-pointer transition-all"
                    style={{ accentColor: "#C78E5F" }}
                    aria-describedby="bank-consent-text"
                  />
                  <span id="bank-consent-text" className="text-slate-700 leading-relaxed flex-1 text-xs">
                    By continuing, you help us build the strongest possible case based on accurate financial
                    information. This does not affect your credit score, and you can revoke access at any time.
                  </span>
                </label>
              </div>
            </div>

            <div className="hidden sm:flex justify-center">
              <button
                onClick={handleContinue}
                disabled={!consent}
                className="w-full sm:w-auto sm:min-w-[200px] px-8 py-3 text-white font-semibold rounded-lg focus:outline-none disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed transition-all duration-200"
                style={{
                  backgroundColor: consent ? "#C78E5F" : undefined,
                }}
                onMouseEnter={(e) => {
                  if (consent) e.currentTarget.style.backgroundColor = "#B67D4F"
                }}
                onMouseLeave={(e) => {
                  if (consent) e.currentTarget.style.backgroundColor = "#C78E5F"
                }}
                aria-label="Continue to bank connection"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 sm:hidden">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={handleContinue}
            disabled={!consent}
            className="w-full px-8 py-3 text-white font-semibold rounded-lg focus:outline-none disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed transition-all duration-200"
            style={{
              backgroundColor: consent ? "#C78E5F" : undefined,
            }}
            onMouseEnter={(e) => {
              if (consent) e.currentTarget.style.backgroundColor = "#B67D4F"
            }}
            onMouseLeave={(e) => {
              if (consent) e.currentTarget.style.backgroundColor = "#C78E5F"
            }}
            aria-label="Continue to bank connection"
          >
            Continue
          </button>
        </div>
      </div>

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
