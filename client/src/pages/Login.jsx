import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../store/auth";
import { toast } from "react-toastify";


const Login = () => {

  const navigate=useNavigate();

  const [user,setUser]=useState(
    {
      email:"",
      password:"",
    }
  )

  const {storeTokenInLS}=useAuth();

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;

    setUser({
      ...user,
      [name]:value,
    })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(user);

    try {
        const response=await fetch(`http://localhost:5050/api/auth/login`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify(user),
      })

      console.log("login form",response);

      const res_data=await response.json();

      if(response.ok)
      {
        console.log("res from server",res_data);
        storeTokenInLS(res_data.token);
        setUser({email:"", password:""});
        toast.success("login successful");
        navigate("../");
      }
      else{
        toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message);
        console.log("Invalid credentials");
      }

      console.log(response);
    } catch (error) {
      console.log("login ",error);
    }

  }


  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img 
                  src="/"
                  alt="let's login"
                  width="500"
                  height="500"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login</h1>
                <br />

                <form onSubmit={handleSubmit}>

                  <div>
                    <label htmlFor="email">email</label>
                    <input 
                      type="email"
                      name="email"
                      placeholder="email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input 
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>

                  <br />

                  <button type="submit" className="btn btn-submit">
                    Login
                  </button>

                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Login