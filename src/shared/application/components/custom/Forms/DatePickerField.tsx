import { cn } from "@/shared/application/lib/utils";
import dayjs from "dayjs";
import { Calendar as CalendarIcon, Info } from "lucide-react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button } from "../../ui/button";
import { Calendar } from "../../ui/calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

interface DatePickerFieldProps<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>
> {
  form: UseFormReturn<TFieldValues>;
  name: TName;
  label: string;
  description?: string;
}

export function DatePickerField<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>
>({
  form,
  name,
  label,
  description,
}: Readonly<DatePickerFieldProps<TFieldValues, TName>>) {
  const { t } = useTranslation();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="!mt-6">
          <FormLabel className="flex items-center justify-start">
            {label}{" "}
            {description && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="ml-2 h-3 w-3 opacity-75" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </FormLabel>
          <FormControl>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full pl-3 text-left font-normal base-input-quira !mt-3 capitalize",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    dayjs(field.value).format("MMMM D, YYYY")
                  ) : (
                    <span>{t("commonSystemKeys.pickADate")}</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange} // Conecta la selección al campo
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
