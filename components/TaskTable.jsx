"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import { useState } from "react";
import Loader from "./ui/loader";
import supabase from "@/utils/supabase/supabase";

export function TaskTable({ tasks, setTasks }) {
  const [isDeleting, setIsDeleting] = useState("");
  const [isUpdating, setIsUpdating] = useState("");
  const deleteTask = async (taskId) => {
    try {
      setIsDeleting(taskId);
      const { error } = await supabase.from("tasks").delete().eq("id", taskId);
      if (error) {
        throw new Error(error);
      } else {
        setTasks(tasks.filter((task) => taskId !== task.id));
      }
    } catch (error) {
      console.error(error);
      toast.error("Couldn't delete the task");
    } finally {
      setIsDeleting("");
    }
  };

  const updateTask = async (taskId) => {
    try {
      setIsUpdating(taskId);
      const { error } = await supabase
        .from("tasks")
        .update({ is_completed: true })
        .eq("id", taskId);
      if (error) {
        throw new Error(error);
      }
      setTasks(
        tasks.map((task) =>
          task.id === taskId ? { ...task, is_completed: true } : task
        )
      );
    } catch (error) {
      console.error(error);
      toast.error("Failed to update the task status");
    } finally {
      setIsUpdating("");
    }
  };

  return (
    <Table>
      <TableCaption>A list of your recent tasks...</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Serial No.</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task, index) => (
          <TableRow key={task.id}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell className={`${task.is_completed && "line-through"}`}>
              {task.title}
            </TableCell>
            <TableCell>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-[#3fcf8e] border-[#34b27b] border-[1.5px] hover:bg-[#34b27b] transition-colors duration-300 ease-in-out">
                    Reveal
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Description</DialogTitle>
                    <DialogDescription>{task.description}</DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </TableCell>
            <TableCell className="flex justify-end gap-x-2">
              <Button
                className={`bg-[#3fcf8e] border-[#34b27b] border-[1.5px] hover:bg-[#34b27b] transition-colors duration-300 ease-in-out ${
                  task.is_completed && "scale-0"
                }`}
                disabled={isUpdating}
                onClick={() => updateTask(task.id)}
              >
                {isUpdating === task.id ? (
                  <div className="flex gap-x-2 justify-center items-center">
                    <Loader />
                    Updating...
                  </div>
                ) : (
                  "Update"
                )}
              </Button>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-red-500 border-red-700 border-[1.5px] hover:bg-red-700 transition-colors duration-300 ease-in-out text-white hover:text-white"
                    disabled={isDeleting}
                  >
                    {isDeleting === task.id ? (
                      <div className="flex gap-x-2 justify-center items-center">
                        <Loader />
                        Removing...
                      </div>
                    ) : (
                      "Delete"
                    )}
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This will remove your task from our database
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      className="bg-red-500 border-red-700 border-[1.5px] hover:bg-red-700 transition-colors duration-300 ease-in-out"
                      onClick={() => deleteTask(task.id)}
                      disabled={isDeleting}
                    >
                      {isDeleting === task.id ? (
                        <div className="flex gap-x-2 justify-center items-center">
                          <Loader />
                          Removing...
                        </div>
                      ) : (
                        "Delete"
                      )}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
