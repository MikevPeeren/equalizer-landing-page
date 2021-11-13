import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import LOGO from "../public/logo.svg";
import PATTERN_TWO from "../public/bg-pattern-2.svg";
import ILLUSTRATION_APP from "../public/illustration-app.png";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Equalizer Landing Page</title>
        <meta name="description" content="Equalizer Landing Page" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main>
        <div className="mx-6 md:mx-8 lg:mx-32 my-10">
          <header className="text-black">
            <Image src={LOGO} alt="Equalizer Logo" width={147} height={33} />
          </header>
          <h1 className="text-black">
            We make your music sound extraordinary.
          </h1>
          <h2 className="my-6 w-4/4 sm:w-3/4">
            A system audio equalizer specifically designed for Android and iOS.
            Freely tune the way your music sounds with a professional grade
            parametric EQ & volume mixer. Control bass, mids, treble, gain
            control, reverb, and more!
          </h2>
        </div>
        {/* <div className="flex flex-col items-center justify-center"> */}
        <div className="flex justify-center items-center bg-black w-full h-[600px] relative top-40">
          <div className="relative z-20 w-3/4 -top-52">
            <Image
              src={ILLUSTRATION_APP}
              alt="Illustration of the APP"
              layout="responsive"
            />
          </div>
          <div className="absolute z-10 top-0 w-[280px] h-[420px]">
            <Image src={PATTERN_TWO} alt="Equalizer Logo" layout="responsive" />
          </div>
        </div>
        <div className="relative w-full"></div>
        {/* </div> */}
        {/* <Image src={LOGO} alt="Equalizer Logo" width={147} height={33} /> */}
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
