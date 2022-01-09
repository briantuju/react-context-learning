import { memo, useEffect, useState } from "react";

const CompC = ({ complex }) => {
  console.log(
    "Component C is only re-rendered when prop changes, as it uses memo"
  );

  const [users, setUsers] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      if (isMounted) {
        setUsers(data);
      }
    };

    // fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <h3>Component C</h3>

      <div>
        <span>{complex.object1.name}</span>

        <ul>
          {users.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default memo(CompC);
