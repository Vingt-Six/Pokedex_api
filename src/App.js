import { useEffect, useState } from 'react';
import './App.css';
import { Oval } from 'react-loader-spinner';

function App() {

  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    async function recup() {
      const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon")
      const data = await response.json()
      setPokemons(data)
      setLoading(false)
    }
    recup()
  }, [])

  if (loading) {
    return (
      <div className='load'>
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    )
  } else {
    return (
      <div className='App'>
        <div style={{ width: "50vw" }}>
          <h1>Bonjour</h1>
        </div>
        <div className='allPokemon'>
          {pokemons.map((pokemon, index) => (
            <div key={index} className='card'>
              <div className='pokemon'>
                <img src={pokemon.sprite} alt="" />
                <h1>{pokemon.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App;
