import { useSelector } from "react-redux";
import { useOneReadUser, useReadPost } from "../../hooks/useReadPost";
import { useState, FC } from "react";
import { createPost } from "../../API/postAPI";
import { mutate } from "swr";
import { Link } from "react-router-dom";

const PostImage = () => {
  const user = useSelector((state: any) => state.user);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false);

  const { data } = useReadPost(user._id);
  const handleImage = (e: any) => {
    setImage(e.target.files[0]);
  };

  const handlePost = () => {
    setLoading(true);
    const formData = new FormData();

    formData.append("title", title);
    formData.append("image", image);

    createPost(user._id, formData)
      .then((res) => {
        if (res.status === 201) {
          mutate(`read-post/${user._id}`);
        }
      })
      .finally(() => {
        setLoading(true);
      });
  };
  return (
    <div>
      <div className="w-full h-screen  flex items-center justify-center">
        <div className="w-[50%] h-[60%] border">
          <Link to="/dashboard/dash">
            <button className="bg-blue-900 w-[100px] h-[35px] rounded-md ml-5 mt-2 text-white">
              Back
            </button>
          </Link>
          <p className="text-[30px] font-semibold ml-5 mt-4 mb-5">
            create post
          </p>

          <textarea
            className=" resize-none
            border rounded-md w-[600px] h-[200px] outline-none pl-2 ml-14 mb-4"
            placeholder="what's on your mind"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="flex justify-end gap-2">
            <label
              className="bg-blue-900 text-white px-10 py-2 text-[12px] rounded-md"
              htmlFor="image"
            >
              Add Image
              <input
                id="image"
                type="file"
                accept="image/jpg, image/png, image/jpeg"
                onChange={handleImage}
                hidden
              />
            </label>
            <button
              onClick={handlePost}
              className="bg-blue-900 rounded-md text-[12px] text-white w-[110px] h-[32px] mr-24 "
            >
              post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostImage;

export const Profile: FC<any> = ({ time, id }) => {
  const { data } = useOneReadUser(id);

  return (
    <div>
      <div className="flex gap-4">
        <img
          src={data?.avatar}
          className="w-16 h-16 rounded-full bg-red-300 object-cover"
          alt={"ll"}
        />
        <div>
          <p>{data?.userName}</p>
          <p className="text-[12px] font-semibold">Time Posted: {time}</p>
        </div>
      </div>
    </div>
  );
};
