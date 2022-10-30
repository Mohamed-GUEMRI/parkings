import { Component, Input, OnInit } from '@angular/core';
import { ApicallService } from '../services/apicall.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  parkings: any;
  constructor(private appService:ApicallService) { }

  ngOnInit(): void {
    this.parkings = this.appService.getParkings();
  }
}
