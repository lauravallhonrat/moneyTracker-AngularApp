import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: Object = {
		username: '',
		password: '',
  }
  error = null;

  constructor(
    private session: SessionService,
  	private router: Router
  ) { }

  ngOnInit() {
  }

   submitSignup() {
     console.log("first time on signup");
     console.log("the user inside of signup", this.user);
     
    this.session.signup(this.user)
      .subscribe(result => {
          console.log("inside of first submit if true");
          
          if (result === true) {
              // login successful
              console.log('result ok', result);
              this.router.navigate(['/']);
          } else {
                console.log('result ko', result);
              // login failed
              // this.error = 'Username or password is incorrect';
          }
      });
  }

}
	