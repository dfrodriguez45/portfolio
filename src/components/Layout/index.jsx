export default function Layout() {
  return (
    <main className="grid min-h-dvh gap-2 p-4 sm:grid-cols-4">
      <section className="col-span-1 flex h-full items-center justify-center border border-red-500 sm:col-span-4 md:col-span-2">
        About me
      </section>
      <section className="col-span-1 flex h-full items-center justify-center border border-red-500 sm:col-span-4 md:col-span-2">
        Experience
      </section>
      <section className="col-span-1 flex h-full items-center justify-center border border-red-500 sm:col-span-3">
        Projects
      </section>
      <section className="col-span-1 flex h-full items-center justify-center border border-red-500">
        Social
      </section>
    </main>
  );
}
