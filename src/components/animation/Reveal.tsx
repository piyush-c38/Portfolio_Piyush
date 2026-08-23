import { ReactNode } from "react";
import { HTMLMotionProps, motion, Variants } from "framer-motion";
import clsx from "clsx";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  once?: boolean;
} & Omit<HTMLMotionProps<"div">, "children" | "className">;

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  once?: boolean;
} & Omit<HTMLMotionProps<"div">, "children" | "className">;

const createItemVariants = (distance: number): Variants => ({
  hidden: {
    opacity: 0,
    y: distance,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
});

const groupVariants: Variants = {
  hidden: {},
  visible: {},
};

export const Reveal = ({
  children,
  className,
  delay = 0,
  distance = 28,
  once = true,
  ...props
}: RevealProps) => (
  <motion.div
    className={className}
    variants={createItemVariants(distance)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once, amount: 0.2, margin: "0px 0px -80px 0px" }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    {...props}
  >
    {children}
  </motion.div>
);

export const RevealGroup = ({
  children,
  className,
  stagger = 0.12,
  delayChildren = 0,
  once = true,
  ...props
}: RevealGroupProps) => (
  <motion.div
    className={clsx(className)}
    variants={groupVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once, amount: 0.15, margin: "0px 0px -100px 0px" }}
    transition={{ staggerChildren: stagger, delayChildren }}
    {...props}
  >
    {children}
  </motion.div>
);
