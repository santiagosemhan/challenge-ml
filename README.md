# Mercado libre Challenge

This project is a challenge test to Mercado Libre company.  
Feel free to send a PR or comment any issue you found.

The project it's currently using the following technologies:

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- [Currently nor unit and integration test are implemented] Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

## Preview

Preview the challenge live on [vercel](https://challenge-ml.vercel.app/):

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/santiagosemhan/challenge-ml.git)

## How to use

Install dependencies

```bash
yarn
```

Load env vars using `.env.local.sample.` Create a file `.env.local` with the same content.

Run the project

```bash
yarn dev
```

## TODOS

- Refactor backend network calls to services approach.
- Responsive views for mobile/tablets devices.
- Add unit testing
- Add integration tests using tools like cypress.io
- Improve typescript support. (Currently, there are many types with any or using generics). So, it would be nice to have 100% code typing support both for backend and frontend types.
