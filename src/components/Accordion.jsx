import React from 'react'
import '../style.css';


export default function Accordion(props) {
  return (

    <div className="accordion-container">

        <div className="table-row">
            
            <div className="row-data">
                <p className="client">{props.type.name}</p>
                <a className="url" href="">nourfog.dk</a>
                <p className="year">2020</p>
                
            </div>

            <div className="expand">
                <p className="">⨁</p>
            </div>

        </div>

        <div className="expanded-content">expanded  </div>

    

    

</div>
  )
}
