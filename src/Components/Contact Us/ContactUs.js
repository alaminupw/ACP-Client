
import './ContactUs.css';

const ContactUs = () => {
    return(
        <>
            <div className="container Contuct-Us">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                    </div>
                    <div className="col-md-6 col-sm-12 form-full">
                        	<h1 className="contact-all">Contuct Us</h1>
                            <form action="" method="post">
                                <label for = "Name">Name:</label>
                                <input type="name" name="name" placeholder="Enter your Name"></input>
                                <label for="email">Email:</label>
                                <input type="email" id ="email" placeholder="Enter Your Email"></input>
                                <label for = "message">Message:</label>
                                <textarea id="message" name="message" placeholder="Enter your message" rows={10} cols={60}></textarea>
                            </form>
                            <div className="contuct-send">
                                <input className="send-message" type="submit" value="Send message"></input>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;