"use client";

import { useState } from "react";

import FloatingAIButton from "./FloatingAIButton";
import AIDrawer from "./AIDrawer";

export default function AIProvider() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FloatingAIButton
        onClick={() => setOpen(true)}
      />

      <AIDrawer
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}