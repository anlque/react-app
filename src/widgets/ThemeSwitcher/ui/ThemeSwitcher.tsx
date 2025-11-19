import { useTheme } from 'app/prodivers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import cls from './ThemeSwitcher.module.scss';

import IconTheme from 'shared/assets/icons/icon-theme.svg';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
        >
            <IconTheme className={cls.icon} />
        </Button>
    );
};
