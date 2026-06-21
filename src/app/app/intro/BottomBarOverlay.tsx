import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function BottomBarOverlay({
  currentPage,
  previousPage,
  nextPage,
  setPage,
}: {
  currentPage: number;
  previousPage: number;
  nextPage: number;
  setPage: (page: number) => void;
}) {
  return (
    <div className="z-50 absolute bottom-0 w-full flex border-t bg-bg-elevated border-divider ">
      <div className="w-full relative flex flex-row justify-between h-32 items-center px-6">
        <button
          onClick={() => setPage(previousPage)}
          className="text-lg text-text-primary font-rubik font-medium border border-border hover:border-divider transition-colors px-12 py-2 rounded-lg flex flex-row items-center justify-center cursor-pointer"
        >
          <ChevronLeft size={20} /> Back
        </button>

        <button
          onClick={() => setPage(nextPage)}
          className="text-lg text-text-primary font-rubik font-medium bg-indigo border-b-3 border-indigo-700 transition-colors px-12 py-2 rounded-lg flex flex-row items-center justify-center cursor-pointer"
        >
          Next <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
