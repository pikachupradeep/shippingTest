
import FAQ from "@/components/faq/FAQ";
import Features from "@/components/features/Features";
import Hero from "@/components/hero/Hero";
import Intro from "@/components/intro/Intro";
import CardContainer from "@/components/ui/CardContainer";


export default function Home() {
  return (
   <div className="">
    <Hero />
    <Features />
    <Intro />
    <FAQ />
    <CardContainer />

   </div>
  );
}
