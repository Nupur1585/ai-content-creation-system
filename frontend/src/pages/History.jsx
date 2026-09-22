function History() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#0A0A0A] px-4 py-10 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-6xl">

        <h1 className="text-3xl font-bold text-white">
          Content History
        </h1>

        <p className="mt-2 text-gray-400">
          View and manage your previously generated content.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-[#111111] p-10 text-center">

          <p className="text-gray-500">
            No generated content yet.
          </p>

        </div>

      </div>

    </main>
  );
}

export default History;