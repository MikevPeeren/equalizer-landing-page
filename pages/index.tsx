import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Equalizer Landing Page</title>
        <meta name="description" content="Equalizer Landing Page" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main>
        We make your music sound extraordinary. A system audio equalizer
        specifically designed for Android and iOS. Freely tune the way your
        music sounds with a professional grade parametric EQ & volume mixer.
        Control bass, mids, treble, gain control, reverb, and more! Premium EQ
        Get expert-level control with a robust equalizer, volume mixer, and
        spatial audio. Take your listening experience to a whole new level and
        access all our incredible features! $4 / month iOS Download Android
        Download All rights reserved © Equalizer 2021 Have any problems? Contact
        us via social media or email us at equalizer@example.com
      </main>
    </div>
  );
};

export default Home;
