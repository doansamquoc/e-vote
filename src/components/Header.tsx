import { Plus } from "lucide-react";
import NavMenu from "./NavMenu";
import NavSetting from "./NavSetting";
import NavUser from "./NavUser";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
      <NavMenu />
      <div className='flex gap-2'>
        <NavSetting />
        <NavUser />
        <Button size={"sm"}>
          <Plus /> New
        </Button>
      </div>
    </div>
  );
};

export default Header;
