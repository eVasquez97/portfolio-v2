import { variableText } from "@/utils/constants";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-20 text-center">
      <div className="w-6 h-6 border-2 border-highlight border-t-transparent rounded-full animate-spin mb-3"></div>
      <p className={`${variableText} text-sm opacity-60 font-light`}>
        Loading...
      </p>
    </div>
  );
}
