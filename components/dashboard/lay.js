import Image from "next/image";
import Background1 from "../../public/bg.svg";


function FirstSlide(props){
    return (
        // style={{ background:`url(${Background1.src}) no-repeat`, filter:"drop-shadow(0 1.8rem 3.6rem rgba(0, 0, 0, 0.3))",borderRadius: "2.5rem" }}
        <div className="col-12">
            {/* <div className="my-image" style={{ backgroundImage:`url(${Background1.src})`,backgroundPosition: 'center',backgroundSize: 'contain',backgroundRepeat: 'no-repeat' }}></div> */}
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
        </div>
    )
}

export default FirstSlide;