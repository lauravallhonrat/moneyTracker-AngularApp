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

  submitLogin() {
  	this.session.login(this.user)
  		.subscribe(
  			(data) => {
  				this.router.navigate([' ']);
  			},
  			(err) => {
  				this.error = err;
  			});
  }

}
	