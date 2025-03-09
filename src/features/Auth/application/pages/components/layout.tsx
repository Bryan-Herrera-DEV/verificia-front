import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Saludo } from "@/shared/infrastructure/images";
import "./wapperText.css";
interface LayoutProps {
  heading: string;
  description?: string;
  fields: ReactNode[];
  button: ReactNode;
  back?: ReactNode;
  current: number;
  total: number;
  coinTalk?: boolean;
}

export default function Layout({
  description,
  fields,
  button,
  back,
  current,
  total,
  coinTalk = false,
}: Readonly<LayoutProps>) {
  const ImageComponent = {
    NormalCoin: <img alt="" src={Saludo} />,
  };
  return (
    <div className="relative flex h-full w-full items-end justify-center px-4 py-8">
      <div className="w-full max-w-md shrink-0 space-y-[40%]">
        {coinTalk ? (
          <div>
            <div className="bubble_celeste_sentado_left mb-8 !text-neutral-950">
              {!!description && description}
            </div>
            {ImageComponent["NormalCoin"]}
          </div>
        ) : (
          <div>
            <p className="mb-6 text-center text-base text-neutral-500">
              {!!description && description}
            </p>
            <div className="scrollbar-hide mb-4 max-h-96 overflow-auto">
              <div className="space-y-4 pt-2">{fields}</div>
            </div>{" "}
          </div>
        )}
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
