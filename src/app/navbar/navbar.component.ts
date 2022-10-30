import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchText:any;
  constructor() { }
nbItems:number = 0;
  ngOnInit(): void {
  }
  }


