import Link from "next/link";
import {FaGithub , FaLinkedinIn , FaInstagram } from "react-icons/fa";

 const Socials =[
      {icon : <FaGithub/> ,path:""},
      {icon : <FaLinkedinIn/> ,path:""},
      {icon : <FaInstagram/> ,path:""},
      
 ]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {
            Socials.map((item,index)=>{
                return(
                    <Link key={index} href={item.icon} className={iconStyles} >
                        {item.icon}
                    </Link>
                )
            })
        }
    </div>
  )
}

export default Social;
