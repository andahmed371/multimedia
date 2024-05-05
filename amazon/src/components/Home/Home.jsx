import { useEffect, useState } from "react";
import Background from "../Home/components/Background/Background";
import Hero from "../Home/components/Hero/Hero";
import States from "./components/States/States";
import Features from "./components/Features/Features";
const Home = () => {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "what you love" },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
  }, []);
  return (
    <div>
      <div className="container">
        <Background playStatus={playStatus} heroCount={heroCount} />
        <Hero
          playStatus={playStatus}
          heroData={heroData[heroCount]}
          setHeroCount={setHeroCount}
          setPlayStatus={setPlayStatus}
          heroCount={heroCount}
        />
      </div>
      <div>
        <States />
        <Features />
      </div>
    </div>
  );
};

export default Home;
