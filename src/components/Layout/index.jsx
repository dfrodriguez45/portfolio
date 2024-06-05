export default function Layout() {
  return (
    <main className="grid h-dvh grid-cols-4 gap-2 p-4">
      <section className="col-span-2 flex h-full items-center justify-center border border-red-500">
        About me
      </section>
      <section className="col-span-2 flex h-full items-center justify-center border border-red-500">
        Experience
      </section>
      <section className="col-span-3 flex h-full items-center justify-center border border-red-500">
        Projects
      </section>
      <section className="flex h-full items-center justify-center border border-red-500">
        Social
      </section>
    </main>
  );
}
