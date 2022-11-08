import Image from "next/image";
import React,{Component} from "react";
// import bg1 from "../public/Banner/";
import bg1 from "../public/full.svg";
import Background1 from "../public/bg.svg";



class Dashboard2 extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return (
            // style={{ background:`url(${Background1.src}) no-repeat`, filter:"drop-shadow(0 1.8rem 3.6rem rgba(0, 0, 0, 0.3))",borderRadius: "2.5rem" }}
            <div className="col-12 pt-4">
            {/* <div className="my-image" style={{ backgroundImage:`url(${Background1.src})`,backgroundPosition: 'center',backgroundSize: 'contain',backgroundRepeat: 'no-repeat' }}></div> */}
            <Image
            src={ bg1 } 
            alt="Mountains"
            sizes="100vw"
            width={600}
            height={375}
            style={{
                width: '100%',
                height: 'auto',
            }}
            />
        </div>
        )
        }
}

export default Dashboard2;