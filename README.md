<div align="center">
    <h1><strong>Surff Design System🏄</strong></h1>
    <div>It's a Simple React UI Design System. Let's surff! 🌊</div>
</div>

## Link

- [Npm](https://www.npmjs.com/package/surff)
- [Storybook](https://minjeongss.github.io/surff)

## Installation

To use Surff, Install the `surff` package and its `peer dependencies`(styled-components).

```
pnpm add surff styled-components
yarn add surff styled-components
npm add surff styled-components
```

## Usage: Component

### Skeleton UI

#### Props

| Attribute |  Type  | Default |    Description    |
| :-------: | :----: | :-----: | :---------------: |
|   width   | number |   60    | Set up the width  |
|  height   | number |   60    | Set up the height |

#### Example

```tsx
import { Skeleton } from "surff";

function App() {
  return (
    <>
      <Skeleton />
    </>
  );
}

export default App;
```

## Usage: Custom Hook

### usePortal

```tsx
const Component = () => {
  const element = usePortal("portal");
  if (!element) return null;

  return createPortal(<div>Awesome Portal</div>, element);
};
```
