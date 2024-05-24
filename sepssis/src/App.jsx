import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Axios from 'axios'
import './App.css'

const App=()=>{
  const[prg,setprg]=useState("")
  const[pl,setpl]=useState("")
  const[pr,setpr]=useState("")
  const[sk,setsk]=useState("")
  const[ts,setts]=useState("")
  const[m11,setm11]=useState("")
  const[bd2,setbd2]=useState("")
  const[age,setage]=useState("")
  const [isLoading, setIsLoading] = useState(false);
  const [output,setoutput]=useState("")

  const handleprg=(e)=>{
    setprg(e.target.value)
  }
  const  handlepl=(e)=> {
    setpl(e.target.value)
  }
  const handlepr=(e)=>{
    setpr(e.target.value)
  }
  const handlesk=(e)=>{
   setsk(e.target.value) 
  }
  const handlts=(e)=>{
    setts(e.target.value)
  }
  const handlem11=(e)=>{
    setm11(e.target.value)
  }
  const handlebd2=(e)=>{
    setbd2(e.target.value)
  }
  const handleage=(e)=>{
    setage(e.target.value)
  }

  const submit=(e)=>{
    e.preventDefault()
    Axios.post("http://127.0.0.1:5000/sepssis", {prg,pl,pr,sk,ts,m11,bd2,age})
            .then((response) => {
                setoutput(response.data.result);
            })
            .catch((error) => {
                console.error("Error fetching data:", error)
            })
            .finally(() => {
                setIsLoading(false)
                // setprg("")
                // setpl("")
                // setpr("")
                // setsk("")
                // setts("")
                // setm11("")
                // setbd2("")
                // setage("")
            })
  }

  return(<>
  <div className='contact__container'>
    <input type="number" placeholder='Plasma Gulcose' value={prg}  onChange={handleprg}/>
    <input type="number" placeholder='Blood Work Result-1 (mu U/ml)' value={pl} onChange={handlepl} />
    <input type="number" placeholder='Blood Pressure (mm Hg)' value={pr} onChange={handlepr} />
    <input type="number" placeholder='Blood Work Result-2 (mm)' value={sk} onChange={handlesk} />
    <input type="number" placeholder='Blood Work Result-3 (mu U/ml)' value={ts} onChange={handlts} />
    <input type="number" placeholder='Body mass index (weight in kg/(height in m)^2' value={m11}  onChange={handlem11} />
    <input type="number" placeholder='Blood Work Result-4 (mu U/ml)' value={bd2} onChange={handlebd2} />
    <input type="number" placeholder='age (years)' value={age} onChange={handleage} />
  </div>
  <button onClick={submit}>Submit</button>
  <p>{isLoading ? "Loading..." : output}</p>
    
  </>)
}

export default App
