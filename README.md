# React Boilerplate

A *Next.js* based boilerplate for *React* applications development, with *Typescript* and built-in basic components and utilities.

---

## Getting started
To setup a new project, just run the following command:
```bash
npx create-next-app --use-npm --ts -e "https://github.com/hintocode/react-boilerplate" --example-path boilerplate
```
If you're cloning an existing repo containing a preconfigured project, simply run the following command instead:
```bash
npm install
```

## Source code organization
- [__api__](/boilerplate/api): it should collect all API endpoints definition along with a global API client with centralized logic (please don't confuse it with the pages/api folder from Next.js scaffolding)

- [__components__](/boilerplate/src/components): it collects presentational components, i.e. components which are agnostic to the application data and business logic; they should always receive abstract data through props and never refer to a specific context (the theme could be an exception), so they can preserve their independency and easily moved between different projects

- [__containers__](/boilerplate/src/containers): it collects closely project-related components, that can be both stand-alone and an aggregation of presentational components with real data implementation

- [__contexts__](/boilerplate/src/contexts): it collects the application contexts, implemented according to the *React's Context API* (e.g. Auth, Translations, etc)

- [__decorators__](/boilerplate/src/decorators): it collects high order components

- [__hooks__](/boilerplate/src/hooks): it collects custom React hooks

- [__middleware__](/boilerplate/src/middleware): it eventually collects middleware, useful for server-side logic development (auth, session, etc)

- [__mock__](/boilerplate/src/mock): it collects mock data, useful as fallback for async data retrieving or to keep static data well organized and to prevent hardcoding or simply for development purposes

- [__models__](/boilerplate/src/models): it (eventually) collects entity classes/interfaces, useful for remapping backend data, to encapsulate features closely related to the entity and, more in general, to encourage a stronger data sets typing

- [__pages__](/boilerplate/src/pages): it contains the Next.js page controllers (including api routes)

- [__theme__](/boilerplate/src/theme): it collects all theme related stuff built on top of *Styled Components*, e.g. design tokens, global styles and theme helpers

- [__utils__](/boilerplate/src/utils): it (eventually) collects utility related helpers

- [__views__](/boilerplate/src/views): it collects templates and page views


## Workflow, devtools and best practices
The basics of the workflow are listed below. For more information, please refer to the [*Next.js* documentation](https://nextjs.org/docs/getting-started).

### Development
To start development, run the following command:
```bash
npm run dev
```
Your app will be available at [http://localhost:3000](http://localhost:3000) along with *HMR* support.

### Linting and type checking
To check your code, you can rely on both built-in *ESLint* and *Typescript*. Simply run the following commands:
```bash
npm run lint
```
```bash
npm run type-check
```

### Template snippets (reserved feature)
To speed up development and to grant more code consistency, take a look at [@hinto/react-snippets](https://github.com/hintocode/react-snippets).

### Production

#### Dynamic apps
To build the production bundle of a dynamic app, run the following command:
```bash
npm run build
```
Now, you can deploy your application and launch it on your production environment by running the following command:
```bash
npm run start
```

#### Static sites
To export a static application, run the following command:
```bash
npm run build:static
```
This will generate a static output (look at *out* folder after execution) ready to be deployed on your production environment.
