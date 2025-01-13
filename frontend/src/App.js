// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccountForm from "./components/AccountForm";
 
import "./App.css";
import "./input.css";
import BeneficiaryTable from "./components/BeneficiaryTable";
 
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AccountForm />} />
        <Route path="/table" element={<BeneficiaryTable  />} /> 
      </Routes>
    </Router>
  );
};

export default App; 

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
