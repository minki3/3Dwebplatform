import axios from "axios";
import { API } from "../src/config";

export const getAll = async (pageNum: number) => {
  const res = await axios(`${API.posts}/${pageNum}`);
  return res.data.postDataInfo;
};
