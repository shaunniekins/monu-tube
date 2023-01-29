const videos = [
  {
    id: 1,
    title: "Butuan National Museum",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=1puwumkQwZ2WkYV6eaew4MjHjkXb7rYrU",
    // videoUrl: "https://www.youtube.com/embed/KA_KPmTxPSg",
    videoUrl:
      "https://drive.google.com/file/d/1dTPGKI0J3HNAKtoCrCwAcVRG3kxtUNPr/preview",
    description:
      "This museum is the repository of historical and cultural materials and artifacts that proves Butuan’s prehistoric existence and rich cultural heritage.",
  },
  {
    id: 2,
    title: "Masao",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=1sS1qUuBxv94fTIOpsOrWNo0y-cfkfOb8",
    videoUrl:
      "https://drive.google.com/file/d/14IAGkOt3a0LdfPaSSx1INx85qW2cd8od/preview",
    description:
      "Only beach in Butuan City known by its history as Magellan's landing site.",
  },
  {
    id: 3,
    title: "Macapagal Bridge",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=1vyGWa50TaQUn6PIlUDGCGvyT9ys4ALB-",
    videoUrl:
      "https://drive.google.com/file/d/1rxxb9asyTJfx6TzinvFE63r5OxGwzuDh/preview",
    description:
      "The longest suspension bridge in Mindanao at 882 meters in length, the President Diosdado Macapagal Bridge is an alternative route that links Butuanons to the island of Mindanao.",
  },
  {
    id: 4,
    title: "Guigona Park",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=1Whf6MZxBwquWNzXB-BT-wIVUKvEdamME",
    videoUrl:
      "https://drive.google.com/file/d/1JrpdNL0nJW5bPGla9no2b5URAZC1vTWT/preview",
    description:
      "A park in Northern Mindanao located on Jose S. Aquino Avenue. Guingona Park is situated nearby to the memorial The Raising of the Philippine Flag in Mindanao historical marker and the church Bell Tower.",
  },
  {
    id: 5,
    title: "Banza Church Ruins",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=1cww4Lx_pwu2ukK88kY-hP80DipTIDoQu",
    videoUrl:
      "https://drive.google.com/file/d/101yZMwce4L89GHu6W8ILTFuC_l3IOwHo/preview",
    description:
      "Built by Recollect friars in 1625 but burned down by Moro pirates in 1753, this church was once dubbed as the most beautiful church in the region before its destruction.",
  },
  {
    id: 6,
    title: "HERO Learning Commons",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=1q_gHNZ58ypYFaJXXDV8TPIj718KFE2A3",
    videoUrl:
      "https://drive.google.com/file/d/1zRggMvdHc8hPAEhLJJux8ALUUqRavAQn/preview",
    description:
      "Well-appointed building takes the shape of an arch that has 3 floors which represent its three main sections in terms of design and operations. Integrated with technology solutions. This Library is set to offer services far beyond what traditional library space can offer. ",
  },
  {
    id: 7,
    title: "Kinaadman Hall",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=1WqcDlG1eO_CUY8IcxVAE6_LdZe1oP9v7",
    videoUrl:
      "https://drive.google.com/file/d/1tgt1asS_P9h2kRV84pnVr0KVePc-StVK/preview",
    description:
      "From its name 'Kinaadman' that means knowledge or wisdom; the premise offers a wide-range of learnings for learners.",
  },
  {
    id: 8,
    title: "Harrison Bridge",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=1zHYu7T9bexECmAd52ae6u_UdsRsvcaZd",
    videoUrl:
      "https://drive.google.com/file/d/1XYuQXKikM5wTpH84Ovn_aSwY59MKMDNB/preview",
    description:
      "Takes the name of Gov. Sir Francis Burton Harrison that showcases its very own cenotaph.",
  },
  {
    id: 9,
    title: "Admin Building",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=1HV_TaIDHIzz6yqYA0hTshAUvoM5rJesB",
    videoUrl:
      "https://drive.google.com/file/d/1DFiua1u7OuCx0SpF3KbATi09wYjfiOs8/preview",
    description:
      "Facility for day-to-day operations related to administrative functions including financial planning, record keeping and billing, staffing, physical distribution, and logistics.",
  },
  {
    id: 10,
    title: "Hiraya Hall",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=1UKulGoScS7sPxZ5jr4iGi9-lL8jb1DU2",
    videoUrl:
      "https://drive.google.com/file/d/1GORRiauvmNCYtsLS92x9nWSqZZ2Pkc_C/preview",
    description:
      "An immersive technological structure, constructed for the College of Computing and Information Sciences",
  },
  // Add-ons
  {
    id: 1,
    title: "Butuan National Museum",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=1puwumkQwZ2WkYV6eaew4MjHjkXb7rYrU",
    // videoUrl: "https://www.youtube.com/embed/KA_KPmTxPSg",
    videoUrl:
      "https://drive.google.com/file/d/1dTPGKI0J3HNAKtoCrCwAcVRG3kxtUNPr/preview",
    description:
      "This museum is the repository of historical and cultural materials and artifacts that proves Butuan’s prehistoric existence and rich cultural heritage.",
  },
  {
    id: 2,
    title: "Masao",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=1sS1qUuBxv94fTIOpsOrWNo0y-cfkfOb8",
    videoUrl:
      "https://drive.google.com/file/d/14IAGkOt3a0LdfPaSSx1INx85qW2cd8od/preview",
    description:
      "Only beach in Butuan City known by its history as Magellan's landing site.",
  },
];

export default videos;
