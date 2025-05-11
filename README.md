<div align="center">
    <h1><strong>Surff</strong></h1>
    <div>It's a Simple React UI Design System. Let's surff! 🌊</div>
</div>

## Link

- [NPM](https://www.npmjs.com/package/surff)
- [Storybook](https://minjeongss.github.io/surff)

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
