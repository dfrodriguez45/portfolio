import About from "./components/About";
import Layout from "./components/Layout";
import StarsBackground from "./components/StarsBackground";

function App() {
  return (
    <>
      <StarsBackground />
      <Layout>
        <About />
        <section className="col-span-1 flex h-full items-center justify-center border border-red-500 sm:col-span-4 md:col-span-2">
          Experience
        </section>
        <section className="col-span-1 flex h-full items-center justify-center border border-red-500 sm:col-span-3">
          Projects
        </section>
        <section className="col-span-1 flex h-full items-center justify-center border border-red-500">
          Social
        </section>
      </Layout>
    </>
  );
}

export default App;
