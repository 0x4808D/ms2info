import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import Link from "../components/default/Link";

const Home: NextPage = () => {
  return (
    <Grid container gap={4}>
      <Grid item>
        <Typography variant="h5">Item of the Day</Typography>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="256"
            image="/static/item/icon/30000071.png"
            alt="young frog"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Young Frog
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Link href="/items">
              <Button size="small">View Items</Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Typography variant="h5">NPC of the Day</Typography>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="256"
            image="/static/portrait/npc/11000511_shuabritze_p.png"
            alt="young frog"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Young Frog
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Link href="/npcs">
              <Button size="small">View NPCs</Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Typography variant="h5">Quest of the Day</Typography>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="256"
            image="/static/item/icon/30000071.png"
            alt="young frog"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Young Frog
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Link href="/quests">
              <Button size="small">View Quests</Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Typography variant="h5">Map of the Day</Typography>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="256"
            image="/static/item/icon/30000071.png"
            alt="young frog"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Young Frog
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Link href="/maps">
              <Button size="small">View Maps</Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export async function getStaticProps() {
  return {
    props: {
      headerText: "Home",
    },
  };
}

export default Home;
