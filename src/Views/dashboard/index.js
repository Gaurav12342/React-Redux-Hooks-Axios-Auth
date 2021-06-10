import React, { useEffect } from "react";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../AppRedux/Action/getUser/index";
const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);

  const getUserData = useSelector((state) => state.getUserReducer);
  
  return (
    <>
      <div className="example">
        {getUserData.loading ? (
          <Spin />
        ) : (
          <>
            <h1>
              <strong>{`Welcome ${getUserData?.loginResponse?.data?.name} !`}</strong>
            </h1>
            <h4>{`Your email is : ${getUserData?.loginResponse?.data?.email} `}</h4>
          </>
        )}
        {/* <h3>User Dashboard</h3> */}
      </div>
    </>
  );
};

export default Dashboard;
