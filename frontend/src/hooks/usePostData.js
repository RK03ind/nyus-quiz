import { useMutation } from "react-query";
import axios from "axios";

const usePostData = (url) => {
  return useMutation(async (data) => {
    return await axios.post(url, data);
  });
};

export default usePostData;
