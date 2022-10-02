import { ReactNode } from "react";
import { IUser } from "../interfaces";

export interface ITemplateProps {
  children: ReactNode;
  headTitle?: string;
  user: IUser;
}
