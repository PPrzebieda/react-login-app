import "./App.css";
import "./myStyles.css";
import LoginComponent from "./LoginComponent.js";
import RegisterComponent from "./RegisterComponent.js";
import DashboardComponent from "./DashboardComponent.js";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(1);
  const [actualUser, setActualUser] = useState("");

  const user = (userData) => {
    setActualUser(userData);
  };

  const childToParent = (childdata) => {
    setData(childdata);
  };

  const visibleChild = (visible) => {
    setVisible(visible);
  };
  console.log(visible);

  if (visible == 1) {
    return (
      <div className="App">
        <header className="App-header">
          <LoginComponent
            parentToChild={data}
            visibleChild={visibleChild}
            childToParent={childToParent}
            actualUser={user}
          />
          {/* <RegisterComponent
            childToParent={childToParent}
            visibleChild={visibleChild}
            parentToChild={data}
          /> */}
        </header>
      </div>
    );
  } else if (visible == 2) {
    return (
      <div className="App">
        <header className="App-header">
          <RegisterComponent
            childToParent={childToParent}
            visibleChild={visibleChild}
            parentToChild={data}
          />
        </header>
      </div>
    );
  } else if (visible == 3) {
    return (
      <div className="App">
        <header className="App-header">
          <DashboardComponent
            childToParent={childToParent}
            visibleChild={visibleChild}
            parentToChild={data}
            actualUser={actualUser}
          />
        </header>
      </div>
    );
  }
}

//         {/* <LoginComponent parentToChild={data} /> */}
//         <RegisterComponent childToParent={childToParent} />
//       </header>
//       <ul>
//         {data.map((user) => (
//           <li>
//             {user.username} {user.password}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default App;
