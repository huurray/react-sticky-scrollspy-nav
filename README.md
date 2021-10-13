# react-sticky-scrollspy-nav

`react-sticky-scrollspy-nav` is a React component that provides smooth scrolling navigation with sections to a web page.

## How to install

Install via NPM package manager

```
npm i react-sticky-scrollspy-nav
```

Install via Yarn package manager

```
yarn add react-sticky-scrollspy-nav
```

## How to use it

- Add `StickyScrollSpyNav` component to your code and add \<section> tags. You need to add `ref={createRef()}` to each section item.

```jsx
import ScrollSpy from "react-scrollspy-navigation";
```

```jsx
// Last item won't use as ScrollSpy item, but you can place there
<ScrollSpy>
  <section ref={React.createRef()}>...</section>
  <section ref={React.createRef()}>...</section>
  <section ref={React.createRef()}>...</section>
</ScrollSpy>
```

## License

MIT License. Copyright (c) 2021 Junhyeok Heo(Huurray)
