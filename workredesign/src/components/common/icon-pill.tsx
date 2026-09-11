import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconPillProps {
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
}

export default function IconPill({
  icon: Icon,
  className,
  iconClassName,
}: IconPillProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center w-12 h-12 rounded-[14px]",
        "bg-cyan-50 border border-cyan-200",
        "group-hover:bg-cyan-500 transition-colors duration-300",
        className
      )}
    >
      <Icon
        className={cn(
          "w-5.5 h-5.5 text-cyan-500 stroke-[1.5]",
          "group-hover:text-white transition-colors duration-300",
          iconClassName
        )}
      />
    </div>
  );
}
