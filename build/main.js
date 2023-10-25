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
            x.style.display = "block";
        }
        else {
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Github\AdityaChavan.github.io\srccode\src\pages\home\home.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<!-- Google tag (gtag.js) -->\n\n<script async src="https://www.googletagmanager.com/gtag/js?id=G-L26D1B1DTD"></script>\n\n<script>\n\n  window.dataLayer = window.dataLayer || [];\n\n  function gtag(){dataLayer.push(arguments);}\n\n  gtag(\'js\', new Date());\n\n\n\n  gtag(\'config\', \'G-L26D1B1DTD\');\n\n</script>\n\n\n\n    <!-- Font Awesome -->\n\n    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">\n\n    <!-- Google Fonts -->\n\n    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">\n\n    <!-- Bootstrap core CSS -->\n\n    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">\n\n    <!-- Material Design Bootstrap -->\n\n    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css" rel="stylesheet">\n\n        \n\n\n\n    <!-- Material Design Bootstrap -->\n\n    <!-- MDB core JavaScript -->\n\n    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/js/mdb.min.js"></script>\n\n\n\n    <nav class="navbar navbar-expand-lg navbar-dark fixed-top heroimage" style="margin-bottom: 0px;">\n\n\n\n      <div class="container-fluid" style="height:6vh;">\n\n        <div >\n\n          <!--a class="navbar-brand animated zoomIn" style="font-size: 4vh; font-weight: bold; padding-left:50px; animation-duration:1s;" href="#">AC</a>\n\n          -->\n\n          <a class="navbar-brand animated zoomIn" style="font-size: 4vh; font-weight: bold; padding-left:50px; animation-duration:1s;" href="#">\n\n            <img style=\'width:40px;\' src=\'assets/imgs/ad.png\'></a>\n\n          </div>\n\n        <ul class="topnav nav navbar-nav d-flex flex-row" >\n\n            <li class="active" >\n\n              <a class="nav_ele animated zoomIn anchor" style="animation-delay: 0.5s;" href="#linktotop" rel="rel1">Home</a></li>\n\n            <li><a class="nav_ele animated zoomIn anchor" style="animation-delay: 0.7s;" href="#start" rel="rel1">About</a></li>\n\n            <li><a class="nav_ele animated zoomIn anchor" style="animation-delay: 0.9s;" href="#projects" rel="rel1">Projects</a></li>\n\n            <li><a class="nav_ele animated zoomIn anchor" style="animation-delay: 1.1s;" href="#programming" rel="rel1">Programming</a></li>\n\n            <li><a class="nav_ele animated zoomIn anchor" style="animation-delay: 1.3s;" href="#misc" rel="rel1">Other</a></li>\n\n            <li><a class="nav_ele animated zoomIn anchor" style="animation-delay: 1.5s;" href="#contact" rel="rel1">Contact</a></li>  \n\n            <a class="nav_ele animated zoomIn anchor" style="animation-delay: 0.5s;" href="#main" rel="rel1">\n\n              <button class=\'menubutton\' id=\'menu\' (click)=\'togglemenu()\'>\n\n                <ion-icon class=\'ionicon\' name="menu">\n\n            </ion-icon> \n\n            </button>\n\n          </a>\n\n\n\n\n\n        </ul>\n\n       </div>\n\n      </nav>\n\n\n\n<ion-content id=\'ioncontent\'>\n\n  <div  id=\'body\'>\n\n  \n\n  <!--hello section-->\n\n   <a name="linktotop"></a>\n\n	\n\n    <div class="heroimage">\n\n      <div class="d-flex justify-content-around" style="height: 100vh">\n\n        <div class="flex-center flex-column align-items-start" >\n\n        <h1 class="animated fadeInUp hello">Hello, I\'m Aditya</h1>\n\n\n\n        <h4 class="animated fadeInUp text-muted hello" style="animation-delay: 2s;">R&D Engineer </h4>\n\n        <h4 class="animated fadeInUp text-muted hello" style="animation-delay: 2.4s;">Georgia Tech Alumni</h4>\n\n        <h4 class="animated fadeInUp text-muted hello" style="animation-delay: 2.8s;">Marathoner</h4>\n\n        <h4 >\n\n          <img class="animated fadeInUp text-muted hello" style="animation-delay: 3.4s;"\n\n          id="india"\n\n          src="assets/imgs/IND.png"/>\n\n          <img class="animated fadeInUp text-muted hello" style="animation-delay: 3.8s;"\n\n          id="india"\n\n          src="assets/imgs/US.png"/>\n\n        </h4>\n\n        \n\n       <div class="animated fadeInUp text-muted  arrowcontainer" style="animation-delay: 5.0s;">       \n\n            <div class="arrow">\n\n              <span></span>\n\n              <span></span>\n\n              <span></span>\n\n            </div>\n\n          </div>\n\n\n\n\n\n</div>\n\n\n\n      </div>	 \n\n    </div>\n\n\n\n\n\n    <a name="start"></a>\n\n    <div class="maincontent">\n\n    <a name="start"></a>\n\n    <br>\n\n    <br><h2>About me</h2>\n\n    <br>\n\n    <p>I am Aditya, currently working as a Hardware Engineer in Silicon Valley. I made this website as a place to showcase my resume and some of my projects in detail. \n\n      I like to build projects that involve hardware engineering in my spare time.</p>\n\n    <br>\n\n    <h2>Education</h2>\n\n    <br>\n\n    <div class="d-flex justify-content-between">\n\n    <div class="d-flex flex-row">\n\n    <img src="assets/imgs/GT.gif" style="width:80px; height:50px; padding-right:30px;">\n\n    <p><strong>Georgia Institute of Technology</strong><br>\n\n    Masters of Science in ECE Engineering<br> graduating Dec 2018.\n\n    <p>\n\n    </div>\n\n    <div class="d-flex flex-row">\n\n    <img src="assets/imgs/UM.jpg"  style="width:80px; height:50px; padding-right:30px;">\n\n    <p><strong>University of Mumbai</strong><br>\n\n    Bachelors of Engineering in Electronics,<br> Class of 2016-17</p>\n\n    </div>\n\n    <div></div>\n\n    </div>\n\n    <br>\n\n    <h2>Experience</h2>\n\n    <br>\n\n    <div class="d-flex flex-row">\n\n      <img src="assets/imgs/instrumems.png" style="width:80px; height:50px; padding-right:30px;">\n\n      <p align="justify"  ><strong>Electrical R&D Engineer</strong><br>\n\n      Instrumems<br>\n\n     \n\n      Instrumems is a technology startup based in the Bay Area developing state-of-art MEMS Sensors. \n\n      My role involves charecterising the sensors and refining the technology that will be used in tomorrow\'s sensors. With the goal of using the same die for sensing Flow, Temperatures and different Gas Concentration, my research was granted a provisional Patent Application, still in process of being converted into a patent.\n\n      My work also involves working with the company\'s clients internationally, working with them to integrate our sensor into commercial mass-market products. I was part of the team that won the Best Sensor Award in MEMS at the Sensors Converge Tech conference in San Jose 2022. \n\n      </p>\n\n    </div>\n\n    <br>\n\n    <div class="d-flex flex-row">\n\n      <img src="assets/imgs/keep.png" style="width:80px; height:50px; padding-right:30px;">\n\n      <p align="justify"><strong>Hardware R&D Engineer</strong><br>\n\n      Keep Technologies<br>\n\n    \n\n      Keep is a technology company based in Atlanta with a focus on disurpting the Automobile Security Space. \n\n      I worked from the prototype to the production stage, designing hardware that inclused a chip down Cortex A7 CPU, 2Gb DDR3 RAM, 4Gb eMMC Design and wireless technologies including LTE / CAT4 and BLE connectivity.\n\n      I also worked with a 24GHz Doppler Radar and its filtering, signal Conditioning, DSP & ADC circuits. We have been awarded with 3 B1 patents and 13 B2 Patents and have 1 more pending from this role.\n\n      </p>\n\n    </div>\n\n    <br>\n\n    <div class="d-flex flex-row">\n\n        <img src="assets/imgs/GT.gif" style="width:80px; height:50px; padding-right:30px;">\n\n        <p align="justify"><strong>Graduate Research Assistant (Tech Temp)</strong><br>\n\n        Georgia Insitute of Technology<br>\n\n        This was my RA Project,regarding the development of a smart blanket for use in medical applications, under the guidance of <a href="http://flex.gatech.edu/sundaresan-jayaraman">Prof. Sundaresan Jayaraman</a> and <a href="http://www.mse.gatech.edu/people/sungmee-park">Dr. Sungmee Park</a>. \n\n        The project involves using a Xilinx FPGA to create a Data Acquisition System to read from an array of 500+ sensors, filtering and signal conditioning the analog data and storing the data in the cloud for further processing. \n\n        The project was tested with infants at the Children\'s Hospital of Atlanta succesfully.\n\n        The System Design was done in Verilog and Python. \n\n        </p>\n\n    </div>\n\n    <br>\n\n    <div class="d-flex flex-row">\n\n        <img src="assets/imgs/HL.png" style="width:80px; height:50px; padding-right:30px;">\n\n        <p align="justify"><strong>Software Development Intern</strong><br>\n\n        Halliburton Energy Services<br>\n\n        I was in charge of an individual project to build software that performs regression (DVT) testing on a PLC that controls an oil well. \n\n        The project will, in future, be used by Halliburton and its clients before deploying any new version of the <i>MultiValve</i> firmware. \n\n        The software was completed ahead of schedule and was shown to cut down testing time 90%, from 2-3 weeks down to a couple of hours. <br>\n\n        \n\n        <br>\n\n    </div>\n\n    \n\n    <br>\n\n    <h2>Patents</h2>\n\n    <br>\n\n    <h4><a href="https://scholar.google.com/citations?user=Y09ynSMAAAAJ&hl=en">Google Scholar Profile</a></h4>\n\n    <br>\n\n      <div class="d-flex justify-content-between">\n\n        <div>\n\n        <strong>Granted</strong><br>\n\n        <br>\n\n        <ol  id="patentList">\n\n\n\n          Authentication and control for vehicle intrusion devices<br>\n\n          <li>  <a href="https://patents.google.com/patent/US11420593">US-11420593-B2</a><br></li>\n\n        \n\n        Automobile Access And Intrusion Detection<br>\n\n        <li>   <a href="https://patents.google.com/patent/US10899316">US-10899316-B1</a><br></li>\n\n          <li>   <a href="https://patents.google.com/patent/US11420593">US-11420593-B2</a></li>\n\n\n\n          Data transmission for vehicle intrusion device<br>\n\n          <li>  <a href="https://patents.google.com/patent/US11104303">US-11104303-B2</a><br>\n\n        </li>\n\n        \n\n        Multi-device vehicle intrusion detection<br>\n\n        <li>   <a href="https://patents.google.com/patent/US11407381">US-11407381-B2</a><br>\n\n        </li>\n\n        Multimodal intrusion detection<br>\n\n        <li>   <a href="https://patents.google.com/patent/US11420592">US-11420592-B2</a><br>\n\n        </li>\n\n        Multi-Sensor Intrusion Detection And Validation <br>\n\n        <li>   <a href="https://patents.google.com/patent/US10913425">US-10913425-B1</a><br>\n\n        </li>\n\n        \n\n        Physically secured device for vehicle intrusion detection<br>\n\n        <li>   <a href="https://patents.google.com/patent/US10899317">US-10899317-B1</a><br></li>\n\n          <li>   <a href="https://patents.google.com/patent/US11279322">US-11279322-B2</a><br></li>\n\n            <li>   <a href="https://patents.google.com/patent/US11285920">US-11285920-B2</a><br></li>\n\n              <li>  <a href="https://patents.google.com/patent/US11312335">US-11312335-B2</a><br></li>\n\n                <li>  <a href="https://patents.google.com/patent/US11541845">US-11541845-B2</a>\n\n        </li>\n\n        \n\n        Physical structure for vehicle intrusion detection device<br>\n\n        <li>   <a href="https://patents.google.com/patent/US11535197">US-11535197-B2</a><br>\n\n        </li>\n\n        Remote engagement of coupling mechanism for vehicle intrusion detection device<br>\n\n        <li>    <a href="https://patents.google.com/patent/US10981540">US-10981540-B2</a><br>\n\n        </li>\n\n        \n\n        Systematic integration via an intrusion detection device<br>\n\n         <li>   <a href="https://patents.google.com/patent/US11691597">US-11691597-B2</a><br>\n\n        </li>\n\n        \n\n        Vehicle monitoring and theft detection<br>\n\n         <li>   <a href="https://patents.google.com/patent/US11332099">US-11332099-B2</a><br>\n\n        </li>\n\n        \n\n        </ol>\n\n        </div>\n\n        \n\n        <div>\n\n        <strong>Pending Applications</strong><br>\n\n        <br>\n\n        <ol>\n\n          Gas Sensor Comprising One Or More Sensing Wires<br>\n\n          <li>  <a href="https://patents.google.com/patent/US20230213467">US-20230213467-A1</a><br>\n\n          </li>\n\n          Vehicle Monitoring And Theft Detection Using Location<br>\n\n          <li>  <a href="https://patents.google.com/patent/US20210362685">US-20210362685-A1</a><br>\n\n          </li>\n\n        </ol>\n\n        \n\n        \n\n      </div>\n\n        <div></div>			\n\n      </div>\n\n    <a name="projects"></a>\n\n    \n\n    <br><br>\n\n    <h2>Projects</h2>\n\n    \n\n    <hr>	\n\n    <div class="row">\n\n    <button (click)="etrxprojects()" type="button" class="btnpl" style="margin: auto 5px;" ><i id="c" class="glyphicon glyphicon-plus" >+</i></button>\n\n    <h3 style="padding: 10px; margin:0px;">Electrical Engineering Projects</h3>\n\n    </div>\n\n  \n\n    <div id="etrx" style="display:none;" class="animated fadeIn"  align="justify">\n\n    <br>\n\n    <strong>Instrumems Gas Flow Sensor (Work Project)</strong>,<i> Altium, Kicad, Cypress PSOC Creator, STM32 Cube IDE <small>2021-2023</small></i><br>\n\n    This project was an eval kit developed for the Instrumems Nano wire. This PCB biases the sensor, reads the output using an ADC and converts the raw voltages to flow values. Noise achieved was around 50uV or 0.5% of full range flow.  The initial phase of this project that I inherited had a Cypress PSOC CY5866. I developed firmware for this design. Due to supply chain issues during 2021, I cost optimized this design to use a STM32 processor and migrated the firmware. An improved performance was measured compared to the older generation. \n\n    <br>\n\n   <br>\n\n    <strong>Instrumems Bubble Detection (Work Project)</strong>,<i> Altium <small>2021-2023</small></i><br>\n\n    We use a hot wire anemometer to detect bubbles in a tube. The response of a hot wire looks different when it surrounds air or water. I developed hardware temperature compensation methods and optimized the design for cost and performance, while conforming to application specific requirements. \n\n    <br>\n\n    <br>\n\n    <strong>Instrumems Multichannel CTA (Work Project)</strong>,<i> Altium <small>2021-2023</small></i><br>\n\n   This was a showcase of the extremely fast frequency response of the hot wire anemometer. The instrumems nano wire is the industries fastest flow sensor. This CTA box contains 3 channels of extremely low noise and high frequency response anemometer circuits, which drives a neno wire probe connected with a co-ax cable. A frequency response of between 300kHz and 1MHz is achievable depending on the MEMS die used.  \n\n    <br>\n\n     <br>\n\n    <strong>Instrumems Gas Detection (Work Project)</strong>,<i> Altium, python, <small>2021-2023</small></i><br>\n\n    This was an attempt to using a hot wire anemometer for gas detection. The response of a hot wire depends on the thermal conductivity of the surrounding medium. I developed novel methods of biasing the sensor and analyzing its data. A detection accuracy of 200 ppm was achieved for gasses like Hydrogen.      \n\n    <br>\n\n    <br>\n\n    <strong>Keep Car Alarm (Work Project)</strong>,<i> Altium, MATLAB, <small>2019-2021</small></i><br>\n\n    A novel car alarm that detects break-ins in your car and acts as an active deterrant to crimes. I built custom PCBs, developed prototypes, and developed algorithms for very sensitive sensors.      \n\n    <br>\n\n    <br>\n\n    <strong>Pressure Ulcer Prevention Project (Georgia Tech GRA Project)</strong>,<i> Autocad Eagle, Python, <small>2018-2019</small></i><br>\n\n    A smart blanket that acts as a Ulcer Detection System among infants and handicapped patients. I designed a custom PCB for a DAQ system that took in data from pressure and moisture sensor array via a DAQ, with singal conditioning, data processing and pushing data to a cloud.\n\n    <br>\n\n    <br>\n\n    <strong>Doppler Radar Motion Detector</strong>,<i> Altium, <small>2020</small></i><br>\n\n    A 2-hour mini project for long range presence detection. I made this as a easy way to control the lights in my house as soon as the radar detects motion in a 3-5m area. Designed to be plugged into a wall outlet USB Charger. Soldered and tested this PCB myself.<br>\n\n    <a href="https://github.com/AdityaChavan/ESP12fDopplerRadar"target="_blank">Preview on Github</a>\n\n    <br>\n\n    <br>\n\n    <strong>Dual PIR Motion Detector</strong>,<i> Altium, <small>2020</small></i><br>\n\n    A 2-hour mini project for short range presence detection with direction detection. I made this as a way to detect presense with my home automation setup (HASS.io). Soldered and tested this PCB myself.<br>\n\n    <a href="https://github.com/AdityaChavan/ESP12fMotionSensor"target="_blank">Preview on Github</a>\n\n    <br>       \n\n    <br>\n\n    <strong>Design of Circuit Logic Simulator with Fault Simulation</strong>,<i> C++, <small>2018</small></i><br>\n\n    This simulator will simulate any electrical circuit given and can find the output given the input logic values. The simulator can also generate input test vectors to test any given stuck-at fault in the circuit or test the entire circuit. The algorithm used is Path Oriented Decision Making (PODEM).<br>\n\n    <br>\n\n  \n\n    <strong>Implementation of Cache policies in a Superscalar Processor</strong>,<i> C++, <small>2017</small></i><br>\n\n    I wrote code to implement various cache policies on a simulated SESC proessor. The performance and accuracy of each applied policy was compared using benchmarks.	\n\n    <br>\n\n    <br>\n\n    <strong>Color 3D Printer / CNC machine</strong>,<i> C++, PHP, JavaScript, <small>2017</small></i><br>\n\n    Funded by the Department of Electronics, DJSCOE, Mumbai University.<br>\n\n    We built a 3D printer capable of printing objects in full color. The project also had a CNC spindle that could help in PCB prototyping. The printer is funded by and currently installed in the EDM lab of our college. The printer has a website through which users can submit their models and start prints. I was incharge of firmware development and web development of the website. I was the Team Lead.\n\n    <br>\n\n    <br>\n\n    <strong>Wireless Speaker System using IOT</strong>,<i> C++ <small>2017</small></i><br>\n\n    Funded by the Department of Electronics, DJSCOE, Mumbai University.<br>\n\n    This project was built into our college system as a efficient way for professors and staff to make announcements to our department. A web app was made to record announcements and send them to the college speakers from any web connected device.\n\n    <br>\n\n    <br>\n\n    <strong>Rubik\'s Cube Solver</strong>,<i> Assembly x86, C++, <small>2016</small></i><br>\n\n    Won 1st place at University level and 3rd place at a national level project display.<br>\n\n    This was a robot that could solve any scrambled Rubik\'s Cube. A camera would scan the unsolved cube, compute a solution and solve the cube using servos. Coded in OpenCV, Atmega (Assembly) and Arduino, GUI made in Visual C++  \n\n    <br>\n\n    <br>\n\n    <strong>Voice Controlled Home Automataion using Android</strong>,<i> Android, Arduino, <small>2015</small></i><br>\n\n    Developed an Android application that would use voice commands to control devices in the house. Communication would occur wirelessly over bluetooth. Written using Android and Arduino microcontrollers.\n\n    <br>\n\n    <br>\n\n    </div>\n\n    <hr>\n\n    <div class="row">\n\n      <button (click)="csprojects()" type="button" class="btnpl" style="margin: auto 5px;" ><i id="c" class="glyphicon glyphicon-plus" >+</i></button>\n\n      <h3 style="padding: 10px; margin:0px;">Computer Science Projects</h3>\n\n      </div>\n\n      \n\n      <div id="cs" style="display:none;"  class="animated fadeIn"  align="justify">\n\n      <br>\n\n      <strong>Automatic Determination of Cardiac Volumes from MRI Scans</strong>,<i> Python (TensorFlow), CUDA, <small>2018</small></i><br>\n\n      A group project designed to estimate the cardiac volume of a heart from a MRI scan, and to compare the accuracy of various machine learning methods used to estimate the same. \n\n      <a href="https://adityachavan08.github.io/">Project Website,</a> <a href="https://github.com/AdityaChavan/Automatic-Determination-of-Cardiac-Volumes-from-MRI-Scans"target="_blank">Git</a>.\n\n      <br>\n\n      <br>\n\n      <strong>Stock Market Trading Agent</strong>,<i> Python (TensorFlow), <small>2018</small></i><br>\n\n      Using Machine Learning to make stock market predictions. Implemented and compared the performance of Conv. Neural Networks, Random Forest, Decision trees. The strategy provided a return of 6 times, outperforming the stock. Project implemented for CS 7646-Machine Learning for Trading.\n\n      <a href="https://github.com/AdityaChavan/Stock-Market-Trader"target="_blank">Code and description</a> \n\n      <br>\n\n      <br>	\n\n      <strong>Artificial Intelligence based Virtual TA</strong>,<i> Python, <small>2018</small><br></i>\n\n      This is an AI bot capable of learning given material and answering questions based on it. Given the syllabus of a course, this bot can learn the given concepts, make common-sense assumptions and answer questions students may have based on the given information.<br>\n\n      Made for the course CS 7630: Knowledge based Artificial Intelligence. \n\n      <br>\n\n      <br>\n\n      <strong>Implementation of a Convolutional Neural Network on a GPU kernel</strong>,<i> CUDA C++, <small>2018</small></i><br>\n\n      Writing a kernel on the NVIDIA Kepler GPU, to implement a Neural network that performs basic OCR. This project involved writing CUDA kernels that perform functions like Convolution and ReLu on large arrays of data in parallel. Distribution of memory and kernel design were researched and optimized to provide maximum performance. Code written in CUDA C++.\n\n      <a href="https://github.com/AdityaChavan/GPU-Architectures"target="_blank">Git</a>\n\n      <br>\n\n    \n\n      </div>\n\n      <hr>\n\n  \n\n      <a name="programming"></a>\n\n      \n\n      <h2>Programming Languages I have studied</h2>	\n\n      <br>\n\n      <div class="d-flex justify-content-between" style="margin: auto">\n\n          <div style="margin: auto auto auto 0px;width: 20%;">\n\n          <p>\n\n          Embedded C<br>\n\n          C++<br>\n\n          Python<br>\n\n          </p>\n\n          </div>\n\n          \n\n          <div style="margin: auto auto auto 0px;width: 20%;">\n\n          <p>\n\n          Verilog<br>\n\n          Arduino<br>\n\n          </p>\n\n          </div>\n\n          \n\n          <div style="margin: auto auto auto 0px;width: 20%;">\n\n          <p>\n\n          HTML/CSS<br>\n\n          CUDA C++<br>\n\n          </p>\n\n          </div>\n\n\n\n          <div ></div>\n\n      </div>		\n\n      <br>\n\n      <h2>Software I have worked on</h2>\n\n      <br>\n\n      <div class="d-flex justify-content-between" >\n\n          <div style="margin: auto auto auto 0px;width: 20%;">\n\n          <p>\n\n          Altium<br>\n\n          LabView<br>\n\n          Proteus + Keil<br>\n\n          LTSpice<br>\n\n          </p>\n\n          </div>\n\n            <div style=" width: 20%; margin: auto auto auto 0px;">\n\n          <p>\n\n          MATLAB<br>\n\n          NI MultiSIM<br>\n\n          Proteus/Eagle<br>\n\n          IAR Embedded Workbench<br>\n\n          </p>\n\n          </div>\n\n            <div style="margin: auto auto auto 0px;width: 20%;">\n\n          <p>\n\n          SEGGER Embedded Studio<br>\n\n          STM32Cube IDE<br>\n\n          Visual Studio<br>\n\n          CLion<br>\n\n          </p>\n\n          </div>\n\n    \n\n          <div> </div>\n\n          \n\n      </div>\n\n      <a name="misc"></a>\n\n      \n\n      <br>\n\n      <h2>Portfolio</h2>\n\n      <br>\n\n      <a href="https://github.com/AdityaChavan" target="_blank"><p>https://github.com/AdityaChavan</p></a>\n\n    \n\n         <br>	\n\n  <h2>Awards</h2>\n\n      <p> •  Best Sensor Award in MEMS at the Sensors Converge Tech conference in San Jose 2022 <br>\n\n •  2022 Global Innovator in MEMS Nano sensor award by BisInotech, 2022. <br>\n\n •  Part of finalist team at Tech Crunch 2021 Startup Battle Field. (Keep Tech) <br>\n\n  •  1st place in Mumbai University At ‘Avishkar Research Convention 2016-17’. <br>\n\n      •  3rd place in S.P.I.T. Project Mania, National Level Project Competition<br>\n\n      •  Representative of Mumbai University at the Finals of ‘AVISHKAR 16-17’ State-Level Project Competition <br>\n\n      •  Cash prize for standing first in the college, in the Department of Electronics on the basis of Academic Performance in 5th and 6th Semesters of Engineering<br>\n\n      </p>\n\n      <br>\n\n      <br>\n\n      <br>\n\n      <a name="contact"></a>\n\n      \n\n    \n\n    \n\n    \n\n    \n\n        \n\n        \n\n        \n\n        \n\n        \n\n      </div>	\n\n      \n\n        <!-- SCRIPTS -->\n\n\n\n\n\n\n\n\n\n    <!-- Scrolling script -->	\n\n	<script type="text/javascript">\n\n		// Select all links with hashes\n\n		$(\'a[href*="#"]\')\n\n		  // Remove links that don\'t actually link to anything\n\n		  .not(\'[href="#"]\')\n\n		  .not(\'[href="#0"]\')\n\n		  .click(function(event) {\n\n			// On-page links\n\n			if (\n\n			  location.pathname.replace(/^\//, \'\') == this.pathname.replace(/^\//, \'\') \n\n			  && \n\n			  location.hostname == this.hostname\n\n			) {\n\n			  // Figure out element to scroll to\n\n			  var target = $(this.hash);\n\n			  target = target.length ? target : $(\'[name=\' + this.hash.slice(1) + \']\');\n\n			  // Does a scroll target exist?\n\n			  if (target.length) {\n\n				// Only prevent default if animation is actually gonna happen\n\n				event.preventDefault();\n\n				$(\'html, body\').animate({\n\n				  scrollTop: target.offset().top\n\n				}, 1000, function() {\n\n				  // Callback after animation\n\n				  // Must change focus!\n\n				  var $target = $(target);\n\n				  if ($target.is(":focus")) { // Checking if the target was focused\n\n					return false;\n\n				  } else {\n\n					$target.attr(\'tabindex\',\'-1\'); // Adding tabindex for elements not focusable\n\n					 };\n\n				});\n\n			  }\n\n			}\n\n		  });\n\n	</script>\n\n\n\n    <!-- Patent autogenerate url script -->	\n\n\n\n    <script>\n\n      var base_url = "https://patents.google.com/patent/";\n\n      var links = document.querySelectorAll("#patentList a"); // get all the links in the list\n\n  \n\n      links.forEach((link) => {\n\n          var patent_id = link.innerHTML; // get the text inside the link\n\n          link.href = base_url + patent_id; // set the href attribute\n\n      });\n\n  </script>\n\n       <!-- JQuery -->\n\n       <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>\n\n       <!-- Bootstrap tooltips -->\n\n       <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>\n\n       <!-- Bootstrap core JavaScript -->\n\n       <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>\n\n       <!-- MDB core JavaScript -->\n\n       <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/js/mdb.min.js"></script>\n\n    \n\n</div> <!--body-->\n\n<footer>\n\n  <h2 class="flex-center" style="padding-top:20px;">Contact</h2>\n\n  \n\n  <div  style="padding-top:20px; padding-bottom:40px;" class="flex-center">\n\n  <div class="">\n\n  <div class="d-flex " style="align-items:center"><img src="assets/imgs/mail.png" class="logo">adityasc08@gmail.com</div>\n\n  <div class="d-flex " style="align-items:center"><img src="assets/imgs/github.png" class="logo" ><a style="color:white" href="https://github.com/AdityaChavan">www.github.com/AdityaChavan</a></div>\n\n  <div class="d-flex " style="align-items:center"><img src="assets/imgs/scholar.png" class="logo" ><a style="color:white" href="https://scholar.google.com/citations?user=Y09ynSMAAAAJ&hl=en">Google Scholar Profile</a></div>\n\n\n\n\n\n</div></div>\n\n  </footer>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Github\AdityaChavan.github.io\srccode\src\pages\home\home.html"*/,
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
            selector: 'page-list',template:/*ion-inline-start:"C:\Github\AdityaChavan.github.io\srccode\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Github\AdityaChavan.github.io\srccode\src\pages\list\list.html"*/
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Github\AdityaChavan.github.io\srccode\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Github\AdityaChavan.github.io\srccode\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map