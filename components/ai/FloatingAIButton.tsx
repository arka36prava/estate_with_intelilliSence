"use client";

import { Bot } from "lucide-react";

import { Button } from "@/components/ui/button";

interface FloatingAIButtonProps {
  onClick: () => void;
}

export default function FloatingAIButton({
  onClick,
}: FloatingAIButtonProps) {
  return (
    <Button
      onClick={onClick}
      size="icon"
      className="
        fixed
        bottom-8
        right-8
        h-16
        w-16
        rounded-full
        shadow-2xl
        z-50
      "
    >
      <Bot className="h-7 w-7" />
    </Button>
  );
}