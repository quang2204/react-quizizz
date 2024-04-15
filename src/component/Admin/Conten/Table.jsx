import React, { useEffect, useState } from "react";
import { getAlluser } from "../../../Server/ApiServer";

function Table(props) {
  const [listuser, setuser] = useState([]);

  useEffect(() => {
    fetchListuser();
  }, [listuser]);
  const fetchListuser = async () => {
    let res = await getAlluser();
    setuser(res.data.DT);
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col" className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {listuser &&
            listuser.length > 0 &&
            listuser.map((item, index) => {
              return (
                <tr key={`table-user-${index}`}>
                  <td>{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td className="text-center">
                    <button
                      className="bg-indigo-500 border-none text-white hover:bg-sky-300"
                      onClick={() => props.handleclick(item)}
                    >
                      Update
                    </button>
                    <button
                      onClick={() => props.deletes(item)}
                      className="ml-4 bg-red-600 border-none text-white hover:bg-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          {listuser && listuser.length === 0 && (
            <tr>
              <td colSpan={"4"}>Không có dữ liệu</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
