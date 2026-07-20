"use client";

import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

import type {
  ChatMessage,
  InvestmentReport,
} from "@/ai/types/chat";

export function useChat() {

  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [recommendedProperties, setRecommendedProperties] = useState<any[]>([]);
  useEffect(() => {
  const saved = localStorage.getItem("chat");

  if (saved) {
    setMessages(JSON.parse(saved));
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    "chat",
    JSON.stringify(messages)
  );
}, [messages]);

  const [report, setReport] =
    useState<InvestmentReport | null>(null);

  async function sendMessage(content: string) {
    if (!content.trim()) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content,
      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      // const { data } = await axios.post(
      //   "/api/ai/investment",
      //   {
      //     message: content,
      //   }
      // );

      // setReport(data.report);

      // const aiMessage: ChatMessage = {
      //   id: crypto.randomUUID(),
      //   role: "assistant",
      //   content: data.report.recommendation,
      //   createdAt: new Date(),
      // };

      // const { data } = await axios.post("/api/ai/investment", {
      //   message: content,
      // });

      // // Clear previous report first
      // setReport(null);

      // let aiContent = "";

      // // Investment Report
      // if (
      //   data.report &&
      //   typeof data.report === "object" &&
      //   "property" in data.report
      // ) {
      //   setReport(data.report);
      //   aiContent = data.report.recommendation;
      // }
      // // Simple text response
      // else if (typeof data.report === "string") {
      //   aiContent = data.report;
      // }
      // // Future API shape
      // else if (typeof data.message === "string") {
      //   aiContent = data.message;
      // }

      // const aiMessage: ChatMessage = {
      //   id: crypto.randomUUID(),
      //   role: "assistant",
      //   content: aiContent,
      //   createdAt: new Date(),
      // };

      const { data } = await axios.post("/api/ai/investment", {
      message: content,
    });
    setReport(null);
    let aiMessage: ChatMessage;

// Investment Report
if (data.type === "investment") {

  setReport(data.report);

  aiMessage = {
    id: crypto.randomUUID(),
    role: "assistant",
    content: data.report.recommendation,
    createdAt: new Date(),
  };
}
// Property Recommendation
else if (data.type === "recommendation") {
  setReport(null);
  setRecommendedProperties(data.properties);
  aiMessage = {
    id: crypto.randomUUID(),
    role: "assistant",
    content: data.recommendation,
    createdAt: new Date(),
  };
}
// General message
else if (data.type === "welcome") {

    setReport(null);

    setRecommendedProperties(data.properties);

    aiMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.message,
        createdAt: new Date(),
    };
}
else {

  aiMessage = {
    id: crypto.randomUUID(),
    role: "assistant",
    content: data.message,
    createdAt: new Date(),
  };

}

      setMessages((prev) => [...prev, aiMessage]);
    } finally {
      setLoading(false);
    }
  }

  return {
    messages,
    loading,
    report,
    recommendedProperties,
    sendMessage,
  };
}