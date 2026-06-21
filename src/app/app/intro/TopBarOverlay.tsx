export default function TopBarOverlay({
  currentStep,
  maxSteps,
}: {
  currentStep: number;
  maxSteps: number;
}) {
  const progress = currentStep / maxSteps;
  const percentage = progress * 100;

  return (
    <div className="z-50 absolute top-0 w-full flex">
      <div className="w-full relative flex flex-row justify-center h-24 items-center px-24 2xl:px-160 py-6">
        <div className="w-full h-4 bg-bg-popover rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${percentage}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
