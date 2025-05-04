import { TaskTable } from "@/components/TaskTable";

export default function Tasks() {
  return (
    <section className="min-h-screen max-w-screen overflow-x-hidden relative">
      <div className="my-10 md:my-20 max-w-4xl mx-auto p-4">
        <div className="w-full flex justify-center items-center">
          <TaskTable />
        </div>
      </div>
    </section>
  );
}
