import { useEffect } from "react";
import { addSearchedItems } from "../videoSlice";
import { useDispatch, useSelector } from "react-redux";
import { setYoutubeLimitReached } from "../stateSlice";
import { YT_SEARCH_API_END, YT_SEARCH_API_START } from "../constants";

const useGetSearchResult = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((store) => store.state?.selectedItem)

  useEffect(() => {
    if(searchQuery === null) return;
    const getSearchResults = async () => {
      try {
        const data = await fetch(
          `${YT_SEARCH_API_START}${encodeURIComponent(searchQuery)}${YT_SEARCH_API_END}${process.env.REACT_APP_GOOGLE_API_KEY2}`
        );
        const json = await data.json();
            if (json.error?.errors?.some((err) => err.reason === "quotaExceeded")) {
          dispatch(setYoutubeLimitReached(true));
        } else {
          dispatch(setYoutubeLimitReached(false));
          dispatch(addSearchedItems(json.items));
        }
      } catch (error) {
        dispatch(setYoutubeLimitReached(true));
      }
    };
    getSearchResults();
  }, [searchQuery]);
};

export default useGetSearchResult;
