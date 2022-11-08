import Image from "next/image";
import React,{Component} from "react";
import bg1 from "../public/cards/cards.svg";


class CardsPage extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return (
            <div className="d-flex align-items-center">
                <div className="tImage">
                <Image
                        src={ bg1} 
                        alt="Mountains"
                        sizes="100vw"
                        // className="sImage"
                        layout="contain"
                        objectFit="container"
                        />
            </div>
             </div>
            
        )
    }
}

export default CardsPage;