import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router'
import { ApicallService } from '../services/apicall.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {
  parkings:any;

  constructor(private appService: ApicallService, private router : Router, private route: ActivatedRoute) { }

  deleteParking(id: any){
    this.appService.delete(id).subscribe(response => {
      console.log(response);
      this.router.navigate(["/drinks"]);
    },
    error => {
      console.log(error)
    });
    this.router.navigate(["/reloading"]);
  }

  ngOnInit(): void {
     this.appService.getParkings().subscribe(response=>{
      this.parkings = response;
    });
  }

}


