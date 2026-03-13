import { useEffect, useRef, useState } from "react";
import "../App.css";
import Nav from "../Components/Nav.jsx";
import HeroSection from "../Components/HeroSection.jsx";
import InfoSection from "../Components/InfoSection.jsx";
import HeaderButton from "../Components/HeaderButton.jsx";

function Home() {
  const infoRef = useRef(null);
  const [showDarkNav, setShowDarkNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (infoRef.current) {
        const infoTop = infoRef.current.getBoundingClientRect().top;
        setShowDarkNav(infoTop <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="tracking-wider lato">
      <Nav showDarkNav={showDarkNav} />
      <HeroSection imgUrl="https://static0.cbrimages.com/wordpress/wp-content/uploads/2022/05/The-Dark-Knight-Returns-cover.jpg">
        <h1 className="absolute top-30 left-1/2 w-75 -translate-x-1/2 transform text-center text-4xl font-black text-white md:w-fit lg:left-20 lg:translate-0 lg:top-1/3 lg:text-5xl lg:w-lg lg:text-left">
          Find The Hero You Need
        </h1>
        <p className="absolute bottom-30 left-1/2 w-75 -translate-x-1/2 transform text-center font-semibold text-white md:w-fit lg:left-20 lg:translate-0 lg:top-1/3 lg:mt-30 lg:w-md lg:text-left">
          Browse through a select collection of comic book characters and explore information about your favorite heroes and villains.
        </p>
        <HeaderButton text="Search" />
      </HeroSection>
      <InfoSection
        refObj={infoRef}
        title="What is Comic Codex?"
        text={[
          <>
            <span className="font-bold">Comic Codex</span> is a comic book
            character API designed to help users find basic information about
            various comic book character from different universes. The front and
            back end of the applications are built using{" "}
            <span className="font-bold">React</span> and{" "}
            <span className="font-bold">Spring Boot</span>. The database is
            powered by <span className="font-bold">PostgreSQL</span> and only
            has a handful of characters for demonstration purposes. The entirety
            of the project was build by myself, Andrew De La Torre, as a way to
            practice full stack development.
          </>,
          <br />,
          <br />,
          <span className="text-xl font-bold lg:text-2xl">Tech Stack:</span>,
        ]}
        logos={["React", "TailwindCSS", "Java", "SpringBoot", "PostgresSQL"]}
      />
    </div>
  );
}

export default Home;
