import type { Config } from 'jest';

export default async (): Promise<Config> => {
  return {
    verbose: true,
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: 'src',
    moduleNameMapper: {
      'ˆ@/(.*)$': '<rootDir>/App/$1',
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
