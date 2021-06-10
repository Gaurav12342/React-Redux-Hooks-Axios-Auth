import React from "react";
import { Button, notification, Space } from "antd";

const Notification = (type, messageData) => {
  notification[type]({
    message: messageData ? messageData : "Notification Title",
  });
};

export default Notification;
