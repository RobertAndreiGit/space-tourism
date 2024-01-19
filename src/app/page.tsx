import Image from "next/image";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import { Header } from "./components/Header";

const barlow = Barlow({ subsets: ["latin"], weight: "400" });
const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: "400" });
const bellefair = Bellefair({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="bg-no-repeat bg-auto bg-cover bg-[url('/assets/home/background-home-mobile.jpg')] md:bg-[url('/assets/home/background-home-tablet.jpg')] lg:bg-[url('/assets/home/background-home-desktop.jpg')] lg:min-h-screen lg:h-1">
      <div className="flex flex-col justify-between h-full lg:pt-10">
        <Header />

        <section className="flex justify-between flex-col mt-[24px] md:mt-[106px] gap-[156px] items-center mb-[90px] mx-6 md:mx-0 lg:gap-0 lg:flex-row lg:mb-32 lg:ml-40 lg:mr-20 ">
          <div className="md:w-[450px] text-center lg:text-left">
            <p
              className={`text-[16px] ${barlowCondensed.className} tracking-[2.7px] md:tracking-[4.75px] md:text-[28px]`}
            >
              SO, YOU WANT TO TRAVEL TO
            </p>
            <p className={`text-[80px] md:text-[150px] ${bellefair.className}`}>
              SPACE
            </p>
            <p className={`text-[15px] md:text-lg ${barlow.className}`}>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="hidden lg:block w-auto"></div>
          <div className="w-[350px] md:w-[450px] flex justify-center items-center">
            <button
              className={`rounded-full bg-white text-[#0B0D17] px-4 py-2 h-[150px] w-[150px] text-[20px] md:text-[32px] md:h-[242px] md:w-[242px] lg:h-[274px] lg:w-[274px] ${bellefair.className} hover:shadow-[0_0_0_88px_rgba(151,151,151,0.1)]`}
            >
              EXPLORE
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
