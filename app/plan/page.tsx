
import Link from "next/link";

export default function Plan() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="text-center">
          <p className="text-sm font-semibold text-blue-600">
            Career Roadmap
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900 sm:text-5xl">
            Yehia's Plan
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            A simple three-stage plan to help Yehia move forward with his
            career.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <section className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-2xl font-semibold text-slate-900">
              1. Prepare
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Get ready for the job search by improving his CV, organizing
              his portfolio, and choosing a target role.
            </p>

            <ul className="mt-4 space-y-2 text-slate-600">
              <li>✓ Improve his CV</li>
              <li>✓ Organize his portfolio</li>
            </ul>
          </section>

          <section className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-2xl font-semibold text-slate-900">
              2. Practice
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Build relevant skills and become more confident when answering
              interview questions.
            </p>

            <ul className="mt-4 space-y-2 text-slate-600">
              <li>✓ Practice technical skills</li>
              <li>✓ Prepare for interviews</li>
            </ul>
          </section>

          <section className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-2xl font-semibold text-slate-900">
              3. Apply
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Explore suitable opportunities, submit applications, and follow
              up with companies.
            </p>

            <ul className="mt-4 space-y-2 text-slate-600">
              <li>✓ Explore suitable opportunities</li>
              <li>✓ Submit applications and follow up</li>
            </ul>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/opportunities"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
          >
            Explore Opportunities
          </Link>
        </div>
      </section>
    </main>
  );
}

