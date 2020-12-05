import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Col } from "react-bootstrap"
import { FaMapMarkerAlt } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

function App() {
	return (
		<div className="App">
			<div className="main-container">
				<Row>
					<div className="left-side">
						<Col>
							<h2 className="talk-header">
								<strong>Lets Talk</strong>
							</h2>
							<p>To request a quote or want to meet up for coffee</p>
							<p>contact us directly or fill out the form and we will</p>
							<p>get back to you promptly</p>
							<form>
								<label for="Name">Your Name:</label>
								<br></br>
								<input type="text" className="input-field" />
								<br></br>
								<label for="Email">Your Email:</label>
								<br></br>
								<input type="text" className="input-field" />
								<br></br>
								<label for="Message">Your Message:</label>
								<br></br>
								<textarea rows="4" cols="50" className="input-field1" placeholder="Type something you want to send...">
									
								</textarea>
								<br></br>
								<button className="form-btn">Send Message</button>
							</form>
						</Col>
					</div>
					<Col>
						<div className="image-div">
							<img src="/images/mailbox.png" alt="mail"></img>
						</div>
						<div className="right-side">
							<p>
								<FaMapMarkerAlt className="svg-icons" /> 151 New Park Ave,
								Hartford, CT 06106
							</p>
							<p>United States</p>
							<p>
								<FaPhoneAlt className="svg-icons" /> +1 (203) 302-9545
							</p>
							<p>
								<FaEnvelope className="svg-icons" /> contactus@inveritasoft.com
							</p>
							<p>
								<FaFacebook className="svg-icons2" />{" "}
								<FaTwitter className="svg-icons2" />{" "}
								<FaInstagram className="svg-icons2" />{" "}
							</p>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default App