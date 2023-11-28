import { defineConfig } from '@vscode/test-cli';

module.exports = defineConfig([
    {
        label: 'unitTests',
        files: 'out/test/**/*.test.js',
        mocha: {
            ui: 'tdd', 		// the TDD UI is being used in extension.test.ts (suite, test, etc.)
            useColors: true // colored output from test results
        }
    }
]);
