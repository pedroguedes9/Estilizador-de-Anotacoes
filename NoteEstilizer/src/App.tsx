import { useState } from 'react'
import { useHistory } from './hooks/useHistory'
import { useOllama } from './hooks/useOllama'
import { Sidebar } from './components/Sidebar'
import { TopBar } from './components/TopBar'
import { InputPanel } from './components/InputPanel'
import { OutputPanel } from './components/OutputPanel'

function App() {
  const ollama = useOllama()
  const history = useHistory()
  const [input, setInput] = useState("")
  const [activeId, setActiveId] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const handleSend = async () => {
    await ollama.sendMessage(input)
    history.saveSession({
      title: input.split("\n")[0],
      id: Date.now(),
      date: new Date().toLocaleDateString("pt-BR"),
      input: input,
      output: ollama.output
    })
    
  }
  const handleNew = () => {
    setInput("")
    setActiveId(0)
  }
  
  const handleSelectSession = (id: number) => {
    const session = history.sessions.find(s => s.id === id)
    if(session){
      setInput(session.input)
      setActiveId(id)
    }
  }
  const handleDeleteSession = (id:number) => {
    history.deleteSession(id)
    if(activeId === id) handleNew()
  }
  return (
    <>
      <div className='flex flex-row'>
        {sidebarOpen && (
          <Sidebar 
            activeId={activeId} 
            model={ollama.model} 
            onDelete={handleDeleteSession} 
            onNew={handleNew} 
            onSelect={handleSelectSession} 
            sessions={history.sessions} 
          />
        )}
        
        <div className='flex flex-col'>
          <TopBar 
            onDelete={() => handleDeleteSession(activeId)} 
            onToggleSidebar={() => setSidebarOpen(prev => !prev)} 
            title={history.sessions.find(s => s.id === activeId)?.title ?? "Nova sessão"}  
          />
          <div className='flex-row flex'>
            <InputPanel 
              input={input}
              onChange={setInput}
              onSend={handleSend}
              isLoading={ollama.isLoading}
            />
            <OutputPanel
              output={ollama.output}
              isLoading={ollama.isLoading}
            />
          </div>
        </div>
        
      </div>
      
    </>
  )
}

export default App
