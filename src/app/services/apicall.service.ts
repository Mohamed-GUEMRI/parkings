import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parking } from '../Parking'

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http: HttpClient) { }

  getParkings():Observable<Parking[]>{
  return this.http.get<Parking[]>('https://localhost:5001/api/Parking/allParkings');
  }

  delete(id:any){
    return this.http.delete('https://localhost:5001/api/Parking/deleteParking?id='+ id);
  }

  addParking(data: { capacity: string; location: string; }){
    return this.http.post('https://localhost:5001/api/Parking/addParking'+"?capacity="+data.capacity+"&localisation="+data.location, data);
  }

  update(id:any, data:any){
    return this.http.put('https://localhost:5001/api/Parking/updateParking/69?capacity='+data.capacity+'&localisation='+data.localisation, data);
  }

  getParking(id:any){
    return this.http.get('https://localhost:5001/api/Parking/'+ id);
  }
}


