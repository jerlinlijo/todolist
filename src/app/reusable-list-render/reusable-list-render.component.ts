import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormValues } from '../todo-home/todo-home.constants.enum';

@Component({
  selector: 'app-reusable-list-render',
  templateUrl: './reusable-list-render.component.html',
  styleUrls: ['./reusable-list-render.component.scss']
})
export class ReusableListRenderComponent {
  @Input() listOfItems!: FormValues[];
  @Output() public selectedItems: EventEmitter<null> = new EventEmitter();
  listItems:any;

  constructor() {}

  ngOnInit(): void {
    this.initializer();
  }
/**
 * It will intialise all the values and the function
 */
  initializer(){
    this.getData();
  }

  /**
   * geting data 
   */
  getData(){
    this.listItems = this.listOfItems;
  }

  datafrom(data:any){
    console.log(data,'ttt');
    const close = this.selectedItems.emit(data);
  }
}
