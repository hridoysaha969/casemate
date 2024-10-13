import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt="Phone image"
      />
      <div className="absolute -z-50 inset-0">
        <img
          src={imgSrc}
          alt="Overlaying phone image"
          className="object-cover min-h-full min-w-full"
        />
      </div>
    </div>
  );
};

export default Phone;
