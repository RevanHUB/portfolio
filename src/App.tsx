
import './App.css'



function App() {
  const imgPath1 = "./src/assets/FeedMedia/about-me.jpg";
  const imgPath2 = "./src/assets/FeedMedia/frame-nobg.png";
  return (
    <div className="App">
      <header className="flex bg-black justify-between items-center">
        <div className="title justify-center">
          <h2>David Martín</h2>
          </div>
        <div className="desktop-menu flex justify-center">
          <a className="specialButton" id="projectsShow"  > Portfolio</a>
          <a id="navShadow#1" > About Me</a>
          <a id="navShadow#2" > Skills </a>
          <a id="navShadow#3" > Contact </a>
        
        </div>
        
        <div className="mobile-menu flex justify-center">
          <div className="barsResponsive">
            <div id="barsButton" className="menu-btn"></div>
          </div>
          <div id="dropdown" className="dropingDiv">
            <a id="projectsShow">Proyects</a>
            <a href="mailto:davidasir2020@gmail.com"> Email me</a> 
            <a href="https://wa.me/+34628101155" target="_blank"> <i className="fa fa-whatsapp"></i></a> 
          </div>
          
        </div>
      
      </header>
     
      <div id="loadingBar" className="loadingBar"></div>
      <div id="modal" className="flex flex-col justify-start items-start modal">
      <div className="flex flex-col justify-start items-start modal-container">
        <h2 id="modalText">The email is copied on your clipboard!</h2>
        <button id="closeModal">Back</button>
      </div>
      </div>
      <div id="present" className="presentation-theme flex justify-center items-center">
        <div className="mt-30 myTitleWrapper flex flex-col">
          <h3>─ I'm</h3>
          <h2>David Martín </h2> 
          <h4>Frontend Developer</h4>     
          <a id="cvLinks">Download CV <i className="fa fa-download"></i></a>
        </div>

        <div className="flex justify-center align-center myImageWrapper">
          <img loading="lazy" src={imgPath1} alt="portrait-img" />
        </div>

      </div>
      <div id="aboutMe" className="flex flex-col justify-center items-center bg-yellow-500 presentation-theme">
        <div className="flex justify-center items-center portraitContainer">
          <div className="imagePortrait">
            <img loading="lazy" src={imgPath2} alt="portrait-img" />
          </div>

          <div className="textPortrait">
            <p>My name is <b>David Martín Concepción</b>. I'm a Web developer who loves coding! 💗 </p>
            <p>I'm from <b>Spain</b>,  allowed to work in EU too! ✅   </p>
            <p>Studied C.F.G.S Administration of Informatic Systems! 📚 </p>
            <p>I would like to work on remote or in-site 💭 </p>
          </div>

        </div>
       
      </div>
      <div id="skills" className="flex flex-col justify-center items-center presentation-theme">
        <h1 data-ident="h1">SKILLS</h1>
        <div className="flex flex-row flex-wrap justify-center align-center skillContainer">
        <div className="skill">
          <h2>CSS</h2>
          <p>90%</p>
          <div className="skillBar">
             <div id="barProgressCSS" className="skillProgress" data-bar="css"></div>
          </div>
        </div>
        <div className="skill">
          <h2>TailwindCSS</h2>
          <p>80%</p>
          <div className="skillBar">
             <div id="barProgressTW" className="skillProgress" data-bar="tailwindcss"></div>
          </div>
        </div>
        <div className="skill">
          <h2>JavaScript</h2>
          <p>70%</p>
          <div className="skillBar">
             <div id="barProgressJS" className="skillProgress" data-bar="js"></div>
          </div>
        </div>

        <div className="skill">
          <h2>NodeJS</h2>
          <p>50%</p>
          <div className="skillBar">
             <div id="barProgressNJS" className="skillProgress" data-bar="nodejs"></div>
          </div>
        </div>
        <div className="skill">
          <h2>React</h2>
          <p>30%</p>
          <div className="skillBar">
             <div id="barProgressRea" className="skillProgress" data-bar="react"></div>
          </div>
        </div>
        <div className="skill">
          <h2>Responsive</h2>
          <p>80%</p>
          <div className="skillBar">
             <div id="barProgressRes" className="skillProgress" data-bar="responsive"></div>
          </div>
        </div>
        </div>
      </div>
        
      <footer id="contact" className="flex flex-col justify-center align-center">
      <h3 className="contactMe"> | Contact Me </h3>
    
        <div className="socialLinks">
          <a href="mailto:davidasir2020@gmail.com"><i className="fa fa-at"></i></a>
          <a href="https://www.linkedin.com/in/david-martín-523a3b21b/" target="_blank"><i className="fa fa-linkedin"></i></a>
        </div>
        <p></p>
      </footer>
   
    </div>
  
  )
  
}
const script = document.createElement("script");
script.src = "./src/assets/js.js";
script.async = true;
script.defer = true;
document.body.appendChild(script);



export default App
