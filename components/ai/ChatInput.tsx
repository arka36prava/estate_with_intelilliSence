"use client";

import { useState } from "react";
import { SendHorizonal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
  loading: boolean;
  onSend: (message: string) => void;
}

export default function ChatInput({
  loading,
  onSend,
}: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  return (
    <div className="border-t bg-background p-4">
      <div className="flex items-end gap-3">

        <Textarea
        className="min-h-60px resize-none"
          placeholder="Ask anything about real estate..."
          value={message}
          rows={2}
          disabled={loading}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />

        <Button
          onClick={handleSend}
          disabled={loading || !message.trim()}
        >
          <SendHorizonal className="h-5 w-5" />
        </Button>

      </div>
    </div>
  );
}