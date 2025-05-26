import { LucideLoaderCircle } from "lucide-react";
import React from "react";

const Spinner = () => {
  return (
    <div className="flex-1 flex justify-center items-center self-center">
      <LucideLoaderCircle className="w-12 h-12 animate-spin" />
    </div>
  );
};

export { Spinner };
