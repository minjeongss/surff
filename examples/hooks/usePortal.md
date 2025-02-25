# usePortal

## Example

```tsx
const Component = () => {
  const element = usePortal("portal");
  if (!element) return null;

  return createPortal(<div>Awesome Portal</div>, element);
};
```
