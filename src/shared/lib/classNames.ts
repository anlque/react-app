type Modes = Record<string, string | boolean>;

export const classNames = (
    cls: string,
    modes: Modes = {},
    additional: string[] = []
) => {
    return [
        cls,
        ...additional.filter(Boolean),
        Object.entries(modes)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
};
