"use client";
import TaskTable from "@/components/TaskTable";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((form) => ({ ...form, [name]: value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <main>
      <form className="flex items-start flex-col gap-2 max-w-[600px] mt-24 px-2 mx-auto">
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          className="px-3 py-2 border-2 w-full rounded-lg border-gray-400 focus:outline-none"
          onChange={onChangeHandler}
          value={formData.title}
        />
        <textarea
          name="description"
          placeholder="Enter Description"
          className="w-full px-3 py-2 border-2 focus:outline-none border-gray-400 rounded-lg"
          onChange={onChangeHandler}
          value={formData.description}
        />
        <button
          type="submit"
          className="bg-orange-600 py-3 px-11 text-white rounded-lg cursor-pointer hover:bg-orange-800 transition-all duration-200 ease-in-out"
          onSubmit={onSubmitHandler}
        >
          Add Task
        </button>
      </form>
      <TaskTable />
    </main>
  );
}
