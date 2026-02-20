import { useEffect, useRef, useState } from "react";
import { getModels, streamChat } from "../lib/ollama";
import type { OllamaMessage } from "../types";
import { SYSTEM_PROMPT } from "../lib/prompts";
export const useOllama = () => {
    const  [output, setOutput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [model, setModel] = useState("qwen3:14b")
    const [models, setModels] = useState<string[]>([])
    const controllerRef = useRef<AbortController | null>(null)
    useEffect(() => {
        getModels().then(data => setModels(data))
    },[])
        const sendMessage = async (input:string) => {
            setIsLoading(true)
            setOutput("")
            const messages:OllamaMessage[] = [{role: "system", content: SYSTEM_PROMPT}, {role: "user", content:input}]
            try{
                controllerRef.current = await streamChat(
                    (controller) => {controllerRef.current = controller},
                    model,
                    messages,
                    (chunk) => {
                        setOutput(prev => prev + chunk)
                })
            }catch(e) {
                setError(`Não foi possível conectar ao Ollama. Erro:${e}`)
            } finally {
                setIsLoading(false)
            }
            
        }
        const cancel = () => {
                controllerRef.current?.abort()
            }
    return{output, isLoading, error, model, models, sendMessage,setModel, setOutput, cancel}
}