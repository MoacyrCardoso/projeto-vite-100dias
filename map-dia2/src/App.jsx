import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const users = [
  {
    name: 'Carlos',
    address: 'Rua X',
    age: 28,
    isAdmin: false,
  },
  {
    name: 'Maria',
    address: 'Rua XX',
    age: 31,
    isAdmin: true,
  },
  {
    name: 'Matheus',
    address: 'Rua XI',
    age: 22,
    isAdmin: false,
  }
]


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {users.map((user)=>(
          <div>{user.name},{user.age},{user.address}</div>

        ))}
      </div>
     
    </>
  )
}

export default App
