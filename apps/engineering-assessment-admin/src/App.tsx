import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AreaList } from "./area/AreaList";
import { AreaCreate } from "./area/AreaCreate";
import { AreaEdit } from "./area/AreaEdit";
import { AreaShow } from "./area/AreaShow";
import { CriterionList } from "./criterion/CriterionList";
import { CriterionCreate } from "./criterion/CriterionCreate";
import { CriterionEdit } from "./criterion/CriterionEdit";
import { CriterionShow } from "./criterion/CriterionShow";
import { IndicatorList } from "./indicator/IndicatorList";
import { IndicatorCreate } from "./indicator/IndicatorCreate";
import { IndicatorEdit } from "./indicator/IndicatorEdit";
import { IndicatorShow } from "./indicator/IndicatorShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { AnswerList } from "./answer/AnswerList";
import { AnswerCreate } from "./answer/AnswerCreate";
import { AnswerEdit } from "./answer/AnswerEdit";
import { AnswerShow } from "./answer/AnswerShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"engineering assessment"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Area"
          list={AreaList}
          edit={AreaEdit}
          create={AreaCreate}
          show={AreaShow}
        />
        <Resource
          name="Criterion"
          list={CriterionList}
          edit={CriterionEdit}
          create={CriterionCreate}
          show={CriterionShow}
        />
        <Resource
          name="Indicator"
          list={IndicatorList}
          edit={IndicatorEdit}
          create={IndicatorCreate}
          show={IndicatorShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="Answer"
          list={AnswerList}
          edit={AnswerEdit}
          create={AnswerCreate}
          show={AnswerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
