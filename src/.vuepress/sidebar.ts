import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/gallup/": [
    "evaluation",
    {
      text: "优势教练",
      prefix: "coach/",
      collapsible: true,
      children: [
        "to-be-a-coach"
      ],
    },
  ],

  "/consult/": [
    "love-method"
  ],

  "/personal/":  [
      "i-want"
  ]
});
