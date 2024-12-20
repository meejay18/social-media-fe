import axios from "axios";

const URL = "https://socialmedia-application-h0ft.onrender.com/";

export const createPost = async (userID: string, data: any) => {
  try {
    const config: any = {
      headers: {
        "content-types": "multipart/form-data",
      },
    };
    return await axios
      .post(`${URL}/api/post/create-post/${userID}`, data, config)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const readPost = async (userID: string) => {
  try {
    return await axios
      .get(`${URL}/api/post/read-post/${userID}`)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
