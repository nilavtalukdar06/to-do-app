"use client";
import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState, useContext } from "react";
import supabase from "@/utils/supabase/supabase";
import toast from "react-hot-toast";
import Loader from "./ui/loader";
import SessionContext from "@/context/session-context";

export default function Todo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const session = useContext(SessionContext);

  const generateDescription = async () => {
    try {
      if (!title) {
        toast.error("Enter a task title");
        return;
      }
      setIsGenerating(true);
      const response = await fetch("/api/generate-description", {
        method: "POST",
        body: JSON.stringify({
          title: title,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to generate description");
      }
      const data = await response.json();
      setDescription(data.description);
    } catch (error) {
      console.error(error);
      toast.error("Failed to genearate description");
    } finally {
      setIsGenerating(false);
    }
  };

  const addTask = async (e) => {
    try {
      e.stopPropagation();
      setIsSubmitting(true);
      const { error } = await supabase.from("tasks").insert([
        {
          title: title,
          description: description,
          is_completed: false,
          user_id: session?.user?.id,
        },
      ]);
      if (error) {
        throw new Error(error);
      }
    } catch (error) {
      console.error(error);
      toast.error("Error adding task");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="my-10 md:my-20 max-w-xl mx-auto p-4">
      <div className="w-full flex justify-center items-center">
        <div className="inline-flex h-9 items-center gap-2 rounded-full border border-[#34b27b]/20 bg-[#3fcf8e]/10 px-4 text-sm text-[#34b27b] animate-pulse">
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          Create & Manage your Tasks
        </div>
      </div>
      {/* form */}
      <div className="my-10">
        <form className="flex flex-col gap-y-4" onSubmit={addTask}>
          <Input
            placeholder={"Enter the task title"}
            className="py-5 rounded shadow-none"
            value={title}
            required={true}
            onChange={(event) => setTitle(event.target.value)}
            disabled={isSubmitting}
          />
          <div className="w-full h-fit relative">
            <Textarea
              placeholder={"Enter the task description"}
              className={"py-5 rounded shadow-none"}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              disabled={isGenerating || isSubmitting}
              required={true}
            />
            <Button
              variant={"outline"}
              className="absolute z-20 bottom-2 right-2 border-none shadow-none"
              onClick={generateDescription}
              type="button"
            >
              <Sparkles />
            </Button>
          </div>
          <Button
            className={`bg-[#3fcf8e] border-[#34b27b] border-[1.5px] hover:bg-[#34b27b] transition-colors duration-300 ease-in-out rounded py-5`}
            type="submit"
            disabled={isGenerating || isSubmitting}
          >
            {isGenerating ? (
              <div className="flex items-center gap-x-2 justify-center">
                <Loader />
                <span>Generating with AI...</span>
              </div>
            ) : isSubmitting ? (
              <div className="flex items-center gap-x-2 justify-center">
                <Loader />
                <span>Adding...</span>
              </div>
            ) : (
              "Add Task"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}
