import { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import "./Banks.css";
import sample from "../images/sample.png";
import React from "react";
import sbi from "../images/sbi.png";
import axios from "axios";
const Banks = () => {
  const [captcha, setCap] = useState("");
  const [capImg, setImg] = useState("getting captcha");
  const [sbiStatus, setSbiStatus] = useState(0);
  const [iciStatus, setIciStatus] = useState(0);
  const [otp, setOtp] = useState(0);
  const [seconds, setSeconds] = React.useState(7);
  const [logStart, setLogStart] = useState(0);
  const [showCap, setShowCap] = useState(0);
  const [otpButton, setOtpButton] = useState(0);
  const [loop, setLoop] = useState(0);
  const styleCard = {
    maxWidth: "210px",
  };
  useEffect(() => {
    if (seconds === 0 || logStart === 0) return;
    setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);
  }, [seconds, logStart]);
  useEffect(() => {
    setTimeout(() => {
      console.log(loop);
      setLoop((loop + 1) % 10);
    }, 5000);
  }, [loop]);
  let runScript = (e) => {
    e.preventDefault();
    setLogStart(1);
    fetch("/runScript").then((res) => res.json());
  };
  let submitCap = (e) => {
    e.preventDefault();
    setOtpButton(1);
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
    setShowCap(1);
    setLogStart(0);
    setSeconds(7);
    fetch("/getImg")
      .then((res) => res.json())
      .then((data) => {
        setImg(data.image.substring(2, data.image.length - 1));
      });
  };
  return (
    <div>
      <div className="Bank-container">
        <div className="card mb-3" style={styleCard}>
          <div className="row no-gutters">
            <div className="col-md-3 text-center mx-auto d-flex align-items-center">
              <img src={sbi} className="card-img" alt="..." />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">SBI </h5>
                {sbiStatus === 1 ? (
                  <p className="card-text">Logged In</p>
                ) : (
                  <p className="card-text">Session Out</p>
                )}

                {sbiStatus === 1 ? (
                  ""
                ) : (
                  <button
                    type="button"
                    onClick={runScript}
                    className="btn btn-outline-success"
                  >
                    Login
                  </button>
                )}
                {/* <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p> */}
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3" style={styleCard}>
          <div className="row no-gutters">
            <div className="col-md-3 text-center mx-auto d-flex align-items-center">
              <img src={sample} className="card-img" alt="..." />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">ICICI </h5>
                {iciStatus === 1 ? (
                  <p className="card-text">Logged In</p>
                ) : (
                  <p className="card-text">Session Out</p>
                )}
                {iciStatus === 1 ? (
                  ""
                ) : (
                  <button
                    type="button"
                    onClick={runScript}
                    className="btn btn-outline-success"
                  >
                    Login
                  </button>
                )}
                {/* <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p> */}
              </div>
            </div>
          </div>
        </div>
        {/* <Card border="light" style={{ width: "10rem", height: "17rem" }}>
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
        </Card> */}
      </div>
      {/* <Countdown date={Date.now() + 10000} /> */}
      {logStart === 1 && seconds > 0 ? (
        <div>Please wait {seconds}s for captcha</div>
      ) : (
        ""
      )}
      {seconds === 0 ? (
        <button
          type="button"
          onClick={getCaptcha}
          className="btn btn-outline-info"
        >
          Load Captcha
        </button>
      ) : (
        ""
      )}
      <div className="text-center">
        {showCap === 1 ? (
          <Image
            className="captcha"
            src={`data:image/png;base64,${capImg}`}
            style={{ width: "10rem" }}
            rounded
          />
        ) : (
          ""
        )}
      </div>
      <form>
        {showCap === 1 ? (
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
        ) : (
          ""
        )}
        {otpButton === 1 ? (
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter OTP"
              onChange={(event) => setOtp(event.target.value)}
            />
          </div>
        ) : (
          ""
        )}
        {showCap === 1 ? (
          <button
            type="submit"
            onClick={submitCap}
            className="btn btn-primary btn-submit"
          >
            Submit Captcha
          </button>
        ) : (
          ""
        )}
        {otpButton === 1 ? (
          <button type="submit" onClick={submitOTP} className="btn btn-primary">
            Submit OTP
          </button>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};
export default Banks;
