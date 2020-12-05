import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from "react-bootstrap"

function App() {
	return <div className="App">
    <div  className="main-container">
  <Row>
    <Col><h2 className="talk-header">Lets Talk</h2>
    <p>To request a quote or want to meet up for coffee</p>
    <p>contact us directly or fill out the form and we will</p>
    <p>get back to you promptly</p>
    <form>
    <label for="male">Your Name:</label><br></br>
    <input type="text" className="input-field"/><br></br>
    <label for="male">Your Email:</label><br></br>
    <input type="text" className="input-field"/><br></br>
    <label for="male">Your Message:</label><br></br>
    <textarea rows="4" cols="50" className="input-field1">Type something you want to send...</textarea>
    <button className ="form-btn">Send Message</button>
    </form>
    
    </Col>
    <Col>2 of 2</Col>
  </Row>
  </div>

  </div>
}

export default App
