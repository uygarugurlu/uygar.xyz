import { Technologies } from "../components/Technologies";
import { Listening } from "../components/Listening";
import { Contact } from "../components/Contact";
import { Layout } from "../components/Layout";
import { About } from "../components/About";
import { Main } from "../components/Main";
import { Seo } from "../components/Seo";
import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [_, setPresenceActive] = useState(false);

  return (
    <>
      <Seo
        title="Uygar Uğurlu"
        description="Uygar Uğurlu - Full-Stack Web Developer"
      />
      <Layout>
        <Main />
        <About />
        <Technologies />
        <Contact />
        <Listening setActive={setPresenceActive} />
      </Layout>
    </>
  );
};

export default Home;
