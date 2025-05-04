import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Todo() {
  return (
    <section className="my-10 md:my-20 max-w-xl mx-auto">
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
        <form className="flex flex-col gap-y-4">
          <Input
            placeholder={"Enter the task title"}
            className="py-5 rounded shadow-none"
          />
          <div className="w-full h-fit relative">
            <Textarea
              placeholder={"Enter the task description"}
              className={"py-5 rounded shadow-none"}
            />
            <Button
              variant={"outline"}
              className="absolute z-20 bottom-2 right-2 border-none shadow-none"
            >
              <Sparkles />
            </Button>
          </div>
          <Button
            className={`bg-[#3fcf8e] border-[#34b27b] border-[1.5px] hover:bg-[#34b27b] transition-colors duration-300 ease-in-out rounded py-5`}
            type="submit"
          >
            Add Task
          </Button>
        </form>
      </div>
    </section>
  );
}
