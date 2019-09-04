import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
  	public tokenService: AngularTokenService,
  	private router: Router,
  ) { }

  ngOnInit() {
  }

  logout() {
  	this.tokenService.signOut().subscribe(
	  res => this.router.navigate(['/sign-in', { }]),
	  error => console.error(error)
	);
  }

}
