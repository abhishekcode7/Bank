import { Card , Button, Image } from "react-bootstrap"
import "./Banks.css"
import sample from "../images/sample.png"
const Banks = () =>{
    return(
        <div>
            <div className="Bank-container">
                <Card border="light" style={{ width: '10rem',height:'17rem' }}>
                <Card.Img className="card-img" variant="top" src={sample} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>abc
                    </Card.Text>
                    <Button variant="success">Login</Button>
                </Card.Body>
                </Card>

                <Card border="light" style={{ width: '10rem',height:'17rem' }}>
                <Card.Img className="card-img" variant="top" src={sample} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>abc
                    </Card.Text>
                    <Button variant="success">Login</Button>
                </Card.Body>
                </Card>

                <Card border="light" style={{ width: '10rem',height:'17rem' }}>
                <Card.Img className="card-img" variant="top" src={sample} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>abc
                    </Card.Text>
                    <Button variant="success">Login</Button>
                </Card.Body>
                </Card>

                <Card border="light" style={{ width: '10rem',height:'17rem' }}>
                <Card.Img className="card-img" variant="top" src={sample} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>abc
                    </Card.Text>
                    <Button variant="success">Login</Button>
                </Card.Body>
                </Card>
            </div>
            <div class="text-center">
            <Image className="captcha" src={sample} style={{ width: '10rem' }} rounded />
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