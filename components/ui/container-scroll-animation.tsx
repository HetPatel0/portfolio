"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const springConfig = {
  stiffness: 130,
  damping: 22,
  mass: 0.35,
};

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.55, 1], [68, 0, -34]),
    springConfig
  );
  const scrollScale = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [0.93, 1, 0.97]),
    springConfig
  );
  const scrollRotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.48, 1], [13, 0, -7]),
    springConfig
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center py-2 md:py-6"
    >
      <motion.div
        className="relative w-full py-8 md:py-14"
        style={{ perspective: "1200px", y: reduceMotion ? 0 : translateY }}
      >
        <Header titleComponent={titleComponent} />
        <Card
          reduceMotion={Boolean(reduceMotion)}
          scrollScale={scrollScale}
          scrollRotateX={scrollRotateX}
        >
          {children}
        </Card>
      </motion.div>
    </section>
  );
};

type HeaderProps = {
  titleComponent: string | React.ReactNode;
};

export const Header = ({ titleComponent }: HeaderProps) => {
  return (
    <div className="relative z-10 mx-auto max-w-5xl text-center">
      {titleComponent}
    </div>
  );
};

export const Card = ({
  reduceMotion,
  scrollScale,
  scrollRotateX,
  children,
}: {
  reduceMotion: boolean;
  scrollScale: ReturnType<typeof useSpring>;
  scrollRotateX: ReturnType<typeof useSpring>;
  children: React.ReactNode;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);

  const hoverRotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    springConfig
  );
  const hoverRotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-10, 10]),
    springConfig
  );

  const rotateX = useTransform(() => hoverRotateX.get() + scrollRotateX.get());
  const shine = useMotionTemplate`radial-gradient(680px circle at ${spotlightX}% ${spotlightY}%, rgba(126, 178, 255, 0.3), transparent 58%)`;
  const borderGlow = useMotionTemplate`radial-gradient(420px circle at ${spotlightX}% ${spotlightY}%, rgba(255, 255, 255, 0.75), transparent 70%)`;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) {
      return;
    }

    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - left) / width;
    const y = (event.clientY - top) / height;

    mouseX.set(x - 0.5);
    mouseY.set(y - 0.5);
    spotlightX.set(x * 100);
    spotlightY.set(y * 100);
  };

  const resetInteraction = () => {
    mouseX.set(0);
    mouseY.set(0);
    spotlightX.set(50);
    spotlightY.set(50);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={resetInteraction}
      className="group relative z-0 mx-auto mt-6 aspect-video w-full max-w-5xl rounded-[30px] border border-border/70 bg-card/80 p-2 shadow-2xl shadow-foreground/12 md:mt-8 md:p-5"
      style={{
        scale: reduceMotion ? 1 : scrollScale,
        rotateX: reduceMotion ? 0 : rotateX,
        rotateY: reduceMotion ? 0 : hoverRotateY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[30px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: reduceMotion ? undefined : shine }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[30px] opacity-0 mix-blend-screen transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: reduceMotion ? undefined : borderGlow }}
      />
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border/60 bg-background md:rounded-2xl md:p-3">
        {children}
      </div>
    </motion.div>
  );
};
