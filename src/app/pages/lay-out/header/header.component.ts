import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {

  userName = "Guest"; // Replace with actual authentication logic

  logout() {
    console.log("Logout clicked");
    // Implement logout logic here
  }

}
