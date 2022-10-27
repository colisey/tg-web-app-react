import axios from "axios";
import { useEffect, useState } from "react";
import { Case } from "./Case/Case";
import styles from "./Cases.module.css";

export const Cases = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then(function (response) {
        // handle success
        console.log(response.data.data);
        setUsers(response.data.data);
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    // return () => {
    //   second
    // }
  }, []);

  // useEffect(() => {
  //   console.log('users.map',users);
    
  // }, [users])
  

  return (
    <div className={styles.wrapper} {...props}>
      {users.map(i => {
          console.log('users.map',i);
          return <Case {...i} key={i.id} />;
        })}
    </div>
  );
};
