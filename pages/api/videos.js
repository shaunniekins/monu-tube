const videos = [
  {
    id: 1,
    title: "Video 1",
    thumbnail:
      "https://i.ytimg.com/vi/KA_KPmTxPSg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOGNq2kmP6DgjDkWXKH6WVxwsdRg",
    // videoUrl: "https://www.youtube.com/embed/KA_KPmTxPSg",
    videoUrl:
      "https://drive.google.com/file/d/1tgt1asS_P9h2kRV84pnVr0KVePc-StVK/preview",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo harum rem facere, laborum expedita voluptate doloribus numquam, perspiciatis dolore vitae sint excepturi. Assumenda eius commodi cumque magni fugiat nisi a?",
  },
  {
    id: 2,
    title: "Video 2",
    thumbnail:
      "https://i.ytimg.com/vi/vdiYtiKD8eI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDW-wQW2-fcgmH_f4L1WyQb31ozSg",
    videoUrl:
      "https://drive.google.com/file/d/101yZMwce4L89GHu6W8ILTFuC_l3IOwHo/preview",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo harum rem facere, laborum expedita voluptate doloribus numquam, perspiciatis dolore vitae sint excepturi. Assumenda eius commodi cumque magni fugiat nisi a?",
  },
  {
    id: 3,
    title: "Video 3",
    thumbnail:
      "https://i.ytimg.com/vi/9ealmv8XCPE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLA1vACCxpRGkxGX_FzIdrqa4IRA",
    videoUrl: "https://www.youtube.com/embed/9ealmv8XCPE",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo harum rem facere, laborum expedita voluptate doloribus numquam, perspiciatis dolore vitae sint excepturi. Assumenda eius commodi cumque magni fugiat nisi a?",
  },
  {
    id: 4,
    title: "Video 4",
    thumbnail:
      "https://i.ytimg.com/vi/lpraYE-TLeM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtF5i0qLWIzaQIRflXu65FkQql8Q",
    videoUrl: "https://www.youtube.com/embed/lpraYE-TLeM",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo harum rem facere, laborum expedita voluptate doloribus numquam, perspiciatis dolore vitae sint excepturi. Assumenda eius commodi cumque magni fugiat nisi a?",
  },
  {
    id: 5,
    title: "Video 5",
    thumbnail:
      "https://i.ytimg.com/vi/GqgWz-n4hdE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjqSMfEy6o1G61fAC-j-LRe4y87g",
    videoUrl: "https://www.youtube.com/embed/GqgWz-n4hdE",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo harum rem facere, laborum expedita voluptate doloribus numquam, perspiciatis dolore vitae sint excepturi. Assumenda eius commodi cumque magni fugiat nisi a?",
  },
  {
    id: 6,
    title: "Video 6",
    thumbnail:
      "https://i.ytimg.com/vi/7SIlor1Zi9w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdMlxo44jpPvnulhGPjtqW3KWQPQ",
    videoUrl: "https://www.youtube.com/embed/7SIlor1Zi9w",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo harum rem facere, laborum expedita voluptate doloribus numquam, perspiciatis dolore vitae sint excepturi. Assumenda eius commodi cumque magni fugiat nisi a?",
  },
  {
    id: 7,
    title: "Video 7",
    thumbnail:
      "https://i.ytimg.com/vi/VhmnPNIjvKc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPNDEtKSVUJrpVRKZ23OuUrIH-Gw",
    videoUrl: "https://www.youtube.com/embed/VhmnPNIjvKc",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo harum rem facere, laborum expedita voluptate doloribus numquam, perspiciatis dolore vitae sint excepturi. Assumenda eius commodi cumque magni fugiat nisi a?",
  },
  {
    id: 8,
    title: "Video 8",
    thumbnail:
      "https://i.ytimg.com/vi/-Y_y96pbQZ4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvhJZZE4ZRJ5Wgaswf0bfxULxcqg",
    videoUrl: "https://www.youtube.com/embed/-Y_y96pbQZ4",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo harum rem facere, laborum expedita voluptate doloribus numquam, perspiciatis dolore vitae sint excepturi. Assumenda eius commodi cumque magni fugiat nisi a?",
  },
  {
    id: 9,
    title: "Video 9",
    thumbnail:
      "https://i.ytimg.com/vi/-vrnlAX7w2A/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhKIF4oZTAP&rs=AOn4CLAFHelOEhb8AFcfQ_afcAKRgFXb_w",
    videoUrl: "https://www.youtube.com/embed/-vrnlAX7w2A",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo harum rem facere, laborum expedita voluptate doloribus numquam, perspiciatis dolore vitae sint excepturi. Assumenda eius commodi cumque magni fugiat nisi a?",
  },
  {
    id: 10,
    title: "Video 10",
    thumbnail:
      "https://i.ytimg.com/vi/Y1ZJ-_VKZs0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCaBuaTPH5BfdbrowahzOfCPD5SMg",
    videoUrl: "https://www.youtube.com/embed/Y1ZJ-_VKZs0",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo harum rem facere, laborum expedita voluptate doloribus numquam, perspiciatis dolore vitae sint excepturi. Assumenda eius commodi cumque magni fugiat nisi a?",
  },
  {
    //Add ons
    id: 1,
    title: "Video 1",
    thumbnail:
      "https://i.ytimg.com/vi/KA_KPmTxPSg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOGNq2kmP6DgjDkWXKH6WVxwsdRg",
    // videoUrl: "https://www.youtube.com/embed/KA_KPmTxPSg",
    videoUrl:
      "https://drive.google.com/file/d/1tgt1asS_P9h2kRV84pnVr0KVePc-StVK/preview",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo harum rem facere, laborum expedita voluptate doloribus numquam, perspiciatis dolore vitae sint excepturi. Assumenda eius commodi cumque magni fugiat nisi a?",
  },
  {
    id: 2,
    title: "Video 2",
    thumbnail:
      "https://i.ytimg.com/vi/vdiYtiKD8eI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDW-wQW2-fcgmH_f4L1WyQb31ozSg",
    videoUrl:
      "https://drive.google.com/file/d/101yZMwce4L89GHu6W8ILTFuC_l3IOwHo/preview",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo harum rem facere, laborum expedita voluptate doloribus numquam, perspiciatis dolore vitae sint excepturi. Assumenda eius commodi cumque magni fugiat nisi a?",
  },
];

export default videos;
