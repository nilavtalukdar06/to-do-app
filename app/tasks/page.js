"use client";
import { TaskTable } from "@/components/TaskTable";
import SessionContext from "@/context/session-context";
import { useState, useEffect, useContext } from "react";
import supabase from "@/utils/supabase/supabase";
import { FadeLoader } from "react-spinners";
import toast from "react-hot-toast";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const session = useContext(SessionContext);

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("user_id", session?.user?.id);
      if (error) {
        throw new Error("Error getting tasks");
      } else {
        setTasks(data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Tasks not found 🥲");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    session && fetchTasks();
  }, [session?.user?.id]);

  return (
    <section className="min-h-screen max-w-screen overflow-x-hidden relative">
      <div className="my-10 md:my-20 max-w-4xl mx-auto p-4">
        <div className="w-full flex justify-center items-center">
          {isLoading ? (
            <FadeLoader />
          ) : (
            <TaskTable tasks={tasks} setTasks={setTasks} />
          )}
        </div>
      </div>
    </section>
  );
}
