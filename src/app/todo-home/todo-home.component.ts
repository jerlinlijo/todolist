import { Component } from "@angular/core";
import { TODO_CONSTANTS,  formDataValues, FormValues } from "./todo-home.constants.enum";
import { ICONS } from "../enums/global-constants.enum";
import { MatDialog } from "@angular/material/dialog";
import { PopupEmulatorComponent } from "../popup-emulator/popup-emulator.component";

@Component({
  selector: "app-todo-home",
  templateUrl: "./todo-home.component.html",
  styleUrls: ["./todo-home.component.scss"],
})
export class TodoHomeComponent {
  todoConstant = TODO_CONSTANTS;
  todoIcons = ICONS;
  dialogData: any[] = [];
  selectDatafromlist:any;
  

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  /**
   * This will open the popup Emulator
   */
 async OpenPopup() {
    let dialogData = this.getforPopupData();
    console.log(dialogData,'ddialogData');
    
    const dialogref = this.dialog.open(PopupEmulatorComponent, {
      minHeight: "40vh",
      minWidth: "40vw",
      data:dialogData,
      disableClose: true,
    });
   let PopUpData = await dialogref.afterClosed().toPromise();
   this.Processdatafrompopup(PopUpData)
  }
/**
 * It will process the daata from the Popup
 */
  Processdatafrompopup(data:FormValues|null){
 if(data){
  let processData = this.ProcessDataValues(data);
  this.ApiCallPost(processData)
 }
  }
  /**
   * Process the Data for Api calls 
   * @param data 
   * @returns 
   */

ProcessDataValues(data:FormValues){
  console.log(data);
  
  return{
    taskName: data.taskName,
    description:data.description,
    date:data.date,
    isCompleted:false

  }
}
/**
 * Api Calls
 * @param formdata 
 */
ApiCallPost(formdata:FormValues){
  this.dialogData.push(formdata);
}
/**
 * This will get the data for the popup
 */
  getforPopupData(){
    return{
      formDataValues,
      heading:TODO_CONSTANTS
    }
  }
  selectedItems(selectedItems:any){
    this.selectDatafromlist = selectedItems;
  }
  /**
   * This will delete the List
   */
  deleteList(){
    this.dialogData.forEach((res:any,index: number )=>{
      if(res.taskName == this.selectDatafromlist.taskName){
        this.dialogData.splice(index, 1);
      }
    })
  }
  completedList(){
    this.dialogData.forEach((res:any,)=>{
      if(res.taskName == this.selectDatafromlist.taskName){
        res.isCompleted = true;
      }
    })
console.log(this.dialogData);

  }
  editList(){
    this.dialogData.forEach(async (res:any)=>{
      if(res.taskName == this.selectDatafromlist.taskName){
        const dialogref = this.dialog.open(PopupEmulatorComponent, {
          minHeight: "40vh",
          minWidth: "40vw",
          data:res,
          disableClose: true,
        });
       let PopUpData = await dialogref.afterClosed().toPromise();
       this.Processdatafrompopup(PopUpData)
      }
    })
  }
}
