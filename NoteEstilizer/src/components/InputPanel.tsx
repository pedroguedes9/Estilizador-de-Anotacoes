import type { InputPanelProps } from "../types";

export const InputPanel = ({input, isLoading, onChange, onSend}:InputPanelProps) => {
    return (
        <div className="flex flex-col flex-1 overflow-hidden border-r border-r-[#1a1a1a]">
            <header className="px-4 py-3 border-b border-b-[#161616] text-xs text-[#444] uppercase tracking-widest">
                Anotação bruta &gt; system prompt
            </header>
            <textarea  value={input} onChange={(e) => {onChange(e.target.value)}} className="
            flex-1 overflow-y-auto p-4 border-0 outline-0 
            resize-none bg-transparent text-[#7a8a9a] text-sm
            leading-relaxed font-mono caret-[#5a8a6a] placeholder-[#2a2a2a]
            ">

            </textarea>
            <footer className="px-4 py-3 border-t border-t-[#161616] flex flex-row justify-between items-center  ">
                <p className="text-xs text-[#333]">{input.length}</p>
                <button onClick={() => {onSend(input)}} disabled={isLoading || input.trim() === ""} 
                    className="px-4 py-2 rounded-md bg-[#3a5a3a] hover:bg-[#4a6a4a] text-[#9acd9a] text-xs cursor-pointer border-0 
                    disabled:opacity-50 disabled:cursor-not-allowed "
                    >
                        {isLoading ? "processando" : "formatar"}
                    </button>
            </footer>
            
        </div>
    )
}