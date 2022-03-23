if (window.matchMedia('(prefers-color-scheme: dark)').matches == true) {
    window.addEventListener('scroll', function() {
        const about = document.getElementById("aboutMe");
        const skills = document.getElementById("skills");
        const contact = document.getElementById("contact");
        const navSh1 = document.getElementById("navShadow#1");
        const navSh2 = document.getElementById("navShadow#2");
        const navSh3 = document.getElementById("navShadow#3");
        //const loadingBar = document.getElementById("loadingBar");
        
        if (about.getBoundingClientRect().y >= "0" && about.getBoundingClientRect().y <= "600") {
            //console.log("reached about"); 
            navSh1.style.borderBottomColor="#F53B57";
           // loadingBar.style.width="33%";
        } else {
            navSh1.style.borderBottomColor="transparent";
        }
        if (skills.getBoundingClientRect().y >= "0" && skills.getBoundingClientRect().y <= "600") {
            //console.log("reached about"); 
            navSh2.style.borderBottomColor="#F53B57";
            //loadingBar.style.width="66%";
        } else {
            navSh2.style.borderBottomColor="transparent";
        }
        if (contact.getBoundingClientRect().y >= "860" && contact.getBoundingClientRect().y <= "1000") {
            //console.log("reached contact"); 
            navSh3.style.borderBottomColor="#F53B57";
            //loadingBar.style.width="100%";
        } else {
            navSh3.style.borderBottomColor="transparent";
        }
        if (window.scrollY == 0) {
           // loadingBar.style.backgroundColor="transparent";
        } else {
           // loadingBar.style.backgroundColor="#FBD1A2";
        }
    })
}

if (window.matchMedia('(prefers-color-scheme: light)').matches == true) {
    window.addEventListener('scroll', function() {
        const about = document.getElementById("aboutMe");
        const skills = document.getElementById("skills");
        const contact = document.getElementById("contact");
        const navSh1 = document.getElementById("navShadow#1");
        const navSh2 = document.getElementById("navShadow#2");
        const navSh3 = document.getElementById("navShadow#3");
        
        if (about.getBoundingClientRect().y >= "0" && about.getBoundingClientRect().y <= "600") {
            navSh1.style.borderBottomColor="#93C5FD";
        } else {
            navSh1.style.borderBottomColor="transparent";
        }
    
        if (skills.getBoundingClientRect().y >= "0" && skills.getBoundingClientRect().y <= "600") {
            navSh2.style.borderBottomColor="#93C5FD";
        } else {
            navSh2.style.borderBottomColor="transparent";
        }
        if (contact.getBoundingClientRect().y >= "860" && contact.getBoundingClientRect().y <= "1000") {
            navSh3.style.borderBottomColor="#93C5FD";
        } else {
            navSh3.style.borderBottomColor="transparent";
        }    
    })
}
let clickState = false;
const responsiveButton = document.getElementById("barsButton");
responsiveButton.addEventListener("click", function() {
    if(clickState == false) {
        responsiveButton.classList.add("open");
        const dropdown = document.getElementById("dropdown");
        dropdown.style.display="flex";
        clickState = true;
    } else {
        responsiveButton.classList.remove('open');
        const dropdown = document.getElementById("dropdown")
        dropdown.style.height="0vh";
        dropdown.style.display="none";
        clickState = false;
    }
   
});

const scrollTopB = document.getElementById("backToTop");
scrollTopB.addEventListener("click", function() {
    window.scrollTo(0,0);
})

const closeModal = document.getElementById("closeModal");
closeModal.addEventListener("click", function() {
    const modal = document.getElementById("modal");
    modal.style.display="none";
    scrollTopB.style.display="flex";
})

function createModal(textAdded) {
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modalText");
    modalText.innerHTML=""+ textAdded;
    modal.style.display="flex";
}

/* filling bars */ 

var cssToZero = 0;
var twToZero = 0;
var jsToZero = 0;
var njsToZero = 0;
var reaToZero = 0;
var resToZero = 0;

var fill = setInterval(function() {
    function fillBars(ident, Value, totalwidth) {
        var progressBar = document.getElementById(""+ident);
        if (Value >= totalwidth) {
            clearInterval();
        } else {
            Value++;
            progressBar.style.width = Value + "%";
        }
    }
    fillBars("barProgressCSS", cssToZero++, 60);
    fillBars("barProgressTW", twToZero++, 50);
    fillBars("barProgressJS", jsToZero++, 50);
    fillBars("barProgressNJS", njsToZero++, 40);
    fillBars("barProgressRea", reaToZero++, 30);
    fillBars("barProgressRes", resToZero++, 50);
}, 2)
/* My MENU */ 

const projectS = document.getElementById("projectsShow");
projectS.addEventListener("click", function() {
    createModal(
        "<div class='projectContainer'><a href='https://david-martin-webdev.com/workout/index.php' target='_blank'> <div class='project' data-div='workout'  > <h2> Workout </h2> <p data-project-text='workout'>Workout tracker using JS, PHP, MySQL with Android Compatibility</p> <ul><li> JS </li> <li> PHP </li> <li> Android </li> <li> Responsive </li></ul> <img loading='lazy' data-project='workout' src='' alt='' /></div></a>  <a href='https://david-martin-webdev.com/rpg/' target='_blank' > <div class='project' data-div='rpg'>  <h2> RPG Application </h2> <p data-project-text='workout'>A chatroom application for playing Roleplay Games for Android. </p> <ul> <li> JS </li> <li> PHP </li> <li> Android </li> <li> Responsive </li> </ul><img loading='lazy' data-project='rpg' src='' alt='' /> </div></a> <a href='https://david-martin-webdev.com/api/magazine.php' target='_blank'> <div class='project' data-div='magazine'>  <h2> Magazine Design </h2> <p data-project-text='workout'> A Simple Website to scroll over the pages looking like a Magazine! </p> <ul><li> HTML </li> <li> CSS </li> <li> JS </li> <li> Responsive </li></ul> <img loading='lazy' data-project='magazine' src='' alt='' /> </div></a> <a href='https://david-martin-webdev.com/api/chatbot.php' target='_blank'> <div class='project' data-div='chat' >  <h2> Chat Bot </h2> <p data-project-text='workout'> A simple Bot Application who responds to certains commands</p> <ul> <li> JS </li> <li> PHP </li> <li> Responsive </li></ul> <img loading='lazy' data-project='chat' src='' alt='' /></div></a> <a href='https://david-martin-webdev.com/api/cocktails.php' target='_blank'> <div class='project' data-div='cocktails'>  <h2> Cocktails Finder </h2> <p data-project-text='workout'> A cocktail finder using the Cocktail's Public API </p> <ul> <li> JSON </li> <li> PHP </li> <li> Responsive </li></ul><img loading='lazy' data-project='cocktails' src='' alt='' /> </div></a> <a href='https://david-martin-webdev.com/api/weather.php' target='_blank'> <div class='project' data-div='weather'>  <h2> Weather Tracker </h2> <p data-project-text='workout'>Weather tracker using PHP and Weather API </p> <ul><li> HTML </li> <li> CSS </li> <li> JSON </li> </ul> <img loading='lazy' data-project='weather' src='' alt='' /> </div></a> <a href='https://david-martin-webdev.com/api/bored.php' target='_blank'> <div class='project' data-div='bored'>  <h2> Bored API </h2> <p data-project-text='workout'> Find a new activity to do with Bored.API!. </p> <ul><li> HTML </li> <li> CSS </li> <li> JSON </li></ul> <img loading='lazy' data-project='bored' src='' alt='' /> </div></a> </div>"
    );

})
const aboutMe = document.getElementById("navShadow#1");
aboutMe.addEventListener("click", function() {
   createModal('<div class="introductionCard"> <img src="src/assets/FeedMedia/about-me.jpg" alt=""><div class="introductionText"> <h2> About </h2> <span> A Junior Full Stack Developer who love coding, sport and to be active. 💗  </span><span> In this moment, Im forming myself in Full Stack Formation with Full Stack Open improving my skills with JavaScript and JavaScript Frameworks like React. 🎓</span> <span> Find me 🚀 </span><div class="socialContainer"/> <a class="socialLinks" href="https://www.linkedin.com/in/david-martín-523a3b21b/" target="_blank"><i class="fa fa-linkedin"></i></a> <a class="socialLinks" href="" target="_blank"><i class="fa fa-instagram"></i></a>  <a class="socialLinks" href="https://david-martin-webdev.com/cv/" target="_blank"><i class="fa fa-mobile"></i></a></div></div></div>');
})
const cvModal = document.getElementById("cvLinks");
cvModal.addEventListener("click", function() {
    createModal(
        "<div class='optionContainer'><div class='optionCard'><img src='src/assets/FeedMedia/fullstack-main.jpg' alt=''/><h2> ¿Te interesa mi perfil profesional y aptitudes? </h2> <a href='src/assets/FeedMedia/ES_CV.pdf' download> Descargar CV en Español <i class='fa fa-download'></i></a> </div> <div class='optionCard'> <img src='src/assets/FeedMedia/coding-main.jpg' alt=''/><h2> Are you interested in my skills and professional profile? </h2><a href='src/assets/FeedMedia/EN_CV.pdf' download> Download English CV <i class='fa fa-download'></i></a></div> </div>"
    );
})

const skillsCont = document.getElementById("navShadow#2");
skillsCont.addEventListener("click", function() {
    createModal("<div class='hoverContent'> <div class='hoverCard' data-hover='html'>  <img loading='lazy' src='' alt=''><div class='hoverCardText'> <h2> HTML5 <div class='barsProgressSkill'> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> </div> </h2><p> Uses of tags and security formularies with patterns.  </p> <p> Properties in HTML tags to improve performance of the web element. </p> </div></div>  <div class='hoverCard' data-hover='css'> <img loading='lazy' src='' alt=''><div class='hoverCardText'><h2>CSS <div class='barsProgressSkill'> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> </div> </h2><p> Layout creation with Grid and Flex positioning. </p> <p> Responsive designs. </p> <p> Animations and transform, data category uses and use of nth-classes. </p></div></div> <div class='hoverCard' data-hover='js'> <img loading='lazy' src='' alt=''><div class='hoverCardText'> <h2>JavaScript <div class='barsProgressSkill'> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> </div> </h2> <p>Changes of elements of a website on clientside.</p><p> HTTP Requests, JSON elements. </p></div></div>  <div class='hoverCard' data-hover='nodejs'> <img loading='lazy' src='' alt=''><div class='hoverCardText'> <h2>Node.JS <div class='barsProgressSkill'> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> </div> </h2> <p>Creation of automatice task scripts and bots.</p> <p>Node.Js Package Management.</p> <p>Elements with Socket.io </p> </div></div>  <div class='hoverCard' data-hover='tw'> <img loading='lazy' src='' alt=''><div class='hoverCardText'> <h2> Tailwind CSS <div class='barsProgressSkill'> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> </div>  </h2> <p> Layout design with Tailwind </p> <p> Pregenerated designs </p> </div></div>  <div class='hoverCard' data-hover='py'> <img loading='lazy' src='' alt=''><div class='hoverCardText'> <h2> Tkinter on Python <div class='barsProgressSkill'> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> </div> </h2><p> Creation of simple applications to desktop enviroment. </p> </div></div>    <div class='hoverCard' data-hover='php'> <img loading='lazy' src='' alt=''><div class='hoverCardText'><h2>  PHP <div class='barsProgressSkill'> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> </div>  </h2> <p> Use in conjunction of MySQLi and MariaDB </p> <p> Creation of db and extraction of data. </p> <p> Creation of scripts and functions of PHP. </p></div></div><div class='hoverCard' data-hover='electron'> <img loading='lazy' src='' alt=''><div class='hoverCardText'> <h2>  Electron <div class='barsProgressSkill'> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> </div>  </h2><p> Creation of applications based in JavaScript/NodeJS and HTML/CSS for create desktop applications with Frontend language. </p></div> </div>");
})

const contactCont = document.getElementById("navShadow#3");
contactCont.addEventListener("click", function() {
    createModal(
        "<div class='contactContainer'><div class='contactCard'><img src='src/assets/FeedMedia/email-main.jpg' alt=''/><h2> Do you want to contact me via mail? </h2> <a href='mailto:davidasir2020@gmail.com'> <i class='fa fa-envelope'></i> Whenever you want 👏  </a> </div> <div class='contactCard'> <img src='src/assets/FeedMedia/contact-logo.png' alt=''/><h2> Do you want to Whatsapp me? </h2><a href='https://wa.me/+34628101155' target='_blank' ><i class='fa fa-whatsapp'></i> Only from 09:00AM to 14:00PM </a></div> </div>"
        );
})
/* My responsive MENU */ 



const projectSR = document.getElementById("projectsShowR");
projectSR.addEventListener("click", function() {
    createModal(
        "<div class='projectContainer'><a href='https://david-martin-webdev.com/workout/index.php' target='_blank'> <div class='project' data-div='workout'  > <h2> Workout </h2> <p data-project-text='workout'>Workout tracker using JS, PHP, MySQL with Android Compatibility</p> <ul><li> JS </li> <li> PHP </li> <li> Android </li> <li> Responsive </li></ul> <img loading='lazy' data-project='workout' src='' alt='' /></div></a>  <a href='https://david-martin-webdev.com/rpg/' target='_blank' > <div class='project' data-div='rpg'>  <h2> RPG Application </h2> <p data-project-text='workout'>A chatroom application for playing Roleplay Games for Android. </p> <ul> <li> JS </li> <li> PHP </li> <li> Android </li> <li> Responsive </li> </ul><img loading='lazy' data-project='rpg' src='' alt='' /> </div></a> <a href='https://david-martin-webdev.com/api/magazine.php' target='_blank'> <div class='project' data-div='magazine'>  <h2> Magazine Design </h2> <p data-project-text='workout'> A Simple Website to scroll over the pages looking like a Magazine! </p> <ul><li> HTML </li> <li> CSS </li> <li> JS </li> <li> Responsive </li></ul> <img loading='lazy' data-project='magazine' src='' alt='' /> </div></a> <a href='https://david-martin-webdev.com/api/chatbot.php' target='_blank'> <div class='project' data-div='chat' >  <h2> Chat Bot </h2> <p data-project-text='workout'> A simple Bot Application who responds to certains commands</p> <ul> <li> JS </li> <li> PHP </li> <li> Responsive </li></ul> <img loading='lazy' data-project='chat' src='' alt='' /></div></a> <a href='https://david-martin-webdev.com/api/cocktails.php' target='_blank'> <div class='project' data-div='cocktails'>  <h2> Cocktails Finder </h2> <p data-project-text='workout'> A cocktail finder using the Cocktail's Public API </p> <ul> <li> JSON </li> <li> PHP </li> <li> Responsive </li></ul><img loading='lazy' data-project='cocktails' src='' alt='' /> </div></a> <a href='https://david-martin-webdev.com/api/weather.php' target='_blank'> <div class='project' data-div='weather'>  <h2> Weather Tracker </h2> <p data-project-text='workout'>Weather tracker using PHP and Weather API </p> <ul><li> HTML </li> <li> CSS </li> <li> JSON </li> </ul> <img loading='lazy' data-project='weather' src='' alt='' /> </div></a> <a href='https://david-martin-webdev.com/api/bored.php' target='_blank'> <div class='project' data-div='bored'>  <h2> Bored API </h2> <p data-project-text='workout'> Find a new activity to do with Bored.API!. </p> <ul><li> HTML </li> <li> CSS </li> <li> JSON </li></ul> <img loading='lazy' data-project='bored' src='' alt='' /> </div></a> </div>"
    );
    scrollTopB.style.display="none";

})
const aboutMeR = document.getElementById("navShadow#1R");
aboutMeR.addEventListener("click", function() {
   createModal('<div class="introductionCard"> <img src="src/assets/FeedMedia/about-me.jpg" alt=""><div class="introductionText"> <h2> About </h2> <span> A Junior Full Stack Developer who love coding, sport and to be active. 💗  </span><span> In this moment, Im forming myself in Full Stack Formation with Full Stack Open improving my skills with JavaScript and JavaScript Frameworks like React. 🎓</span> <span> Find me 🚀 </span><div class="socialContainer"/> <a class="socialLinks" href="https://www.linkedin.com/in/david-martín-523a3b21b/" target="_blank"><i class="fa fa-linkedin"></i></a> <a class="socialLinks" href="" target="_blank"><i class="fa fa-instagram"></i></a>  <a class="socialLinks" href="https://david-martin-webdev.com/cv/" target="_blank"><i class="fa fa-mobile"></i></a></div></div></div>');
   scrollTopB.style.display="none";
})
const cvModalR = document.getElementById("cvLinks");
cvModalR.addEventListener("click", function() {
    createModal(
        "<div class='optionContainer'><div class='optionCard'><img src='src/assets/FeedMedia/fullstack-main.jpg' alt=''/><h2> ¿Te interesa mi perfil profesional y aptitudes? </h2> <a href='src/assets/FeedMedia/ES_CV.pdf' download> Descargar CV en Español <i class='fa fa-download'></i></a> </div> <div class='optionCard'> <img src='src/assets/FeedMedia/coding-main.jpg' alt=''/><h2> Are you interested in my skills and professional profile? </h2><a href='src/assets/FeedMedia/EN_CV.pdf' download> Download English CV <i class='fa fa-download'></i></a></div> </div>"
    );
    scrollTopB.style.display="none";
})

const skillsContR = document.getElementById("navShadow#2R");
skillsContR.addEventListener("click", function() {
    createModal("<div class='hoverContent'> <div class='hoverCard' data-hover='html'>  <img loading='lazy' src='' alt=''><div class='hoverCardText'> <h2> HTML5 <div class='barsProgressSkill'> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> </div> </h2><p> Uses of tags and security formularies with patterns.  </p> <p> Properties in HTML tags to improve performance of the web element. </p> </div></div>  <div class='hoverCard' data-hover='css'> <img loading='lazy' src='' alt=''><div class='hoverCardText'><h2>CSS <div class='barsProgressSkill'> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> </div> </h2><p> Layout creation with Grid and Flex positioning. </p> <p> Responsive designs. </p> <p> Animations and transform, data category uses and use of nth-classes. </p></div></div> <div class='hoverCard' data-hover='js'> <img loading='lazy' src='' alt=''><div class='hoverCardText'> <h2>JavaScript <div class='barsProgressSkill'> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> </div> </h2> <p>Changes of elements of a website on clientside.</p><p> HTTP Requests, JSON elements. </p></div></div>  <div class='hoverCard' data-hover='nodejs'> <img loading='lazy' src='' alt=''><div class='hoverCardText'> <h2>Node.JS <div class='barsProgressSkill'> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> </div> </h2> <p>Creation of automatice task scripts and bots.</p> <p>Node.Js Package Management.</p> <p>Elements with Socket.io </p> </div></div>  <div class='hoverCard' data-hover='tw'> <img loading='lazy' src='' alt=''><div class='hoverCardText'> <h2> Tailwind CSS <div class='barsProgressSkill'> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> </div>  </h2> <p> Layout design with Tailwind </p> <p> Pregenerated designs </p> </div></div>  <div class='hoverCard' data-hover='py'> <img loading='lazy' src='' alt=''><div class='hoverCardText'> <h2> Tkinter on Python <div class='barsProgressSkill'> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> </div> </h2><p> Creation of simple applications to desktop enviroment. </p> </div></div>    <div class='hoverCard' data-hover='php'> <img loading='lazy' src='' alt=''><div class='hoverCardText'><h2>  PHP <div class='barsProgressSkill'> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> </div>  </h2> <p> Use in conjunction of MySQLi and MariaDB </p> <p> Creation of db and extraction of data. </p> <p> Creation of scripts and functions of PHP. </p></div></div><div class='hoverCard' data-hover='electron'> <img loading='lazy' src='' alt=''><div class='hoverCardText'> <h2>  Electron <div class='barsProgressSkill'> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> <div class='bars'></div> </div>  </h2><p> Creation of applications based in JavaScript/NodeJS and HTML/CSS for create desktop applications with Frontend language. </p></div> </div>");
    scrollTopB.style.display="none";
})

const contactContR = document.getElementById("navShadow#3R");
contactContR.addEventListener("click", function() {
    createModal(
        "<div class='contactContainer'><div class='contactCard'><img src='src/assets/FeedMedia/email-main.jpg' alt=''/><h2> Do you want to contact me via mail? </h2> <a href='mailto:davidasir2020@gmail.com'> <i class='fa fa-envelope'></i> Whenever you want 👏  </a> </div> <div class='contactCard'> <img src='src/assets/FeedMedia/contact-logo.png' alt=''/><h2> Do you want to Whatsapp me? </h2><a href='https://wa.me/+34628101155' target='_blank' ><i class='fa fa-whatsapp'></i> Only from 09:00AM to 14:00PM </a></div> </div>"
        );
    scrollTopB.style.display="none";
})


const skillCSS = document.getElementById("skillCSS");
const skillTW = document.getElementById("skillTW");
const skillJS = document.getElementById("skillJS");
const skillNJS = document.getElementById("skillNJS");
const skillRT = document.getElementById("skillRT");
const skillRS = document.getElementById("skillRS");

skillCSS.addEventListener("click", function() {
    createModal("Trained in Flexbox, Positioning, Grid, Responsive, Animations!");
})
skillTW.addEventListener("click", function() {
    createModal("To fast map the elements of an HTML document!");
})
skillRS.addEventListener("click", function() {
    createModal("Organize elements on screen between dispositives!");
})
skillJS.addEventListener("click", function() {
    createModal("Dinamism and changes in the website on client side!");
})
skillNJS.addEventListener("click", function() {
    createModal("Creation of Scripts and Bots and Backend implementation of Electron apps!");
})
skillRT.addEventListener("click", function() {
    createModal("Creation of components and classes, reforced with Vite.js to a fast deploy!");
})


