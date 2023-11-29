import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { INDICATOR_TITLE_FIELD } from "../indicator/IndicatorTitle";

export const ProjectShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="desciprion" source="desciprion" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Indicators"
          source="indicator.id"
          reference="Indicator"
        >
          <TextField source={INDICATOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="link_to_BPM" source="linkToBpm" />
        <TextField label="link_to_confluence" source="linkToConfluence" />
        <TextField label="manager" source="manager" />
        <TextField label="team" source="team" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
