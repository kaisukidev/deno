import { IChapter, getChaptersData } from "../models/youtube-chapters-model.ts";

let chapters = getChaptersData();

const getChapters = (
  { params, response } : { params: { id: string }; response: any },
) => {
  response.status = 200
  response.body = chapters
};

export { getChapters };