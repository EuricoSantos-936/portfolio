import React from "react";
import "../pages/styles.css";
import project1 from "../assets/project_portfolio.png";
import project2 from "../assets/advice_generator.png";
import project3 from "../assets/newsletter-signup.png";
import project4 from "../assets/markdown-previewer-fcc.png";
import project5 from "../assets/cinereservation.png";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { PiGithubLogoBold, PiLinkSimpleBold } from "react-icons/pi";

//to add projects
const projects = [
  {
    id: 1,
    title: "EuricoPortfolio",
    desc: "Personal website that showcases my projects.",
    mats: "React.js - BootStrap - MUI",
    img: project1,
    link: "#",
    code: "https://github.com/EuricoSantos-936/portfolio",
  },
  {
    id: 2,
    title: "Advice Generator",
    desc: "Advice Generator app challenge by Frontend Mentor",
    mats: "Vue.js - Vite - API",
    img: project2,
    link: "https://advice-generator-app-vue-bizhead.vercel.app/",
    code: "https://github.com/EuricoSantos-936/Advice-generator-app-vue",
  },
  {
    id: 3,
    title: "Newsletter signup",
    desc: "Newsletter signup app challenge by Frontend Mentor.",
    mats: "React.js - Vite",
    img: project3,
    link: "https://newsletter-signup-app-react.vercel.app",
    code: "https://github.com/EuricoSantos-936/newsletter-signup-app-react",
  },
  {
    id: 4,
    title: "Markdown previewer",
    desc: "Markdown previewer for freeCodeCamp project",
    mats: "React.js - TypeScript - Vite",
    img: project4,
    link: "https://markdown-previewer-fcc--bizhead.repl.co",
    code: "https://github.com/EuricoSantos-936/markdown-previewer-react",
  },
  {
    id: 5,
    title: "Cine Reservations",
    desc: "Cinema reservation project with API",
    mats: "Python - Flask - Tkinter",
    img: project5,
    code: "https://github.com/EuricoSantos-936/cine-reservation-API-Flask-Tkinter",
  },
];

function Projectpage() {
  return (
    <Grid container spacing={4} justifyContent="center" className="project">
      {projects.reverse().map((project) => (
        <Grid item key={project.id} sx={{ marginTop: 16 }}>
          <Card
            sx={{
              boxShadow: "1px 4px 8px rgba(100, 23, 138, 0.2)",
              borderRadius: 2,
              maxWidth: 345,
              padding: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <CardMedia
              sx={{ height: 140, borderRadius: 2 }}
              image={project.img}
              title={project.title}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
              >
                {project.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                {project.desc}
              </Typography>
              <br />
              <Typography sx={{ textAlign: "center", alignSelf: "center" }}>
                {project.mats}
              </Typography>
            </CardContent>
            <CardActions sx={{ alignSelf: "center" }}>
              <Button href={project.code}>
                <PiGithubLogoBold size={32} color="#black" weight="bold" />
              </Button>
              <Button href={project.link}>
                <PiLinkSimpleBold size={32} color="#black" weight="bold" />
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Projectpage;
