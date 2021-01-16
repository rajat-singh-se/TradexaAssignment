import { Injectable } from '@angular/core';
import{ BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }



private input=new BehaviorSubject<string>("");
private select=new BehaviorSubject<string>("");

public change=this.input.asObservable();
public setData=this.select.asObservable();

public onchange(t:string){
  this.input.next(t);
}

public selectData(data:string){
  this.select.next(data);
}





}
