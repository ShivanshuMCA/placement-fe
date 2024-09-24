import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  shwForm: boolean = false;
  addClg: boolean = false;
  // isAdmin: boolean = true;
  isAdmin: boolean = false;

  constructor(private _router: Router) {}
  loginPopUp() {
    this.shwForm = true;
  }
  addCollege() {
    // this.addClg = true;
    this.shwForm = false;
    this._router.navigate(['/add-college']);
  }
  goToDashboard() {
    this._router.navigate(['/']);
  }
}
