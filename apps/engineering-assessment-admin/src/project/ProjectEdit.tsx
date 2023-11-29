import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { IndicatorTitle } from "../indicator/IndicatorTitle";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="desciprion" source="desciprion" />
        <ReferenceInput
          source="indicators.id"
          reference="Indicator"
          label="Indicators"
        >
          <SelectInput optionText={IndicatorTitle} />
        </ReferenceInput>
        <TextInput label="link_to_BPM" source="linkToBpm" />
        <TextInput label="link_to_confluence" source="linkToConfluence" />
        <TextInput label="manager" source="manager" />
        <TextInput label="team" source="team" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
