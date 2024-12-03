import "../style/education.css";
function Educatin(){
    return(
    <main className="edu-main">
      <div className="edu-text">
        <h1>Education</h1>
        <p>Education is the process of gaining knowledge, skills, and values to develop intellectually, socially, and emotionally. It equips individuals to contribute meaningfully to society and adapt to a dynamic world.</p>
      </div>

      {/* 1 */}

      <div className="box-con-edu">
        <div>
            <h1 className="uni-name">University of Karachi</h1>
        </div>
        <div className="computer">
            <h1 className="bachelor">Bachelor in Commerce</h1>
            <p>A Bachelor in Commerce (B.Com) is an undergraduate degree focusing on business, finance, accounting, and economics. It equips students with the skills and knowledge needed for careers in commerce, management, and entrepreneurship.</p>
        </div>
      </div>

      {/* 2 */}

      <div className="box-con-edu">
        <div>
            <h1 className="uni-name">Governor IT Initiative</h1>
        </div>
        <div className="computer">
            <h1 className="bachelor">Certified Web 3.0 and Metaverse</h1>
            <p>At the Governor IT Initiative,students explore AI,Metaverse,and Blockchain technologies in an accessible manner.This free program is an excellent opportunity for those interested in these innovative fields.</p>
        </div>
      </div>

      {/* 3 */}

      <div className="box-con-edu">
        <div>
            <h1 className="uni-name">Web Development</h1>
        </div>
        <div className="computer">
            <h1 className="bachelor">Certificate of Web Training</h1>
            <p>At Giaic, Students gain knowledge in web development, digital marketing, and freelancing from exceptional teachers.They offer valuable mentorship,equipping students with practical skills essential for career success</p>
        </div>
      </div>
    </main>

    )
}
export default Educatin