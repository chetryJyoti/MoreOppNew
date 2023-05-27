import { myAxios } from "./environment";
// import {request} from "./authIntercepter";
import { getToken } from '../features/auth/authService'
export const signUp = (user) => {
  return myAxios.post("/user/register", user).then((response) => response.data);
};

export const Userlogin = (loginDetail) => {
  return myAxios
    .post("/generate-token", loginDetail)
    .then((response) => response.data);
};

export const getCurrentUser = () => {
  const token =JSON.parse(getToken());
  console.log(token);
  //sending the token in header (intercepter)
  myAxios.defaults.headers.common['Authorization'] = `Bearer ${token}` 
  return myAxios.get("/current-user").then((response) => response.data);
  // return request({url:'/current-user'});
};
