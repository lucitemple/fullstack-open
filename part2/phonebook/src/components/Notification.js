import React from "react";

export const Notification = ({notification}) => {
    //console.log(notification);
  if (notification === null) {
    return null;
  }
  console.log(notification.status);

  return <div className={notification.status}>{notification.message}</div>;
};
