import { useAuth } from "../store/auth";

const About = () => {

  const {user}=useAuth();
  return (
    <>
      <div>About</div>
      <h1>Hi, 
        {user?`${user.username}`:"anon"}
      </h1>
    </>
  )
}

export default About