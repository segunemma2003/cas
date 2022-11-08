import bg1 from "../../public/footer-1-1.svg"
import bg2 from  "../../public/footer-1-2.svg"
import Image from "next/image";

function SixSlide(props){
    return  (
        <>
              <div className="d-flex flex-row justify-content-center">
                    <div className="sIge">
                    <Image
                        src={ bg1 } 
                        alt="Mountains"
                        // sizes="100vw"
                        // className="sImage"
                        layout="fill"
                        objectFit="contain"
                        />
                    </div>
                    <div className="sIge">
                    <Image
                        src={ bg2 } 
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

export default SixSlide;