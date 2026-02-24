"use client";
import React from "react";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative flex h-[44rem] items-center justify-center p-2 md:h-[56rem] md:p-12">
      <div
        className="relative w-full py-8 md:py-20"
        style={{
          perspective: "1000px",
        }}
      >
        <Header titleComponent={titleComponent} />
        <Card>{children}</Card>
      </div>
    </div>
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
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="relative z-0 mx-auto mt-6 aspect-video w-full max-w-5xl rounded-[30px] border-2 border-border/80 bg-card/80 p-2 shadow-xl shadow-foreground/10 md:mt-8 md:p-5">
      <div className="h-full w-full overflow-hidden rounded-2xl border border-border/60 bg-background md:rounded-2xl md:p-3">
        {children}
      </div>
    </div>
  );
};
