import Image from "next/image"
import { Lock } from "lucide-react"

export default function SecureAccessUnavailablePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <main className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col items-center justify-center mb-8 gap-4">
            <div className="p-3 border border-slate-200 rounded-xl">
              <Image
                src="/sentinel-logo.webp"
                alt="Sentinel Legal"
                width={300}
                height={120}
                className="w-full max-w-[300px] h-32"
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

          <div className="text-center space-y-0">
            {/* Section 1: Status */}
            <div className="space-y-4">
              <h1 className="sm:text-4xl font-semibold text-slate-900 tracking-tight leading-tight text-2xl">
                Service temporarily unavailable
              </h1>
              <p className="text-base text-slate-600 leading-relaxed max-w-lg mx-auto">
                This step cannot be completed right now. We will send you a secure link when you are able to continue.
              </p>
            </div>

            {/* Section 2: What happens next */}
            <div className="space-y-3 py-4 pb-28">
              <p className="text-sm text-slate-500">You will receive the link by SMS or email.</p>
            </div>

            <div className="pt-2">
              <button
                disabled
                className="px-6 py-2.5 bg-slate-200 text-slate-500 text-sm font-medium rounded-lg cursor-not-allowed flex items-center gap-2 mx-auto"
                aria-label="Waiting for secure link"
                aria-disabled="true"
              >
                <Lock className="w-4 h-4" aria-hidden="true" />
                Waiting for secure link
              </button>
            </div>

            {/* Section 3: Reassurance - single line at bottom */}
            <div className="mt-8">
              <p className="text-sm text-slate-500">Don't worry, we'll be back shortly with secure access.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
