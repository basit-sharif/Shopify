"use client"
import DummyData from "@/components/DummyData";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { useEffect, useState } from "react";

export default function Home() {
  const arrayOfText = ["For the explorers.", "The adventurous.", "And the fearless."];
  let [activeText, setActiveText] = useState(0);
  const [transitionOfText, setTransitionOfText] = useState("translate-y-0");
  const [opacityItemsText, setOpacityItemsText] = useState("opacity-100");
  let loop = true;

  const setNextText = () => {
    if (activeText !== arrayOfText.length - 1) {
      setTimeout(() => {
        setActiveText((activeText += 1));
      }, 500);
      transitionOpacityAnimationText();
    } else {
      if (loop) {
        transitionOpacityAnimationText();
        setTimeout(() => {
          setActiveText((activeText = 0));
        }, 500);

      }
    }
  };
  useEffect(() => {
    if (true) {
      let autoText = setInterval(setNextText, 3000);
      return () => clearInterval(autoText);
    }
  }, [activeText]);

  function transitionOpacityAnimationText() {
    setTransitionOfText("-translate-y-28");
    setTimeout(() => {
      setOpacityItemsText("opacity-0")
      setTimeout(() => {
        setTransitionOfText("translate-y-24");
        setTimeout(() => {
          setOpacityItemsText("opacity-100");
          setTransitionOfText("translate-y-0");
        }, 300);
      }, 300);
    }, 300);
  }




  return (
    <section>
      <main className=" w-full h-screen">
        <Navbar />

        <div className="absolute top-0 -z-10">
          <HeroSection />
        </div>

        <div className="-z-10 h-full flex justify-center items-center absolute inset-0 w-full bg-transparent">
          <div className="h-28 overflow-hidden py-4 px-14">
            <h1 className={`${transitionOfText} ${opacityItemsText} text-center duration-300 text-4xl sm:text-7xl text-white font-bold`}>
              {arrayOfText[activeText]}
            </h1>
          </div>
        </div>
      </main>

      <DummyData />

    </section>
  )
}
