# react-sticky-scrollspy-nav

[![npm](https://img.shields.io/npm/v/react-sticky-scrollspy-nav.svg)](https://www.npmjs.com/package/react-sticky-scrollspy-nav)
[![npm](https://img.shields.io/npm/dt/react-sticky-scrollspy-nav.svg)](https://www.npmjs.com/package/react-sticky-scrollspy-nav)

`react-sticky-scrollspy-nav` is a simple react component that provides smooth scrolling navigation with sections to a web page.

<div align="center">
    <img src="https://user-images.githubusercontent.com/41982439/137305183-113a9183-3bc2-4d12-80cf-6cc6cab184d6.gif" alt="video" width="100%" />
</div>

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

1. Add \<section> tags to `StickyScrollSpyNav` component. You need to add `ref={createRef()}` to each section item.

```jsx
import ScrollSpy from "react-scrollspy-navigation";
```

```jsx
<ScrollSpy>
  <section ref={React.createRef()}>...</section>
  <section ref={React.createRef()}>...</section>
  <section ref={React.createRef()}>...</section>
</ScrollSpy>
```

2.  Add `nav` props to render nav component.

```jsx
<StickyScrollSpyNav nav={["Nav1", "Nav2", "Nav3"]}>...</StickyScrollSpyNav>
```

### Example Code.

```jsx
<StickyScrollSpyNav
  header={
    <div>
      <h1>Header content</h1>
      <h1>Header content</h1>
      <h1>Header content</h1>
    </div>
  }
  nav={["Nav1", "Nav2", "Nav3"]}
  navActiveItemStyle={{ color: "red" }}
>
  <section ref={React.createRef()} style={{ height: "70vh", background: "orange" }}>
    Nav 1 Content
  </section>
  <section ref={React.createRef()} style={{ height: "70vh", background: "blue" }}>
    Nav 2 Content
  </section>
  <section ref={React.createRef()} style={{ height: "70vh", background: "green" }}>
    Nav 3 Content
  </section>
</StickyScrollSpyNav>
```

## Props

Common props you may want to specify include:

| Properties           | PropType    | Description                                                                                 |
| -------------------- | ----------- | ------------------------------------------------------------------------------------------- |
| `nav`                | `string[]`  | (**Required**) navigation names with button tag.                                            |
| `header`             | `component` | header component.                                                                           |
| `offset`             | `number`    | offset from top of page.                                                                    |
| `onClickNav`         | `function`  | handler which clicks navigation item scrolling and focusing section. (has 'index' argument) |
| `style`              | `object`    | customize root style.                                                                       |
| `navContainerStyle`  | `object`    | customize navigation container style.                                                       |
| `navItemStyle`       | `object`    | customize navigation item style.                                                            |
| `navActiveItemStyle` | `object`    | customize navigation item style when activated.                                             |

## License

MIT License. Copyright (c) 2021 Junhyeok Heo (Huurray)
