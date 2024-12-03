import Image from "next/image";
import "../style/hero.css";

function Hero() {
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
                </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">I&apos;m Zainub Nazish Front-end Developer </h1>
                    <p className="des-hero">As a frontend web developer, I specialize in creating dynamic, user-centered interfaces
                        using HTML, CSS, JavaScript, and React.js. My passion lies in turning creative ideas into
                        engaging, responsive web experiences. I continually explore modern frontend frameworks like
                        Next.js to stay ahead in delivering cutting-edge solutions. With a strong attention to
                        detail, I strive to make the web more accessible and visually appealing.</p>
                    <button className="hero-btn">HIRE ME</button>
                </div>
            </div>

        </div>

    )
}
export default Hero