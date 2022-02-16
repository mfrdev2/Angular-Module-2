import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private roots :Router) { }

  ngOnInit(): void {
  }

  navigateToRooms():void{
    this.roots.navigate(['admin','rooms']);
  }
  navigateToUsers():void{
    this.roots.navigate(['admin','users']);
  }
  navigateToHome():void{
    this.roots.navigate(['']);
  }

}
