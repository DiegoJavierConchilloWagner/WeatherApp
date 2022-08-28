<h1 align="center">
    <img alt="template-react-ts" src="https://res.cloudinary.com/zagatti/image/upload/v1595947810/readme/react-ts-template/Al9qmDn_j0eiug.png" />
    <br>
    React Typescript Upway Template
</h1>

<p align="center">
  <a href="#ℹ%EF%B8%8F-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-packages">Packages</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-customize">Customize</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-deploy">Deploy</a>
</p>

## ℹ️ About

<div align="center">

  <p align="center">
    I recently started using React by creating my own Webpack and configuring the project as I think it looks best, so I created this initial template and I intend to keep it updated.
  </p>

</div>

## 🖥 Packages

The project was started with the following packages:

- [Dotenv](http://npmjs.com/package/dotenv)
- [React](https://pt-br.reactjs.org/)
- [React DOM](https://pt-br.reactjs.org/docs/react-dom.html)
- [React Router Dom](https://reacttraining.com/react-router/web/)
- [Styled Components](https://styled-components.com/)
- [Typescript](https://www.typescriptlang.org/)

In the dev dependencies the Webpack, Jest, Fast Refresh, Eslint and Prettier are configured.

## 🚀 Getting started

First of all you need to have `node` and `yarn`(or `npm`) installed on your machine.

_If you decide to use npm don't forget to delete yarn.lock in folders_

Press the `Use this template` button on Github and create your own repository.

Clone your repo to your local machine.

1. `git clone my-app`
2. `cd my-app`
3. `yarn` or `npm install`
4. `yarn start` or `npm run start`

To run the tests, after the dependencies are installed, run `yarn test`.

`yarn test:watch` to keep testing observing changes.

`yarn test:coverage` to generate the test coverage report in the files.


## ✈️ Deploy

I recommend deploy using `yarn build:server` script, for this your VPS need to
have installed `docker` and `docker-compose`. This script will up a machina with
nginx. But you are able to run `yarn build` and make your own deploy.

---
