/*
* 星级评价组建，传入rating
* */
import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,OnChanges {
  private stars:boolean[];
  @Input()
  private readonly:boolean = true;
  @Input()
  private rating:number = 0;
  @Output()
  private ratingChange:EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }
  ngOnChanges(changes:SimpleChanges):void{
    this.stars=[];
    for(let i= 1; i<=5;i++){
      this.stars.push(i  > this.rating);
    }
  }
  clickStar(index:number){
    if(!this.readonly){
      this.rating = index +1;
      this.ratingChange.emit(this.rating);
    }
  }


}
