import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div
      data-aos="flip-right"
      data-delay="500"
      data-aos-offset="100"
      className=" d-flex justify-content-center align-items-center"
      style={{ height: "100vh", flexDirection: "column" }}
    >
      <SignIn path="/sign-in" />
    </div>
  );
};

export default Login;
