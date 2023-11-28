import React, { useState, useEffect } from "react";
import "../pages/styles.css";
import axios from "axios";
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

const Projectpage = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/events/api/');
        if (response.data) {
          setProjects(response.data);
        }
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };
  
    fetchData();
  }, []);
  return (
    <Grid container spacing={4} justifyContent="center" className="project">
      {projects ? (
        projects.reverse().map((project, index) => (
          <Grid item key={index} sx={{ marginTop: 16 }}>
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
                image={project.image}
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
                  {project.description}
                </Typography>
                <br />
                <Typography sx={{ textAlign: "center", alignSelf: "center" }}>
                  {project.stack}
                </Typography>
              </CardContent>
              <CardActions sx={{ alignSelf: "center" }}>
                <Button href={project.github_link}>
                  <PiGithubLogoBold size={32} color="#black" weight="bold" />
                </Button>
                <Button href={project.online_link}>
                  <PiLinkSimpleBold size={32} color="#black" weight="bold" />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography variant="body1" align="center">
          Carregando projetos...
        </Typography>
      )}
      ;
    </Grid>
  );
};

export default Projectpage;
