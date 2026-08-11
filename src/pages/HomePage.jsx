import { Navbar, Hero, Explore, Departments, Equipment, Location, Footer } from '../components/sections/index.js';

export function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Explore />
        <Departments />
        <Equipment />
        <Location />
      </main>
      <Footer />
    </>
  );
}
