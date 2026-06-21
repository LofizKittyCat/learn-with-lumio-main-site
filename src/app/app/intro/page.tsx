"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroStepTwo from "./steps/2/page";
import BottomBarOverlay from "./BottomBarOverlay";
import IntroStepOne from "./steps/1/page";
import IntroStepZero from "./steps/0/page";
import TopBarOverlay from "./TopBarOverlay";

export type IntroductionData = {
  discovery: string; // How the user discovered Lumio
  what: string; // What subhect the user wants to learn (Java, React)
  experience: string; // How much experience the user has in the subject
};

export default function AppIntro() {
  const [data, setData] = useState<IntroductionData>({
    discovery: "",
    what: "",
    experience: "",
  });

  const [currentStep, setCurrentStep] = useState(0);
  const MaxSteps = 3;

  const back = () => {
    if (currentStep - 1 < 0) return;
    setCurrentStep((s) => s - 1);
  };

  const next = () => {
    setCurrentStep((s) => s + 1);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center text-center bg-bg-base overflow-hidden cursor-default">
      {/* Steps */}
      <AnimatePresence mode="wait">
        {currentStep === 0 && (
          <motion.div
            key="step-0"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -40, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex justify-center"
          >
            <IntroStepZero nextPage={next} />
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            key="step-1"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -40, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex justify-center"
          >
            <IntroStepOne data={data} />
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            key="step-2"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -40, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex justify-center"
          >
            <IntroStepTwo />
          </motion.div>
        )}
      </AnimatePresence>

      <TopBarOverlay currentStep={currentStep} maxSteps={MaxSteps} />

      {/* Overlay stays fixed */}
      {currentStep !== 0 && (
        <BottomBarOverlay
          currentPage={currentStep}
          previousPage={currentStep - 1}
          nextPage={currentStep + 1}
          setPage={setCurrentStep}
        />
      )}
    </div>
  );
}
