"use client";

import { Bot } from "lucide-react";

export default function AIThinking() {
  return (
    <div className="flex items-center gap-3 py-4">

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Bot className="h-5 w-5" />
      </div>

      <div className="rounded-2xl bg-muted px-4 py-3">
        <div className="flex gap-1">

          <span className="h-2 w-2 animate-bounce rounded-full bg-primary" />

          <span
            className="h-2 w-2 animate-bounce rounded-full bg-primary"
            style={{ animationDelay: "0.2s" }}
          />

          <span
            className="h-2 w-2 animate-bounce rounded-full bg-primary"
            style={{ animationDelay: "0.4s" }}
          />

        </div>
      </div>

    </div>
  );
}