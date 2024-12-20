import useSWR from "swr";
import { ReadComment, createComment } from "../API/commentAPI";

export const useReadComment = (postID: string) => {
  const { data, isLoading } = useSWR(postID, () => ReadComment(postID), {
    revalidateOnFocus: false,
  });
  return { data, isLoading };
};

export const useCreateComment = (userID: string) => {
  const { data, isLoading } = useSWR(userID, () => createComment(userID), {
    revalidateOnFocus: false,
  });
  return { data, isLoading };
};
