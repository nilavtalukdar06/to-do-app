import React from "react";

const ToDo = ({ title, description, id, dbId, status, deleteTask }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id}
      </th>
      <td className="px-6 py-4">{title}</td>
      <td className="px-6 py-4">{description}</td>
      <td className="px-6 py-4">{status ? "Completed" : "Pending"}</td>
      <td className="px-6 py-4 flex gap-2">
        <button
          className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 ease-in-out cursor-pointer"
          onClick={() => deleteTask(dbId)}
        >
          Delete
        </button>
        <button className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 ease-in-out cursor-pointer">
          Done
        </button>
      </td>
    </tr>
  );
};

export default ToDo;
