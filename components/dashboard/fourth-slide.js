
import Image from "next/image";
import bg1 from "../../public/bg-3-1.svg";
import bg2 from "../../public/bg-3-2.svg";
import bg3 from "../../public/bg-3-3.svg";
import bg4 from "../../public/bg-3-4.svg";
import bg5 from "../../public/bg-3-5.svg";
import bg6 from "../../public/bg-3-6.svg";


function ForthSlide(props){
    return  (
        <>
              <div className="d-flex flex-column">
                <div className="mhead">
                    <div className="me-auto">
                        
                    </div>
                    <div className="ed">

                    </div>
                </div>
                <div className="d-flex flex-row gap-3">
                    <div className="sImag">
                    <Image
                        src={ bg1 } 
                        alt="Mountains"
                        // sizes="100vw"
                        // className="sImage"
                        layout="fill"
                        objectFit="contain"
                        />
                    </div>
                    <div className="sImag">
                    <Image
                        src={ bg2 } 
                        alt="Mountains"
                        // sizes="100vw"
                      
                        layout="fill"
                    //    className="sImage"
                       objectFit="contain"
                        />
                    </div>
                    <div className="sImag">
                    <Image
                        src={ bg3 } 
                        alt="Mountains"
                        // sizes="100vw"
                      
                        layout="fill"
                    //    className="sImage"
                       objectFit="contain"
                        />
                    </div>
                </div>
                <div className="d-flex flex-row gap-3">
                    <div className="sImag">
                    <Image
                        src={ bg4 } 
                        alt="Mountains"
                        // sizes="100vw"
                      
                        layout="fill"
                    //    className="sImage"
                       objectFit="contain"
                        />
                    </div>
                    <div className="sImag">
                    <Image
                        src={ bg5 } 
                        alt="Mountains"
                        // sizes="100vw"
                      
                        layout="fill"
                    //    className="sImage"
                       objectFit="contain"
                        />
                    </div>
                    <div className="sImag">
                    <Image
                        src={ bg6 } 
                        alt="Mountains"
                        // sizes="100vw"
                      
                        layout="fill"
                    //    className="sImage"
                       objectFit="contain"
                        />
                    </div>
                    </div>
                </div>
        </>
    )
}

export default ForthSlide;