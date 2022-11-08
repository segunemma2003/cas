
import Image from "next/image";
import Side1 from "../../public/bg3.svg";
import Side2 from "../../public/bg4.svg";

function ThirdSlide(props){
    return  (
        <>
              <div className="d-flex flex-row justify-content-space-between">
                    <div className="sImage">
                    <Image
                        src={ Side1 } 
                        alt="Mountains"
                        // sizes="100vw"
                        // className="sImage"
                        layout="fill"
                        objectFit="contain"
                        />
                    </div>
                    <div className="sImage">
                    <Image
                        src={ Side2 } 
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

export default ThirdSlide;