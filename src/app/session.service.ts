import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SessionService implements CanActivate {
	public token: string = '';
	public isAuth: EventEmitter<any> = new EventEmitter();
	public user = {};

	private BASE_URL: string = 'http://localhost:3000';

	constructor(
		private http: Http,
		private router: Router
	) { }

	canActivate() {
		if (localStorage.getItem('token')) {
			let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('token') });
			let options = new RequestOptions({ headers: headers });
			return this.http.get(`${this.BASE_URL}/token`, options)
				.toPromise()
				.then((res) => res.json())
				.then((data) => {
					this.isAuth.emit(true);
					this.user = JSON.parse(localStorage.getItem('user'));
					this.token = localStorage.getItem('token');
					return true
				})
				.catch((err) => {
					this.logout();
					this.router.navigate(['/login']);
					return false;
				})
		} else {
			this.logout();
			this.router.navigate(['/login']);
			return false
		}
	}
	signup(user) {
		console.log("SERVICES");
		console.log("services give me the user please", user);

		return this.http.post(`${this.BASE_URL}/signup`, user)
			.map((response) => response.json())
			.map((response) => {
				let token = response.token;
				if (token) {
					// set token property
					this.token = token;
					// store username and jwt token in local storage to keep user logged in between page refreshes
					localStorage.setItem('token', token);
					this.isAuth.emit(true);
					// return true to indicate successful login
					return true;
				} else {
					// return false to indicate failed login
					return false;
				}
			})
			.catch((err) => Observable.throw(err));
	}

	login(user) {
		return this.http.post(`${this.BASE_URL}/login`, user)
			.map((res) => res.json())
			.map((res) => {
				let token = res.token;
				let user = res.user;

				if (token) {
					// set token property
					this.token = token;
					this.user = {
						_id: user._id,
						username: user.username,
						balanceAmount: user.balanceAmount
					}

					this.isAuth.emit(true);
					// store username and jwt token in local storage to keep user logged in between page refreshes
					localStorage.setItem('token', token);
					localStorage.setItem('user', JSON.stringify(this.user));
					// return true to indicate successful login
					return true;
				} else {
					// return false to indicate failed login
					return false;
				}
			})
	}

	isTokenValid(token) {
		let headers = new Headers({ 'Authorization': 'JWT ' + token });
		let options = new RequestOptions({ headers: headers });
		return this.http.get(`${this.BASE_URL}/token`, options)
			.map((res) => res.json())
	}

	logout() {
		this.token = null;
		this.user = null;
		this.isAuth.emit(false);
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		this.router.navigate(['/login']);
	}
}	