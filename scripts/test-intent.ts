import "dotenv/config";

//console.log(process.env.GEMINI_API_KEY);
import { parseIntent } from "../ai/agents/intent-agent";

async function main() {

    const result = await parseIntent(

        "I have 20 lakh down payment and need a flat in Kolkata."

    );

    console.log(result);

}

main();