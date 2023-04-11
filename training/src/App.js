import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react"

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=in&apikey=2c29ba0b06414b688d5f88226993c08d&page=1")
      .then((res) => res.json())
      .then((response) => {
        //console.log(response)
        setData(response.articles)
      })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        {
          data.map((datas, id) =>
            <div className='border'>Title :- {datas.title}</div>
          )
        }
      </header>
    </div>
  );
}

export default App;
