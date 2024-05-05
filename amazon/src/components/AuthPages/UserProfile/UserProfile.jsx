import { UserProfile } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";

const UserProfilePage = () => {
  const user = useUser();
  return (
    <div>
      <h1
        data-aos="fade-up"
        className="font-bold w-fit mx-auto mt-24 mb-20 relative"
        style={{ fontSize: "3rem", lineHeight: "1" }}
      >
        Hello , {user.firstName}
      </h1>
      <div className="mt-10 d-flex justify-content-center align-items-center">
        <UserProfile path="/user-profile" />
      </div>
    </div>
  );
};

export default UserProfilePage;
