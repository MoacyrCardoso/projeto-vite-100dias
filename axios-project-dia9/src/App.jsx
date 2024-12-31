import pokemonInstance from './helper/axios-instance'
import {useState ,useEffect} from 'react'
import "./App.css"
import useAxios from './hook/use-axios'

function App(){
  const [pokemonList, loading, error] = useAxios({
    axiosInstance: pokemonInstance,
    method: 'GET',
    url: 'pokemon',
    })
  console.log(pokemonList, loading, error)

  if (loading){
    return <div>Loading...</div>
  }
  if (error){
    return <div>Error: {error}</div>
  }

  return (
    <>
       <div className="App">
            Front Beginners
          <div>{pokemonList.results.map((pokemon, index)=>
                (<div key={index}>{pokemon.name}</div>))}
          </div>
       </div>
    </>
  
  )
}

export default App