import s from'./App.module.css'
import ping from '../public/PASSARO.jpg'
import { useState } from 'react'

 
function App() {
  const [qualAparece, setQualaparece] = useState("");
 
  return (
    <>
     {qualAparece === 'texto' && <h1 className={s.titulo}>Paisagem</h1>}
     {qualAparece === 'imagem' && <img src={ping} alt="foto de passaros" />}
     <br />
     <button onClick={() => setQualaparece('texto')}>texto</button>
     <br />
     <button onClick={() => setQualaparece('imagem')}>imagem</button>
    </>
  )
}
 
export default App
