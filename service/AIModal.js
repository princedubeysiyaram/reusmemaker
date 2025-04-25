// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } = require("@google/genai");



import { GoogleGenerativeAI } from "@google/generative-ai";

  
  const apiKey =import.meta.env.VITE_GOOGLE_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
   export const AIChatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
      ],
    });

  
//   const apiKey = import.meta.env.VITE_GOOGLE_AI_API_KEY;
//   const genAI = new GoogleGenerativeAI(apiKey);
  
//   const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-flash",
//   });
  
//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 40,
//     maxOutputTokens: 8192,
//     responseModalities: [
//     ],
//     responseMimeType: "text/plain",
//   };
  

//     export  const AIChatSession = model.startChat({
//       generationConfig,
//       history: [
//       ],
//     });
  

    // TODO: Following code needs to be updated for client-side apps.
    // const candidates = result.response.candidates;
    // for(let candidate_index = 0; candidate_index < candidates.length; candidate_index++) {
    //   for(let part_index = 0; part_index < candidates[candidate_index].content.parts.length; part_index++) {
    //     const part = candidates[candidate_index].content.parts[part_index];
    //     if(part.inlineData) {
    //       try {
    //         const filename = `output_${candidate_index}_${part_index}.${mime.extension(part.inlineData.mimeType)}`;
    //         fs.writeFileSync(filename, Buffer.from(part.inlineData.data, 'base64'));
    //         console.log(`Output written to: ${filename}`);
    //       } catch (err) {
    //         console.error(err);
    //       }
    //     }
    //   }
    // }
    
  
  