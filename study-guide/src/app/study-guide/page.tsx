import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export default async function StudyGuidePage() {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId) {
    redirect("/sign-in");
  }

  const isPremium =
    user?.publicMetadata?.isPremium === true ||
    user?.privateMetadata?.isPremium === true;

  if (!isPremium) {
    return (
      <div className="flex min-h-screen flex-col">
        <header className="border-b border-zinc-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="text-xl font-bold text-zinc-900">MedPath</span>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900"
              >
                Home
              </Link>
              <UserButton />
            </div>
          </div>
        </header>
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="max-w-md text-center">
            <h1 className="text-2xl font-bold text-zinc-900">
              Premium Content
            </h1>
            <p className="mt-2 text-zinc-600">
              Access to the study guide is granted manually. If you&apos;ve
              already paid, contact the admin to have your account enabled.
            </p>
          </div>
        </main>
      </div>
  );
}

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <style>{`
        @media print {
          body * { display: none !important; }
          body::after {
            display: block !important;
            content: "Printing is disabled for this content." !important;
            font-family: Arial, sans-serif !important;
            font-size: 18px !important;
            padding: 40px !important;
            text-align: center !important;
          }
        }
      `}</style>
      <header className="border-b border-zinc-200 bg-white sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-xl font-bold text-zinc-900">MedPath</span>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900"
            >
              Home
            </Link>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
              Premium
            </span>
            <UserButton />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <iframe
          src="/study-guide.html"
          className="w-full h-[calc(100vh-57px)] border-0"
          title="Study Guide"
        />
      </main>
      </div>
  );
}
