import Comp1 from "@/components/comp1";
import Comp2 from "@/components/comp2";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div>
      <div>
        <Comp1 />
      </div>
      <div className="flex ml-8">
        <div>
          <Comp2 />
          </div>
        <div>
          <Hero /></div>
      </div>
    </div>
  );
}
