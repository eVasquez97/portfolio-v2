export default function LightSaber() {
  return (
    <div className="flex flex-row justify-center mb-11 mt-4">
      <div className="w-44 bg-secondary-dark h-[22px] rounded z-20 border border-secondaryText-dark flex items-center justify-center border-x-4 border-x-saberBase"></div>
      <div
        className="rounded-lg w-full h-[10px] -ml-2 mt-1.5
    shadow-[0_0_4px_lime,_0_0_4px_lime,_0_0_8px_lime,_0_0_16px_lime]
    dark:shadow-[0_0_4px_red,_0_0_8px_red,_0_0_32px_red,_0_0_100px_red] 
     bg-primary-light animate-pulse ease-in-out"
      ></div>
    </div>
  );
}
