import React from "react";
import { cn } from "../../utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden -z-10", className)}>
      <div className="absolute -inset-[10px] opacity-50">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mix-blend-multiply filter blur-3xl opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75" />
      </div>
    </div>
  );
};