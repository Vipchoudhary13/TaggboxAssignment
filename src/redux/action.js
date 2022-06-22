import { DELETEDATA, FETCHDATA } from "./actionType";

export const FetchData = (data) => {
  return {
    type: FETCHDATA,
    payload: data
  };
};

export const DeleteData = (data) => {
  return {
    type: DELETEDATA,
    payload: data
  };
};

export const getData = () => async (dispach) => {
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((res) => dispach(FetchData(res)));
};
