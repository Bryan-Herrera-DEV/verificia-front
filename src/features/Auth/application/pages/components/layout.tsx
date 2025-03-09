import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface LayoutProps {
  heading: string;
  description?: string;
  fields: ReactNode[];
  button: ReactNode;
  back?: ReactNode;
  current: number;
  total: number;
}

export default function Layout({
  heading,
  description,
  fields,
  button,
  back,
  current,
  total,
}: LayoutProps) {
  return (
    <div className="relative flex h-full w-full items-center justify-center px-4 py-8">
      <div className="w-full max-w-md shrink-0">
        <p className="mb-6 text-center text-base text-neutral-500">
          {!!description && description}
        </p>
        <div className="scrollbar-hide mb-4 max-h-96 overflow-auto">
          <div className="space-y-4 pt-2">{fields}</div>
        </div>
        {button}
      </div>
      {back && (
        <div className="absolute left-4 top-5 grid grid-cols-[30px_auto] items-center w-full pr-8">
          {back}
          <div className="left-8 right-0 top-5 h-3 bg-indigo-500/50 rounded-xl">
            <motion.div
              className="h-full bg-indigo-500 rounded-xl"
              animate={{ width: `${(current / total) * 100}%` }}
              initial={false}
            />
          </div>
        </div>
      )}
    </div>
  );
}
