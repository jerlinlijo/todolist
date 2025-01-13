import { ValidatorFn, Validators } from "@angular/forms";

export enum TODO_CONSTANTS {
  APP_TOOL_BUTTON = "Add",
  ADD_LIST = "Add List",
  LIST = "Total List",
  CANCEL = "Cancel",
  CONFIRM = "Confirm",
}
export interface FormData {
  item: string;
  name: string;
  type: string;
  placeholder: string;
  prefix: boolean;
  suffix: boolean;
  validator: ValidatorFn[];
  required: boolean;
}

export interface FormValues {
  taskName: string;
  description: string;
  date: Date;
  isCompleted: boolean;
}
export const formDataValues: FormData[] = [
  {
    item: "taskName",
    name: "Task Name",
    type: "text",
    placeholder: "Enter Task",
    prefix: false,
    suffix: false,
    validator: [Validators.required],
    required: true,
  },
  {
    item: "description",
    name: "Description",
    type: "textarea",
    placeholder: "Enter description",
    prefix: false,
    suffix: false,
    validator: [Validators.required],
    required: true,
  },
  {
    item: "date",
    name: "Date",
    type: "datepicker",
    placeholder: "Select the date",
    prefix: false,
    suffix: false,
    validator: [Validators.required],
    required: true,
  },
];
