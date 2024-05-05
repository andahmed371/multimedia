import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div
      data-aos="flip-right"
      data-delay="500"
      data-aos-offset="100"
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", flexDirection: "column" }}
    >
      <SignUp path="/sign-up" />
    </div>
  );
};

export default SignUpPage;
