import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { INDICATOR_TITLE_FIELD } from "../indicator/IndicatorTitle";

export const ProjectList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Projects"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
