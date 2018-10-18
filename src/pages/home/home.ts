import { WebServicesProvider } from './../../providers/web-services/web-services';
import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Refresher } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

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
  constructor(public navCtrl: NavController, private navParams: NavParams, private http: WebServicesProvider, private iab: InAppBrowser, private loadingCtrl: LoadingController) {
    this.isSignIn = true;
    this.textToDisplay = 'Sign Up';
    this.params = this.navParams.data;
    console.log(this.params);
  }
  
  ionViewDidLoad(){
    const loader = this.loadingCtrl.create({
      content: 'Loading news, please wait'
    })
    loader.present();
    this.http.getNews('home').subscribe(data => {
      loader.dismiss();
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

  newsClicked(newsItem){
    console.log('user clicked the news card');
    const browser = this.iab.create(newsItem.url);
  }

  doRefresh(refresher) {
    console.log('begin async op', refresher);
    this.http.getNews('home').subscribe(data => {
      refresher.complete();
      this.news = data;
      console.log(this.news);
    });
  }
}
