import { WebServicesProvider } from './../../providers/web-services/web-services';
import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string;
  password: string;
  isSignIn: boolean;
  textToDisplay: string;
  params;
  news;
  constructor(public navCtrl: NavController, private navParams: NavParams, private http: WebServicesProvider) {
    this.isSignIn = true;
    this.textToDisplay = 'Sign Up';
    this.params = this.navParams.data;
    console.log(this.params);
  }
  
  ionViewDidLoad(){
    this.http.getNews('home').subscribe(data => {
      this.news = data;
      console.log(this.news);
    });
  }

  submit(){
    console.log('log in');
    console.log(this.username + this.password);
    this.navCtrl.push(AboutPage);
  }

  toggleDisplay(){
    this.isSignIn = !this.isSignIn;
    if(this.isSignIn){
      this.textToDisplay = 'Sign Up';
    } else {
      this.textToDisplay = 'Back To Login';
    }
  }

  newsClicked(){
    console.log('user clicked the news card');
  }

}
