import { useState } from 'react'

import './App.css'

function FrontBeginnersApp() {
  const [count, setCount] = useState(0)

  const [valueInput, setValueInput] = useState('Jorge')

  //let count = 0

  const add = () => {
    setCount(count + 1 )
    console.log(count)
  }
  const onChangeInput = (event) => {
    setValueInput(event.target.value)

  }
  return (
    <>
      <div className='App'>
         <h1>Front Beginners</h1>
         <h3>{count}</h3>
         <button onClick={add}>adicionar</button>
         <div>
          <input onChange={onChangeInput}></input>
         </div>
         <h3>{valueInput}</h3>
        </div>
      
    </>
  )
}

export default FrontBeginnersApp
