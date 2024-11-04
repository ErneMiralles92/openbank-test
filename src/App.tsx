import './App.scss'
import { FormProvider } from './components/FormProvider'
import CreatePassword from './CreatePassword'

function App() {
  return (
    <div className="App">
      <main className="App-content">
        <FormProvider>
          <CreatePassword />
        </FormProvider>
      </main>
    </div>
  )
}

export default App
