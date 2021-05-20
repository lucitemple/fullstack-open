import React from "react";

export const Notification = ({ notification }) => {
  if (notification === null) {
    return null;
  }

  return <div className="notification">{notification}</div>;
};
