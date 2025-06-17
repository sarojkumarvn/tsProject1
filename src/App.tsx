
import './App.css'
import MyButton from './components/Button'

function App() {
 

  return (
    <>
    <div>
      <h1 className="text-3xl font-bold underline bg-emerald-900">
        Hello world!
      </h1>
      <MyButton text = "Click Me" isclicked = {true} />
    </div>
     
    </>
  )
}

export default App
