import React,{Component} from 'react';
import FifthSlide from '../components/dashboard/fifth-slide';
import ForthSlide from '../components/dashboard/fourth-slide';
import FirstSlide from '../components/dashboard/lay';
import SecondSlide from '../components/dashboard/second-slide';
import SixSlide from '../components/dashboard/sixth-slide';
import ThirdSlide from '../components/dashboard/third-slide';
import Background1 from "../public/bg.png";
import Background2 from "../public/bg2.png";
import Side1 from "../public/side1.png";
import Side2 from "../public/side2.png";

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <>
               <FirstSlide />
               <SecondSlide />
              <ThirdSlide />
              <ForthSlide />
              <FifthSlide />
              <SixSlide />
            </>
        )
    }
}


export default Dashboard;