import React, { useState} from "react";   
import './LoginSignup.css';
import sl1 from '../../Images/sl1.png';
import sl2 from '../../Images/sl2.png';
import sl3 from '../../Images/sl3.png';

const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up")

    return(
        <div className="container">
            <div className="row">
                <div className="col-md"></div>
                <div className="col-md-4 col-sm-12 signLog">
                    <div className="SignUp"><h1>{action}</h1></div>          {/* Sign Up = action */}
                    <div className="underline"></div>
                    <div className="">
                        {action==="Login"?<div></div>:
                        <div className="inputfield">                          {/* Ternary operator for hiding */}
                            <img src={sl1} width="" alt=""></img>
                            <input type="text" placeholder="User Name"></input>
                        </div>}
                        <div className="inputfield">
                            <img src={sl2} width=""alt=""/>
                            <input type="text" placeholder="Email ID"></input>
                        </div>
                        <div className="inputfield">
                            <img src={sl3} width=""alt=""/>
                            <input type="text" placeholder="Password"></input>
                        </div>
                        {action==="Sign Up"?<div></div>:<div className="forgot-pass">Lost password? <span>Click here</span></div>}
                        
                        <div className="submit-container">
                            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login </div>
                        </div>
                    </div>
                </div>
                <div className="col-md"></div>
            </div>
        </div>
    );
};

export default LoginSignup;