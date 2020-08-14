interface IChapter {
  text: string;
  time: string;
  timeInSeconds: number;
  link: string;
}

let chapters: Array<IChapter> = [{
  "text": "Construímos uma API Rest com Deno usando TypeScript que vai pra Produção // Mão no Código #34",
  "time": "19:14",
  "timeInSeconds": 1148,
  "link": "https://www.youtube.com/watch?v=ThDTt_wd2Y4"
}]

const getChaptersData = () => {
  return chapters
}

export { IChapter, getChaptersData };