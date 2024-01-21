import { useAuth } from "../store/auth";

const Service = () => {
  const {services}=useAuth();
  return (
    <>
    <div>Services</div>
    {services.map((curElem,index)=>{
      const{price,description,provider,service}=curElem;
      return(
        <div key={index}>
          <h1>{service}</h1>
          <h1>{description}</h1>
          <h1>{price}</h1>
          <h1>{provider}</h1>
        </div>
      )
    })}
    </>
  )
}

export default Service;