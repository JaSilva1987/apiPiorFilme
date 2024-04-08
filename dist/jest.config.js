"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = async () => {
    return {
        verbose: true,
        moduleFileExtensions: ['js', 'json', 'ts'],
        rootDir: 'src',
        moduleNameMapper: {
            '^@/(.*)$': '<rootDir>/src/$1',
            '^src/database/entity/(.*)$': '<rootDir>/database/entity/$1'
        },
        testRegex: '.spec.ts$',
        transform: { '^.+\\.(t|j)s$': 'ts-jest' },
        coverageDirectory: '../src/coverage',
        coveragePathIgnorePatterns: [
            'coverage',
            'node-modules',
            'main.ts',
            'constants.ts',
        ],
        coverageThreshold: {
            global: {
                branches: 80,
                functions: 80,
                lines: 80,
                statements: 80,
            },
        },
        testEnvironment: 'node',
        coverageReporters: ['json-summary', 'text', 'lcov'],
        reporters: ['default', ['jest-junit', { suiteName: 'jests tests' }]],
    };
};
//# sourceMappingURL=jest.config.js.map