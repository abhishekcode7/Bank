import "./Login.css";
import {useState} from "react";
import axios from "axios";
const Login = () => {
  const [idd, setId] = useState("");
  const [pass, setPass] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    const send = {
      idVal: idd,
      passVal: pass,
    };
    axios
      .post("/api/changeDetails", send)
      .then((res) => {
        if (res.data.code === "0") {
          alert(" Unable to change Settings ");
        } else {
          alert(" Successfully updated account details ");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="form-container">
        <form>
          <div className="mb-3">
            <label className="form-label">
              Login ID
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={submitForm}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
