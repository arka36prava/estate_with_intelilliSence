"use client";

import { Plus, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const chats = [
  {
    id: 1,
    title: "Investment in Kolkata",
  },
  {
    id: 2,
    title: "Villa in Bangalore",
  },
  {
    id: 3,
    title: "Compare Apartments",
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-full w-72 flex-col border-r bg-background">

      <div className="border-b p-5">

        <Button className="w-full gap-2">

          <Plus size={18} />

          New Chat

        </Button>

      </div>

      <ScrollArea className="flex-1">

        <div className="space-y-2 p-3">

          {chats.map((chat) => (

            <button
              key={chat.id}
              className="flex w-full items-center gap-3 rounded-lg p-3 text-left transition hover:bg-muted"
            >

              <MessageSquare size={18} />

              <span className="truncate">

                {chat.title}

              </span>

            </button>

          ))}

        </div>

      </ScrollArea>

    </aside>
  );
}