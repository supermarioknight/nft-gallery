# NFT GALLERY

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A NFT Gallery that allows you to connect your crypto wallet and display your NFTs.

## Table of Contents

- [NFT GALLERY](#nft-gallery)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)

## Installation

Install Dependencies:

```
yarn
```

Start the project:

```
yarn dev
```

Build the proejct:

```
yarn build
```

Test the project:

```
yarn test
```

You'll need to setup 2 env vars as well, refer to the `env.sample.local` file

## Usage

Connect crypto wallet and view your NFTs

## Features

List the key features of your project. Highlight what makes it unique and useful.

-   Use your own cryto wallet to connect to the website and view your NFTs

    > Wagmi and Rainbowkit for web3 connections, AlchemySDK for fetching the NFT data. There's also EthersJS which can be used to write custom hooks.

-   Click on NFT images to zoom in and keeps tracks of your click history

    > Using React Three Fiber to load images into canvas and movement, Redux toolkit is being used to manage state globly, the click history state is managed by redux, that data is being used in the footer component for display the click history.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

Mention any resources, libraries, or tutorials that were helpful in developing your project.

-   [RainbowKit](https://www.rainbowkit.com/)
-   [Wagmi](https://wagmi.sh/)
-   [EthersJS](https://docs.ethers.org/v5/)
-   [AlchemySDK](https://www.alchemy.com/sdk)
-   [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
-   [Jest](https://jestjs.io/)
