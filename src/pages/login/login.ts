import { TabsPage } from './../tabs/tabs';
import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: string;
  password: string;
  isSignIn: boolean;
  textToDisplay: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isSignIn = true;
    this.textToDisplay = 'Sign Up';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submit(){
    
    console.log(this.username + this.password);
    if(this.isSignIn){
      this.login();
    } else {
      this.signup();
    }
    
  }

  login(){
    console.log('log in');
    this.navCtrl.push(TabsPage, {username: this.username});
  }

  signup(){
    this.toggleDisplay();
  }

  toggleDisplay(){
    this.isSignIn = !this.isSignIn;
    if(this.isSignIn){
      this.textToDisplay = 'Sign Up';
    } else {
      this.textToDisplay = 'Back To Login';
    }
  }

}
