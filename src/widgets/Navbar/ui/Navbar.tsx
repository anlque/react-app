import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import cls from './Navbar.module.scss';

interface NavbarProps {
    classname?: string;
}

export const Navbar = ({ classname = '' }: NavbarProps) => {
    return (
        <div className={classNames('Navbar', {}, [cls.navbar, classname])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.INVERTED} to="/">
                    Main
                </AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to="/about">
                    About
                </AppLink>
            </div>
        </div>
    );
};
