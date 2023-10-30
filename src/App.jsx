import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./Header";
import TabButton from "./TabButton";
import "./index.css";
import { useState } from "react";

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  let [selectedTab, setSelectedTab] = useState("");
  function handleSelect(name) {
    setSelectedTab(name);
  }
  /* Using map to create the li's  */
  const tiles = CORE_CONCEPTS.map((obj) => {
    return <CoreConcept key={obj.title} {...obj} />;
  });

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* Props:  Values passed into tags which can be accessed 
                        through component as obj */}
            {tiles}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* Implementing arrow function directly without storing in a variable */}
            {CORE_CONCEPTS.map((concept) => (
              <TabButton
                key={concept.title}
                isActive={selectedTab === concept.title.toLowerCase()}
                onSelect={() => handleSelect(concept.title.toLowerCase())}
              >
                {concept.title}
              </TabButton>
            ))}
          </menu>
          {/* Handling tabs when not selected/page load */}
          {selectedTab === "" ? (
            ""
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTab].title}</h3>
              <p>{EXAMPLES[selectedTab].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTab].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;