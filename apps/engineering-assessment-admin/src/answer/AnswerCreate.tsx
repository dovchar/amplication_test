import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { IndicatorTitle } from "../indicator/IndicatorTitle";

export const AnswerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="indicators.id"
          reference="Indicator"
          label="Indicators"
        >
          <SelectInput optionText={IndicatorTitle} />
        </ReferenceInput>
        <TextInput label="project_id" source="projectId" />
        <TextInput label="note" source="text" />
      </SimpleForm>
    </Create>
  );
};
