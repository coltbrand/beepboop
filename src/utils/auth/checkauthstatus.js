import Cookies from "js-cookie";

const CheckTokenExpiration = () => {
  var expiration = Cookies.get("access_token_expiration");
  let currentDate = new Date();
  return expiration * 1000 < currentDate.getTime();
};

export default CheckTokenExpiration;
