import React from "react";
import './../styles/App.css';

const PageLayout = ({ header, footer, children }) => {
  return (
    <div>
      {header}
      {children}
      {footer}
    </div>
  );
};

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <PageLayout
        header={<header><h1>Welcome to my website</h1></header>}
        footer={<footer><h4>C 2023 My Website. All rights reserved</h4></footer>}
      >
        <h4>This is the content of my website</h4>
      </PageLayout>
    </div>
  );
};

export default App;
