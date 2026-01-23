import { Github } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className='flex items-center justify-between'>
      <p className='font-head uppercase text-sm'>Build by Sam</p>
      <Button variant={"link"} asChild>
        <a href='https://github.com/doansamquoc/e-vote'>
          Github <Github />
        </a>
      </Button>
    </div>
  );
};

export default Footer;
