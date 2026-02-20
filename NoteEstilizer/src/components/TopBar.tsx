import {Menu, Trash2} from "lucide-react"
import type { TopBarProps } from "../types/index.ts"


export const TopBar = ({title, onToggleSidebar, onDelete}:TopBarProps) => {
    return (
        <div className="flex items-center h-12 border-b border-[#1a1a1a] px-4 gap-3">
            <button onClick={onToggleSidebar} className="bg-transparent border-none cursor-pointer text-[#444] hover:text-[#888]">
                <Menu></Menu>
            </button>
            <h1 className="text-[#c4b89a] flex-1 text-center text-sm">{title}</h1>
            <button onClick={onDelete} className="bg-transparent border-none cursor-pointer text-[#444] hover:text-[#888">
                <Trash2></Trash2>
            </button>
        </div>
    )
}