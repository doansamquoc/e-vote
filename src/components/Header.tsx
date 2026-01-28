import { Plus } from "lucide-react";
import NavMenu from "./nav-menu";
import NavUser from "./nav-user";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <div className='max-w-5xl mx-auto flex justify-between items-center'>
      <NavMenu />
      <div className='flex gap-2'>
        <ModeToggle />
        <NavUser />
        <Button size={"sm"} asChild>
          <Link to={"/create"}>
            <Plus /> New
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
