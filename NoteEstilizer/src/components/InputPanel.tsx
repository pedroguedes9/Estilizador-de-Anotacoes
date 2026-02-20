import type { InputPanelProps } from "../types";

export const InputPanel = ({input, isLoading, onChange, onSend}:InputPanelProps) => {
    return (
        <div className="flex flex-col">
            <header>
                Anotação bruta &gt; system prompt
            </header>
            <textarea name="" id="" value={input} onChange={(e) => {onChange(e.target.value)}}>

            </textarea>
            <footer>
                <p>{input.length}</p>
                
                <button onClick={() => {onSend(input)}} disabled={isLoading || input.trim() === ""} >{isLoading ? "processando" : "formatar"}</button>
            </footer>
            
        </div>
    )
}