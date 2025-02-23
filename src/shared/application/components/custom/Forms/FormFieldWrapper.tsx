import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/application/components/ui/form";
import { Input } from "@/shared/application/components/ui/input";
import React from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

interface FormFieldWrapperProps<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>
> {
  form: UseFormReturn<TFieldValues>;
  name: TName;
  label: string;
  placeholder?: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  component?: React.ComponentType<React.InputHTMLAttributes<HTMLInputElement>>;
}
export const FormFieldWrapper = <
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>
>({
  form,
  name,
  label,
  placeholder,
  type = "text",
  component: Component = Input,
}: Readonly<FormFieldWrapperProps<TFieldValues, TName>>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Component
              {...field}
              placeholder={placeholder}
              type={type}
              className="base-input-quira"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
