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

export const AnswerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
