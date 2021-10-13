import React, { useEffect, useRef, useState } from "react";
// lib
import { throttle } from "./lib/tools";

interface Props {
  header: React.ReactNode;
  nav: string[];
  children: React.ReactNode[] | any[];
  navContainerStyle?: {};
  navItemStyle?: {};
}
function StickyScrollSpyNav({ header, nav, children, navContainerStyle, navItemStyle }: Props) {
  const navEl: any = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  const onScroll = throttle(() => {
    const scrollElement = document.scrollingElement || document.documentElement;
    const outerHeight = window.innerHeight;
    const scrollTop = scrollElement.scrollTop;
    const scrollHeight = scrollElement.scrollHeight;
    const firstEl = children[0]?.ref?.current;

    const isNotStart = firstEl && firstEl.offsetTop > scrollTop;
    const isEnd = scrollTop + outerHeight >= scrollHeight;

    if (isNotStart) {
      firstEl.classList.add("active");
    } else if (isEnd) {
      const lastEl = children[children.length - 1]?.ref?.current;
      const lastBoforeEl = children[children.length - 2]?.ref?.current;
      if (lastEl && lastBoforeEl) {
        lastEl.classList.add("active");
        lastBoforeEl.classList.remove("active");
      }
    } else {
      children.forEach((el) => {
        const target = el?.ref?.current;
        if (target) {
          const visibleVertical =
            target.offsetTop >= 0 &&
            scrollElement.scrollTop + navHeight >= target.offsetTop &&
            scrollElement.scrollTop + navHeight < target.offsetTop + target.offsetHeight;

          if (visibleVertical) {
            target.classList.add("active");
          } else {
            target.classList.remove("active");
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
    <div>
      {header}
      <nav ref={navEl} style={{ position: "sticky", top: 0, ...navContainerStyle }}>
        {nav.map((navName, i) => (
          <button onClick={() => handleClick(i)} key={`${navName}${i}`} style={navItemStyle}>
            {navName}
          </button>
        ))}
      </nav>
      {children}
    </div>
  );
}

export default StickyScrollSpyNav;
