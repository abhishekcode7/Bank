import { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import "./Banks.css";
import sample from "../images/sample.png";
import React from "react";
import sbi from "../images/sbi.png";
import axios from "axios";
import { TextField, Button } from "@material-ui/core";
import Login from "./Login";
const Banks = () => {
  const [captcha, setCap] = useState("");
  const [capImg, setImg] = useState("Getting captcha ...");
  const [sbiStatus, setSbiStatus] = useState(0);
  const [iciStatus, setIciStatus] = useState(0);
  const [otp, setOtp] = useState(0);
  const [seconds, setSeconds] = React.useState(7);
  const [logStart, setLogStart] = useState(0);
  const [showCap, setShowCap] = useState(0);
  const [otpButton, setOtpButton] = useState(0);
  const [loop, setLoop] = useState(0);
  const [userSetting, setUserSetting] = useState(0);

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
      fetch("/api/status")
        .then((res) => res.json())
        .then((data) => {
          if (data.st === "1") {
            setSbiStatus(1);
            setOtpButton(0);
            setShowCap(0);
            setLogStart(0);
          } else setSbiStatus(0);
        });
      fetch("/api/checkCaptcha")
        .then((res) => res.json())
        .then((data) => {
          if (data.image !== "0") {
            setImg(data.image.substring(2, data.image.length - 1));
            setShowCap(1);
          }
        });
      setLoop((loop + 1) % 10);
    }, 1000);
  }, [loop]);
  let runScript = (e) => {
    e.preventDefault();
    setLogStart(1);
    setUserSetting(0);
    fetch("/api/runScript").then((res) => res.json());
  };
  let submitCap = (e) => {
    e.preventDefault();
    const send = { cap: captcha };
    axios
      .post("/api/submitCaptcha", send)
      .then((res) => {
        if (res.data.code === "0") {
          setLogStart(0);
          setOtpButton(0);
          setShowCap(0);
          alert(" You entered wrong Captcha , Please login again ");
        } else setOtpButton(1);
      })
      .catch((err) => console.log(err));
  };
  let submitOTP = (e) => {
    e.preventDefault();
    const send = { OTP: otp };
    axios
      .post("/api/submitOtp", send)
      .then((res) => {
        if (res.data.code === "0") {
          setLogStart(0);
          setOtpButton(0);
          setShowCap(0);
          alert(" You entered wrong OTP , Please login again ");
        } else {
          axios.post("/api/loop3", send).then(res);
          // .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };
  // let getCaptcha = (e) => {
  //   setShowCap(1);
  //   setLogStart(0);
  //   setSeconds(7);
  //   fetch("/api/getImg")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setImg(data.image.substring(2, data.image.length - 1));
  //     });
  // };
  return (
    <div>
      <div className="Bank-container">
        <div className="card mb-4" style={styleCard}>
          <div className="row no-gutters">
            <div className="col-md-2 text-center mx-auto d-flex align-items-center">
              <img src={sbi} className="card-img" alt="..." />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">SBI </h5>
                {sbiStatus === 1 ? (
                  <p className="card-text" style={{ color: "green" }}>
                    Logged In
                  </p>
                ) : (
                  <p className="card-text" style={{ color: "red" }}>
                    Session Out
                  </p>
                )}
                <Button
                  color="primary"
                  size="small"
                  title="Change bank login details"
                  onClick={() => setUserSetting(1)}
                >
                  Edit Details
                </Button>
                {sbiStatus === 1 || showCap === 1 || otpButton === 1 ? (
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

        <div className="card mb-4" style={styleCard}>
          <div className="row no-gutters">
            <div className="col-md-2 text-center mx-auto d-flex align-items-center">
              <img src={sample} className="card-img" alt="..." />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">ICICI </h5>
                {iciStatus === 1 ? (
                  <p className="card-text" style={{ color: "green" }}>
                    Logged In
                  </p>
                ) : (
                  <p className="card-text" style={{ color: "red" }}>
                    Session Out
                  </p>
                )}
                <Button color="primary" size="small">
                  Edit Details
                </Button>
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
      </div>
      {/* {logStart === 1 && seconds > 0 ? <div>Getting Captcha ...</div> : ""} */}
      {/* {seconds === 0 ? (
        <button
          type="button"
          onClick={getCaptcha}
          className="btn btn-outline-info"
        >
          Load Captcha
        </button>
      ) : (
        ""
      )} */}
      {/* <div className="text-center">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small"/>
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </div> */}
      {userSetting === 1 ? <Login /> : ""}
      <div className="text-center">
        {logStart === 1 && showCap === 0 && otpButton === 0 ? (
          <div>Getting captcha</div>
        ) : (
          ""
        )}
        {showCap === 1 && otpButton === 0 ? (
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
        {showCap === 1 && otpButton === 0 ? (
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
        {showCap === 1 && otpButton === 0 ? (
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
