import type { OllamaMessage } from "../types"

export const ollamaURL = "http://localhost:11434"
export const getModels = async () => {
    const dados = await fetch(ollamaURL + "/api/tags")
    const json = await dados.json()
    return json.models
}
export const streamChat = async (onController: (c: AbortController) => void ,model: string, messages: OllamaMessage[], onChunk: (text: string) => void) => {
    const controller = new AbortController()
    onController?.(controller)
    const response = await fetch(ollamaURL + "/api/chat", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({model , messages, stream: true}),
        signal: controller.signal
    })
    const reader = response.body!.getReader()
    const decoder = new TextDecoder()
    while(true) {
        const {done, value} = await reader.read()
        if (done) break
        const decoded = decoder.decode(value, {stream: true})
        for (const line of decoded.split("\n")) {
            if(!line.trim()) continue
            const data = JSON.parse(line)
            const text = data.message?.content ?? ""
            if(text) onChunk(text)
        }
    }
    return controller
}