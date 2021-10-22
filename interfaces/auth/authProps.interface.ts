import { ReactElement } from "react";
import { authUser } from "./authUser.interface";

export interface authProps {
    user?: authUser
    children?: ReactElement
}