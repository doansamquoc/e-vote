import { Plus } from "lucide-react";
import NavMenu from "./NavMenu";
import NavUser from "./NavUser";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
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
