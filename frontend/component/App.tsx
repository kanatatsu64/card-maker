import React from "react";

const App = () => {
  const [greeting, setGreeting] = React.useState<String | null>(null);
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const handle = () => {
    setGreeting("hello there");
    setDisabled(true);
  };

  return (
    <div>
      <h1>Hello, world!</h1>
      <p>This is a simple React app.</p>

      <button onClick={handle} disabled={disabled}>
        Load Greeting
      </button>
      {greeting && <p aria-label="greeting">{greeting}</p>}
    </div>
  );
};

export default App;
