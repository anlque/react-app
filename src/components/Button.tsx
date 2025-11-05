import classes from './Button.module.scss'
import {FC} from "react";

interface ButtonProps {
    onClick: ()=> void;
}

export const Button: FC<ButtonProps> = ({onClick})=> {
    return (
            <button className={classes.button} onClick={onClick}>
                toggle
            </button>
        );
    }

