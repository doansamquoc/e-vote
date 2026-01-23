import { Box } from "lucide-react";
import { Button } from "./ui/button";

const Logo = () => {
  return (
    <Button variant={"ghost"} size={"icon"} asChild>
      <a href='/'>
        <Box className='size-5' />
      </a>
    </Button>
  );
};

export default Logo;
