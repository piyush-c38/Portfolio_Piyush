
import { FaGithub, FaReact, FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import { SiJavascript, SiNextdotjs } from "react-icons/si";
import clsx from "clsx";

type Props = {
  className?: string;
  direction?: "horizontal" | "vertical";
  crissCross?: boolean;
};

const stacks = [
  { icon: FaGithub, name: "GitHub" },
  { icon: FaReact, name: "React" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: FaPython, name: "Python" },
  { icon: FaJava, name: "Java" },
];

// CrissCross: alternate X offset per icon, for zigzag
function getCrissCrossClass(index: number) {
  // For vertical: shift left/right alternately
  // - even: ml-0, odd: ml-7
  // Use moderate offset for wave
  return index % 2 === 0 ? "ml-0" : "ml-7";
}

const TechStack = ({ className, direction = "horizontal", crissCross }: Props) => {
  if (direction === "vertical") {
    return (
      <div
        className={clsx(
          "flex flex-col w-full items-start gap-3 group",
          className
        )}
      >
        {stacks.map(({ icon: Icon, name }, i) => (
          <div
            key={name}
            className={clsx(
              "hover-scale flex flex-col items-center text-black/80 hover:text-black cursor-pointer transition pointer-events-auto",
              crissCross && getCrissCrossClass(i)
            )}
            title={name}
          >
            <Icon
              size={28}
              className="mb-1 drop-shadow-sm group-hover:text-black/90 transition"
            />
            <span className="text-[10px] sm:text-xs tracking-widest font-light mt-0.5">
              {name}
            </span>
          </div>
        ))}
      </div>
    );
  }
  // horizontal (default)
  return (
    <div className={clsx(
      "flex flex-row flex-wrap justify-center w-full items-center gap-4 sm:gap-7 group",
      className
    )}>
      {stacks.map(({ icon: Icon, name }) => (
        <div
          key={name}
          className="hover-scale flex flex-col items-center text-black/80 hover:text-black cursor-pointer transition"
          title={name}
        >
          <Icon
            size={28}
            className="mb-1 sm:mb-1 drop-shadow-sm group-hover:text-black/90 transition"
          />
          <span className="text-[10px] sm:text-xs tracking-widest font-light mt-0.5">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
