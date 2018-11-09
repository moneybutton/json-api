# @moneybutton/json-api

![banner](assets/blue-white.png)

[![npm version](https://badge.fury.io/js/%40moneybutton%2Fjson-api.svg)](https://badge.fury.io/js/%40moneybutton%2Fjson-api)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Money Button isomorphic JSON API utilities.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Maintainers](#maintainers)
- [Contribute](#contribute)
- [License](#license)

## Background

[Money Button](https://www.moneybutton.com) is a UI/UX and API layer for the blockchain which takes 0% transaction fees and makes Bitcoin Cash easy for everyone, everywhere.

## Install

```
yarn add -E @moneybutton/json-api
```

or

```
npm install --exact @moneybutton/json-api
```

## Usage

```
const { toResourceObject } = require('@moneybutton/json-api')
console.log(toResourceObject('some user id', 'users', { name: 'John Doe' }))
// { id: 'some user id', type: 'users', attributes: { name: 'John Doe' } }
```

## API

For in-detail API documentation, please see our automatically generated [docs](https://htmlpreview.github.io/?https://github.com/moneybutton/json-api/blob/master/docs/index.html).

## Maintainers

[@ealmansi](https://github.com/ealmansi)
[@hojarasca](https://github.com/hojarasca)
[@kevinejohn](https://github.com/kevinejohn)
[@ryanxcharles](https://github.com/ryanxcharles)

## Contribute

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2018 Yours Inc.
