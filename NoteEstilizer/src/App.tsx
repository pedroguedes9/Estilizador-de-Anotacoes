import { getModels } from './lib/ollama'

function App() {

  return (
    <>
      <div>
        {getModels()}
      </div>
    </>
  )
}

export default App
