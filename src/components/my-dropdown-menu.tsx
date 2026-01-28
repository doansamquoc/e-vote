import type { ReactElement } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface MyDropdownMenuItemProps {
  icon?: ReactElement;
  name: string;
  action?: () => void;
  isDestructive: boolean;
}

interface MyDropdownMenuGroupItemProps {
  label?: string;
  items: MyDropdownMenuItemProps[];
}

interface MyDropdownMenuProps {
  children: React.ReactNode;
  groupItems: MyDropdownMenuGroupItemProps[];
}

const MyDropdownMenu = ({ children, groupItems }: MyDropdownMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {groupItems.map((group, groupIndex) => (
          <DropdownMenuGroup key={groupIndex}>
            {groupIndex > 0 && <DropdownMenuSeparator />}
            {group.label && (
              <DropdownMenuLabel className='text-muted-foreground'>
                {group.label}
              </DropdownMenuLabel>
            )}
            {group.items.map((item, itemIndex) => (
              <DropdownMenuItem
                key={itemIndex}
                onClick={item.action}
                variant={item.isDestructive ? "destructive" : "default"}
              >
                {item.icon} {item.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MyDropdownMenu;
