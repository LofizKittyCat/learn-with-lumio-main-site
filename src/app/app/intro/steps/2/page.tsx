"use client";

import { useState } from "react";

export function CourseSearchBar({
  searchQuery,
  onChange,
}: {
  searchQuery: string;
  onChange: (query: string) => void;
}) {
  return (
    <div className="w-full h-12 rounded-md border border-border flex flex-row px-3 items-center">
      <input
        type="text"
        placeholder="Search for a course..."
        className="w-full font-rubik text-text-primary text-lg placeholder:placeholder-text-primary focus:outline-none"
      ></input>
    </div>
  );
}

export default function IntroStepTwo() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col px-12 py-6 gap-6">
      <h2 className="text-3xl text-text-primary font-rubik font-medium">
        What would you like to learn?
      </h2>

      <div className="flex flex-col gap-4 outline-2 outline-border border-b-4 border-border rounded-lg p-4 shadow-lg">
        <CourseSearchBar
          searchQuery={searchQuery}
          onChange={(q) => setSearchQuery(q)}
        />
      </div>
    </div>
  );
}
