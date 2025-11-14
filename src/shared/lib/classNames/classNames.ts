type Modes = Record<string, string | boolean>;

export const classNames = (
    cls: string,
    modes: Modes = {},
    additional: string[] = []
) => {
    const modeClasses = Object.entries(modes)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className);
    return [cls, ...additional.filter(Boolean), ...modeClasses].join(' ');
};
