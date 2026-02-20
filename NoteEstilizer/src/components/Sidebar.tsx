
import type { SidebarProps } from "../types/index.ts"

export const Sidebar = ({sessions, activeId, onSelect, onDelete, onNew, model}:SidebarProps) => {
    return (
        <>
            <div className="flex flex-col">
                <h1>NoteEstilizer</h1>
                <p>{model}</p>
            </div>
            <div>
                <p>Histórico</p>
                <button onClick={onNew}>+ novo</button>
                <div className={`flex flex-col`}>
                    {sessions.map((session) => (
                        <div 
                        key={session.id} 
                        onClick={() => {onSelect(session.id)}}
                        className={`p-2 rounded cursor-pointer ${session.id === activeId ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`}
                        >
                            <p >{session.title}</p>
                            <span>{session.date}</span>
                            <button onClick={(e) => {e.stopPropagation(); onDelete(session.id)}}>X</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}