import Link from "next/link";
import {FaGithub , FaLinkedinIn , FaInstagram } from "react-icons/fa";

 const Socials =[
      {icon : <FaGithub/> ,path:"https://github.com/chintan-harkhani"},
      {icon : <FaLinkedinIn/> ,path:"https://www.linkedin.com/in/chintan-harkhani-69154a26b/"},
      {icon : <FaInstagram/> ,path:"https://www.instagram.com/harkhani._.chintan/"},
      
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
