import CreateForm from "../components/votes/CreateForm";

const CreatePage = () => {
  return (
    <div className='flex flex-col gap-4 w-full max-w-2xl mx-auto'>
      <div className='py-4'>
        <h1 className='text-xl uppercase'>Create a secure vote</h1>
        <span className='text-sm text-muted-foreground'>
          Complete the below fields to create your vote.
        </span>
      </div>
      <CreateForm />
    </div>
  );
};

export default CreatePage;
