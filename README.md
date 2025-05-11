<h1 align="center">Surff UI</h1>

<div align="center">

[![NPM Badge](https://img.shields.io/badge/Downloads!-black?style=social&logo=npm&logoColor=red&link=https://www.npmjs.com/package/surff&label=NPM)](https://www.npmjs.com/package/surff)
[![Storybook Badge](https://img.shields.io/badge/Examples!-black?style=social&logo=storybook&logoColor=FF4785&link=https://minjeongss.github.io/surff&label=Storybook%20|%20스토리북)](https://minjeongss.github.io/surff)

</div>

## Installation

To use Surff, Install the `surff` package and its `peer dependencies`(tailwindcss).

```
pnpm install surff tailwindcss
npm install surff tailwindcss
yarn add surff tailwindcss
```

## Usage

### Components

- Modal

| Attribute |          Type           | Default  | Optional | Description                                    |
| :-------: | :---------------------: | :------: | :------: | ---------------------------------------------- |
|  isOpen   |         boolean         |          |    X     | Control the visibility                         |
|  onClose  |       () => void        |          |    X     | Callback function to handle modal close action |
|  header   |        ReactNode        |          |    X     | Define the header content                      |
|   body    |        ReactNode        |          |    X     | Define the main content                        |
| position  | 'top','center','bottom' | 'center' |    O     | Define the position                            |

- Skeleton

| Attribute |  Type  | Default | Optional | Description       |
| :-------: | :----: | :-----: | :------: | ----------------- |
|   width   | number |   60    |    O     | Set up the width  |
|  height   | number |   60    |    O     | Set up the height |

### Custom hooks

- usePortal
- useOnClickOutSide
- useDisclosure
- useFadeOutMotion
