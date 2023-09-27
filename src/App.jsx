import { UserRow } from "./assets/Components/UserRow.jsx";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const rolesObject = {};
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const apiFetch = await fetch(
          "https://643ecf8ec72fda4a0b01bc66.mockapi.io/api/v1/users"
        );
        const apijson = await apiFetch.json();
        apijson.map((user) => {
          user.roles.map((rol) => {
            if (!rolesObject[rol]) {
              rolesObject[rol] = [];
            }
            rolesObject[rol].push(user.name);
          });
        });
      } catch (err) {
        console.log(err);
      }
      console.log("seteo data");
      setData(rolesObject);
    };
    getData();
  }, []);

  if (data === undefined) return;
  console.log("full data: ", data);

  const keys = Object.keys(data);
  console.log("keys: ", keys);

  for (let k = 0; k < keys.length; k++) {
    let keyvalue = keys[k];

    console.log("ROL: ", keyvalue);
    console.log("a: ", data[keyvalue]);

    let pepe = data[keyvalue];

    for (let i = 0; i < pepe.length; i++) {
      console.log("pepe: ", pepe[i]);
    }
  }

  return (
    <div
      className="UsersContainer"
      style={{ display: "flex", flexDirection: "column", gap: "0.5em" }}
    >
      {}
    </div>
  );
}

export default App;
