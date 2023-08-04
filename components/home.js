
import "../app/globals.css";
import ContactBox from "./contactBox";
import Projects from "./projects";
import Skills from "./skills";

const Home = () => (
  <main>
    {/* Main Landing Content */}
    <p className="text-black text-4xl text-center pt-14 p-10 md:p-20 font-bold">
      Who is Gunnar Lukari?
    </p>
    <div className="grid md:grid-cols-2">
      <p className="text-black text-xl md:w-full mx-auto px-12 py-6 md:px-20 text-justify md:text-left order-2 md:order-1">
        Gunnar, a dedicated U.S.-based full-stack developer, has a programming
        passion sparked by early interest in Smart Contracts. He excels in
        frontend technologies including HTML, CSS, Tailwind, JavaScript, React,
        Next.js, and WordPress, crafting visually stunning, responsive user
        interfaces.
        <br />
        <br />
        In backend development, Gunnar&apos;s proficiency extends to tools like
        Git, Express.js, and MongoDB. This expertise allows him to ensure robust
        and seamless functionality across his projects.
        <br />
        <br />
        Gunnar is committed to lifelong learning, keeping pace with the
        fast-evolving tech landscape through a variety of online courses. His
        continuous growth ensures he stays on top of emerging trends and best
        practices in both frontend and backend development.
        <br />
        <br />
        A proud contributor to the programming community, Gunnar is keen on
        making a positive industry impact. He tackles each new challenge with
        gusto and a problem-solving mindset, consistently delivering innovation
        and top-quality programming expertise in all his projects.
        <br />
        <br />
      </p>
      <div className="order-1 md:order-2">
        <ContactBox />
      </div>
    </div>
    <Skills />
    <Projects />
  </main>
);

export default Home;
