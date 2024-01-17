import logo from "../img/deliveroo-logo.svg";

const Header = () => {
  return (
    <header>
      {/* <div className="common-w200"> */}
      <div className="common-w120 xs-pad-10-0-10-20 sm-pad-20-0-20-25 lg-pad-l-35">
        <img
          // className="common-w120 xs-pad-10-0-10-20 sm-pad-20-0-20-25 lg-pad-l-35"
          className="common-w120"
          src={logo}
          alt="Logo Deliveroo"
        />
      </div>
    </header>
  );
};

export default Header;
