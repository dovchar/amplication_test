import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { IndicatorTitle } from "../indicator/IndicatorTitle";

export const AnswerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
