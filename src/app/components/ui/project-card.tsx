import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  title: string;
  description: string;
  linkText?: string;
  onLinkClick?: () => void;
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ className, imgSrc, title, description, linkText = "Ver mais", onLinkClick, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white text-card-foreground shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl",
          className
        )}
        onClick={onLinkClick}
        {...props}
      >
        {/* Image */}
        <div className="aspect-video overflow-hidden">
          <img
            src={imgSrc}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-base font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#2354a2] leading-tight">
            {title}
          </h3>
          <p className="mt-2 flex-1 text-sm text-gray-500 leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* CTA */}
          <button
            className="group/btn mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2354a2] transition-all duration-300 hover:underline w-fit"
            onClick={e => { e.stopPropagation(); onLinkClick?.(); }}
          >
            {linkText}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

export { ProjectCard };
