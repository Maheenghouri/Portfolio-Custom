import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <section className="sec-one ">
        <div className="container">
          <div className="">
            <div className="user-avatar">
              <img src="/images/avatar.png" alt="Profile" className="" />
            </div>

            <h1 className="main poppins-extrabold">
              I do code <br />
              and make content{" "}
              <span className="grade-color">
                about it!
              </span>
            </h1>

            <p className="intro poppins-light">
              I am a web developer who creates websites. I focus on making them
              user-friendly, responsive, and visually appealing. I enjoy building
              and improving websites to bring ideas to life.
            </p>

            <div className="get-resume poppins-semibold">
              <a href="#contact" className="button button-1">
                Get In Touch
              </a>
              <a href="/resume.pdf" className="button button-2">
                Download CV
              </a>
            </div>
          </div>
          <br />
          <br />
          <div className="exp-with">
            <h2 className="text poppins-semibold">
              EXPERIENCE WITH
            </h2>
            <div className=" exp">
              <div className="icons">
                <img
                  src="/images/javascript.png"
                  alt="JavaScript"
                  className="icons"
                />
              </div>
              <div className="icons">
                <img
                  src="/images/nodejs.png"
                  alt="Node.js"
                  className="icons"
                />
              </div>
              <div className="icons">
                <img src="/images/html.png" alt="HTML5" className="icons" />
              </div>
              <div className="icons">
                <img src="/images/css.png" alt="CSS3" className="icons" />
              </div>
              <div className="icons">
                <img src="/images/reactjs.png" alt="React" className="icons" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="orange-gradient poppins-extrabold">PROJECTS</h2>
          <div className="feature-area">


            <div className="card">
              <a href="/html-tutorial" className="card-link">
                <div className="image-box">
                  <img src="/images/project-1.png" alt="HTML Tutorial" />
                </div>
                <div className="content">
                  <div className="content-text">
                    <p className="text-gray-light poppins-extrabold headtitle">
                      Click here to visit
                    </p>
                    <h3 className="color-white title">HTML Tutorial</h3>
                  </div>
                  <div className="arrow-container">
                    <img src="/images/arrow.png" alt="arrow" className="arrow-icon" />
                  </div>
                </div>
              </a>
            </div>


            <div className="card">
              <a href="/css-tutorial" className="card-link">
                <div className="image-container">
                  <img src="/images/project-2.png" alt="CSS Tutorial" />
                </div>
                <div className="content">
                  <div className="content-text">
                    <p className="text-gray-light poppins-extrabold headtitle">
                      Click here to visit
                    </p>
                    <h3 className="color-white title">CSS Tutorial</h3>
                  </div>
                  <div className="arrow-container">
                    <img src="/images/arrow.png" alt="arrow" className="arrow-icon" />
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>

      </section>

      <section className="experience-section">
        <div className="container">

          <h2 className="section-title poppins-extrabold">EXPERIENCE</h2>


          <div className="experience-list">


            <div className="experience-item">
              <div className="experience-content">
                <img
                  src="/images/google.logo.png"
                  alt="Google Logo"
                  className="experience-logo"
                />
                <div>
                  <h3 className="experience-role poppins-bold">Lead Software Engineer at Google</h3>
                  
                  <p className="experience-description poppins-regular ">
                    As a Senior Software Engineer at Google, I played a pivotal role
                    in developing innovative solutions for Google&rsquo;s core search
                    algorithms. Collaborating with a dynamic team of engineers, I
                    contributed to the enhancement of search accuracy and efficiency,
                    optimizing user experiences for millions of users worldwide.
                  </p>
                </div>
              </div>
              <div className="experience-date poppins-regular">Nov 2019 – Present</div>
            </div>


            <div className="experience-item ">
              <div className="experience-content">
                <img
                  src="/images/applelogo.png"
                  alt="Apple Logo"
                  className="experience-logo"
                />
                <div>
                  <h3 className="experience-role poppins-bold">Junior Software Engineer at Apple</h3>
                  <p className="experience-description poppins-regular">
                    During my tenure at Apple, I held the role of Software Architect,
                    where I played a key role in shaping the architecture of
                    mission-critical software projects. Responsible for designing
                    scalable and efficient systems, I provided technical leadership
                    to a cross-functional team.
                  </p>
                </div>
              </div>
              <div className="experience-date poppins-regular">Jan 2016 – Dec 2017</div>
            </div>


            <div className="experience-item">
              <div className="experience-content">
                <img
                  src="/images/metalogo.png"
                  alt="Meta Logo"
                  className="experience-logo"
                />
                <div>
                  <h3 className="experience-role poppins-bold">Software Engineer at Meta</h3>
                  <p className="experience-description poppins-regular">
                    At Meta, I served as a Software Engineer, focusing on the design
                    and implementation of backend systems for the social media
                    giant’s dynamic platform. Working on projects that involved
                    large-scale data processing and user engagement features, I
                    leveraged my expertise to ensure seamless functionality and
                    scalability.
                  </p>
                </div>
              </div>
              <div className="experience-date poppins-regular">Jan 2017 – Oct 2019</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />


    </>
  );
};

export default Home;
