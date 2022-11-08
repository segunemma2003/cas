import Image from 'next/image';
import React, {Component} from 'react';
import MiniSide from '../components/myminiside';
import SecondNav from '../components/secondNav';
import bg1 from "../public/cards/visa.svg";
import bg2 from "../public/cards/mastercard.svg";
import bg3 from "../public/cards/bit.svg";
import bg4 from "../public/cards/bitcash.svg";
import bg5 from "../public/cards/eth.svg";
 

class Payment extends Component {
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className="sign">
               <SecondNav />
               <div className="d-flex flex-column justify-content-center align-items-center  sis">
                    <div className="container con-cen">
                        <div className="row g-0">
                            <div className="col-3">
                                <div className="d-flex flex-column  pay-sidebar">
                                    <MiniSide heading="Account Settings"  body={["General", "Verification"]}/>
                                    <MiniSide heading="Bonuses"  body={["Bonuses", "Active Bonuses", "Account History"]}/>
                                    <MiniSide heading="Tornaments"  body={["Available", "Active", "History"]}/>
                                    <MiniSide heading="Cash"  body={["Deposit", "Withdrawal", "Transaction History"]}/>
                                    <MiniSide heading="Gamblings"  body={["Bets History"]}/>
                                    <MiniSide heading="Market"  body={["All","Free Spins", "Instant Bonus"]}/>
                                    <MiniSide heading="Loyalty"  body={[]}/>
                                </div>
                            </div>
                            <div className="col-9 main-pane">
                                <div className="main-n-pane">
                                    <h2>Deposit</h2>
                                    <hr color="#ffffff" className="bg-light-cu"/>
                                    <div class="d-flex flex-column inner-pane">
                                        <div className="d-flex flex-column pqz">
                                            1. Choose payment option
                                            <div className="d-flex flex-row gap-2">
                                                <div className="sIe">
                                                    <Image
                                                    src={ bg1} 
                                                    alt="Mountains"
                                                    // sizes="100vw"
                                                    // className="sImage"
                                                    layout="fill"
                                                    objectFit="contain"
                                                    />
                                                </div>
                                                <div className="sIe">
                                                    <Image
                                                    src={ bg2} 
                                                    alt="Mountains"
                                                    // sizes="100vw"
                                                    // className="sImage"
                                                    layout="fill"
                                                    objectFit="contain"
                                                    />
                                                </div>
                                                <div className="sIe">
                                                    <Image
                                                    src={ bg3} 
                                                    alt="Mountains"
                                                    // sizes="100vw"
                                                    // className="sImage"
                                                    layout="fill"
                                                    objectFit="contain"
                                                    />
                                                </div>
                                                <div className="sIe">
                                                    <Image
                                                    src={ bg4} 
                                                    alt="Mountains"
                                                    // sizes="100vw"
                                                    // className="sImage"
                                                    layout="fill"
                                                    objectFit="contain"
                                                    />
                                                </div>

                                                <div className="sIe">
                                                    <Image
                                                    src={ bg5} 
                                                    alt="Mountains"
                                                    // sizes="100vw"
                                                    // className="sImage"
                                                    layout="fill"
                                                    objectFit="contain"
                                                    />
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <hr color="#ffffff" className="bg-light-cu"/>
                                        <div className="below-item">
                                                2. Payment information
                                                <div className="into-inner">
                                                    Amount *
                                                    <input className="form-control" placeholder="Enter amount" />
                                                    <small>(€1 - €100)</small>
                                                </div>
                                                <div className=" d-flex flex-row las text-nowrap">
                                                    <input type="checkbox" />
                                                    I have read and agree with the payment 
                                                </div>
                                        </div>
                                    </div>
                                    <button className="btn innerbutton">Deposit</button>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        )
    }
}

export default Payment;