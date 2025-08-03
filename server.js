const { parse } = require( 'dotenv' );
const { OpenAI } = require('openai');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || 'your-openai-api-key';
const client = new OpenAI({ apiKey: OPENAI_API_KEY });

function getWeatherInfo(cityName) {
    return `${cityName} has 43°C`;
}

const TOOLS_MAP = {
    getWeatherInfo
};

const messages = [
    { role: 'system', content: 'You are a helpful assistant with tool-using abilities.' }
];

async function interactiveChat(userQuery) {
    messages.push({ role: 'user', content: userQuery });

    while (true) {
        const response = await client.chat.completions.create({
            model: 'gpt-3.5-turbo',
            response_format: { type: 'json_object' },
            messages
        });

        const content = response.choices[0].message.content;
        let parsedResponse;
        try {
            parsedResponse = JSON.parse(content);
        } catch {
            break;
        }

        if (parsedResponse.step === 'think') {
            continue;
        }

        if (parsedResponse.step === 'output') {
            console.log(parsedResponse.content);
            break;
        }

        if (parsedResponse.step === 'action') {
            const toolName = parsedResponse.tool;
            const toolInput = parsedResponse.input || '';
            if (toolName in TOOLS_MAP) {
                const toolResult = TOOLS_MAP[toolName](toolInput);
                messages.push({ role: 'tool', content: toolResult });
            }
            continue;
        }
        break;
    }
}

(async () => {
    await interactiveChat('What’s the weather in Mumbai?');
})();
