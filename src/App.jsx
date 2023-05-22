import React from "react";
import Navigation from "./components/Navigation";
import Pages from "./components/Pages";
import styles from "./style";
import Footer from "./components/Footer";

function App() {
  //   const [active, setActive] = React.useState("works");

  return (
    <div
      className={`${styles.flexCenter} flex-col w-full h-[100%] bg-second overflow-x-hidden`}
    >
      {/* <Navigation active={active} setActive={setActive} /> */}
      <Pages />
      <Footer />
    </div>
  );
}

export default App;
