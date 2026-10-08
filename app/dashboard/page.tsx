
import Link from "next/link";
import { applications } from "../data/applications";

export default function Dashboard() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div>
          <p className="text-sm font-semibold text-blue-600">
            Career Dashboard
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900 sm:text-5xl">
            Welcome to your Dashboard
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600">
            Keep track of your job applications and follow your progress.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-sm font-medium text-slate-500">
              Total Applications
            </p>

            <p className="mt-3 text-4xl font-bold text-blue-600">
              {applications.length}
            </p>

            <p className="mt-2 text-slate-600">
              Applications submitted so far.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-sm font-medium text-slate-500">
              Next Step
            </p>

            <p className="mt-3 text-2xl font-bold text-slate-900">
              Keep Applying
            </p>

            <p className="mt-2 text-slate-600">
              Explore more opportunities and continue your job search.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-xl bg-blue-600 p-6 text-white">
          <h2 className="text-2xl font-bold">
            Ready for the next opportunity?
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-blue-100">
            Keep building your experience, applying to suitable positions,
            and following up with companies.
          </p>

          <Link
            href="/opportunities"
            className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-medium text-blue-600 hover:bg-blue-50"
          >
            Explore Opportunities
          </Link>
        </div>
      </section>
    </main>
  );
}

