import axios from "axios";
const url: string = `https://socialmedia-application-h0ft.onrender.com`;

export const createUserAccount = (data: any) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    return axios
      .post(`${url}/api/user/create-user`, data, config)

      .then((res) => {
        return res?.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const LoginUser = async (data: any) => {
  try {
    return await axios.post(`${url}/api/user/login-user`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${url}/users/`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    return error;
  }
};

export const getUser = async (userID: any) => {
  try {
    return await axios.get(`${URL}/one-user/${userID}`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    return error;
  }
};
