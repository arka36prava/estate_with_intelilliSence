"use client";

import ChatLayout from "@/components/ai/ChatLayout";
import ChatWindow from "@/components/ai/ChatWindow";
import ChatInput from "@/components/ai/ChatInput";
import { useChat } from "@/hooks/useChat";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function AIPage() {
  const {
    messages,
    loading,
    report,
    recommendedProperties,
    sendMessage,
  } = useChat();

  return (
    <ChatLayout>
      <ChatWindow
        messages={messages}
        loading={loading}
        report={report}
        recommendedProperties={recommendedProperties}
        onSuggestionClick={sendMessage}
      />

      <ChatInput
        loading={loading}
        onSend={sendMessage}
      />
    </ChatLayout>
  );
}