import translate from "translate";

translate.engine = "google"; 

export async function translateContent(text, targetLang) {
  if (!text) return "";
  try {
    const translated = await translate(text, { to: targetLang });
    return translated;
  } catch (error) {
    console.error("Translation error:", error);
    return text; 
  }
}