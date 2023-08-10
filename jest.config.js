module.exports = {
    verbose: true,
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/src/test.ts'],
    testRegex: '(/__tests__/.*|(\\.|/)(jest.test|jest.spec|jest))\\.[jt]sx?$',
    collectCoverageFrom: ['<rootDir>/src/**/*.(component|pipe|service|directive|resolver|guard|interceptor).ts']
};