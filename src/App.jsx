
import { useSelector } from 'react-redux'
import Counter from './component/Counter'


function App() {
  
  const counter = useSelector(state => state.count)

  return (
    <div> 
      <h1>From App component: {counter}</h1>
      <Counter/>
    </div>
  )
}

export default App
