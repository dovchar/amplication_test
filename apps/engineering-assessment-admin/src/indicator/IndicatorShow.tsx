import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { ANSWER_TITLE_FIELD } from "../answer/AnswerTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const IndicatorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
