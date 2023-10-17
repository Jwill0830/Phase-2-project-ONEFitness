import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from './NavBar';
import Footer from './Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/NavBar",
    element: <NavBar />
  },
  {
    path: "/Footer",
    element: <Footer />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

function App() {
  return (
    <div className="App">
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;