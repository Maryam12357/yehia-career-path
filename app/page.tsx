
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold text-blue-600">
              Career Journey
            </p>

            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Meet Yehia
            </h1>

            <p className="mt-5 text-lg leading-7 text-slate-600">
              Yehia is a Computer Science graduate from the Lebanese
              University, First Branch. He wants to find a job within two
              months and needs a clear plan to move forward.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/plan"
                className="rounded-lg bg-blue-600 px-6 py-3 text-center font-medium text-white hover:bg-blue-700"
              >
                View My Plan
              </Link>

              <Link
                href="/opportunities"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-center font-medium text-slate-700 hover:border-blue-500 hover:text-blue-600"
              >
                Explore Opportunities
              </Link>
            </div>
          </div>

          <div className="rounded-xl bg-white p-8 text-center shadow">
            <p className="text-5xl font-bold text-blue-600">2</p>

            <p className="mt-2 text-xl font-semibold text-slate-900">
              Months
            </p>

            <p className="mt-2 text-slate-600">
              Goal to find the right opportunity
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

