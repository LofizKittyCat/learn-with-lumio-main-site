"use client";

import Image from "next/image";
import { useState } from "react";
import { IntroductionData } from "../../page";
import { IntroStepProps } from "../Props";

function DiscoveryLinkButton({
  selected,
  onSelect,
  label,
  icon,
}: {
  selected: boolean;
  onSelect: () => void;
  label: string;
  icon: string;
}) {
  return (
    <button
      onClick={() => onSelect()}
      className={`
        w-full h-14
        rounded-md
        outline outline-border
        hover:outline-divider
        border-b-2 border-border
        transition-all duration-150
        p-2 flex flex-row gap-3 items-center justify-center text-center cursor-pointer
        ${selected ? "outline-indigo hover:outline-indigo border-indigo-700 border-b-5 bg-indigo" : ""}`}
    >
      <Image src={icon} alt={label} width={24} height={24} />
      <span className="text-lg text-text-primary font-rubik font-medium">
        {label}
      </span>
    </button>
  );
}

const Discoveries = [
  { label: "X (Twitter)", icon: "/x.svg" },
  { label: "Instagram", icon: "/instagram.png" },

  { label: "Youtube", icon: "/yt.png" },
  { label: "TikTok", icon: "/tt-logo.png" },

  { label: "A Friend", icon: "/speaking-head.svg" },
  { label: "Other", icon: "/speech-balloon.svg" },
];

export default function IntroStepOne({ data }: IntroStepProps) {
  const [selectedDiscovery, setSelectedDiscovery] = useState("");

  return (
    <div className="flex flex-col px-12 py-6 gap-6">
      <h2 className="text-3xl text-text-primary font-rubik font-medium">
        How did you find out about Lumio?
      </h2>

      <div className="grid grid-cols-2 grid-rows-3 gap-4 justify-between outline-2 outline-border border-b-4 border-border rounded-lg p-4 shadow-lg">
        {Discoveries.map((discovery, index) => (
          <DiscoveryLinkButton
            key={index}
            selected={data.discovery === discovery.label}
            onSelect={() => {
              setSelectedDiscovery(discovery.label);
              data.discovery = discovery.label;
            }}
            label={discovery.label}
            icon={discovery.icon}
          />
        ))}
      </div>
    </div>
  );
}
