import { AiOutlineLinkedin } from "react-icons/ai";
import { ImGithub } from "react-icons/im";

export default function Header({styles}){
    const linkStyle = {textDecoration: 'none', color: 'inherit'}
   
    return(
        <div style={styles} className=" flex-col justify-center align-center mt-4 mx-auto p-6 rounded-md shadow-md" >
            <h1 className=" text-lg  sm:text-2xl font-bold">Omodolapo Olabanji*</h1>

            <p className="my-3">
                Software engineer interested in web development and ML. In love with guitars, anime, indie music and creating new projects.
                
            </p>
            <div className="flex flex-row justify-between">
                <a href="https://www.linkedin.com/in/omodolapo-olabanji/" style={linkStyle}  ><AiOutlineLinkedin/></a>
                <a href="https://github.com/omodolapoolabanji" style={linkStyle}><ImGithub/></a>
                <a href="/resume.pdf" target = "_blank" rel="noopener noreferrer" style={{... linkStyle, textDecoration:'underline'}} >resume</a>
            </div>
        </div>
    )
}