import { Plus } from "lucide-react";
import NavMenu from "./NavMenu";
import NavSetting from "./NavSetting";
import NavUser from "./NavUser";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
      <NavMenu />
      <div className='flex gap-2'>
        <NavSetting />
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
