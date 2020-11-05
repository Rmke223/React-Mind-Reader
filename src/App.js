import React, {useState} from 'react'
import Page0 from './Page0'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'

function App() {
  const [page, setPage] = useState(0)
  const [answer, setAnswer] = useState('')

  return (
    <div className="bg-primary pt-4 pb-4">
    {page === 0 && <Page0 setPage={setPage}/>}
    {page === 1 && <Page1 setPage={setPage}/>}
    {page === 2 && <Page2 setPage={setPage}/>}
    {page === 3 && <Page3 setPage={setPage}/>}
    {page === 4 && <Page4 setPage={setPage} answer={answer} setAnswer={setAnswer} />}
    {page === 5 && <Page5 setPage={setPage} answer={answer}/>} 
    </div>
  )
}

export default App


  
