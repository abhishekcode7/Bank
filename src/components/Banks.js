import { Card , Button, Image } from "react-bootstrap"
import "./Banks.css"
import sample from "../images/sample.jpg"
const Banks = () =>{
    return(
        <div>
            <div className="Bank-container">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={sample} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={sample} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={sample} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={sample} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </div>
            <br/>
            <div class="text-center">
            <Image src={sample} style={{ width: '12rem' }} rounded />
            </div>
            <form>
            <div className="form-group">
                
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Captcha"/>
            </div>
            <div className="form-group">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter OTP"/>
            </div>
            {/* <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default Banks;