import tweetme from "../../assets/projects_images/tweetme.PNG";
import chatapp from "../../assets/projects_images/chatapp.JPG";
import hardware_store from "../../assets/projects_images/hardware_store.jpg";
import portfolio from "../../assets/projects_images/portfolio.JPG";
import new_year from "../../assets/projects_images/new_year.jpg";
import color_classification from "../../assets/projects_images/color_classification.jpg";
import blinking from "../../assets/projects_images/blinking.JPG";
import COVID from "../../assets/projects_images/COVID.jpg";
import Dev_talks from "../../assets/projects_images/Dev_talks.jpg";

const data_projects = [
  {
    name: "COVID 19 tracker",
    image: COVID,
    deployed_url: "https://covid19traker.herokuapp.com/",
    github_url: "https://github.com/Lalu78/covid19-tracker",
    category: ["react.js"],
  },

  {
    name: "Realtime Chat App",
    image: chatapp,
    deployed_url: "",
    github_url: "",
    category: ["node", "socket.io", "react"],
  },

  {
    name: "Amazon clone",
    image: tweetme,
    deployed_url: "https://amazon1-app.herokuapp.com/",
    github_url: "https://github.com/Lalu78/Amazon-clone",
    category: ["django", "react"],
  },

  {
    name: "Shop Website",
    image: hardware_store,
    deployed_url: "!#",
    category: ["html_css", "vanilla"],
  },

  {
    name: "My Portfolio",
    image: portfolio,
    deployed_url: "http://suprateem.herokuapp.com/",
    category: ["vanilla"],
  },

  

  {
    name: "Color Classification using tf.js",
    image: color_classification,
    deployed_url: "!#",
    github_url: "https://github.com/Dey-Sumit/color-classification",
    category: ["node", "machine_learning"],
  },

  
];

export default data_projects;
