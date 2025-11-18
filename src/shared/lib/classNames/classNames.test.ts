import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        expect(classNames('someClass', {}, ['additionalClass'])).toBe(
            'someClass additionalClass'
        );
    });

    test('with mod', () => {
        expect(
            classNames('someClass', { someMode: true }, ['additionalClass'])
        ).toBe('someClass additionalClass someMode');
    });

    test('with falsy mod', () => {
        expect(
            classNames('someClass', { someMode: false }, ['additionalClass'])
        ).toBe('someClass additionalClass');
    });

    test('with undefined mod', () => {
        expect(
            classNames('someClass', { someMode: undefined }, [
                'additionalClass',
            ])
        ).toBe('someClass additionalClass');
    });
});
