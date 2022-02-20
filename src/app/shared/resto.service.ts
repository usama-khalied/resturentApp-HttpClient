import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestoService {
url = "http://localhost:3000/resturents"
registerUrl = "http://localhost:3000/users"

  constructor( private http:HttpClient) { }
getList(){
return this.http.get(this.url);
}
saveResto(data:any) {

  return this.http.post(this.url , data)
}
DeleteResto(id: any){
  return this.http.delete(`${this.url}/${id}`);
}
getCurrentResto(id:any){
  return this.http.get(`${this.url}/${id}`);
}
postCurrent(id:any , data:any){
  return this.http.put(`${this.url}/${id}`, data);
}
 register(data : any){
return this.http.post(this.registerUrl ,data)
 }
}
