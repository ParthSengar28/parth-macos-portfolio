import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I'm Parth Sengar..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "Lung-Care",
        title: "Lung Care",
        file: "https://raw.githubusercontent.com/ParthSengar28/lung-care/refs/heads/main/README.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "A deep learning model used to detect pneumonia...",
        link: "https://github.com/ParthSengar28/lung-care"
      },
      {
        id: "AI Resume Analyzer",
        title: "AI Resume Analyzer",
        file: "https://raw.githubusercontent.com/ParthSengar28/Resume-Analyzer/refs/heads/main/README.md",
        icon: "i-ri:gamepad-line",
        excerpt: "It is an AI-powered resume analyzer...",
        link: "https://resume-analyzer-u6rkadhocdmaamsqd99xba.streamlit.app/"
      },
      {
        id: "AI Chatbot",
        title: "AI Chatbot",
        file: "https://raw.githubusercontent.com/ParthSengar28/AI-Chatbot-using-Groq/refs/heads/main/README.md",
        icon: "i-ri:newspaper-fill",
        excerpt: "LLM-based chatbot using Groq API...",
        link: "https://github.com/ParthSengar28/AI-Chatbot-using-Groq"
      },
      {
        id: "Digital Marketing Website",
        title: "Digital Marketing Website",
        file: "https://kahaanihaus.in/",
        icon: "i-fa-brands:vuejs",
        excerpt: "Modern Digital Marketing Website...",
        link: "https://kahaanihaus.in/"
      },
      {
        id: "Spam-mail detector",
        title: "Spam Mail Detector",
        file: "https://raw.githubusercontent.com/ParthSengar28/Spam-Email-Detection/refs/heads/main/README.md",
        icon: "i-akar-icons:sword",
        excerpt: "A spam email detection system...",
        link: "https://spam-email-detection-uctzxjslqym2v8kmanchnu.streamlit.app/"
      }
    ]
  }
];

export default bear;
