import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AnswerTitle } from "../answer/AnswerTitle";
import { ProjectTitle } from "../project/ProjectTitle";

export const IndicatorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="answer.id" reference="Answer" label="answer_id">
          <SelectInput optionText={AnswerTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="projectId.id"
          reference="Project"
          label="project_id"
        >
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
        <TextInput label="score" source="score" />
        <TextInput label="title" source="title" />
        <TextInput label="user_id" source="userId" />
      </SimpleForm>
    </Create>
  );
};
