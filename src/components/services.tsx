import "../style/services.css";
import { FaLaptopCode } from "react-icons/fa";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { GiSoundOn } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import { MdAddAPhoto } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";

function Services() {
  return (
    <main className="main">
      <div className="ser-container">
        {/* top div */}
        <div className="top-div-ser">
          <h2 className="title-ser">My Services</h2>
          <p className="des-ser">A Frontend Developer Service involves creating, optimizing, and maintaining the client-side (or user interface) of websites and web applications.</p> 
          
        </div>
        {/* bottom div */}
        <div className="boxes-con">
          <div className="box">
            <FaLaptopCode className="ser-icon"/>
            <h3>Web Development</h3>
            <span>Blog, E-Commerce</span>
          </div>
          <div className="box">
            <TbDeviceDesktopCode className="ser-icon"/>
            <h3>Ul/Ux Design</h3>
            <span>Mobile App,Website Design</span>
          </div>
          <div className="box">
            <GiSoundOn className="ser-icon"/>
            <h3>Sound Design</h3>
            <span>Voice Over,Beat Making</span>
          </div>
          <div className="box">
            <IoGameController className="ser-icon"/>
            <h3>Game Design</h3>
            <span>Character Design,Props,Objects</span>
          </div>
          <div className="box">
            < MdAddAPhoto className="ser-icon"/>
            <h3>Photography</h3>
            <span>Product Photography</span>
          </div>
          <div className="box">
            <RiAdvertisementFill className="ser-icon"/>
            <h3>Advertising</h3>
            <span>cloth,Product Advertisement</span>
          </div>
        </div>
      </div>

    </main>

  )
}
export default Services