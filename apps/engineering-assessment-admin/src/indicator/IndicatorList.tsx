import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ANSWER_TITLE_FIELD } from "../answer/AnswerTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const IndicatorList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Indicators"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="answer_id" source="answer.id" reference="Answer">
          <TextField source={ANSWER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="project_id"
          source="project.id"
          reference="Project"
        >
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="score" source="score" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user_id" source="userId" />
      </Datagrid>
    </List>
  );
};
