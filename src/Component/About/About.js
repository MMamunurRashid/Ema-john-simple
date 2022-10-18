import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/UserContext";

const About = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Secret about us {user?.email}</h1>
    </div>
  );
};

export default About;
