import {
  Sparkles,
  ArrowRight,
  FileText,
  Zap,
  History,
} from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#0A0A0A]">

      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#B11226]/40 bg-[#B11226]/10 px-4 py-2 text-sm font-medium text-[#F43F5E]">
            <Sparkles size={16} />
            AI-Powered Content Creation
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">

            Create amazing content

            <span className="block text-[#B11226]">
              with the power of AI
            </span>

          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Generate high-quality blogs, social media posts,
            emails, advertisements and more in seconds.
          </p>

          {/* CTA */}
          <div className="mt-8 flex justify-center">

            <Link
              to="/create"
              className="group flex items-center gap-2 rounded-xl bg-[#B11226] px-6 py-3 font-semibold text-white shadow-lg shadow-red-950/40 transition hover:bg-[#7F0D1B]"
            >
              <Sparkles size={19} />

              Create Content

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />

            </Link>

          </div>

        </div>

        {/* ================= FEATURE CARDS ================= */}
        <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-3">

          {/* Card 1 */}
          <div className="rounded-2xl border border-white/10 bg-[#111111] p-6 transition hover:-translate-y-1 hover:border-[#B11226]/50 hover:shadow-lg hover:shadow-red-950/20">

            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#B11226]/15 text-[#F43F5E]">
              <FileText size={22} />
            </div>

            <h3 className="text-lg font-semibold text-white">
              Multiple Content Types
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Create blogs, social posts, emails, ads and
              product descriptions.
            </p>

          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-white/10 bg-[#111111] p-6 transition hover:-translate-y-1 hover:border-[#B11226]/50 hover:shadow-lg hover:shadow-red-950/20">

            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#B11226]/15 text-[#F43F5E]">
              <Zap size={22} />
            </div>

            <h3 className="text-lg font-semibold text-white">
              Fast Generation
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Generate useful content quickly using
              AI-powered generation.
            </p>

          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-white/10 bg-[#111111] p-6 transition hover:-translate-y-1 hover:border-[#B11226]/50 hover:shadow-lg hover:shadow-red-950/20">

            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#B11226]/15 text-[#F43F5E]">
              <History size={22} />
            </div>

            <h3 className="text-lg font-semibold text-white">
              Save & Manage
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Save generated content and access your
              previous creations anytime.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;