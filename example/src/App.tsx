import React from "react";
import StickyScrollSpyNav from "./StickyScrollSpyNav";

function App() {
  return (
    <div>
      <StickyScrollSpyNav
        header={
          <div>
            <h1 style={{ marginBottom: 0 }}>Header Component</h1>
            <p style={{ lineHeight: 1.4, marginBottom: 0 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p style={{ lineHeight: 1.4 }}>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on purpose (injected
              humour and the like).
            </p>
          </div>
        }
        nav={["Nav1", "Nav2", "Nav3", "Nav4", "Nav5"]}
        navItemStyle={{ padding: 14, margin: "5px 0", fontSize: 16 }}
        navActiveItemStyle={{ fontWeight: "bold", borderBottom: "2px solid black" }}
      >
        <section ref={React.createRef()} style={{ height: "50vh", background: "#D6CA89" }}>
          Nav 1 Content
        </section>
        <section ref={React.createRef()} style={{ height: "30vh", background: "#879463" }}>
          Nav 2 Content
        </section>
        <section ref={React.createRef()} style={{ height: "40vh", background: "#785443" }}>
          Nav 3 Content
        </section>
        <section ref={React.createRef()} style={{ height: "60vh", background: "#D3BCA0" }}>
          Nav 4 Content
        </section>
        <section ref={React.createRef()} style={{ height: "50vh", background: "#E9DFD5" }}>
          Nav 5 Content
        </section>
      </StickyScrollSpyNav>
    </div>
  );
}

export default App;
