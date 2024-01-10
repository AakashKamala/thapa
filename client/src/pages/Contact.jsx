import { useState } from "react";

const Contact = () => {

  const [user,setUser]=useState({
    username:"",
    email:"",
    message:"",
  })

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;

    setUser(
      {
        ...user,
        [name]:value,
      }
    )
  }

  const handleSubmit=(e)=>{
    e.preventDefault();;
    console.log(user);
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
                      value={user.username}
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
                      value={user.email}
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
                      value={user.message}
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