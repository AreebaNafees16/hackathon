import Hero from "./components/hero";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import { redirect } from "next/navigation";
export default function Home() {

  return (
    
    <div>
      
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      
      <Section5 />      
    </div>
  );
}
