import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  /** Logo artwork is white/light-colored and needs a dark chip background to stay visible */
  darkBg?: boolean;
  /** Source artwork has extra internal padding, so it reads smaller than the others at the same chip size */
  boost?: boolean;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
  gap?: number;
  reverse?: boolean;
  speed?: number;
  speedOnHover?: number;
};

export function LogoCloud({ className, logos, gap = 42, reverse = false, speed = 80, speedOnHover = 25, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={gap} reverse={reverse} speed={speed} speedOnHover={speedOnHover}>
        {logos.map((logo) => (
          <div
            key={`logo-${logo.alt}`}
            className={cn(
              "flex items-center justify-center self-center rounded-lg px-3 py-2",
              logo.boost ? "h-16" : "h-12",
              logo.darkBg ? "bg-[#0c1d2c]" : "bg-white"
            )}
          >
            <img
              alt={logo.alt}
              className={cn(
                "pointer-events-none select-none object-contain opacity-100 transition-all duration-300",
                logo.boost ? "h-full max-w-[180px]" : "h-full max-w-[140px]"
              )}
              height={logo.height || "auto"}
              loading="eager"
              src={logo.src}
              width={logo.width || "auto"}
            />
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}