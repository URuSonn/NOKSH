import LuggageIcon from "@mui/icons-material/Luggage";
import ChurchIcon from "@mui/icons-material/Church";

//各ページのタイトル。どんどん増えそうな予感(^^;;
export const INDEX_PAGE_TITLE = "Index Page";
export const ABOUT_PAGE_TITLE = "About Page";
export const EVENT_PAGE_TITLE = "Event Page";
export const ALBUM_PAGE_TITLE = "Album Page";

//イベントが追加後に更新
export const EVENTS_PROPS = [
  {
    date: "2020/02/02",
    eventTitle: "熱海",
    eventLink: "/enosima1",
    icon: <LuggageIcon />,
    eventLocation: "静岡熱海",
    imageData: [
      { Image: "https://picsum.photos/200/200", Text: "AAA" },
      { Image: "https://picsum.photos/201/201", Text: "AAA" },
      { Image: "https://picsum.photos/199/199", Text: "AAA" },
    ],
  },
  {
    date: "2020/02/02",
    eventTitle: "鎌倉 - 江ノ島",
    eventLink: "/enosima1",
    icon: <LuggageIcon />,
    eventLocation: "神奈川県鎌倉",
    imageData: [
      { Image: "https://picsum.photos/200/201", Text: "AAA" },
      { Image: "https://picsum.photos/201/202", Text: "AAA" },
      { Image: "https://picsum.photos/199/193", Text: "AAA" },
    ],
  },
  {
    date: "2023/06/09",
    eventTitle: "細野先生の結婚式",
    eventLink: "/enosima1",
    icon: <ChurchIcon />,
    eventLocation: "東京都豊洲",
    imageData: [
      { Image: "https://picsum.photos/200/202", Text: "AAA" },
      { Image: "https://picsum.photos/201/203", Text: "AAA" },
      { Image: "https://picsum.photos/199/200", Text: "AAA" },
    ],
  },
  {
    date: "2023/08/19",
    eventTitle: "レイクタウンVsPark",
    eventLink: "/eventdetailpage",
    icon: <LuggageIcon />,
    eventLocation: "埼玉県越谷",
    imageData: [
      { Image: "https://picsum.photos/200/203", Text: "AAA" },
      { Image: "https://picsum.photos/201/200", Text: "AAA" },
      { Image: "https://picsum.photos/199/198", Text: "AAA" },
    ],
  },
];
