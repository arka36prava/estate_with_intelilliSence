"use client";

import { Button } from "@/components/ui/button";

interface Props {
  onSelect: (text: string) => void;
}

const questions = [
  "🏠 Find a 3BHK under ₹80 lakh in Kolkata",
  "💰 Calculate EMI for a ₹60 lakh home loan",
  "📈 Best investment areas in Bangalore",
  "🏢 Compare two apartments for investment",
  "📊 Which city has the highest rental yield?",
  "🌆 Show premium properties in Mumbai",
];

export default function SuggestedQuestions({
  onSelect,
}: Props) {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-3">

      {questions.map((question) => (

        <Button
          key={question}
          variant="outline"
          onClick={() => onSelect(question)}
        >
          {question}
        </Button>

      ))}

    </div>
  );
}