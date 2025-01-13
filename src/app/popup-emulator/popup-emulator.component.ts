import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-emulator',
  templateUrl: './popup-emulator.component.html',
  styleUrls: ['./popup-emulator.component.scss']
})
export class PopupEmulatorComponent {
  constructor(    @Inject(MAT_DIALOG_DATA) public PopUpData:any,
  public dialogref: MatDialogRef<PopupEmulatorComponent>,
  ) {}

  ngOnInit(): void {}

    /**
   * 
   * @param resData This will close the component 
   */
  
    closePopComponent(resData:any){
      this.dialogref.close(resData);
    
    }
}
