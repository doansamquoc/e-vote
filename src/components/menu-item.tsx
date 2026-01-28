import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import type React from "react";

interface MenuItemProps {
  children?: React.ReactNode;
  path: string;
  name: string;
}

const MenuItem = ({ path, name }: MenuItemProps) => {
  return (
    <Button variant={"ghost"} size={"sm"} asChild>
      <Link to={path}>{name}</Link>
    </Button>
  );
};

export default MenuItem;
