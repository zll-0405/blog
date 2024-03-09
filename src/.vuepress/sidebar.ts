import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/gallup/": [
    "evaluation",
    {
      text: "入门",
      prefix: "start/",
      collapsible: true,
      children: [
        "get-start-column",
        "start-misunderstand-one",
        "start-misunderstand-two",
      ],
    },
    {
      text: "优势教练",
      prefix: "coach/",
      collapsible: true,
      children: [
        "to-be-a-coach",
        "what-gallup-coach-is"
      ],
    },
    "talent-to-strength",
    "good-wolf-warrior",
  ],

  "/consult/": [
    {
      text: "陪跑",
      prefix: "run/",
      collapsible: true,
      children: [
        "user-feedback"
      ],
    },
    {
      text: "日常",
      prefix: "dairy/",
      collapsible: true,
      children: [
        "love-method"
      ],
    },
  ],

  "/personal/":  [
      "i-want",
      "test-method",
  ]
});
