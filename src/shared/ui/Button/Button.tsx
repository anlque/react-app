import {classNames} from 'shared/lib/classNames'
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ThemeButton
    className?: string
}

export const Button: FC<ButtonProps> = (props) => {
    const {theme = ThemeButton.CLEAR,className,children, ...otherProps} = props
    return <button className={classNames(cls.Button, {}, [cls[theme], className])} {...otherProps}>{children}</button>
}