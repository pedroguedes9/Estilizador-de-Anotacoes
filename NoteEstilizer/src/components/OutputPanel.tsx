import ReactMarkdown from "react-markdown"
import remarkgfm from "remark-gfm"
import type { OutputPanelProps } from "../types"
import { Copy } from "lucide-react"

export const OutputPanel = ({isLoading, output}:OutputPanelProps) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(output)
    }
    return (
        <div className="flex-col flex flex-1 overflow-hidden">
            <header className="flex flex-row justify-between items-center px-4 py-3 border-b border-b-[#161616]  ">
                <p className="text-xs text-[#444] uppercase tracking-widest" >output - markdown</p>
                <button onClick={handleCopy} className="border-0 bg-transparent text-[#555] hover:text-[#888] text-xs cursor-pointer gap-1  ">Copia <Copy size={14}/> </button>
            </header>
            
            <div className={` flex-1 overflow-y-auto p-6 `}>
                {isLoading && <p className="text-[#333] text-xs text-center mt-8">Gerando...</p> }
                {!isLoading && !output && <p className="text-[#222] text-xs text-center mt-8 ">O texto aparecerá aqui</p>}
                {output && <ReactMarkdown  remarkPlugins={
                    [remarkgfm ]
                }>
                    {output}
                </ReactMarkdown>}
            </div>
        </div>
    )
}