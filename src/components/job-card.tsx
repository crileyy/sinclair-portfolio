import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function JobCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="public/images/test-image.png"
          alt="job picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Job Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Job Description
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}