import React, {useState} from 'react'
import Math from './img/math.png'
function Page2({setPage}) {
    return (
        <div className="container pb-4 bg-success col-xs-12 col-sm-12 col-md-8 col-lg-6 border mt-4 text-center">
            <img src={Math} alt=""/>
            <h1 className="mt-4 mb-4 text-white">Add both digits together to get a new number.</h1>
            <button 
            className="btn btn-primary mt-4 mb-4"
            onClick={()=>setPage(prevPage => prevPage + 1)}>
            Next <i class="far fa-hand-point-right"></i></button>
            <p className="text-primary pt-4">Ex: 14 is 1 + 4 = 5</p>
            <p className="text-primary pb-4">click next to proceed</p>
            <button onClick={()=>setPage(prevPage => prevPage = 0)} className="btn btn-danger text-white"><i class="fas fa-undo"></i></button>
        </div>
    )
}

export default Page2
