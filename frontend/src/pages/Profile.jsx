function Profile() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#0A0A0A] px-4 py-10 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-4xl">

        <h1 className="text-3xl font-bold text-white">
          Profile
        </h1>

        <p className="mt-2 text-gray-400">
          Manage your account information.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-[#111111] p-6">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#B11226] text-lg font-bold text-white">
              U
            </div>

            <div>
              <h2 className="font-semibold text-white">
                User Profile
              </h2>

              <p className="text-sm text-gray-500">
                Manage your account settings
              </p>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Profile;