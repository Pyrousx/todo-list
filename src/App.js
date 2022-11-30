//Todo:
//1. Create Header
//2. Decide on color scheme
//3. Install font
//4. Install icons
//5. Research CSS animations?
//6. Create components:
//  a. Todo list element
//  b. Todo List

import React from "react";
import Header from "./components/Header";
import List from "./components/List";
function App() {
  return (
    <div className="App">
      <Header />
      <List />
    </div>
  );
}

export default App;
