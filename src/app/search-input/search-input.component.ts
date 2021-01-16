import { chainedInstruction } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit , ChangeDetectionStrategy} from '@angular/core';
import{ListService } from '../list.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class SearchInputComponent implements OnInit {

  text:string="";
  setData:string="";
  constructor(public list:ListService) { }

  ngOnInit(): void {
    this.list.setData.subscribe(y=>this.setData=y)
  }

  onchange(t:string)
  {
    this.setData=t;
    this.list.onchange(t);
  }

}
