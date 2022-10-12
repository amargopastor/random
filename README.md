# RANDOM {

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/amargopastor/random/main?color=blue&style=for-the-badge)
![npm type definitions](https://img.shields.io/npm/types/typescript?logo=typescript&logoColor=white&style=for-the-badge)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/amargopastor/random?color=blueviolet&label=CODE%20SIZE&logo=github&style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/amargopastor/random?color=success&logo=github&logoColor=white&style=for-the-badge)

<p align="center">
  <img src="./images/cow.jpeg" style="width: 75%">
</p>

## Table of Contents

1. [Technologies](#technologies)
1. [About](#about)
1. [Set Up](#set-up)
1. [Project tree](#project-tree)
1. [Honorable mentions](#honorable-mentions)

## Technologies

- [NodeJS](https://nodejs.org/)
- [yarn](https://classic.yarnpkg.com/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Eslint](https://eslint.org/)

## About

An application that randomly paints a name on your terminal.

## Set Up

To download and start the project you need to run the following commands:

```bash
# Clone the project into your local pc
git clone https://github.com/amargopastor/random.git

# Move into it
cd random

# Install all the necessary dependencies (you can check them in the package.json)
yarn install
```

## Commands Availables

Once you've set up the project you're ready to run the scripts. Here there are different options:

```bash

# Generates a local file with information about the configured API
yarn seed || yarn run seed

# Run the app
yarn start || yarn run start
```

## Project tree

```
random
├─ .eslintrc.json
├─ .git
├─ .gitignore
├─ README.md
├─ images
│  └─ cow.jpeg
├─ package.json
├─ src
│  ├─ app.ts
│  ├─ config.ts
│  ├─ seed.ts
│  └─ types
│     ├─ character.type.ts
│     └─ data.type.ts
├─ tsconfig.json
└─ yarn.lock

```

## Honorable mentions

- 🍍

**[⬆ back to top](#random)**
