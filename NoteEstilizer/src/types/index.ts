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