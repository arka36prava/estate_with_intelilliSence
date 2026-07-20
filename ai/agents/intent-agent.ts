import { generateText } from "ai";

import { google } from "../services/gemini";

import { IntentSchema } from "../types/intent";

import { INTENT_PROMPT } from "../prompts/intent-parser";

export async function parseIntent(message: string) {

    const { text } = await generateText({

        model: google("gemini-2.5-flash"),

        system: INTENT_PROMPT,

        prompt: message

    });
    console.log("========== Gemini Raw Output ==========");
    console.log(text);
    console.log("=======================================");
    const parsed = JSON.parse(text);
    return IntentSchema.parse(parsed);

}

// import { IntentSchema } from "../types/intent";

// export async function parseIntent(message: string) {
//   return IntentSchema.parse({
//     city: "Kolkata",
//     budget: 9000000,
//     downPayment: 2000000,
//     monthlyIncome: 120000,
//     monthlyEMI: 10000,
//     annualInterestRate: 8.5,
//     loanTenureYears: 20,
//     purpose: "investment",
//   });
// }