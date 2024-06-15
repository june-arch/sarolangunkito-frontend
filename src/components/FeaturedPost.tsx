import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Tooltip } from "@mui/material";
import dayjs from "dayjs";

interface FeaturedPostProps {
  post: {
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
    slug: string;
  };
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href={`/article/${post.slug}`}>
        <Card sx={{ display: "flex" }} style={{height: 260}}>
          <CardContent sx={{ flex: 1 }}>
            <Tooltip
              title={
                <Typography
                  variant="subtitle1"
                >
                  {post.title}
                </Typography>
              }
            >
              <Typography
                component="h2"
                variant="h5"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "1",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {post.title}
              </Typography>
            </Tooltip>
            <Typography variant="subtitle1" color="text.secondary">
              {dayjs(post.date).format("MMMM D, YYYY")}
            </Typography>
            <Typography
              variant="subtitle1"
              paragraph
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical",
              }}
              component={'div'}
              dangerouslySetInnerHTML={{ __html: post.description }}
            >
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}
