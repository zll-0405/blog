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
        "what-gallup-coach-is",
        "to-be-a-coach",
        "how-to-be-a-coach",
      ],
    },
    {
      text: "心得",
      prefix: "experience/",
      collapsible: true,
      children: [
        "good-wolf-warrior",
        "talent-to-strength",
        "career-direction",
        "fruitful-growth-mindset-past-year"
      ],
    },
  ],

  "/consult/": [
    {
      text: "陪跑",
      prefix: "run/",
      collapsible: true,
      children: [
        "user-feedback",
        "express-vulnerability",
      ],
    },
    {
      text: "日常",
      prefix: "dairy/",
      collapsible: true,
      children: [
        "where-get-so-much-time",
        "love-method"
      ],
    },
  ],

  "/personal/":  [
    "infp-find-interest",
    "looking-for-a-partner",
    "novice-cut-off-leeks",
    "test-method",
    "i-want",
    "how-to-make-a-good-decision",
    "think-about-security",
    "two-tips-worth-millions",
  ]
});
