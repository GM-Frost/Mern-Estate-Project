import React from "react";
import { useSelector } from "react-redux";
import { IUserState } from "../redux/userSlice/userSlice";
import { Navigate } from "react-router-dom";
import Profile from "../pages/Profile";

type IProps = {};

const PrivateRoute = (props: IProps) => {
  const { currentUser } = useSelector(
    (state: { user: IUserState }) => state.user
  );

  return <>{currentUser ? <Profile /> : <Navigate to="/sign-in" replace />}</>;
};

export default PrivateRoute;
