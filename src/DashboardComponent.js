import { useState } from "react";
import React from "react";

const DashboardComponent = (props) => {
  const users = props.parentToChild;
  const currentUser = props.actualUser;
  const [actualUsers, setActualUsers] = useState(users);

  const handleLogout = () => {
    props.visibleChild(1);
    props.childToParent(actualUsers);
  };

  const handleDeleteUser = (id) => {
    setActualUsers((existingUsers) => {
      return existingUsers.filter((_, currentId) => currentId !== id);
    });
  };

  return (
    <>
      <div className="dashboard">
        <div className="title">
          <span>Hello {currentUser}!</span>
          <button onClick={handleLogout}>Log out</button>
        </div>
        <div className="List">
          <span>Users List:</span>
          <ul>
            {actualUsers.map((user, id) => (
              <li>
                <span>
                  {user.username} {user.email}{" "}
                </span>
                <button onClick={() => handleDeleteUser(id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
