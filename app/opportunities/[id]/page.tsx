
import Link from "next/link";
import { opportunities } from "../../data/opportunities";

export default async function OpportunityDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const selectedOpportunity = opportunities.find(
    (opportunity) => opportunity.id === id
  );

  if (!selectedOpportunity) {
    return (
      <main className="bg-slate-50">
        <section className="mx-auto max-w-3xl px-6 py-12 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Opportunity Not Found
          </h1>

          <p className="mt-4 text-slate-600">
            The opportunity you are looking for does not exist.
          </p>

          <Link
            href="/opportunities"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
          >
            Back to Opportunities
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-3xl px-6 py-12">
        <Link
          href="/opportunities"
          className="text-blue-600 hover:text-blue-700"
        >
          ← Back to Opportunities
        </Link>

        <div className="mt-6 rounded-xl bg-white p-6 shadow sm:p-8">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {selectedOpportunity.title}
          </h1>

          <p className="mt-4 font-medium text-slate-700">
            {selectedOpportunity.company}
          </p>

          <p className="mt-1 text-slate-500">
            Location: {selectedOpportunity.location}
          </p>

          <p className="mt-6 leading-7 text-slate-600">
            {selectedOpportunity.description}
          </p>
        </div>
      </section>
    </main>
  );
}

