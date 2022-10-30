import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from '../services/apicall.service';


@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {
  parking = {
    capacity: '',
    location: '',
  };
  submitted = false;
  constructor(private appService: ApicallService, private router : Router) { }
  myGroup = new FormGroup({
    capacity: new FormControl(),
    location: new FormControl()
});
  ngOnInit(): void { }
  addParking(): void{
    const data = {
      capacity: this.parking.capacity,
      location: this.parking.location
    };
    this.appService.addParking(data)
    .subscribe(response => {
      console.log(data);
      this.submitted = true;
      this.router.navigate(["/drinks"]);
    },
    error => {
      console.log(error);
    });
  }
}
