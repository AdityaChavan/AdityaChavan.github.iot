import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

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

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public ga: GoogleAnalytics) {
  }

  ionViewDidLoad() {

 

  }

    togglemenu(){
      var x = document.getElementById("menu");
      if (x.className == "menubutton activated" ||x.className == "menubutton") {
        x.className += " responsive";
      } else {
        x.className = "menubutton";
      }
    }

   etrxprojects() {
    var x = document.getElementById("etrx");
    if (x.style.display === "none") {
      document.getElementById("etr").className="glyphicon glyphicon-minus";
    x.style.display = "block";
    } else {
    document.getElementById("etr").className="glyphicon glyphicon-plus";
    x.style.display = "none";
    }

  }
  csprojects() {
    var x = document.getElementById("cs");
    if (x.style.display === "none") {
    document.getElementById("c").className="glyphicon glyphicon-minus";
    x.style.display = "block";
    } else {
    document.getElementById("c").className="glyphicon glyphicon-plus";
    x.style.display = "none";
    }
  
  }
  

}
