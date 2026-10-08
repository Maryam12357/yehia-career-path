
import { applications } from "../../data/applications";

export default function Applications() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div>
          <p className="text-sm font-semibold text-blue-600">
            Job Search
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900 sm:text-5xl">
            My Applications
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600">
            Keep track of the opportunities you have applied to and follow
            their progress.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {applications.map((application) => (
            <section
              key={application.opportunityTitle}
              className="rounded-xl bg-white p-6 shadow"
            >
              <h2 className="text-xl font-semibold text-slate-900">
                {application.opportunityTitle}
              </h2>

              <p className="mt-3 font-medium text-slate-700">
                {application.company}
              </p>

              <p className="mt-4 text-slate-600">
                Status: {application.status}
              </p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}

