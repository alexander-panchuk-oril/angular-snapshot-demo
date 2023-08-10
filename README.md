# 🤵🤵‍ Secret Agents - 📸 Snapshot testing

Demo project for snapshot testing based on [Angular](https://angular.io/) and [Jest](https://jestjs.io/). 

Simple app with a list of secret agents and the ability to sort them.

## 🏁 Getting started
1. Make sure you have the [Angular CLI](https://cli.angular.io/) installed globally.
2. Clone repo or download it as a ZIP.
3. In the project root folder run `npm install` to install packages (I use [NPM](https://www.npmjs.com/get-npm) to manage the dependencies, so I strongly recommend you to use it).
4. Run `ng serve` for a dev server and navigate to `http://localhost:4200/`.

## 🧪 Run tests 

Run `npm run test:jest` to execute tests via [Jest](https://jestjs.io/) in a watch mode. 

To update snapshots run `npm run test:jest--updateSnapshot` or press <kbd>U</kbd> in the watch mode.

To check code coverage run `npm run test:jest--coverage`.


## ⚙️ Setup Angular testing with Jest

For my apps, I've decided to use Jest alongside Karma, for one major reason: 

>**To be able to add Jest snapshot testing without changes into an already existing project with Karma tests.**

1. Installing dependencies
```bash
npm install jest jest-preset-angular @types/jest --save-dev
``` 
2. In a root folder create the main config file
 **jest.config.js**:
 ```typescript
module.exports = {
    verbose: true,
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/src/test.ts'],
    testRegex: '(/__tests__/.*|(\\.|/)(jest.test|jest.spec|jest))\\.[jt]sx?$',
    collectCoverageFrom: ['<rootDir>/src/**/*.(component|pipe|service|directive|resolver|guard|interceptor).ts']
};
 ```
3. In a root folder create file **jest.setup.ts** and add the following:
```typescript
import 'zone.js';
import 'zone.js/testing';
import 'jest-preset-angular';
import { TestBed } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
```
4. In **tsconfig.spec.json** change `"jasmine"` to `"jest"` in `compilerOptions.types`
```json 
"compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jest",
      "node"
    ]
  }
```
5. To add Jest typings create a `global.d.ts` file in `<rootDir>/src` and add type import:
```typescript
import '@types/jest';
```
6. In your `package.json` add custom scripts in `"scripts"` object:
```json
"test:jest" : "jest --watch",
"test:jest--c": "jest --coverage",
"test:jest--u": "jest --updateSnapshot",
```

🛎️ If you have issues related to imports, you should consider setting `esModuleInterop` to `true` in your `tsconfig.json`:
```json
"esModuleInterop": true
```

## 📸 Jest Snapshot configuration


1. You need to create `<name>.<type>.jest.spec.ts` file (e.g. `agent.component.jest.spec.ts`, `agent.service.jest.spec.ts, etc.`):
>where `<name>` is class name (e.g. app, agent, etc.) and `<type>` is angular component type (e.g. component | service | directive, etc.). 

2. Use basic testing template:
```typescript
describe('AgentComponent', () => {
  let component: AgentComponent;
  let fixture: ComponentFixture<AgentComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ AgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentComponent);
    component = fixture.componentInstance;
  });
});
```
3. Add snapshot test.

To test layout markup: 
```typescript
  it('should renders markup to snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
```
To test object values:
```typescript
 it('[snapshot] should sort agents by name', () => {
    const sortedAgents = component.sortByName();
    expect(sortedAgents).toMatchSnapshot();
  });
```
4. Run tests
`npm run test:jest`

5. To update snapshots run `npm run test:jest--updateSnapshot` or press <kbd>U</kbd> in the watch mode. 

## 📢 Feedback 
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## 📄 License
[MIT](https://choosealicense.com/licenses/mit/)