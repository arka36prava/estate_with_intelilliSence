"use client";

import { Bot } from "lucide-react";
import SuggestedQuestions from "./SuggestedQuestion";

interface EmptyStateProps {
  onQuestionClick: (question: string) => void;
}

export default function EmptyState({
  onQuestionClick,
}: EmptyStateProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center px-6">

      <div className="rounded-full bg-primary p-6 text-primary-foreground">
        <Bot size={42} />
      </div>

      <h1 className="mt-6 text-3xl font-bold">
        AI Real Estate Assistant
      </h1>

      <p className="mt-2 text-center text-muted-foreground">
        Ask anything about buying, renting, investing,
        EMI, ROI, rental yield and market analysis.
      </p>

      <SuggestedQuestions
        onSelect={onQuestionClick}
      />

    </div>
  );
}