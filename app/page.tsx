import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="py-16 px-8">
        <h1 className="text-[40px] text-[#121216] font-semibold text-center">Travel Smarter, Not Harder</h1> 
        <p className="text-lg text-[#767689] font-normal text-center">
          Make every trip effortless. Tripzy lets you book rides and plan journeys with ease
        </p>
      </div>
      <div className="flex flex-col bg-white rounded-2xl h-60 w-[75%] shadow-lg">
          <div className="flex rounded-2xl shadow-md h-[30%]">
          </div>
      </div>
    </main>
  );
}
