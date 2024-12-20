import axios from "axios";

const URL = "https://socialmedia-application-h0ft.onrender.com";

export const createComment = async (userID: string) => {
  try {
    const { data } = await axios.post(
      `${URL}/api/comment/create-comment/${userID}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCommentsOnPost = async (postID: string) => {
  try {
    const { data } = await axios.get(
      `${URL}/api/comment/post/${postID}/comments`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const ReadComment = async (postID: string) => {
  try {
    const { data } = await axios.get(
      `${URL}/api/comment/read-comment/${postID}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
