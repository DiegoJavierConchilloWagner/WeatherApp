module.exports = {
	preset: 'ts-jest',
	coverageDirectory: 'coverage',
	roots: ['<rootDir>/src'],
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
	testEnvironment: 'jest-environment-jsdom',
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: {
		'\\.svg$': '<rootDir>/src/__mocks__/svgrMock.ts',
		'\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
		'src/(.*)': '<rootDir>/src/$1',
		'\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.ts',
		'\\.(png|jpg|webp|ttf|woff|woff2|svg|mp4)$': '<rootDir>/src/__mocks__/fileMock.ts',
		'^@common/(.*)$': '<rootDir>/src/app/common/$1',
		'^@components/(.*)$': '<rootDir>/src/app/components/$1',
		'^@hooks/(.*)$': '<rootDir>/src/app/hooks/$1',
		'^@pages/(.*)$': '<rootDir>/src/app/pages/$1',
		'^@redux/(.*)$': '<rootDir>/src/app/redux/$1',
		'^@routes/(.*)$': '<rootDir>/src/app/routes/$1',
		'^@services/(.*)$': '<rootDir>/src/app/services/$1',
		'^@styled/(.*)$': '<rootDir>/src/app/styled/$1'
	},
	collectCoverageFrom: ['<rootDir>/src/app/**/*.{ts,tsx}', '!**/*.d.ts']
};
