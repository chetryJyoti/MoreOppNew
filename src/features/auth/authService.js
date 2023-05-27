//check if the user is logged in or not
//isloggedIn-->check localstorage token
export const isloggedIn = () => {
  let token = localStorage.getItem("token");
  if (token != null) return true;
  else return false;
};

//doLogin-->set token to localstorage
export const doLogin = (token, next) => {
  localStorage.setItem("token", JSON.stringify(token));
};

//doLogout-->remove token from local storage
export const doLogout = (next) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  // const setUserEmpty = {
  //   username: "",
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   password: "",
  // };
  // localStorage.setItem("user",JSON.stringify(setUserEmpty))
};

//getToken
export const getToken = () => {
  return localStorage.getItem("token");
};

//setCurrenUserDetails
export const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
  console.log("current user data saved to local storage");
};

//getCurrentUserDetails
export const getCurrentUserDetail = () => {
  if (isloggedIn) {
    console.log("hello");
    const d = localStorage.getItem("user");
    const userData = JSON.parse("[" + d + "]");
    return userData;
  } else return false;
};

//get current userName
export const getCurrentUserName = () => {
  if (isloggedIn) {
    let user = getCurrentUserDetail();
    console.log(user);
    if (user && user?.length > 0 && user[0]?.username) {
      return user[0].username;
    } else {
      return null;
    }
  }
};

export const getUserRole = () => {
  let user = getCurrentUserDetail();
  return user[0].authorities[0].authority;
};
