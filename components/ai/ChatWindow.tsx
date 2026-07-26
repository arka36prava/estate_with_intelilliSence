"use client";

import { useEffect, useRef } from "react";

import type {
  ChatMessage as Message,
  InvestmentReport as InvestmentReportType,
} from "@/ai/types/chat";

import ChatMessage from "./ChatMessage";
import AIThinking from "./AIThinking";
import InvestmentReport from "./InvestmentReport";
import EmptyState from "./EmptyState";
import PropertyCard from "./PropertyCard";

interface ChatWindowProps {
  messages: Message[];
  loading: boolean;
  report: InvestmentReportType | null;
  recommendedProperties?: any[];
  onSuggestionClick: (question: string) => void;
}

export default function ChatWindow({
  messages,
  loading,
  report,
  recommendedProperties = [],
  onSuggestionClick,
}: ChatWindowProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   bottomRef.current?.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // }, [messages, loading, report]);

  return (
    <div className="flex-1 min-h-0 overflow-y-auto p-6">

      {messages.length === 0 && (
         <EmptyState
            onQuestionClick={onSuggestionClick}
          />
      )}

      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          message={message}
        />
      ))}

      {messages.length > 0 &&
      messages[messages.length - 1].role === "assistant" &&
      report && (
          <div className="mt-6">
              <InvestmentReport report={report} />
          </div>
      )}
      {recommendedProperties.length > 0 && (
      <div className="mt-6 space-y-4">
        {recommendedProperties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))}
      </div>
    )}

      {loading && <AIThinking />}

      <div ref={bottomRef} />
    </div>
  );
}