export default function Home() {
  return (
    <main>
      <form className="flex items-start flex-col gap-2 max-w-[600px] mt-24 px-2 mx-auto">
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          className="px-3 py-2 border-2 w-full rounded-lg border-gray-400 focus:outline-none"
        />
        <textarea
          name="description"
          placeholder="Enter Description"
          className="w-full px-3 py-2 border-2 focus:outline-none border-gray-400 rounded-lg"
        />
        <button
          type="submit"
          className="bg-orange-600 py-3 px-11 text-white rounded-lg cursor-pointer hover:bg-orange-800 transition-all duration-200 ease-in-out"
        >
          Add Task
        </button>
      </form>
    </main>
  );
}
