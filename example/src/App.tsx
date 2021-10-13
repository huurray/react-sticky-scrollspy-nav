import React from "react";
import StickyScrollSpyNav from "./StickyScrollSpyNav";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
