
import type { SidebarProps } from "../types/index.ts"

export const Sidebar = ({sessions, activeId, onSelect, onDelete, onNew, model}:SidebarProps) => {
    return (
        <div className="flex flex-col border-r border-[#1a1a1a] h-full w-60">
            <div className="p-4 border-b border-[#1a1a1a]">
                <h1 className="text-[#5a7a5a] text-xs tracking-widest uppercase" >NoteEstilizer</h1>
                <p className="text-[#4a6a4a] text-xs mt-1">{model}</p>
            </div>
            <div className="px-3 py-2 flex justify-between items-center" >
                <p className="text-[#444] text-xs hover:text-[#888] bg-transparent border-none cursor-pointer" >Histórico</p>
                <button onClick={onNew} className="text-[#555] text-xs hover:text-[#888] bg-transparent border-none cursor-pointer">+ novo</button>
            </div>
            <div className={`flex flex-col flex-1 overflow-y-auto px-2`}>
                    {sessions.map((session) => (
                        <div 
                        key={session.id} 
                        onClick={() => {onSelect(session.id)}}
                        className={` px-3 py-2 rounded-md mx-1 cursor-pointer ${session.id === activeId ? "bg-[#1a1a1a] border-l-2 border-[#5a7a5a]" : "hover:bg-[#161616]"}`}
                        >
                            <p className="text-[#c4b89a] text-xs" >{session.title}</p>
                            <span className="text-[#333] text-xs mt-1">{session.date}</span>
                            <button className="text-[#333] hover:text-[#8a4a4a] cursor-pointer ml-auto text-xs" onClick={(e) => {e.stopPropagation(); onDelete(session.id)}}>X</button>
                        </div>
                    ))}
                </div>
        </div>
    )
}