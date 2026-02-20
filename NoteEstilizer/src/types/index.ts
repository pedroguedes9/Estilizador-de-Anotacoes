export type Session = {
    id: number,
    title: string,
    date: string,
    input: string,
    output: string,
}
export type OllamaMessage = {
    role: "system" | "user" | "assistant",
    content: string
}
export type SidebarProps = {
    sessions: Session[],
    activeId: number,
    onSelect: (id:number) => void,
    onDelete: (id: number) => void, // ← era () => void
    onNew: () => void,
    model: string
}
export type TopBarProps = {
    title: string,
    onToggleSidebar: () => void,
    onDelete: () => void,
}
export type InputPanelProps = {
    input: string,
    onChange: (string: string) => void,
    onSend: (input:string) => void,
    isLoading: boolean
}
export type OutputPanelProps = {
    output: string,
    isLoading: boolean
}