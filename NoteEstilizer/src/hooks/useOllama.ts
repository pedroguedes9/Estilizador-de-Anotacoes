import { useEffect, useState } from "react";
import { getModels, streamChat } from "../lib/ollama";
import type { OllamaMessage } from "../types";
import { SYSTEM_PROMPT } from "../lib/prompts";
export const useOllama = () => {
    const  [output, setOutput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [model, setModel] = useState("qwen3:14b")
    const [models, setModels] = useState<string[]>([])
    useEffect(() => {
        getModels().then(data => setModels(data))
    },[])
        const sendMessage = async (input:string) => {
            setIsLoading(true)
            setOutput("")
            const messages:OllamaMessage[] = [{role: "system", content: SYSTEM_PROMPT}, {role: "user", content:input}]
            try{
                await streamChat(model, messages, (chunk) => {
                    setOutput(prev => prev + chunk)
                })
            }catch(e) {
                setError(`Não foi possível conectar ao Ollama. Erro:${e}`)
            } finally {
                setIsLoading(false)
            }
            
        }
    return{output, isLoading, error, model, models, sendMessage,setModel, setOutput}
}