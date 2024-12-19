import axios from "axios";

const URL = "http://localhost:8090/api";

export const createComment = async (userID: string) => {
  try {
    const { data } = await axios.post(
      `${URL}/comment/create-comment/${userID}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCommentsOnPost = async (postID: string) => {
  try {
    const { data } = await axios.get(`${URL}/comment/post/${postID}/comments`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const ReadComment = async (postID: string) => {
  try {
    const { data } = await axios.get(`${URL}/comment/read-comment/${postID}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
