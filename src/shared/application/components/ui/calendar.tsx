import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { DayPicker } from "react-day-picker";

import { buttonVariants } from "@/shared/application/components/ui/button";
import { cn } from "@/shared/application/lib/utils";
import { es } from "date-fns/locale";
import { ComponentProps } from "react";
export type CalendarProps = ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  // create locale with es-Es
  const locale = es;

  // const handleCalendarChange = (
  //   _value: string | number,
  //   _e: ChangeEventHandler<HTMLSelectElement>
  // ) => {
  //   const _event = {
  //     target: {
  //       value: String(_value),
  //     },
  //   } as ChangeEvent<HTMLSelectElement>;
  //   _e(_event);
  // };

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeftIcon className="h-4 w-4" />,
        IconRight: () => <ChevronRightIcon className="h-4 w-4" />,
        //   Dropdown: ({ ...props }) => (
        //     <Select
        //       {...props}
        //       // eslint-disable-next-line @typescript-eslint/no-explicit-any
        //       onValueChange={(value: any) => {
        //         if (props.onChange) {
        //           handleCalendarChange(value, props.onChange);
        //         }
        //       }}
        //       value={props.value as string}
        //     >
        //       <SelectTrigger
        //         className={cn(
        //           buttonVariants({ variant: "ghost" }),
        //           "h-7 w-fit py-2 pl-2 pr-1 font-medium [.is-between_6]:hidden [.is-end_&]:hidden [.is-start.is-end_&]:flex"
        //         )}
        //       >
        //         <SelectValue placeholder={props?.caption}>
        //           {props?.caption}
        //         </SelectValue>
        //       </SelectTrigger>
        //       <SelectContent className="scrolling-auto max-h-[var(--radix-popper-available-height);] min-w-[var(--radix-popper-anchor-width)] overflow-y-auto">
        //         {props.children &&
        //           Children.map(props.children, (child) => (
        //             <SelectItem
        //               // eslint-disable-next-line @typescript-eslint/no-explicit-any
        //               value={(child as React.ReactElement<any>)?.props?.value}
        //               className="min-w-[var(--radix-popper-anchor-width)]"
        //             >
        //               {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        //               {(child as React.ReactElement<any>)?.props?.children}
        //             </SelectItem>
        //           ))}
        //       </SelectContent>
        //     </Select>
        //   ),
      }}
      locale={locale}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
