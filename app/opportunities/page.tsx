
import Link from "next/link";
import { opportunities } from "../data/opportunities";

export default function Opportunities() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div>
          <p className="text-sm font-semibold text-blue-600">
            Job Search
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900 sm:text-5xl">
            Opportunities
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600">
            Here are some opportunities Yehia can apply for.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((opportunity) => (
            <section
              key={opportunity.id}
              className="rounded-xl bg-white p-6 shadow"
            >
              <h2 className="text-xl font-semibold text-slate-900">
                {opportunity.title}
              </h2>

              <p className="mt-3 font-medium text-slate-700">
                {opportunity.company}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Location: {opportunity.location}
              </p>

              <p className="mt-4 text-slate-600">
                {opportunity.description}
              </p>

              <Link
                href={`/opportunities/${opportunity.id}`}
                className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
              >
                View Opportunity
              </Link>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
