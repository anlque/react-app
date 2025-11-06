import {classNames} from 'shared/lib/classNames'
import cls from './AppLink.module.scss'
import { NavLink, type NavLinkProps } from "react-router-dom";
import {FC} from "react";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
}

interface AppLinkProps extends NavLinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {to, children, className,theme = AppLinkTheme.PRIMARY, ...otherProps} = props
    return <NavLink
                    to={to}
                    className={classNames(cls.AppLink, {}, [className, cls[theme]])}
                    {...otherProps}>{children}
    </NavLink>
}