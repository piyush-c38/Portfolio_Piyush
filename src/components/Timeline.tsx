import { ExternalLink } from "lucide-react";
import { PortfolioTimelineItem } from "@/lib/content";

type TimelineProps = {
  items: PortfolioTimelineItem[];
};

const Timeline = ({ items }: TimelineProps) => (
  <div className="relative pl-4 max-w-xl mx-auto sm:pl-4">
    <div className="absolute top-5 left-3 bottom-4 w-0.5 bg-gray-200 rounded hidden sm:block"></div>
    <div className="flex flex-col gap-7">
      {items.map((item, idx) => (
        <div
          key={`${item.title}-${item.date}`}
          className="relative z-10 flex flex-row gap-4 sm:gap-5 mb-0 sm:mb-8 last:mb-0 group"
        >
          <div className="flex flex-col items-center pt-0.5">
            <span
              className={`w-4 h-4 rounded-full border-4 border-white shadow-sm ${item.color}`}
            ></span>
            {idx !== items.length - 1 && (
              <span className="hidden sm:flex flex-1 w-px bg-gray-200 mt-0.5"></span>
            )}
          </div>

          <div>
            <h3 className="text-[15px] sm:text-lg font-medium font-inter mb-0.5">
              {item.title}
            </h3>
            <div className="text-[11px] sm:text-xs text-gray-400 mb-1 font-inter">
              {item.date} {item.role && <span className="text-black/50">- {item.role}</span>}
            </div>
            <div className="text-[12px] sm:text-[15px] text-black/65 font-light max-w-xs sm:max-w-lg">
              {item.description}
            </div>
            {item.project_link && (
              <a
                href={item.project_link}
                className="text-[12px] sm:text-[15px] flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                View Project <ExternalLink size={14} className="ml-1" />
              </a>
            )}
            {item.demo_link && (
              <a
                href={item.demo_link}
                className="text-[12px] sm:text-[15px] flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                Live Demo <ExternalLink size={14} className="ml-1" />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Timeline;
