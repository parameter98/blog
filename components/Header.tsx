import Searchbar from "./Searchbar";

export default function Header() {
  return (
    <div id="Header" className="justify-items-center px-80 py-10">
      <header className="flex h-16 items-center justify-between px-4 md:px-6 bg-white dark:bg-gray-950 shadow-lg border border-transparent rounded-full">
        <Searchbar />
      </header>
    </div>
  );
}