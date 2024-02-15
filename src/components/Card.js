import { useState } from "react";


function Card({id,image,info,price,name,removeTour}){

    const [readmore,setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}....`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    

    return (
        <div className="card">  

            <img src={image}></img>

            <div className="tour-info">

                <div className="tour-details">
                    <h2 className="tour-price">{price}</h2>
                    <h2 className="tour-name">{name}</h2>
                </div>

                <div>
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show less`:`Read more`}
                    </span>
                </div>

                <button className="btn-red" onClick={() => removeTour(id)}>    
                    Not Interested
                </button>


            </div>
            

        </div>
    );
}
 
export default  Card;