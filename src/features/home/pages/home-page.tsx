import MyDropdownMenu from "@/components/my-dropdown-menu";
import VoteView from "../components/vote/vote-views";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  ArrowRight,
  CirclePlus,
  ClipboardPaste,
  Filter,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className='grid grid-cols-1'>
      <div className='py-16 grid grid-cols-1 gap-3'>
        <div className='justify-center'>
          <h1 className='uppercase text-center font-head text-xl'>
            Find A Secure Vote
          </h1>
          <h4 className='text-center text-sm text-muted-foreground'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h4>
        </div>
        <div>
          <form>
            <div className='flex flex-col md:flex-row gap-2'>
              <InputGroup>
                <InputGroupInput placeholder='Search' />
                <InputGroupAddon>
                  <Search />
                </InputGroupAddon>
                <InputGroupAddon align={"inline-end"}>
                  <InputGroupButton
                    variant={"outline"}
                    size={"icon-xs"}
                    className='ml-auto'
                  >
                    <ClipboardPaste />
                  </InputGroupButton>
                  <InputGroupButton variant={"default"} size={"icon-xs"}>
                    <ArrowRight />
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </form>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-2'>
        <div className='flex justify-between gap-2'>
          <InputGroup className='w-auto'>
            <InputGroupInput placeholder='Filter votes' />
            <InputGroupAddon>
              <Filter />
            </InputGroupAddon>
          </InputGroup>
          <MyDropdownMenu groupItems={[]}>
            <Button variant={"outline"} className='border-dashed'>
              <CirclePlus /> Status
            </Button>
          </MyDropdownMenu>
        </div>
        <VoteView />
      </div>
    </div>
  );
}
