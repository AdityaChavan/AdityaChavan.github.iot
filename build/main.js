webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 *
 * add to index.html for tracking:
 *
  <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-127456966-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-127456966-1');
</script>


 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, ga) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ga = ga;
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.togglemenu = function () {
        var x = document.getElementById("menu");
        if (x.className == "menubutton activated" || x.className == "menubutton") {
            x.className += " responsive";
        }
        else {
            x.className = "menubutton";
        }
    };
    HomePage.prototype.etrxprojects = function () {
        var x = document.getElementById("etrx");
        if (x.style.display === "none") {
            document.getElementById("etr").className = "glyphicon glyphicon-minus";
            x.style.display = "block";
        }
        else {
            document.getElementById("etr").className = "glyphicon glyphicon-plus";
            x.style.display = "none";
        }
    };
    HomePage.prototype.csprojects = function () {
        var x = document.getElementById("cs");
        if (x.style.display === "none") {
            document.getElementById("c").className = "glyphicon glyphicon-minus";
            x.style.display = "block";
        }
        else {
            document.getElementById("c").className = "glyphicon glyphicon-plus";
            x.style.display = "none";
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/aditya/Documents/GitHub/AdityaChavan.github.io/srccode/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<!-- Global site tag (gtag.js) - Google Analytics -->\n<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZQ8R9MFKF5"></script>\n\n\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag(\'js\', new Date());\n\n  gtag(\'config\', \'G-ZQ8R9MFKF5\');\n\n</script>\n    <!-- Font Awesome -->\n    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">\n    <!-- Google Fonts -->\n    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">\n    <!-- Bootstrap core CSS -->\n    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">\n    <!-- Material Design Bootstrap -->\n    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css" rel="stylesheet">\n        \n\n    <!-- Material Design Bootstrap -->\n    <!-- MDB core JavaScript -->\n    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/js/mdb.min.js"></script>\n\n    <nav class="navbar navbar-expand-lg navbar-dark fixed-top heroimage" style="margin-bottom: 0px;">\n\n      <div class="container-fluid" style="height:6vh;">\n        <div >\n          <!--a class="navbar-brand animated zoomIn" style="font-size: 4vh; font-weight: bold; padding-left:50px; animation-duration:1s;" href="#">AC</a>\n          -->\n          <a class="navbar-brand animated zoomIn" style="font-size: 4vh; font-weight: bold; padding-left:50px; animation-duration:1s;" href="#">\n            <img style=\'width:40px;\' src=\'assets/imgs/ad.png\'></a>\n          </div>\n        <ul class="topnav nav navbar-nav d-flex flex-row" >\n            <li class="active" >\n              <a class="nav_ele animated zoomIn anchor" style="animation-delay: 0.5s;" href="#linktotop" rel="rel1">Home</a></li>\n            <li><a class="nav_ele animated zoomIn anchor" style="animation-delay: 0.7s;" href="#start" rel="rel1">About</a></li>\n            <li><a class="nav_ele animated zoomIn anchor" style="animation-delay: 0.9s;" href="#projects" rel="rel1">Projects</a></li>\n            <li><a class="nav_ele animated zoomIn anchor" style="animation-delay: 1.1s;" href="#programming" rel="rel1">Programming</a></li>\n            <li><a class="nav_ele animated zoomIn anchor" style="animation-delay: 1.3s;" href="#misc" rel="rel1">Other</a></li>\n            <li><a class="nav_ele animated zoomIn anchor" style="animation-delay: 1.5s;" href="#contact" rel="rel1">Contact</a></li>  \n            <a class="nav_ele animated zoomIn anchor" style="animation-delay: 0.5s;" href="#main" rel="rel1">\n              <button class=\'menubutton\' id=\'menu\' (click)=\'togglemenu()\'>\n                <ion-icon class=\'ionicon\' name="menu">\n            </ion-icon> \n            </button>\n          </a>\n\n\n        </ul>\n       </div>\n      </nav>\n\n<ion-content id=\'ioncontent\'>\n  <div id=\'body\'>\n  \n  <!--hello section-->\n   <a name="linktotop"></a>\n	\n    <div class="heroimage">\n      <div class="d-flex justify-content-around" style="height: 100vh">\n        <div class="flex-center flex-column align-items-start" >\n        <h1 class="animated fadeInUp hello">Hello, I\'m Aditya</h1>\n\n        <h4 class="animated fadeInUp text-muted hello" style="animation-delay: 2s;">R&D Engineer </h4>\n        <h4 class="animated fadeInUp text-muted hello" style="animation-delay: 2.4s;">Georgia Tech Alumni</h4>\n        <h4 class="animated fadeInUp text-muted hello" style="animation-delay: 2.8s;">Marathoner</h4>\n        <h4 >\n          <img class="animated fadeInUp text-muted hello" style="animation-delay: 3.4s;"\n          id="india"\n          src="assets/imgs/IND.png"/>\n          <img class="animated fadeInUp text-muted hello" style="animation-delay: 3.8s;"\n          id="india"\n          src="assets/imgs/US.png"/>\n        </h4>\n        \n       <div class="animated fadeInUp text-muted  arrowcontainer" style="animation-delay: 5.0s;">       \n            <div class="arrow">\n              <span></span>\n              <span></span>\n              <span></span>\n            </div>\n          </div>\n\n\n</div>\n\n      </div>	 \n    </div>\n\n\n    <a name="start"></a>\n    <div class="maincontent">\n    <a name="start"></a>\n    <br>\n    <br><h2>About me</h2>\n    <br>\n    <p>I am Aditya, currently pursuing a masters degree in ECE. I made this website as a place to showcase my resume and some of my projects in detail. \n      I like to build projects that involve hardware engineering in my spare time.</p>\n    <br>\n    <h2>Education</h2>\n    <br>\n    <div class="d-flex justify-content-between">\n    <div class="d-flex flex-row">\n    <img src="assets/imgs/GT.gif" style="width:80px; height:50px; padding-right:30px;">\n    <p><strong>Georgia Institute of Technology</strong><br>\n    Masters of Science in Electrical & Computer Engineering,<br> graduating Dec 2018.\n    <p>\n    </div>\n    <div class="d-flex flex-row">\n    <img src="assets/imgs/UM.jpg"  style="width:80px; height:50px; padding-right:30px;">\n    <p><strong>University of Mumbai</strong><br>\n    Bachelors of Engineering in Electronics,<br> Class of 2016-17</p>\n    </div>\n    <div></div>\n    </div>\n    <br>\n    <h2>Experience</h2>\n    <br>\n    <div class="d-flex flex-row">\n        <img src="assets/imgs/keep.png" style="width:80px; height:50px; padding-right:30px;">\n        <p align="justify"><strong>Hardware R&D Engineer</strong><br>\n        Keep Technologies<br>\n       \n        Keep is a technology startup based in Atlanta with a focus on disurpting the Automobile Security Space. \n        I worked from the prototype to the production stage, designing hardware that inclused a chip down Cortex A7 CPU, 2Gb DDR3 RAM, 4Gb eMMC Design and wireless technologies including LTE / CAT4 and BLE connectivity.\n        I also worked with a 24GHz Doppler Radar and its filtering, signal Conditioning, DSP & ADC circuits. We have been awarded with 4 patents and have 6 more pending.\n        </p>\n    </div>\n    <br>\n    <div class="d-flex flex-row">\n        <img src="assets/imgs/GT.gif" style="width:80px; height:50px; padding-right:30px;">\n        <p align="justify"><strong>Graduate Research Assistant (Tech Temp)</strong><br>\n        Georgia Insitute of Technology<br>\n        This was my RA Project,regarding the development of a smart blanket for use in medical applications, under the guidance of <a href="http://flex.gatech.edu/sundaresan-jayaraman">Prof. Sundaresan Jayaraman</a> and <a href="http://www.mse.gatech.edu/people/sungmee-park">Dr. Sungmee Park</a>. \n        The project involves using a Xilinx FPGA to create a Data Acquisition System to read from an array of 500+ sensors, filtering and signal conditioning the analog data and storing the data in the cloud for further processing. \n        The project was tested with infants at the Children\'s Hospital of Atlanta succesfully.\n        The System Design was done in Verilog and Python. \n        </p>\n    </div>\n    <br>\n    <div class="d-flex flex-row">\n        <img src="assets/imgs/HL.png" style="width:80px; height:50px; padding-right:30px;">\n        <p align="justify"><strong>Software Development Intern</strong><br>\n        Halliburton Energy Services<br>\n        I was in charge of an individual project to build software that performs regression (DVT) testing on a PLC that controls an oil well. \n        The project will, in future, be used by Halliburton and its clients before deploying any new version of the <i>MultiValve</i> firmware. \n        The software was completed ahead of schedule and was shown to cut down testing time 90%, from 2-3 weeks down to a couple of hours. <br>\n        \n        <br>\n    </div>\n    \n    <br>\n    <h2>Patents</h2>\n    <br>\n    <h4><a href="https://scholar.google.com/citations?user=Y09ynSMAAAAJ&hl=en">Google Scholar Profile</a></h4>\n    <br>\n      <div class="d-flex justify-content-between">\n        <div>\n        <strong>Granted</strong><br>\n        <br>\n        <ol>\n        <li><a href="https://patents.google.com/patent/US10899316B1/en"> Automobile access and intrusion detection, US Patent 10,899,316, 2021</a></li>\n        <li><a href="https://patents.google.com/patent/US10899317B1/en"> Physically secured device for vehicle intrusion detection, US Patent 10,899,317</a></li>\n        <li><a href="https://patents.google.com/patent/US10913425B1/en"> Multi-sensor intrusion detection and validation, US Patent 10,913,425, 2021 </a></li>\n        <li><a href="https://patents.google.com/patent/US10981540B2/en"> Remote engagement of coupling mechanism for vehicle intrusion detection device, US Patent 10,981,540</a></li>\n      </ol>\n        </div>\n        \n        <div>\n        <strong>Pending</strong><br>\n        <br>\n        <ol>\n        <li><a href="https://patents.google.com/patent/US20210039597A1/en"> Multimodal intrusion detection, 2021</a></li>\n        <li><a href="https://patents.google.com/patent/US20210039601A1/en"> Systematic integration via an intrusion detection device, 2021 </a></li>\n        <li><a href="https://patents.google.com/patent/US20210039598A1/en"> Vehicle monitoring and theft detection, 2021 </a></li>\n        <li><a href="https://patents.google.com/patent/US20210039599A1/en"> Data transmission for vehicle intrusion device, 2021 </a></li>\n        <li><a href="https://patents.google.com/patent/US20210039590A1/en"> Authentication and control for vehicle intrusion devices, 2021 </a></li>\n        <li><a href="https://patents.google.com/patent/US20210039600A1/en"> Multi-device vehicle intrusion detection, 2021 </a></li>\n        </ol>\n        \n      </div>\n        <div></div>			\n      </div>\n    <a name="projects"></a>\n    \n    <br><br>\n    <h2>Projects</h2>\n    \n    <hr>	\n    <div class="row">\n    <button (click)="etrxprojects()" type="button" class="btnpl" style="margin: auto 10px;" ><i id="etr" class="glyphicon glyphicon-plus" ></i></button>\n    <h3 style="padding: 10px; margin:0px;">Electrical Engineering Projects</h3>\n    </div>\n  \n    <div id="etrx" style="display:none;" class="animated fadeIn"  align="justify">\n  \n      \n      <br>\n      <strong>Doppler Radar Motion Detector</strong>,<i> C++, <small>2021</small></i><br>\n      A small mini project for long range presence detection. I made this as a easy way to control the lights in my house as soon as the radar detects motion in a 3-5m area. Designed to be plugged into a wall outlet USB Charger. Soldered and tested this PCB myself.<br>\n      <a href="https://github.com/AdityaChavan/ESP12fDopplerRadar"target="_blank">Preview on Github</a>\n      <br>\n      <br>\n      <strong>Dual PIR Motion Detector</strong>,<i> C++, <small>2021</small></i><br>\n      A small mini project for short range presence detection with direction detection. I made this as a way to detect presense with my home automation setup (HASS.io). Soldered and tested this PCB myself.<br>\n      <a href="https://github.com/AdityaChavan/ESP12fMotionSensor"target="_blank">Preview on Github</a>\n      <br>\n            \n    <br>\n    <strong>Design of Circuit Logic Simulator with Fault Simulation</strong>,<i> C++, <small>2018</small></i><br>\n    This simulator will simulate any electrical circuit given and can find the output given the input logic values. The simulator can also generate input test vectors to test any given stuck-at fault in the circuit or test the entire circuit. The algorithm used is Path Oriented Decision Making (PODEM).<br>\n    \n    <br>\n  \n    <strong>Implementation of Cache policies in a Superscalar Processor</strong>,<i> C++, <small>2017</small></i><br>\n    I wrote code to implement various cache policies on a simulated SESC proessor. The performance and accuracy of each applied policy was compared using benchmarks.	\n    <br>\n    <br>\n    <strong>Color 3D Printer / CNC machine</strong>,<i> C++, PHP, JavaScript, <small>2017</small></i><br>\n    Funded by the Department of Electronics, DJSCOE, Mumbai University.<br>\n    We built a 3D printer capable of printing objects in full color. The project also had a CNC spindle that could help in PCB prototyping. The printer is funded by and currently installed in the EDM lab of our college. The printer has a website through which users can submit their models and start prints. I was incharge of firmware development and web development of the website. I was the Team Lead.\n    <br>\n    <br>\n    <strong>Wireless Speaker System using IOT</strong>,<i> C++ <small>2017</small></i><br>\n    Funded by the Department of Electronics, DJSCOE, Mumbai University.<br>\n    This project was built into our college system as a efficient way for professors and staff to make announcements to our department. A web app was made to record announcements and send them to the college speakers from any web connected device.\n    <br>\n    <br>\n    <strong>Rubik\'s Cube Solver</strong>,<i> Assembly x86, C++, <small>2016</small></i><br>\n    Won 1st place at University level and 3rd place at a national level project display.<br>\n    This was a robot that could solve any scrambled Rubik\'s Cube. A camera would scan the unsolved cube, compute a solution and solve the cube using servos. Coded in OpenCV, Atmega (Assembly) and Arduino, GUI made in Visual C++  \n    <br>\n    <br>\n    <strong>Voice Controlled Home Automataion using Android</strong>,<i> Android, Arduino, <small>2015</small></i><br>\n    Developed an Android application that would use voice commands to control devices in the house. Communication would occur wirelessly over bluetooth. Written using Android and Arduino microcontrollers.\n    <br>\n    <br>\n    </div>\n    <hr>\n    <div class="row">\n      <button (click)="csprojects()" type="button" class="btnpl" style="margin: auto 10px;" ><i id="c" class="glyphicon glyphicon-plus" ></i></button>\n      <h3 style="padding: 10px; margin:0px;">Computer Science Projects</h3>\n      </div>\n      \n      <div id="cs" style="display:none;"  class="animated fadeIn"  align="justify">\n      <br>\n      <strong>Automatic Determination of Cardiac Volumes from MRI Scans</strong>,<i> Python (TensorFlow), CUDA, <small>2018</small></i><br>\n      A group project designed to estimate the cardiac volume of a heart from a MRI scan, and to compare the accuracy of various machine learning methods used to estimate the same. \n      <a href="https://adityachavan08.github.io/">Project Website,</a> <a href="https://github.com/AdityaChavan/Automatic-Determination-of-Cardiac-Volumes-from-MRI-Scans"target="_blank">Git</a>.\n      <br>\n      <br>\n      <strong>Stock Market Trading Agent</strong>,<i> Python (TensorFlow), <small>2018</small></i><br>\n      Using Machine Learning to make stock market predictions. Implemented and compared the performance of Conv. Neural Networks, Random Forest, Decision trees. The strategy provided a return of 6 times, outperforming the stock. Project implemented for CS 7646-Machine Learning for Trading.\n      <a href="https://github.com/AdityaChavan/Stock-Market-Trader"target="_blank">Code and description</a> \n      <br>\n      <br>	\n      <strong>Artificial Intelligence based Virtual TA</strong>,<i> Python, <small>2018</small><br></i>\n      This is an AI bot capable of learning given material and answering questions based on it. Given the syllabus of a course, this bot can learn the given concepts, make common-sense assumptions and answer questions students may have based on the given information.<br>\n      Made for the course CS 7630: Knowledge based Artificial Intelligence. \n      <br>\n      <br>\n      <strong>Implementation of a Convolutional Neural Network on a GPU kernel</strong>,<i> CUDA C++, <small>2018</small></i><br>\n      Writing a kernel on the NVIDIA Kepler GPU, to implement a Neural network that performs basic OCR. This project involved writing CUDA kernels that perform functions like Convolution and ReLu on large arrays of data in parallel. Distribution of memory and kernel design were researched and optimized to provide maximum performance. Code written in CUDA C++.\n      <a href="https://github.com/AdityaChavan/GPU-Architectures"target="_blank">Git</a>\n      <br>\n    \n      </div>\n      <hr>\n  \n      <a name="programming"></a>\n      \n      <h2>Programming Languages I have studied</h2>	\n      <br>\n      <div class="d-flex justify-content-between" style="margin: auto">\n          <div style="margin: auto auto auto 0px;width: 20%;">\n          <p>\n          Embedded C<br>\n          C++<br>\n          Python<br>\n          </p>\n          </div>\n          \n          <div style="margin: auto auto auto 0px;width: 20%;">\n          <p>\n          Verilog<br>\n          Arduino<br>\n          </p>\n          </div>\n          \n          <div style="margin: auto auto auto 0px;width: 20%;">\n          <p>\n          HTML/CSS<br>\n          CUDA C++<br>\n          </p>\n          </div>\n\n          <div ></div>\n      </div>		\n      <br>\n      <h2>Software I have worked on</h2>\n      <br>\n      <div class="d-flex justify-content-between" >\n          <div style="margin: auto auto auto 0px;width: 20%;">\n          <p>\n          Altium<br>\n          LabView<br>\n          Proteus + Keil<br>\n          LTSpice<br>\n          </p>\n          </div>\n            <div style=" width: 20%; margin: auto auto auto 0px;">\n          <p>\n          MATLAB<br>\n          NI MultiSIM<br>\n          Proteus/Eagle<br>\n          </p>\n          </div>\n            <div style="margin: auto auto auto 0px;width: 20%;">\n          <p>\n          SEGGER Embedded Studio<br>\n          Visual Studio<br>\n          CLion<br>\n          </p>\n          </div>\n    \n          <div> </div>\n          \n      </div>\n      <a name="misc"></a>\n      \n      <br>\n      <h2>Portfolio</h2>\n      <br>\n      <a href="https://github.com/AdityaChavan" target="_blank"><p>https://github.com/AdityaChavan</p></a>\n    \n      <br>\n      <h2>Workshops</h2>\n      <br>\n      <p>Robotics and Arduino Programming Workshop, 2013<br>\n      Embedded System with ARM mbed Platform on the FRDM board, 2015\n      </p>\n      <br>	\n      <h2>Leadership Experience</h2>\n      <br>\n      <p>Class Representative in the Student Council, D.J. Sanghvi College, for the Year 2015-16<br>\n      Member of Organizing Committee in the college Modern UN Club (DJ MUN 2014)<br>\n      </p>\n      <br>\n      <h2>Awards</h2>\n      <p>1st place in Mumbai University At ‘Avishkar Research Convention 2016-17’. <br>\n      3rd place in S.P.I.T. Project Mania, National Level Project Competition<br>\n      Chosen to Represent Mumbai University at the State-Level Finals of ‘AVISHKAR 16-17’<br>\n      Cash prize for standing first in the Department of Electronics on the basis of Academic Performance in 5th and 6th Semesters of Engineering<br>\n      </p>\n      <br>\n      <br>\n      <br>\n      <a name="contact"></a>\n      \n    \n    \n    \n    \n        \n        \n        \n        \n        \n      </div>	\n      \n        <!-- SCRIPTS -->\n    <!-- Scrolling script -->	\n	<script type="text/javascript">\n		// Select all links with hashes\n		$(\'a[href*="#"]\')\n		  // Remove links that don\'t actually link to anything\n		  .not(\'[href="#"]\')\n		  .not(\'[href="#0"]\')\n		  .click(function(event) {\n			// On-page links\n			if (\n			  location.pathname.replace(/^\//, \'\') == this.pathname.replace(/^\//, \'\') \n			  && \n			  location.hostname == this.hostname\n			) {\n			  // Figure out element to scroll to\n			  var target = $(this.hash);\n			  target = target.length ? target : $(\'[name=\' + this.hash.slice(1) + \']\');\n			  // Does a scroll target exist?\n			  if (target.length) {\n				// Only prevent default if animation is actually gonna happen\n				event.preventDefault();\n				$(\'html, body\').animate({\n				  scrollTop: target.offset().top\n				}, 1000, function() {\n				  // Callback after animation\n				  // Must change focus!\n				  var $target = $(target);\n				  if ($target.is(":focus")) { // Checking if the target was focused\n					return false;\n				  } else {\n					$target.attr(\'tabindex\',\'-1\'); // Adding tabindex for elements not focusable\n					 };\n				});\n			  }\n			}\n		  });\n	</script>\n\n       <!-- JQuery -->\n       <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>\n       <!-- Bootstrap tooltips -->\n       <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>\n       <!-- Bootstrap core JavaScript -->\n       <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>\n       <!-- MDB core JavaScript -->\n       <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/js/mdb.min.js"></script>\n    \n</div> <!--body-->\n<footer>\n  <h2 class="flex-center" style="padding-top:20px;">Contact</h2>\n  \n  <div  style="padding-top:20px; padding-bottom:40px;" class="flex-center">\n  <div class="">\n  <div class="d-flex " style="align-items:center"><img src="assets/imgs/mail.png" class="logo">adityasc08@gmail.com</div>\n  <div class="d-flex " style="align-items:center"><img src="assets/imgs/github.png" class="logo" ><a href="https://github.com/AdityaChavan">www.github.com/AdityaChavan</a></div>\n  <div class="d-flex " style="align-items:center"><img src="assets/imgs/scholar.png" class="logo" ><a href="https://scholar.google.com/citations?user=Y09ynSMAAAAJ&hl=en">Google Scholar Profile</a></div>\n\n\n</div></div>\n  </footer>\n</ion-content>\n'/*ion-inline-end:"/home/aditya/Documents/GitHub/AdityaChavan.github.io/srccode/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/aditya/Documents/GitHub/AdityaChavan.github.io/srccode/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/aditya/Documents/GitHub/AdityaChavan.github.io/srccode/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_analytics__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.openPage(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/aditya/Documents/GitHub/AdityaChavan.github.io/srccode/src/app/app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/aditya/Documents/GitHub/AdityaChavan.github.io/srccode/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map