"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

import type {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";

const COLORS = ["#2563eb", "#f97316"];

export default function PaymentChart({
  loanAmount,
  totalInterest,
}: {
  loanAmount: number;
  totalInterest: number;
}) {
  const data = [
    {
      name: "Principal",
      value: loanAmount,
    },
    {
      name: "Interest",
      value: totalInterest,
    },
  ];

  return (
    <div className="rounded-3xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-lg p-6">
      <h3 className="text-xl font-bold mb-6">
        Principal vs Interest
      </h3>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              dataKey="value"
              paddingAngle={3}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
                formatter={(value) => [
                    `₹${Number(value ?? 0).toLocaleString("en-IN")}`,
                    "Amount",
                ]}
                />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}