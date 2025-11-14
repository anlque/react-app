/** @type {import('stylelint').Config} */
export default {
    extends: ['stylelint-config-standard'],
    plugins: ['stylelint-scss'],
    rules: {
        'selector-class-pattern': null,
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'number-max-precision': null,
    },
};
