import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteData, getData } from "../redux/action";

export const User = () => {
  const { data } = useSelector((state) => ({
    data: state.dataState.data
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  const handleDelete = (el) => {
    console.log(el);

    dispatch(DeleteData(el));
  };
  return (
    <div className="user">
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>City</th>
          <th>Zip code</th>
          <th></th>
        </tr>
        {data.map((e) => {
          return (
            <>
              <tr>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>{e.address.city}</td>
                <td>{e.address.zipcode}</td>
                <td onClick={() => handleDelete(e)}>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
};

// id, name, email, phone, city with zip code
