import { useId } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/shared/application/lib/utils";
import { Button } from "@/shared/application/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/application/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/shared/application/components/ui/command";

interface ListboxProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  error?: { message: string };
  icon?: JSX.Element;
}

export default function Listbox({
  label,
  value,
  onChange,
  options,
  error,
}: ListboxProps) {
  const id = useId();
  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className="flex flex-col gap-2">
      {options.map((option) => (
        <Button
          key={option.value}
          variant="outline"
          type="button"
          onClick={() => onChange(option.value)}
          className={cn(
            "border-none shadow-none flex w-full items-center justify-start gap-3 rounded-lg border py-3 text-left"
          )}
        >
          <span
            className={cn(
              "w-[15px] h-[15px] bg-[#D4BEFF] rounded-full",
              value === option.value ? "bg-[#999999]" : "bg-[#D4BEFF]"
            )}
          ></span>
          <span className="text-sm font-medium">{option.label}</span>
        </Button>
      ))}
    </div>
  );
}
