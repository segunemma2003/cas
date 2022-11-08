import React, {Component} from 'react';
import SecondNav from '../../components/secondNav';



class Register extends Component {
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className="sign">
               <SecondNav />
               <div className="d-flex flex-column justify-content-center align-items-center  sis">
                    <div className="d-flex flex-column sisi text-center align-items-center ">
                        <div className="sisi-text">Create an Account</div>
                        <div className="d-flex flex-row justify-content-center gap-4 titii">
                            <input className="form-control" placeholder="Email Address" type="email"/>
                            <input className="form-control" placeholder="password" type="password"/>
                        </div>
                        <div className="d-flex flex-row justify-content-center gap-4 titii">
                            <input className="form-control" placeholder="Email Address" type="email"/>
                            <input className="form-control" placeholder="password" type="password"/>
                        </div>
                        <div className="d-flex flex-row justify-content-center gap-4 titii">
                            <input className="form-control" placeholder="Email Address" type="email"/>
                            <input className="form-control" placeholder="password" type="password"/>
                        </div>
                        <div className="d-flex flex-row justify-content-center gap-4 titii">
                            <input className="form-control" placeholder="Email Address" type="email"/>
                            <input className="form-control" placeholder="password" type="password"/>
                        </div>
                        <div className="d-flex flex-row w-50 justify-content-between myforgot">
                            <div className="d-flex flex-row gap-2 align-items-left"> 
                                <input type="checkbox" />
                                Remember Me
                            </div>
                            <div className="">
                                    Forget Password?
                            </div>
                        </div>

                        {/* <div className=""> */}
                            <button className="btn btn-lg f-btn">Register Now</button>
                        {/* </div> */}
                        <div className="htm">
                       
                        Already have an account? Sign in
                        </div>
                    </div>
               </div>
            </div>
        )
    }
}

export default Register;