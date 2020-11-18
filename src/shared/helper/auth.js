import Cookies from "universal-cookie";
export const cookies = (() => {
  let cookieInstance;
  return {
    getInstance: () => {
      if (!cookieInstance) {
        cookieInstance = new Cookies();
      }
      return cookieInstance;
    },
  };
})();

export const getAuthToken = (path="/") => {
  let cookie = cookies.getInstance();
  return cookie.get("token",{path});
};
console.log(getAuthToken());
