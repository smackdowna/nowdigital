import Accelerate from "./_components/Accelerate";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Organization from "./_components/Organization";
import Possibilities from "./_components/Possibilities";
import TakeStepNow from "./_components/TakeStepNow";
import Testimonials from "./_components/Testtimonial";


export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Possibilities/>
      <Accelerate/>
      <Organization/>
      <Testimonials/>
      <TakeStepNow/>
    </div>
  );
}
