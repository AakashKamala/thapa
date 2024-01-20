import { useState } from "react";
import { useAuth } from "../store/auth";

const Contact = () => {

  const [contact,setContact]=useState({
    username:"",
    email:"",
    message:"",
  })

  const [userData,setUserData]=useState(true);

  const {user}=useAuth();

  if(userData&&user){
    setContact({
      username:user.username,
      email:user.email,
      message:"",
    });

    setUserData(false);
  }


  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;

    setContact(
      {
        ...contact,
        [name]:value,
      }
    )
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(contact);
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
                <h1 className="main-heading mb-3">Contact Us</h1>
                <br />

                <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="username">username</label>
                    <input 
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={contact.username}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="email">email</label>
                    <input 
                      type="email"
                      name="email"
                      placeholder="email"
                      id="email"
                      required
                      autoComplete="off"
                      value={contact.email}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="message">message</label>
                    <textarea 
                      type="text"
                      name="message"
                      placeholder="message"
                      id="message"
                      required
                      autoComplete="off"
                      value={contact.message}
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

export default Contact