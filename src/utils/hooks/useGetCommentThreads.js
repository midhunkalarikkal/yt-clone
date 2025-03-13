import { useEffect, useState } from "react";
import { GAK, VIDEO_COMMENT_THRES_API } from "../constants";

const useGetCommentThreads = (videoId) => {
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getComments = async () => {
      setLoading(true);
      try {
        const data = await fetch(
          VIDEO_COMMENT_THRES_API + videoId + "&key=" + GAK
        );
        console.log("data : ",data);
        const json = await data.json();
        setComments(json.items);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getComments();
  }, [videoId]);
  return { comments, loading, error };
};

export default useGetCommentThreads;
