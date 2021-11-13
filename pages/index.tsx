import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import LOGO from "../public/logo.svg";

const Home: NextPage = () => {
  return (
    <div className="backgroundImage  w-screen h-screen">
      <Head>
        <title>Equalizer Landing Page</title>
        <meta name="description" content="Equalizer Landing Page" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className="mx-4 my-10">
        <header className="text-black">
          <Image src={LOGO} alt="Equalizer Logo" width={147} height={33} />
        </header>
        We make your music sound extraordinary. A system audio equalizer
        specifically designed for Android and iOS. Freely tune the way your
      </main>
    </div>
  );
};

export default Home;
