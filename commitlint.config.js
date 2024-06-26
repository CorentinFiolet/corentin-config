export default {
    extends: ['@commitlint/config-angular'],
    rules: {
        'type-enum': [
            2,
            'always',
            ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert', 'ci'],
        ],
    },
};
