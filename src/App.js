import "./App.css"
import React, { useEffect, useState } from "react"
import axios from "axios"
function App() {

  const [dogs, setDogsList] = useState([])

  useEffect(() => {
    // axios.get('https://dog.ceo/api/breeds/image/random')
    // .then(response => setDogsList({name : '' , image : response.data.message}));
  }, [])

  const hendelSubmit = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        var filename = response.data.message.split("/");
        const name = filename[4].replace(/-/, " ")
        setDogsList([...dogs, { name: name, image: response.data.message }])
      });
  }

  const hendelReverseName = () => {
    var result = dogs.map((item) => {
      return {
        name: item.name.split(" ").reverse().join(" "),
        image: item.image
      }
    })
    setDogsList(result)
  }
  return (
    <div className="App">
      <div className="container">Dogs go here...

        <div className="row">
          {dogs && dogs?.map((item, index) => (
            <div className="col-md-2" key={index}>
              <h6>{item.name}</h6>
              <img src={item.image} height={'100'} width={'100'} />
            </div>
          ))}
        </div>
        <button type="button" className='btn mt-3 mx-3 btn-sm' onClick={() => hendelSubmit()}>Add Dog</button>
        <button type="button" className="btn mt-3 btn-sm" onClick={() => hendelReverseName()}>Reverse Name</button>
      </div>
    </div>
  )
}

export default App
