
import Image from "next/image";
import bg1 from  "../../public/bg-4-1.svg"
import bg2 from  "../../public/bg-4-2.svg"
import bg3 from  "../../public/bg-4-3.svg"
// import bg4 from  "../../public/bg-4-4.svg"
import bg5 from  "../../public/bg-4-5.svg"
import bg6 from  "../../public/bg-4-6.svg"

function FifthSlide(props){
    return  (
        <>
              <div className="d-flex align-item-self-start gap-3">
                    <div className="sImge">
                    <Image
                        src={ bg1} 
                        alt="Mountains"
                        // sizes="100vw"
                        // className="sImage"
                        layout="fill"
                        objectFit="contain"
                        />
                    </div>
                    <div className="sImge">
                    <Image
                        src={ bg2 } 
                        alt="Mountains"
                        // sizes="100vw"
                      
                        layout="fill"
                    //    className="sImage"
                       objectFit="contain"
                        />
                    </div>
                    <div className="sImge">
                    <Image
                        src={ bg3 } 
                        alt="Mountains"
                        // sizes="100vw"
                      
                        layout="fill"
                    //    className="sImage"
                       objectFit="contain"
                        />
                    </div>
                  
                   
                    <div className="sImge">
                    <Image
                        src={ bg5 } 
                        alt="Mountains"
                        // sizes="100vw"
                      
                        layout="fill"
                    //    className="sImage"
                       objectFit="contain"
                        />
                    </div>
                    <div className="sImge">
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
        </>
    )
}

export default FifthSlide;