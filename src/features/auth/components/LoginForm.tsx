import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ArrowRight, AtSign } from "lucide-react";
import Google from "../../../assets/google.svg";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.email({ message: "Please enter a valid e-mail address." }),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });
  async function submit(data: z.infer<typeof schema>) {
    console.log("Data: ", data);
  }
  return (
    <div className='flex flex-col gap-4'>
      <Button variant={"outline"}>
        <img src={Google} alt='Google logo' className='size-5' /> Continue with
        Google
      </Button>
      <FieldSeparator className='my-4'>Or sign in with</FieldSeparator>
      <form
        className='flex flex-col gap-4'
        onSubmit={form.handleSubmit(submit)}
      >
        <Controller
          name='email'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>E-mail</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder='Enter your e-mail'
                  type='email'
                  autoComplete='off'
                />
                <InputGroupAddon align={"inline-start"}>
                  <AtSign />
                </InputGroupAddon>
              </InputGroup>
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Button type='submit'>
          Login <ArrowRight />
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
