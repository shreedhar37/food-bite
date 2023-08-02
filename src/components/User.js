import { useState } from "react";
const User = (props) => {
  const [count] = useState(0);
  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h3>Location: Alibag </h3>
      <h4>Contact: @shreedhar37</h4>
    </div>
  );
};

export default User;
