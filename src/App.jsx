import './App.css'
import CcNumberInput from './CcNumberInput'

export default function App() {
  return (
    <main>
      <CcNumberInput
        placeholder="e.g 1234 1234 1234 1234"
        onCcNumberChange={(ccNumber) => console.log(ccNumber)}
      />
    </main>
  )
}
