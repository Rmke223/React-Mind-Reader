import React, {useState} from 'react'
import Tada from './img/tada.png'
function Page5({setPage, answer}) {
    return (
        <div className="container bg-success pb-4 col-xs-12 col-sm-12 col-md-8 col-lg-6 border mt-4 text-center">
            <img src={Tada} alt=""/>
            <p className="mt-4 mb-4 text-white " style={{fontSize: 40}}><b>{answer}</b></p>
            <p className="text-primary pt-4">Your symbol is:</p>
            <p className="text-primary pb-4">{answer}</p>
            <button onClick={()=>setPage(prevPage => prevPage = 0)} className="btn btn-danger text-white">Play Again <i class="fas fa-undo"></i></button>
        </div>
    )
}

export default Page5
