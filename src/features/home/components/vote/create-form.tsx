import { DateTimePicker } from "@/components/date-time-picker";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Save, Sparkles, Trash, X } from "lucide-react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import z from "zod";

const voteSchema = z
  .object({
    title: z
      .string()
      .nonempty({ message: "Title cannot be empty" })
      .min(5, { message: "Title must be at least 5 characters" })
      .max(100, { message: "Title must be at most 100 characters" }),
    description: z
      .string()
      .max(200, { message: "Description must be at most 200 characters" })
      .optional(),
    startAt: z.date({ error: "Start time is required" }),
    endAt: z.date({ error: "End time is required" }),
    options: z
      .array(
        z.object({
          name: z
            .string()
            .min(2, "Option name cannot be empty")
            .max(100, "Option name must be most at lest 100 characters"),
        }),
      )
      .min(2, "Vote option must have at least 2 options"),
  })
  .refine((data) => data.endAt > data.startAt, {
    path: ["endAt"],
    message: "End time must be after start time",
  });

type VoteSchema = z.input<typeof voteSchema>;

const CreateForm = () => {
  const form = useForm<VoteSchema>({
    resolver: zodResolver(voteSchema),
    defaultValues: {
      title: "",
      description: "",
      options: [{ name: "" }, { name: "" }],
    },
  });

  const { control } = form;

  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: "options",
  });

  async function onSubmit(data: VoteSchema) {
    const formattedData = {
      ...data,
      startAt: new Date(data.startAt),
      endAt: new Date(data.endAt),
    };

    console.log("CREATE: ", formattedData);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name='title'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <InputGroup>
                <InputGroupInput
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder='Which song is your favorite?'
                  type='text'
                  autoComplete='off'
                />
                <InputGroupAddon align={"block-start"}>Title</InputGroupAddon>
              </InputGroup>
              <FieldError errors={[fieldState.error]} />
            </Field>
          )}
        />
        <Controller
          name='description'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <InputGroup>
                <InputGroupTextarea
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder='Which song do you like the most?'
                  rows={6}
                  autoComplete='off'
                />
                <InputGroupAddon align={"block-start"}>
                  Description (Optional)
                </InputGroupAddon>
                <InputGroupAddon align={"block-end"}>
                  <InputGroupText>
                    {field.value?.length}/200 characters
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <FieldError errors={[fieldState.error]} />
            </Field>
          )}
        />
        <FieldGroup>
          {fields.map((f, index) => (
            <Controller
              key={f.id}
              name={`options.${index}.name`}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <InputGroup>
                    <InputGroupInput
                      {...field}
                      placeholder='Enter option name...'
                      autoComplete='off'
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align='block-start'>
                      <InputGroupText>Option {index + 1}</InputGroupText>
                      <InputGroupButton
                        size={"icon-xs"}
                        type='button'
                        disabled={fields.length <= 2}
                        onClick={() => remove(index)}
                        className='ml-auto'
                      >
                        <X />
                      </InputGroupButton>
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />
          ))}
          <div className='flex gap-2'>
            {fields.length > 2 && (
              <Button
                type='button'
                variant='outline'
                className='text-destructive border-dashed hover:text-destructive'
                onClick={() => replace([{ name: "" }, { name: "" }])}
              >
                <Trash /> Clear all
              </Button>
            )}

            <Button
              type='button'
              className='grow border-dashed text-primary hover:text-primary'
              onClick={() => append({ name: "" })}
              variant={"outline"}
            >
              <Plus /> Add option
            </Button>
          </div>
        </FieldGroup>

        <Controller
          name='startAt'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <DateTimePicker
                value={field.value}
                onChange={field.onChange}
                label='Start time'
                placeholder='Click to select start time...'
              />
              <FieldError errors={[fieldState.error]} />
              <FieldDescription></FieldDescription>
            </Field>
          )}
        />

        <Controller
          name='endAt'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <DateTimePicker
                value={field.value}
                onChange={field.onChange}
                label='End time'
                placeholder='Click to select end time...'
              />
              <FieldError errors={[fieldState.error]} />
              <FieldDescription></FieldDescription>
            </Field>
          )}
        />

        <div className='flex py-4 gap-2'>
          <Button variant={"outline"}>
            <Save /> Draft
          </Button>
          <Button variant={"default"} className='grow'>
            <Sparkles /> Create
          </Button>
        </div>
      </FieldGroup>
    </form>
  );
};

export default CreateForm;
