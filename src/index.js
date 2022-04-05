import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client"
import GitExpertApp from './components/GitExpertApp';
import './index.css';


// ReactDOM.render(
//     <GitExpertApp />,
//   document.getElementById('root')
// );

createRoot(
  document.getElementById("root")
).render(
  <GitExpertApp />
)

