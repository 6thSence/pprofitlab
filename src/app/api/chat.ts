// Backend API endpoint для интеграции с OpenAI Agents
// Этот файл показывает, как интегрировать ваш код OpenAI Agents

import { Agent, AgentInputItem, Runner, withTrace } from "@openai/agents";

const myAgent = new Agent({
  name: "Colors and Songs Bot",
  instructions: `Ты весёлый бот, который говорит случайные цвета и цитирует тексты из песен. 
  
Твои ответы должны быть креативными и содержать:
- Случайные названия цветов (красный, синий, зелёный, фиолетовый, золотой и т.д.)
- Строчки из известных песен (русских и зарубежных)
- Эмодзи для настроения 🎨🎵🌈

Примеры твоих ответов:
- "Сегодня мой любимый цвет — изумрудный! 🎨 А ещё вспомнилась песня: 'В небе только и разговоров, что о море и о закате' 🎵"
- "Фиолетовый, розовый и золотой — моя радуга дня! 🌈"
- "🎶 Группа крови на рукаве 🎶 А цвет этой песни точно бордовый!"

Будь весёлым, креативным и непредсказуемым!`,
  model: "gpt-4.1",
  modelSettings: {
    temperature: 1,
    topP: 1,
    maxTokens: 2048,
    store: true
  }
});

type WorkflowInput = { input_as_text: string };

// Main code entrypoint
export const runWorkflow = async (workflow: WorkflowInput) => {
  return await withTrace("New workflow", async () => {
    const state = {};
    const conversationHistory: AgentInputItem[] = [
      {
        role: "user",
        content: [
          {
            type: "input_text",
            text: workflow.input_as_text
          }
        ]
      }
    ];
    const runner = new Runner({
      traceMetadata: {
        __trace_source__: "agent-builder",
        workflow_id: "wf_6914c68238ec8190b4723462da621f54075095ecefbb1d4f"
      }
    });
    const myAgentResultTemp = await runner.run(
      myAgent,
      [...conversationHistory]
    );
    conversationHistory.push(...myAgentResultTemp.newItems.map((item) => item.rawItem));

    if (!myAgentResultTemp.finalOutput) {
      throw new Error("Agent result is undefined");
    }

    const myAgentResult = {
      output_text: myAgentResultTemp.finalOutput ?? ""
    };

    return myAgentResult;
  });
};

// API Handler (пример для Next.js API Routes)
// export default async function handler(req: any, res: any) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   try {
//     const { input_as_text } = req.body;
    
//     if (!input_as_text) {
//       return res.status(400).json({ error: 'input_as_text is required' });
//     }

//     const result = await runWorkflow({ input_as_text });
    
//     return res.status(200).json(result);
//   } catch (error) {
//     console.error('Chat API error:', error);
//     return res.status(500).json({ error: 'Internal server error' });
//   }
// }

// Инструкции по интеграции:
// 
// 1. Скопируйте этот файл в ваш backend проект (например, Next.js API routes)
// 2. Установите необходимые зависимости: npm install @openai/agents
// 3. Настройте переменные окружения для OpenAI API
// 4. В компоненте ChatWidget.tsx раскомментируйте реальный API вызов (строки 85-91)
// 5. Удалите функцию generateRandomResponse и массивы colors/songLyrics из ChatWidget.tsx
