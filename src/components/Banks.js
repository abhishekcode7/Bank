import { useState } from "react";
import { Card, Button, Image } from "react-bootstrap";
import "./Banks.css";
import sample from "../images/sample.png";
import axios from "axios";
const Banks = () => {
  const [captcha, setCap] = useState("");
  const [capImg, setImg] = useState("getting captcha");
  const [otp, setOtp] = useState(0);

  let runScript = (e) => {
    e.preventDefault();
    fetch("/runScript").then((res) => res.json());
  };
  let submitCap = (e) => {
    e.preventDefault();
    const send = { cap: captcha };
    axios
      .post("/submitCaptcha", send)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  let submitOTP = (e) => {
    e.preventDefault();
    const send = { OTP: otp };
    axios
      .post("/submitOtp", send)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  let getCaptcha = (e) => {
    fetch("/getImg")
      .then((res) => res.json())
      .then((data) => {
        setImg(data.image.substring(2, data.image.length - 1));
      });
  };
  return (
    <div>
      <div className="Bank-container">
        <Card border="light" style={{ width: "10rem", height: "17rem" }}>
          <Card.Img className="card-img" variant="top" src={sample} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>abc</Card.Text>
            <Button onClick={runScript} variant="success">
              Login
            </Button>
          </Card.Body>
        </Card>

        <Card border="light" style={{ width: "10rem", height: "17rem" }}>
          <Card.Img className="card-img" variant="top" src={sample} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>abc</Card.Text>
            <Button variant="success">Login</Button>
          </Card.Body>
        </Card>

        <Card border="light" style={{ width: "10rem", height: "17rem" }}>
          <Card.Img className="card-img" variant="top" src={sample} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>abc</Card.Text>
            <Button variant="success">Login</Button>
          </Card.Body>
        </Card>

        <Card border="light" style={{ width: "10rem", height: "17rem" }}>
          <Card.Img className="card-img" variant="top" src={sample} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>abc</Card.Text>
            <Button variant="success">Login</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="text-center">
        <Image
          className="captcha"
          src={`data:image/png;base64,${capImg}`}
          alt="Click to get Captcha"
          style={{ width: "10rem" }}
          onClick={getCaptcha}
          rounded
        />
      </div>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control captcha-text"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={captcha}
            onChange={(event) => setCap(event.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter OTP"
            onChange={(event) => setOtp(event.target.value)}
          />
        </div>
        {/* <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
        <button
          type="submit"
          onClick={submitCap}
          className="btn btn-primary btn-submit"
        >
          Submit Captcha
        </button>
        <button type="submit" onClick={submitOTP} className="btn btn-primary">
          Submit OTP
        </button>
      </form>
    </div>
  );
};
export default Banks;
