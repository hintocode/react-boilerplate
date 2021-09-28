module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**'
  ],
  coverageDirectory: '<rootDir>/__coverage__',
  moduleNameMapper: {
    '^@api/(.*)$': '<rootDir>/src/api/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@containers/(.*)$': '<rootDir>/src/containers/$1',
    '^@contexts/(.*)$': '<rootDir>/src/contexts/$1',
    '^@decorators/(.*)$': '<rootDir>/src/decorators/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@mock/(.*)$': '<rootDir>/src/mock/$1',
    '^@models/(.*)$': '<rootDir>/src/models/$1',
    '^@theme': '<rootDir>/src/theme',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@views/(.*)$': '<rootDir>/src/views/$1'
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  transformIgnorePatterns: ['/node_modules/']
}
