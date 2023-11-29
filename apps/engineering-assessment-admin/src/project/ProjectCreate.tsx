import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { IndicatorTitle } from "../indicator/IndicatorTitle";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
