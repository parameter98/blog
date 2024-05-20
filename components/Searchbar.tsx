import { Button } from "@nextui-org/button";

export default function Searchbar() {
  return(
    <div id="Searchbar" className="flex">
      <Button type="button" className="flex-initial px-10">0Menu0</Button>
      <input type="text" className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
      <Button type="submit" className="flex-initial px-10">0Search0</Button>
    </div>
  );
}

