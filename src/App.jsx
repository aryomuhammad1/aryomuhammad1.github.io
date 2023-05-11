import React from "react";
import Navigation from "./components/Navigation";
import Pages from "./components/Pages";
import About from "./components/About";
import Works from "./components/Works";
import styles from "./style";
import Footer from "./components/Footer";

function App() {
  const [active, setActive] = React.useState("works");

  console.log("active : ", active);
  return (
    <div
      className={`${styles.flexCenter} flex-col w-full h-[100%] bg-second overflow-x-hidden`}
    >
      <Navigation active={active} setActive={setActive} />
      <Pages active={active} />
      <Footer />
    </div>
  );
}

export default App;
