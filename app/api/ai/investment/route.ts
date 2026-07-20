import { NextRequest, NextResponse } from "next/server";

import { parseIntent } from "@/ai/agents/intent-agent";
import { investmentAgent } from "@/ai/agents/investment-agents";
import { InvestmentInputSchema } from "@/ai/types/investment";
import { recommendationAgent } from "@/ai/agents/recommendation-agent";
import { welcomeAgent } from "@/ai/agents/welcome-agent";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        {
          success: false,
          error: "Message is required",
        },
        {
          status: 400,
        }
      );
    }
    
    const intent = await parseIntent(message);

    switch (intent.intent) {

      case "INVESTMENT_ANALYSIS": {
        const validated = InvestmentInputSchema.parse(intent);

        const report = await investmentAgent(validated);
        console.log("========== FINAL REPORT ==========");
        console.dir(report, { depth: null });
        console.log("==================================");

        return NextResponse.json({
         success: true,
         type: "investment",
         report,
          });
        }

      // case "PROPERTY_RECOMMENDATION":
      //   return NextResponse.json({
      //     success: true,
      //     report: "🚧 Property Recommendation Agent is coming soon."
      //   });

       case "PROPERTY_RECOMMENDATION": {
        const result = await recommendationAgent({
          city: intent.city,
          budget: intent.budget,
        });

        return NextResponse.json({
          success: true,
          type: "recommendation",
          recommendation: result.recommendation,
          properties: result.properties,
        });
      }

      case "MARKET_ANALYSIS":
        return NextResponse.json({
          success: true,
          report: "🚧 Market Analysis Agent is under development."
        });

      case "PROPERTY_COMPARISON":
        return NextResponse.json({
          success: true,
          report: "🚧 Property Comparison Agent is under development."
        });

      case "GENERAL_CHAT":{
        const result = await welcomeAgent();

        return NextResponse.json({
          success: true,
          type: "welcome",
          message: result.message,
          properties: result.properties,
        });
      }
      default: {
        const result = await welcomeAgent();

        return NextResponse.json({
          success: true,
          type: "welcome",
          message: result.message,
          properties: result.properties,
        });
    }
    }
//-----------------------------------------------------------------------------------------------------
    // const validatedIntent = InvestmentInputSchema.parse(intent);
    // const report = await investmentAgent(validatedIntent);
    // return NextResponse.json(
    //   {
    //     success: true,
    //     intent: validatedIntent,
    //     report,
    //   },
    //   {
    //     status: 200,
    //   }
    // );
  } catch (error) {
    console.error(error);
    const result = await welcomeAgent();
    return NextResponse.json({
        success: true,
        type: "welcome",
        message:
            "🚧 Our AI service is temporarily unavailable. Meanwhile, you can explore our featured properties below.",
        properties: result.properties,
    });
  }
}