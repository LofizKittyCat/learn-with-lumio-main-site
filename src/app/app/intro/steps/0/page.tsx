import { ChevronRight } from "lucide-react";

export default function IntroStepZero({ nextPage }: { nextPage: () => void }) {
  return (
    <div className="flex flex-col gap-8 px-24 py-6">
      <h1 className="text-5xl text-text-primary font-space-grotesk font-semibold">
        Welcome to Lumio!
      </h1>
      <button
        onClick={nextPage}
        className="group overflow-hidden text-lg text-text-primary font-rubik font-medium bg-indigo border-b-3 border-indigo-700 transition-colors px-4 py-2 rounded-lg flex flex-row items-center justify-center gap-1 cursor-pointer"
      >
        <span className="relative">
          Next
          <ChevronRight
            className="absolute left-full top-1/2 -translate-y-1/2 translate-x-[-6px] opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
            size={24}
          />
        </span>
      </button>
    </div>
  );
}
