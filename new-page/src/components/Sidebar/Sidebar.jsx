import Button from "../Button/Button";

export default function Sidebar({ onclick, memo }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onclick}>Add Project</Button>
      </div>
      <ul className="mt-10">
        {memo.map((element) => {
          return (
            <li key={element.id}>
              <button className="w-full text-left px-4 py-1 rounded-md my-1 text-stone-300 hover:text-stone-100 hover:bg-stone-800">
                {element.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
