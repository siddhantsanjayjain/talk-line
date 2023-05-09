import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { adminLogin, login } from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const [userType, setUserType] = useState(false);
  const { email, password } = userData;

  const [typePass, setTypePass] = useState(false);

  const { auth } = useSelector((state) => state);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (auth.token) history.push("/");
  }, [auth.token, history]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userType) {
      dispatch(login(userData));
    } else {
      dispatch(adminLogin(userData));
    }
  };
  var well={
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
    
}
  return (
    <div className=''>
    <div class="container">
<div className="row">
<div className=" container col mt-5">
<h1 className="text-uppercase text-center mb-4 my-4" style={{fontFamily:'Shippori Antique B1',fontWeight:'bold' } }>
           Login Now!
                     </h1>
    
<img src="https://image.freepik.com/free-vector/login-concept-illustration_114360-739.jpg" class="rounded mx-auto d-block" alt="..."/>
</div>
<div className="col container mt-1">
    <div className="auth_page">
      <form onSubmit={handleSubmit}  style={well}>
        <h3 className="text-uppercase text-center mb-4 " style={{fontFamily:'Grand Hotel' ,fontWeight:'bold'  } }>
          Talkline
        </h3>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <div className=" form-input-wrap">
            <input style={{backgroundColor:"#BE8C63"}}
              type="email"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleChangeInput}
              value={email}
              name="email"
            />
          </div>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <div className="pass">
            <div className="form-input-wrap">
              <input style={{backgroundColor:"#BE8C63"}}
                type={typePass ? "text" : "password"}
                className="form-control"
                id="exampleInputPassword1"
                onChange={handleChangeInput}
                value={password}
                name="password"
              />
              <small onClick={() => setTypePass(!typePass)}>
                {typePass ? "Hide" : "Show"}
              </small>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-evenly  mx-0 mb-4" style={{color:"white"}}>
          <label htmlFor="User">
            
            <input style={{color:"white"}}
              id="User"
              name="gender"
              value={userType}
              defaultChecked
              // onClick={() => setUserType(false)}
            />
          </label>

          {/* <label htmlFor="Admin">
            Admin:
            <input
              type="radio"
              id="Admin"
              name="gender"
              value={userType}
              onClick={() => setUserType(true)}
            />
          </label> */}
        </div>

        <button 
          type="submit"
          className="btn btn-primary  w-100 d-flex justify-content-center"
          disabled={email && password ? false : true}
        >
          Login
        </button>
        <p className="my-2">
          Don't have an account?{" "}
          <Link to="/register" style={{ color: "#524A4E" }}>
            Register Now.
          </Link>
        </p>
      </form>
    </div>
</div>
</div>
</div>
</div>
  );
};

export default Login;
