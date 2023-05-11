import React from "react";
import styles from "../style";

const Footer = () => {
  return (
    <section className="w-full mt-5 py-8 text-prim text-center">
      <p className={`${styles.paragraph}`}>
        Copyright © 2023 Muhammad Aryo. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
