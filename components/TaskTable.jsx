import React from "react";
import ToDo from "./ToDo";

const TaskTable = ({ data, deleteTask }) => {
  return (
    <section className="relative overflow-x-auto mt-24 w-[80%] sm:w-[60%] mx-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Sl No
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {/* <ToDo /> */}
          {data.map((item, index) => (
            <ToDo
              key={index}
              title={item.title}
              description={item.description}
              id={index + 1}
              status={item.status}
              dbId={item._id}
              deleteTask={deleteTask}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TaskTable;
