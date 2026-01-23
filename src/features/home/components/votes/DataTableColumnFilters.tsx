import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import type { Table } from "@tanstack/react-table";
import { Funnel } from "lucide-react";

export default function DataTableColumnFilters<TData>({
  table,
}: {
  table: Table<TData>;
}) {
  return (
    <Field>
      <InputGroup>
        <InputGroupInput
          placeholder='Filter votes...'
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
        />
        <InputGroupAddon align={"inline-start"}>
          <Funnel />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
