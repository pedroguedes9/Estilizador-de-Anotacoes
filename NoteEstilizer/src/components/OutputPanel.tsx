import ReactMarkdown from "react-markdown"
import remarkgfm from "remark-gfm"
import type { OutputPanelProps } from "../types"

export const OutputPanel = ({isLoading, output}:OutputPanelProps) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(output)
    }
    return (
        <>
        <header className="flex flex-row">
            <p>output - markdown</p>
            <button onClick={handleCopy}>Copiar</button>
        </header>
        {isLoading && "Gerando..."}
        <ReactMarkdown remarkPlugins={
            [remarkgfm]
        }>
            {output} 
        </ReactMarkdown>
        </>
    )
}