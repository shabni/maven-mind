import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lay-out',
  templateUrl: './lay-out.component.html',
  styleUrls: ['./lay-out.component.scss']
})
export class LayOutComponent {

  userName = "Guest"; // Replace with actual authentication logic

  logout() {
    console.log("Logout clicked");
    // Implement logout logic here
  }

}
