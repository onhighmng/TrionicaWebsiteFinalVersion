import * as React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  /** Pass null to suppress the bottom-right secondary image entirely. */
  secondaryImage?: {
    src: string;
    alt: string;
  } | null;
  breakout?: {
    src?: string;
    alt?: string;
    title?: string;
    description?: React.ReactNode;
    bulletPoints?: string[];
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  /**
   * When a company has no `src`, it renders as a text badge using `alt`.
   * This lets the same section serve both logo grids and text-only client lists.
   */
  companies?: Array<{
    src?: string;
    alt: string;
  }>;
  /** Optional content rendered between the main grid and the achievements section. */
  middleContent?: React.ReactNode;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    /** Large stat value — used when `description` is absent. */
    value?: string;
    /** Long-form text — when present the item renders as a descriptive card. */
    description?: string;
    /** Background color — when set the card renders with a solid colored background and white text. */
    color?: string;
  }>;
}

export const About3 = ({
  title = "About Us",
  description = "A passionate team dedicated to creating innovative solutions.",
  mainImage = {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop",
    alt: "Team photo",
  },
  secondaryImage = {
    src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&auto=format&fit=crop",
    alt: "Office",
  },
  breakout = {
    title: "What we do",
    description:
      "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
    buttonText: "Discover more",
    buttonUrl: "#",
  },
  companiesTitle = "Trusted by clients worldwide",
  companies = [],
  middleContent,
  achievementsTitle = "Our Achievements",
  achievementsDescription = "Numbers that reflect our commitment.",
  achievements = [],
}: About3Props = {}) => {
  const hasCompanies = companies && companies.length > 0;
  const hasAchievements = achievements && achievements.length > 0;
  const showSecondaryImage = secondaryImage !== null && secondaryImage !== undefined;

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white" data-navbar-section="light">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h2 className="font-['Manrope'] text-4xl md:text-5xl font-semibold text-[#0c1313] tracking-tight">
            {title}
          </h2>
          <p className="font-['Manrope'] text-[#5c6161] text-base md:text-lg leading-relaxed self-end">
            {description}
          </p>
        </div>

        {/* Main grid: big image left, card right */}
        <div className="grid gap-7 lg:grid-cols-3 lg:items-stretch">
          {/* Main image — h-[620px] drives the row height on desktop */}
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="w-full h-[320px] md:h-[480px] lg:h-[620px] rounded-xl object-cover lg:col-span-2"
          />

          {/* Right column — grid display auto-stretches single child; flex for two-child (with secondaryImage) */}
          <div
            className={
              showSecondaryImage
                ? "flex flex-col gap-7 md:flex-row lg:flex-col"
                : "grid"
            }
          >
            {/* Breakout card — auto-fills via grid stretch when alone */}
            <div
              className={`flex flex-col overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm ${
                showSecondaryImage ? "md:w-1/2 lg:w-auto" : ""
              }`}
            >
              {/* Blue header band */}
              <div className="bg-[#2354a2] px-7 py-6 shrink-0">
                {breakout?.src && (
                  <img src={breakout.src} alt={breakout.alt ?? ""} className="mb-3 h-8 brightness-0 invert" />
                )}
                {breakout?.description && (
                  <p className="text-white/60 text-xs font-semibold tracking-[0.18em] uppercase mb-1 font-['Manrope']">
                    {breakout.description}
                  </p>
                )}
                {breakout?.title && (
                  <h3 className="text-white text-xl md:text-2xl font-semibold font-['Manrope'] tracking-tight">
                    {breakout.title}
                  </h3>
                )}
              </div>

              {/* Bullet rows — blue gradient body with icon badges */}
              {breakout?.bulletPoints && breakout.bulletPoints.length > 0 && (
                <ul className="flex flex-col flex-1 bg-gradient-to-b from-[#2354a2] to-[#1a3f7a] px-7 py-5 min-h-0">
                  {breakout.bulletPoints.map((point, idx) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 py-3 border-b border-white/10 last:border-b-0"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <p className="font-['Manrope'] text-white text-sm leading-relaxed pt-1">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
              {breakout?.buttonText && breakout?.buttonUrl && (
                <Button variant="outline" className="mr-auto" asChild>
                  <a href={breakout.buttonUrl} target="_blank" rel="noreferrer">
                    {breakout.buttonText}
                  </a>
                </Button>
              )}
            </div>

            {/* Secondary image — skipped when secondaryImage is null */}
            {showSecondaryImage && (
              <img
                src={secondaryImage!.src}
                alt={secondaryImage!.alt}
                className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
              />
            )}
          </div>
        </div>

        {/* Companies / clients section — logo image when src present, text badge otherwise */}
        {hasCompanies && (
          <div className="py-12 md:py-16 lg:py-20">
            <p className="font-['Manrope'] font-semibold text-[#0c1313] text-xl md:text-2xl text-center mb-8 tracking-tight">
              {companiesTitle}
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {companies!.map((company, idx) => (
                <div
                  key={(company.src ?? company.alt) + idx}
                  className="flex items-center"
                >
                  {company.src ? (
                    <img
                      src={company.src}
                      alt={company.alt}
                      className="h-6 w-auto md:h-8"
                    />
                  ) : (
                    <span className="font-['Manrope'] text-sm md:text-base text-[#2354a2] bg-[#eef2fb] border border-[#c5d4f5] rounded-full px-4 py-2 whitespace-nowrap">
                      {company.alt}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Middle slot — e.g. clients carousel above achievements */}
        {middleContent}

        {/* Achievements / MVV section */}
        {hasAchievements && (() => {
          const allColored = achievements!.every(a => a.color);
          return (
            <div className={allColored ? "mt-12" : "relative overflow-hidden rounded-xl bg-[#f0f4fb] p-10 md:p-16 mt-12"}>
              {(achievementsTitle || achievementsDescription) && (
                <div className={`flex flex-col gap-4 ${allColored ? "text-center mb-10 md:mb-14" : "text-center md:text-left mb-10"}`}>
                  {achievementsTitle && (
                    <h2 className="font-['Manrope'] text-3xl md:text-4xl font-bold text-[#0c1313] tracking-tight">
                      {achievementsTitle}
                    </h2>
                  )}
                  {achievementsDescription && (
                    <p className="max-w-screen-sm font-['Manrope'] text-[#5c6161] mx-auto md:mx-0">
                      {achievementsDescription}
                    </p>
                  )}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
                {achievements!.map((item, idx) =>
                  item.color ? (
                    /* Colored full-background card — original MVV style */
                    <div
                      key={item.label + idx}
                      className="rounded-3xl p-8 md:p-10 text-white shadow-lg flex flex-col"
                      style={{ backgroundColor: item.color }}
                    >
                      <h3 className="font-['Manrope'] font-bold text-2xl md:text-3xl mb-5 tracking-tight">
                        {item.label}
                      </h3>
                      <div className="font-['Manrope'] text-white/90 text-base md:text-lg leading-relaxed whitespace-pre-line">
                        {item.description}
                      </div>
                    </div>
                  ) : item.description ? (
                    /* Plain descriptive card */
                    <div key={item.label + idx} className="flex flex-col gap-3 text-left">
                      <span className="font-['Manrope'] text-2xl font-bold text-[#2354a2] tracking-tight">
                        {item.label}
                      </span>
                      <p className="font-['Manrope'] text-[#5c6161] text-sm md:text-base leading-relaxed whitespace-pre-line">
                        {item.description}
                      </p>
                    </div>
                  ) : (
                    /* Stat card */
                    <div key={item.label + idx} className="flex flex-col gap-4 text-center">
                      <p className="font-['Manrope'] text-[#5c6161]">{item.label}</p>
                      <span className="font-['Manrope'] text-4xl md:text-5xl font-semibold text-[#2354a2]">
                        {item.value}
                      </span>
                    </div>
                  )
                )}
              </div>

              {!allColored && (
                <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block" />
              )}
            </div>
          );
        })()}
      </div>
    </section>
  );
};
