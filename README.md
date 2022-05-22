
# IBM Grid

Simple IBM Technical test done using React & Tailwind CSS.


## Installation

Prerequisites:

- [Node.js](https://nodejs.org/) v14+
- [Yarn](https://yarnpkg.com/) (optional)

```sh
yarn install
```

```sh
npm i -D
```
## Usage

### Run Locally
```sh
yarn run start
```
```sh
npm run start
```

### Build
```sh
yarn run build
```
```sh
npm run build
```

## FAQ

#### Why use Tailwind CSS?

I decided to go with a utility-first CSS framework because of the size and scale of the project. It allows me to iterate fast and most values are already defined (colors, length, etc.).

#### Why didn't you use react-router/react-navigation/[insert any react routing package]?

This project only requires 2 routes and does not need any advanced features. A simple context is enough for our use-case.

#### Why use an iframe instead of using the real Google Maps API?

Because otherwise you will need your own Google Map API key to run the project and I can't really publish mine because this repository is public.

#### Why didn't you use memoization for the grid?

Because the performance gain would not be worth it.

## Authors

- [@VoKhuong](https://github.com/VoKhuong)
