import {classNames} from 'shared/lib/classNames'
import cls from './ThemeSwitcher.module.scss'
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTheme} from "app/prodivers/ThemeProvider";
import IconLight from 'shared/assets/icons/theme-light.svg'
import IconDark from 'shared/assets/icons/theme-dark.svg'
import {Theme} from "app/prodivers/ThemeProvider";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}:ThemeSwitcherProps) => {
    const { theme, toggleTheme} = useTheme();

    return <Button
        onClick={toggleTheme}
        theme={ThemeButton.CLEAR}
        className={classNames(cls.ThemeSwitcher, {}, [className])}>
        {theme === Theme.LIGHT ? <IconDark /> : <IconLight /> }
    </Button>
}