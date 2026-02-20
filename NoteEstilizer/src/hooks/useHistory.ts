import { useState } from "react";
import type { Session } from "../types";
export const useHistory = () => {
    const [sessions, setSessions] = useState<Session[]>(() => {
        const saved = localStorage.getItem("noteestilizer:sessions")
        return saved ? JSON.parse(saved) : []
    })
    const saveSession = (session:Session) => {
        setSessions(prev => {
            const next = [session, ...prev]
            localStorage.setItem("noteestilizer:sessions",JSON.stringify(next))
            return next
        })
    }
    const deleteSession = (id:number) => {
        setSessions(prev => {
            const next = prev.filter((session) => {
                return session.id !== id
            })
            localStorage.setItem("noteestilizer:sessions", JSON.stringify(next))
            return next
        })
    }
    const clearAll = () => {
        setSessions([])
        localStorage.removeItem("noteestilizer:sessions")
    }
    return {sessions, saveSession, deleteSession, clearAll}
}
