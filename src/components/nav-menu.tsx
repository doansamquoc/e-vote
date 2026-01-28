import Logo from "./Logo";
import MenuItem from "./menu-item";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";

const items = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
];

const NavMenu = () => {
  return (
    <nav>
      <div className='hidden md:flex items-center'>
        <Logo />
        {items.map((item) => (
          <MenuItem key={item.path} path={item.path} name={item.name} />
        ))}
      </div>
      <div className='md:hidden'>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"sm"}>
              <Menu className='size-5' /> Menu
            </Button>
          </SheetTrigger>
          <SheetContent side='left'>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className='flex flex-col gap-4'>
              {items.map((item) => (
                <MenuItem key={item.path} path={item.path} name={item.name} />
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavMenu;
