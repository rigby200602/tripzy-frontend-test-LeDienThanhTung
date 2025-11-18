import Image from "next/image";
import Header from "@/components/Header";
import Tabs from "@/components/Tabs";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-between">
        <div className="my-10">
          <h1 className="text-[40px] text-[#121216] font-semibold text-center">
            Travel Smarter, Not Harder
          </h1>
          <p className="text-lg text-[#767689] font-normal text-center">
            Make every trip effortless. Tripzy lets you book rides and plan
            journeys with ease
          </p>
        </div>
        <Tabs />
      </div>
    </div>
  );
}
