import { useState } from "react";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginUser() {
    const data = localStorage.getItem("users");
    const userObj = data ? JSON.parse(data) : {};
    let auth = false;
    if (userObj.username === username && userObj.password === password) {
      auth = true;
    }
    localStorage.setItem("isAuth", auth);
    localStorage.getItem("isAuth");
  }

  function saveUser() {
    // Retrieve existing users from localStorage
    const data = localStorage.getItem("users");
    let users = data ? JSON.parse(data) : {};

    // Add the new user
    users = { username, password };

    // Save the updated users object back to localStorage
    localStorage.setItem("users", JSON.stringify(users));
  }

  return (
    <div>
      <div>
        <table>
          <tr>
            <td>Enter Username:</td>
            <td>
              <input
                type="text"
                name="username"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Enter Password:</td>
            <td>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <input type="submit" onClick={loginUser} />
            </td>
            <td>
              <input type="button" onClick={saveUser} value="Register" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
