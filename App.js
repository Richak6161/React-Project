const parent = React.createElement("div",
{ id: "parent"},
React.createElement(
    "div",
    { id: "child1"},
    [React.createElement("h1",{ id: "child2"},"Hello from child1"),
     React.createElement("h2",{ id: "child2"},"Hello from child2")]));

// React.createElement("div",
// { id: "parent"},
// [React.createElement("h1",{ id: "child3"},"Hello from child3"),
// React.createElement("h2",{ id: "child4"},"Hello from child4")]
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);