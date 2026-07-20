"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import InvestmentReport from "./InvestmentReport";

import { useChat } from "@/hooks/useChat";

interface AIDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AIDrawer({
  open,
  onOpenChange,
}: AIDrawerProps) {
  const {
    messages,
    loading,
    report,
    sendMessage,
  } = useChat();

  return (
    <Sheet
      open={open}
      onOpenChange={onOpenChange}
    >
      <SheetContent
        side="right"
        className="w-full sm:max-w-2xl p-0"
      >
        <div className="flex h-full flex-col">

          <SheetHeader className="border-b p-5">

            <SheetTitle>

              🤖 AI Real Estate Assistant

            </SheetTitle>

          </SheetHeader>

          <ChatWindow
            messages={messages}
            loading={loading}
            report={report}
            onSuggestionClick={sendMessage}
          />

          <div className="border-t p-4">

            <ChatInput
              loading={loading}
              onSend={sendMessage}
            />

          </div>

        </div>
      </SheetContent>
    </Sheet>
  );
}