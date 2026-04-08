'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ProjectData {
  title: string;
  description: string;
  link: string;
  color: string;
  customHeight?: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  customHeight?: string;
}

export const Card = ({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  customHeight,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0'
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col md:flex-row relative -top-[25%] ${customHeight || 'h-auto md:h-[520px]'} w-[95%] md:w-[90%] max-w-6xl rounded-[24px] md:rounded-[32px] overflow-hidden origin-top`}
      >
        {/* Gradient overlay background */}
        <div 
          className="absolute inset-0" 
          style={{
            background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`
          }}
        />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>

        {/* Glowing orb effect */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>

        {/* Image on the left - only show if url is provided */}
        {url && (
          <div
            className={`relative w-full md:w-[40%] h-[200px] md:h-full overflow-hidden flex-shrink-0 z-10`}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <img src={url} alt='image' className='absolute inset-0 w-full h-full object-cover' />
            </motion.div>
          </div>
        )}

        {/* Text content - takes full width when no image */}
        <div className={`flex-1 px-6 py-8 md:px-20 md:py-16 flex flex-col justify-center relative z-10 ${url ? '' : 'items-start'}`}>
          {/* Decorative elements */}
          <div className="hidden md:flex absolute top-12 left-20 items-center gap-2">
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
            <div className="w-20 h-[2px] bg-gradient-to-r from-white/60 to-transparent"></div>
          </div>
          
          <div className="space-y-4 md:space-y-6 max-w-3xl">
            <h2 className='text-[36px] md:text-[56px] lg:text-[66px] font-bold text-white tracking-tight leading-tight drop-shadow-sm'>
              {title}
            </h2>
            
            <div className='text-[16px] md:text-[20px] lg:text-[22px] leading-[1.7] md:leading-[1.9] text-white/95 drop-shadow-sm space-y-3 md:space-y-4'>
              {description.split('\\n').map((line, idx) => (
                line.trim() && (
                  <p key={idx} className="flex items-start gap-2 md:gap-3">
                    {line.startsWith('•') ? (
                      <>
                        <span className="text-white/70 text-xl md:text-2xl leading-none mt-0.5">•</span>
                        <span className="flex-1">{line.substring(1).trim()}</span>
                      </>
                    ) : (
                      <span className="flex-1">{line}</span>
                    )}
                  </p>
                )
              ))}
            </div>
          </div>

          {/* Bottom decorative corner */}
          <div className="hidden md:block absolute bottom-12 right-20 w-24 h-24 border-r-2 border-b-2 border-white/20 rounded-br-3xl"></div>
        </div>
      </motion.div>
    </div>
  );
};

interface ComponentRootProps {
  projects: ProjectData[];
  headerTitle?: string;
  headerSubtitle?: string;
}

const Component = forwardRef<HTMLElement, ComponentRootProps>(({ projects, headerTitle, headerSubtitle }, ref) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <main className='bg-gradient-to-br from-gray-50 to-white' ref={container}>
        {headerTitle && (
          <section className='text-gray-900 pt-20 pb-12 w-full bg-gradient-to-br from-gray-50 to-white'>
            <div className='text-center max-w-4xl mx-auto px-4'>
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
                <span className='text-gray-900'>Descubra a nossa </span>
                <span className='text-gray-400'>{headerTitle}</span>
              </h2>
              <p className='text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed'>
                Conheça os pilares que guiam a Trionica na entrega de soluções inovadoras e serviços de excelência para nossos clientes.
              </p>
            </div>
          </section>
        )}

        <section className='text-white w-full bg-gradient-to-br from-gray-50 to-white'>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                customHeight={project.customHeight}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
});

Component.displayName = 'Component';

export default Component;