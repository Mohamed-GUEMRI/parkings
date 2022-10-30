import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApicallService } from '../services/apicall.service';

@Component({
  selector: 'app-berguers',
  templateUrl: './berguers.component.html',
  styleUrls: ['./berguers.component.scss']
})
export class BerguersComponent implements OnInit {
  currentParking:any ;
  id:any;
  constructor(private appService: ApicallService, private router : Router, private route: ActivatedRoute) { }
  myGroup = new FormGroup({
    id: new FormControl(),
    capacity: new FormControl(),
    location: new FormControl()
});
  ngOnInit(): void {
    this.id =this.route.snapshot.paramMap.get('id');
    this.getParking();
  }

  getParking(){
    this.appService.getParking(this.id).subscribe(
      data => {
        this.currentParking = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );

  }

  updateParking(){
    this.appService.update(this.currentParking.id, this.currentParking).subscribe(
      response => {
        console.log(response);
        this.router.navigate(["/drinks"]);
      },
      error => {
        console.log(error);
      }
    )
  }

}
