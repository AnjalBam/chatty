import React from "react";
import axios from "../../utils/axios";
import "./all-userrs.scss";
import { toast } from "react-hot-toast";

const AllUsers = () => {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;

    setIsLoading(true);

    axios
      .get("/users/all/")
      .then((res) => {
        setIsLoading(false);
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        toast.error(
          err.response?.message ||
            err.toString() ||
            "Error occurred fetching users."
        );
      });
  }, []);

  return (
    <div className="all-users">
      <div className="users-title">
        <h3>All Users</h3>
        {/* TODO: Implement search bar for users. */}
      </div>
      {isLoading ? (
        <>
          <div className="text-muted text-center">Loading...</div>
        </>
      ) : (
        <ul className="users">
          {users.length !== 0 ? (
            users.map((user) => {
              return (
                <li className="user">
                  <div className="avatar">
                    <img
                      src={`https://joeschmoe.io/api/v1/${user.username}`}
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <h3>{user.fullName}</h3>
                    <h6>{user.username}</h6>
                  </div>
                </li>
              );
            })
          ) : (
            <>
              <div className="text-muted text-center">No users.</div>
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default AllUsers;
