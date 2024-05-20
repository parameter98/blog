import MenuIcon from "./MenuIcon";
import SearchIcon from "./SearchIcon";
import {Avatar} from "@nextui-org/avatar";
import {Input} from "@nextui-org/input";
import { Button } from "@nextui-org/button";


export default function Searchbar() {
  return(
    <div className="flex flex-1" id="Searchbar">
      <div className="flex flex-1 px-1 pr-5">
        <Button className="flex-initial border-2 rounded-md border-current" >
          <MenuIcon className="h-6 w-6" />
        </Button>
        <Input type="search" placeholder="Search" className="px-5 flex-1" classNames={{
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "!cursor-text",
          ],
        }}/>
        <Button isIconOnly className="border-2 rounded-full border-current" variant="shadow">
          <SearchIcon className="text-gray-500 dark:text-gray-400" />
        </Button>
      </div>
      <Button isIconOnly className="border-2 rounded-full border-current" >
        <Avatar radius="md" size="lg" color="danger" src="https://i.pravatar.cc/150?u=a04258114e29026708c"/>
      </Button>
    </div>
  );
}

