import './App.scss'
import { FormProvider } from '@/components/FormProvider'
import TranslateButton from '@/components/TranslateButton'
import CreatePassword from './CreatePassword'

function App() {
  return (
    <div className="App">
      <main className="App-content">
        <div className="flex justify-end">
          <TranslateButton />
        </div>
        <FormProvider>
          <CreatePassword />
        </FormProvider>
      </main>
    </div>
  )
}

export default App
