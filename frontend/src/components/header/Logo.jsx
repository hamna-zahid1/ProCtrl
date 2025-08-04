import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="md:block">
      <NavLink to="/">
        <img
          src="/proctrl-logo.png"
          alt="ProCtrl logo"
          className="w-[130px] rounded-md shadow-sm"
        />
      </NavLink>
    </div>
  );
};

export default Logo;