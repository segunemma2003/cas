import Image from "next/image";
import Background1 from "../../public/bg2.svg"

function SecondSlide(props){
    return (
        <div  className="col-12" >
        <Image
            src={ Background1 } 
            alt="Mountains"
            sizes="100vw"
            width={700}
            height={475}
            style={{
                width: '100%',
                height: 'auto',
            }}
            />
              {/* <div className="my-image my-images" style={{ backgroundImage:`url(${Background1.src})`,backgroundPosition: 'top-center',backgroundSize: 'contain',backgroundRepeat: 'no-repeat' }}></div>   */}
        </div>
    )
}

export default SecondSlide;