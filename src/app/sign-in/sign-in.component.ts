import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularTokenService } from 'angular-token';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
	showErrorMessage: boolean = false;
	errorMessage: string = '';
	signInForm = new FormGroup({
		login: new FormControl('', [
			Validators.required,
			Validators.email
		]),
		password: new FormControl('', Validators.required),
	});

  constructor(
  	private tokenService: AngularTokenService,
    private router: Router,
  ) { }

  ngOnInit(): void {}

  // form helpers
  get login() { return this.signInForm.get('login'); }
	get password() { return this.signInForm.get('password'); }

  onSubmit() {
  	this.showErrorMessage = false;
  	this.tokenService.signIn(this.signInForm.value).subscribe(
      res => {
      	if (res.body.data.is_admin) {
          this.router.navigate(['/products', { }]);
      	} else {
      		this.showErrorMessage = true;
     			this.errorMessage = "Acceso no permitido";
      		this.signInForm.reset();
      		this.tokenService.signOut();
      	}
      },
      error => {
      	this.showErrorMessage = true;
     		this.errorMessage = error.error.errors.join(', ')
     		this.signInForm.reset();
      }
    );
	}
}
