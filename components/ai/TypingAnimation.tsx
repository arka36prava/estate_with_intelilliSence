"use client";

export default function TypingAnimation() {
  return (
    <div className="flex gap-1 py-2">

      <span className="h-2 w-2 rounded-full bg-primary animate-bounce" />

      <span
        className="h-2 w-2 rounded-full bg-primary animate-bounce"
        style={{ animationDelay: ".2s" }}
      />

      <span
        className="h-2 w-2 rounded-full bg-primary animate-bounce"
        style={{ animationDelay: ".4s" }}
      />

    </div>
  );
}