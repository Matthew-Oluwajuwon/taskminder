/* eslint-disable prettier/prettier */
import { RequiredMark } from "antd/es/form/Form";
import { ApiRequest } from "../client/request";

export namespace State {
  export class AppState {
    pageTitle?: string;
    tabKey?: string;
    openDrawer?: boolean;
    openModal?: boolean;
    openSubTask?: boolean;
    deleteTask?: boolean;
    inputValue?: string;
    subTask?: string;
    subTasks?: string[];
    requiredMark?: RequiredMark = "optional";
    subTaskInput?: Array<number> ;
    createNewTask?: ApiRequest.CreateNewTask;
  }
  
  export interface Auth {
    request: ApiRequest.Auth;
    showLogoutModal?: boolean;
    loginResponseMessage?: string;
    showPassword: boolean;
    isPasswordLength: boolean;
    isUpperCase: boolean;
    isLowerCase: boolean;
    hasNumber: boolean;
    isSpecialChar: boolean;
    postUrl: string;
  }
}
