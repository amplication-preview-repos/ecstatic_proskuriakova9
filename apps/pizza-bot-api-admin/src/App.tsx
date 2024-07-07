import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { IngredientList } from "./ingredient/IngredientList";
import { IngredientCreate } from "./ingredient/IngredientCreate";
import { IngredientEdit } from "./ingredient/IngredientEdit";
import { IngredientShow } from "./ingredient/IngredientShow";
import { PizzaList } from "./pizza/PizzaList";
import { PizzaCreate } from "./pizza/PizzaCreate";
import { PizzaEdit } from "./pizza/PizzaEdit";
import { PizzaShow } from "./pizza/PizzaShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"PizzaBotAPI"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Ingredient"
          list={IngredientList}
          edit={IngredientEdit}
          create={IngredientCreate}
          show={IngredientShow}
        />
        <Resource
          name="Pizza"
          list={PizzaList}
          edit={PizzaEdit}
          create={PizzaCreate}
          show={PizzaShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
