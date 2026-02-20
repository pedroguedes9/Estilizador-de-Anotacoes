import {Menu, Trash2} from "lucide-react"
import type { TopBarProps } from "../types/index.ts"


export const TopBar = ({title, onToggleSidebar, onDelete}:TopBarProps) => {
    return (
        <div className="flex flex-row">
            <button onClick={onToggleSidebar}>
                <Menu></Menu>
            </button>
            <h1>{title}</h1>
            <button onClick={onDelete}>
                <Trash2></Trash2>
            </button>
        </div>
    )
}