import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Table, PageHeader, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { bootcampPagination } from "../../AppRedux/Action/bootcamp/index";
import AddBootcamp from "./components/AddBootcamp";
import { routes } from "../../../src/routes/constant";
import { convertLegacyProps } from "antd/lib/button/button";

const Setting = (props) => {
  useEffect(() => {
    dispatch(bootcampPagination());
  }, []);
  const dispatch = useDispatch();
  const getBootcamp = useSelector((state) => state?.settingReducer);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Website",
      dataIndex: "website",
      key: "website",
      render: (text, record) => {
        return text ? (
          <a href={text} target="_blank">
            {text}
          </a>
        ) : (
          "- "
        );
      },
    },
  ];

  return (
    <>
      <PageHeader
        ghost={true}
        // onBack={() => window.history.back()}
        title={<h2>Setting Tab</h2>}
        extra={[
          <Button
            key="1"
            type="primary"
            onClick={() => {
              props.history.push(routes.addBootcamp.path);
            }}
          >
            Add Bootcamp
          </Button>,
        ]}
      />
      <Table
        dataSource={getBootcamp.bootcampResponse?.data}
        columns={columns}
        loading={getBootcamp.loading ? true : false}
      />
    </>
  );
};

export default withRouter(Setting);
