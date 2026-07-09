import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-zinc-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-xl font-bold text-zinc-900">MedPath</span>
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-sm font-medium text-zinc-600 hover:text-zinc-900">
                  Sign In
                </button>
              </SignInButton>
              <Link
                href="/sign-up"
                className="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-lg hover:bg-zinc-800"
              >
                Get Started
              </Link>
            </SignedOut>
            <SignedIn>
              <Link
                href="/study-guide"
                className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Study Guide
              </Link>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="max-w-5xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Your Pathology Study Guide
          </h1>
          <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
            Comprehensive, exam-focused pathology notes covering inflammation,
            neoplasia, carcinogenesis, and more. Built for medical students.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <SignedOut>
              <Link
                href="/sign-up"
                className="text-sm font-medium bg-zinc-900 text-white px-6 py-3 rounded-lg hover:bg-zinc-800"
              >
                Start Learning Free
              </Link>
            </SignedOut>
            <SignedIn>
              <Link
                href="/study-guide"
                className="text-sm font-medium bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                Go to Study Guide
              </Link>
            </SignedIn>
          </div>
        </section>

        <section className="border-t border-zinc-200 bg-zinc-50 py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-zinc-900 text-center mb-8">
              What&apos;s Inside
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-200">
                <h3 className="font-semibold text-zinc-900">Inflammation</h3>
                <p className="mt-1 text-sm text-zinc-600">
                  Acute &amp; chronic, mediators, granulomas, exudate vs transudate
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-200">
                <h3 className="font-semibold text-zinc-900">Neoplasia</h3>
                <p className="mt-1 text-sm text-zinc-600">
                  Benign vs malignant, TNM staging, tumour markers, IHC
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-200">
                <h3 className="font-semibold text-zinc-900">Carcinogenesis</h3>
                <p className="mt-1 text-sm text-zinc-600">
                  Oncogenes, tumour suppressors, chemical &amp; viral carcinogens
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-zinc-900">
              Premium Access
            </h2>
            <p className="mt-2 text-zinc-600">
              Sign up for free to access the full study guide with detailed
              tables, high-yield summaries, and exam-night quick recall sheets.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
