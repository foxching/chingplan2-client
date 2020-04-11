import React from "react";

const Notifications = props => {
  //const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications" />
        </div>
      </div>
    </div>
  );
};

export default Notifications;