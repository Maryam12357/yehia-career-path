
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-5xl flex-wrap gap-4 px-6 py-4">
          <Link
            href="/dashboard"
            className="font-medium text-slate-700 hover:text-blue-600"
          >
            Overview
          </Link>

          <Link
            href="/dashboard/applications"
            className="font-medium text-slate-700 hover:text-blue-600"
          >
            Applications
          </Link>
        </div>
      </nav>

      {children}
    </section>
  );
}



