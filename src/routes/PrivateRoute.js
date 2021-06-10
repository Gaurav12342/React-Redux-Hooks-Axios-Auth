import React from "react";
import { connect } from "react-redux";
import { isLogin } from "../../src/common/auth";
import { Route, Redirect } from "react-router-dom";
import { routes } from "../routes/constant";

// const PrivateRoute = (props) => {
//   const { component, exact, path } = props;
//   return isLogin ? (
//     <Route exact={exact} path={path} component={component} />
//   ) : (
//     <Redirect to={routes.login.path} />
//   );
// };

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLogin ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: routes.login.path, state: { form: props.location } }}
        />
      )
    }
  />
);

export default PrivateRoute;
