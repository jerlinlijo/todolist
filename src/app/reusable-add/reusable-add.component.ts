import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FORMFIELDTYPES, ICONS } from "../enums/global-constants.enum";
import { FormData } from "../todo-home/todo-home.constants.enum";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-reusable-add",
  templateUrl: "./reusable-add.component.html",
  styleUrls: ["./reusable-add.component.scss"],
})
export class ReusableAddComponent {
  @Input() public formData: any;
  @Output() public closeComponent: EventEmitter<null> = new EventEmitter();
  todoIcons = ICONS;
  formTypes = FORMFIELDTYPES;
  public listofInputs!: FormData[];
  headingData: any;
  formInputdata: FormGroup = new FormGroup({});

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializer();
  }

  /**
   * This will initialise all the value for the Component
   */
  initializer() {
    this.formInput();
    this.buildForm();
  }

  /**
   * It will build the Input
   */
  formInput() {
    this.listofInputs = this.formData.formDataValues;
    this.headingData = this.formData.heading;
  }
  /**
   * It will build the Form
   */
  buildForm() {
    const buildForm = this.ProcessForm();
    this.formInputdata = this.formBuilder.group(buildForm);
  }

  /**
   * It will Process the Form
   */
  ProcessForm() {
    let dynamicData: any = {};
    this.listofInputs.forEach((res) => {
      dynamicData[res.item] = [null, res.validator];
    });
    return dynamicData;
  }
  /**
   * This will Close the Component
   * @param data
   */
  closeComponentFuction(data: any = null) {
    const close = this.closeComponent.emit(data);
  }
  /**
   * It will get the data and close the component
   */
  confirmPopup() {
    let finalDataValue = this.getValuefrom();
    this.closeComponentFuction(finalDataValue);
  }
  /**
   * it will get thw value from the formGroup
   */
  getValuefrom() {
    return this.formInputdata.value;
  }
}
