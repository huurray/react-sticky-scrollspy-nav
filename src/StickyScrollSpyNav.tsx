import React, { useEffect, useRef, useState } from "react";
// lib
import { throttle } from "./lib/tools";

interface Props {
  nav: string[];
  children: React.ReactNode[] | any[];
  // optional
  header?: React.ReactNode;
  navContainerStyle?: {};
  navActiveItemStyle?: {};
  navItemStyle?: {};
  style?: {};
}
function StickyScrollSpyNav({
  header,
  nav,
  children,
  navContainerStyle,
  navItemStyle,
  navActiveItemStyle,
  style,
}: Props) {
  const navEl: any = useRef(null);
  const [navHeight, setNavHeight] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScroll = throttle(() => {
    const scrollElement = document.scrollingElement || document.documentElement;
    const outerHeight = window.innerHeight;
    const scrollTop = scrollElement.scrollTop;
    const scrollHeight = scrollElement.scrollHeight;
    const firstEl = children[0]?.ref?.current;

    const isNotStart = firstEl && firstEl.offsetTop > scrollTop;
    const isEnd = scrollTop + outerHeight >= scrollHeight;

    if (isNotStart) {
      setCurrentIndex(0);
    } else if (isEnd) {
      setCurrentIndex(children.length - 1);
    } else {
      children.forEach((el, index) => {
        const target = el?.ref?.current;
        if (target) {
          const visibleVertical =
            target.offsetTop >= 0 &&
            scrollElement.scrollTop + navHeight >= target.offsetTop &&
            scrollElement.scrollTop + navHeight < target.offsetTop + target.offsetHeight;

          if (visibleVertical) {
            setCurrentIndex(index);
          }
        }
      });
    }
  });

  const handleClick = (index: number) => {
    const offsetTop = children[index]?.ref?.current.offsetTop || 0;
    window.scrollTo({ top: offsetTop - navHeight, behavior: "smooth" });
  };

  useEffect(() => {
    setNavHeight(navEl?.current?.clientHeight || 0);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <div style={style}>
      {header ? header : null}
      <nav ref={navEl} style={{ position: "sticky", top: 0, ...navContainerStyle }}>
        {nav.map((navName, index) => (
          <button
            onClick={() => handleClick(index)}
            key={`${navName}${index}`}
            style={currentIndex === index ? navActiveItemStyle : navItemStyle}
          >
            {navName}
          </button>
        ))}
      </nav>
      {children}
    </div>
  );
}

export default StickyScrollSpyNav;
