"use client"

import { CheckCircle2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SuccessPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      {/* Header */}
      <header className="w-full px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto"></div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl mx-auto w-full">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 text-center">
            {/* Large Round Checkmark Badge */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-blue-100 animate-[checkIn_0.6s_ease-out]">
                <CheckCircle2
                  className="w-12 h-12 text-blue-500 animate-[checkMark_0.4s_ease-out_0.2s_both]"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">Success!</h1>

            {/* Body Text */}
            <p className="text-slate-700 leading-relaxed text-pretty mb-8 max-w-md mx-auto">
              Your account was connected successfully. You will be redirected shortly
              <span className="inline-flex ml-0.5">
                <span className="animate-[ellipsis_1.4s_infinite]">.</span>
                <span className="animate-[ellipsis_1.4s_infinite_0.2s]">.</span>
                <span className="animate-[ellipsis_1.4s_infinite_0.4s]">.</span>
              </span>
            </p>

            {/* Secondary Link Button */}
            <button
              onClick={() => router.back()}
              className="w-full sm:w-auto sm:min-w-[200px] px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
              aria-label="Return to previous page"
            >
              Return now
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

      <style jsx>{`
        @keyframes checkIn {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes checkMark {
          0% {
            transform: scale(0) rotate(-45deg);
            opacity: 0;
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
        
        @keyframes ellipsis {
          0%, 20% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
