import React from "react";
import StickyScrollSpyNav from "./StickyScrollSpyNav";

function App() {
  return (
    <div>
      <StickyScrollSpyNav
        header={
          <div>
            <h1>123123</h1>
            <h1>123123</h1>
            <h1>123123</h1>
            <h1>123123</h1>
          </div>
        }
        nav={["BOX1", "BOX2", "BOX3"]}
      >
        <section style={{ height: "70vh", background: "orange" }} ref={React.createRef()}>
          BOX 1 Content
        </section>
        <section style={{ height: "70vh", background: "blue" }} ref={React.createRef()}>
          BOX 2 Content
        </section>
        <section style={{ height: "70vh", background: "green" }} ref={React.createRef()}>
          BOX 3 Content
        </section>
      </StickyScrollSpyNav>
    </div>
  );
}

export default App;
