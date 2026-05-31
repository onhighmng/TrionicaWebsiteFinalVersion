import React from "react";
import { motion } from "motion/react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer hover:opacity-[0.9]"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white/95 dark:bg-black/95 backdrop-blur-xl rounded-2xl overflow-hidden border border-black/[0.1] dark:border-white/[0.2] shadow-2xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex justify-center items-center space-x-4"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  onClick,
  src,
}: {
  title: string;
  description: string;
  onClick: () => void;
  src: string;
}) => {
  return (
    <button onClick={onClick} className="flex space-x-3 text-left hover:bg-gray-50 dark:hover:bg-gray-900 p-2 rounded-lg transition-colors">
      <img
        src={src}
        width={100}
        height={60}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-md object-cover"
      />
      <div>
        <h4 className="font-semibold mb-1 text-black dark:text-white text-sm">
          {title}
        </h4>
        <p className="text-neutral-600 dark:text-neutral-400 text-xs max-w-[10rem]">
          {description}
        </p>
      </div>
    </button>
  );
};

export const HoveredLink = ({ 
  children, 
  onClick,
}: { 
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white w-full text-left px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors text-sm"
    >
      {children}
    </button>
  );
};
