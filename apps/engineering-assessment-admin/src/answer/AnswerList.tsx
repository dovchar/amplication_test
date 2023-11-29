import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { INDICATOR_TITLE_FIELD } from "../indicator/IndicatorTitle";

export const AnswerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Answers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Indicators"
          source="indicator.id"
          reference="Indicator"
        >
          <TextField source={INDICATOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="project_id" source="projectId" />
        <TextField label="note" source="text" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
