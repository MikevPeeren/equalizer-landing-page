import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import LOGO from "../public/logo.svg";
import PATTERN_TWO from "../public/bg-pattern-2.svg";
import ILLUSTRATION_APP from "../public/illustration-app.png";
import FACEBOOK from "../public/icon-facebook.svg";
import INSTAGRAM from "../public/icon-instagram.svg";
import TWITTER from "../public/icon-twitter.svg";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Equalizer Landing Page</title>
        <meta name="description" content="Equalizer Landing Page" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className="background">
        <div className="mx-6 md:mx-8 lg:mx-32">
          <header className="text-black pt-14">
            <Image src={LOGO} alt="Equalizer Logo" width={147} height={33} />
          </header>
          <h1 className="text-black break-words">
            We make your music sound extraordinary.
          </h1>
          <h2 className="my-6 w-full sm:w-3/4">
            A system audio equalizer specifically designed for Android and iOS.
            Freely tune the way your music sounds with a professional grade
            parametric EQ & volume mixer. Control bass, mids, treble, gain
            control, reverb, and more!
          </h2>
        </div>
        <div className="flex justify-center md:justify-start bg-black w-full h-[1000px] xxs:h-[1100px] xs:h-[1200px] md:h-[600px] relative mt-40 rounded-b-2xl">
          <div className="relative z-20 w-4/6 md:w-2/5 -top-28 md:left-10 ">
            <Image
              src={ILLUSTRATION_APP}
              alt="Illustration of the APP"
              layout="responsive"
            />
          </div>
          <div className="absolute z-10 md:z-10 top-0 md:-top-20 md:left-52 w-10/12 md:w-5/12 h-[430px] md:h-[600px]">
            <Image
              src={PATTERN_TWO}
              aria-hidden="true"
              alt=""
              layout="responsive"
            />
          </div>
          <div className="absolute z-20 -bottom-8 xxs:-bottom-10 xs:-bottom-10 md:-bottom-28 md:right-10 bg-orange rounded-2xl md:w-3/5">
            <div className="flex flex-col items-start px-6 py-10">
              <h3 className="text-white">Premium EQ</h3>
              <p className="premiumText text-white my-4 lg:my-6">
                Get expert-level control with a robust equalizer, volume mixer,
                and spatial audio. Take your listening experience to a whole new
                level and access all our incredible features!
              </p>
              <div className="flex flex-row items-center">
                <span className="dollarText text-white my-4 lg:my-6">$4</span>
                <span className="monthText text-white mx-4">/ month</span>
              </div>
              <button
                className="flex items-center justify-center my-6 lg:my-8 buttonText bg-black text-white rounded-2xl w-full p-4"
                type="button"
              >
                <svg
                  className="mx-2"
                  width="18"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.683 4.681c1.359 0 2.798.745 3.821 2.029-3.356 1.851-2.812 6.674.58 7.965-.467 1.04-.69 1.504-1.292 2.425-.839 1.285-2.02 2.886-3.486 2.897-1.302.014-1.637-.852-3.403-.842-1.766.009-2.134.857-3.437.845C4 19.987 2.88 18.542 2.042 17.257-.302 13.667-.549 9.45.897 7.207c1.029-1.592 2.651-2.523 4.175-2.523 1.551 0 2.527.856 3.812.856 1.247 0 2.005-.859 3.8-.859ZM12.291 0c.178 1.215-.315 2.405-.968 3.246-.697.904-1.901 1.603-3.066 1.566-.213-1.163.332-2.36.995-3.167C9.978.756 11.224.074 12.291 0Z"
                    fill="#FCFAF9"
                  />
                </svg>
                iOS Download
              </button>
              <button
                className="flex items-center justify-center my-4 lg:my-6 buttonText bg-white text-black rounded-2xl w-full p-4"
                type="button"
              >
                <svg
                  className="mx-2"
                  width="17"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.362 6.638v8.35c0 .502-.334.836-.836.836h-.836v2.924c0 .669-.583 1.252-1.251 1.252-.67 0-1.252-.583-1.252-1.252v-2.924H7.515v2.924c0 .669-.583 1.252-1.252 1.252s-1.252-.583-1.252-1.252v-2.924h-.836c-.501 0-.836-.334-.836-.835v-8.35h10.023Zm2.088 0c.669 0 1.252.586 1.252 1.251v5.848c0 .668-.583 1.252-1.252 1.252s-1.252-.584-1.252-1.252V7.889c0-.665.583-1.25 1.252-1.25Zm-14.198 0c.669 0 1.252.586 1.252 1.251v5.848c0 .668-.583 1.252-1.252 1.252S0 14.405 0 13.737V7.889c0-.665.583-1.25 1.252-1.25ZM11.776.126a.4.4 0 0 1 .583 0 .401.401 0 0 1 0 .583l-1.085 1.084c.35.234.667.52.942.846.66.782 1.081 1.8 1.139 2.902l.002.034c.003.075.005.15.005.227H3.34c0-.076.002-.152.006-.227l.002-.034a4.908 4.908 0 0 1 1.138-2.902 4.52 4.52 0 0 1 .942-.846L4.343.71a.4.4 0 0 1 0-.583.4.4 0 0 1 .583 0l1.12 1.118.053.051c.664-.333 1.41-.499 2.24-.5h.024c.83.001 1.575.167 2.24.5l.052-.051ZM6.262 3.09a.626.626 0 1 0 0 1.252.626.626 0 0 0 0-1.252Zm4.178 0a.626.626 0 1 0 0 1.252.626.626 0 0 0 0-1.252Z"
                    fill="#191826"
                  />
                </svg>
                Android Download
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-20 md:mt-40">
        <div className="mx-6 md:mx-8 lg:mx-32 my-10">
          <Image src={LOGO} alt="Equalizer Logo" width={147} height={33} />
          <div className="md:flex md:flex-row md:items-end md:justify-between">
            <p className="mt-10 mb-10 md:mb-0 md:w-2/4">
              All rights reserved © Equalizer 2021 Have any problems? Contact us
              via social media or email us at equalizer@example.com
            </p>
            <div className="flex flex-row justify-between w-2/6 md:w-1/5 h-[20px]">
              <Image src={FACEBOOK} alt="Facebook" width={20} height={20} />
              <Image src={INSTAGRAM} alt="Instagram" width={20} height={20} />
              <Image src={TWITTER} alt="Twitter" width={20} height={17} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
