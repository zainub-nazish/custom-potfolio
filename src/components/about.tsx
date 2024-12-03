import Image from "next/image";
import "../style/hero.css";
import "../style/about.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

function About() {
    return (
        <div className="header-container">
            <div className="header-boxes-con">
                {/* left */}
                <div>
                    <Image src={"/image/bgremove.png"}
                        width={200}
                        height={200}
                        className="header-image"
                        alt="Profile" />
                        <div className="social-icon">
                        
                        <Link href="https://github.com/zainub-nazish">  <FaGithub className="s-icon1"/></Link> 
                       
                        <Link href="https://www.linkedin.com/in/zainub-nazish-62494926a/"> <FaLinkedin className="s-icon2"/></Link>


                        </div>
                </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">About us </h1>
                    <p className="des-hero">As a passionate Frontend Developer, I specialize in crafting seamless and visually appealing user interfaces. With expertise in modern frameworks like React.js and Next.js, I focus on creating responsive, interactive, and accessible web experiences. My goal is to bridge the gap between design and functionality, delivering solutions that enhance user engagement and meet business objectives. </p>
                   
                </div>
            </div>

        </div>

    )
}
export default About