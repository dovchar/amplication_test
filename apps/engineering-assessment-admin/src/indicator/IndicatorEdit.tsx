import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AnswerTitle } from "../answer/AnswerTitle";
import { ProjectTitle } from "../project/ProjectTitle";

export const IndicatorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
