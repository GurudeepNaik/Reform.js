import { ModeToggle } from "@/components/mode-toggle";
import React from "react";

const Page = () => {
  return (
    <div>
      <ModeToggle />
      <div className="flex gap-6 flex-wrap">
        <div className="  border-2 text-red-700 min-w-40  h-20 bg-background ">background</div>
        <div className="  border-2 text-red-700 min-w-40  h-20 bg-foreground">foreground</div>
        <div className="  border-2 text-red-700 min-w-40  h-20 bg-card">card</div>
        <div className="  border-2 text-red-700 min-w-40  h-20 bg-card-foreground">card-foreground</div>
        <div className="  border-2 text-red-700 min-w-40  h-20 bg-popover">popover</div>
        <div className="  border-2 text-red-700 min-w-40  h-20 bg-popover-foreground">popover-foreground</div>
        <div className="  border-2 text-red-700 min-w-40  h-20 bg-primary">primary</div>
        <div className="  border-2 text-red-700 min-w-40  h-20 bg-primary-foreground">primary-foreground</div>
        <div className="  border-2 text-red-700 min-w-40  h-20 bg-secondary">secondary</div>
        <div className="  border-2 text-red-700 min-w-40  h-20 bg-secondary-foreground">secondary-foreground</div>
        <div className="  border-2 text-red-700 min-w-40  h-20 bg-muted">muted</div>
        <div className="  border-2 text-red-700 min-w-40  h-20 bg-muted-foreground">muted-foreground</div>
        <div className="  border-2 text-red-700 min-w-40  h-20 bg-accent">accent</div>
        <div className="  border-2 text-red-700 min-w-40  h-20 bg-accent-foreground">accent-foreground</div>
        <div className="  border-2 text-red-700 min-w-40  h-20 bg-destructive">destructive </div>
        <div className="  border-2 text-red-700 min-w-40  h-20 bg-destructive-foreground">destructive-foreground</div>
        <div className="  border-2 text-red-700 min-w-40  h-20 bg-border">border</div>
        <div className="  border-2 text-red-700 min-w-40  h-20 bg-input">input</div>
        <div className="  border-2 text-red-700 min-w-40  h-20 bg-ring">ring</div>
        <div className="  border-2 text-red-700 min-w-40  h-20 bg-radius">radius</div>
      </div>
    </div>
  );
};

export default Page;
