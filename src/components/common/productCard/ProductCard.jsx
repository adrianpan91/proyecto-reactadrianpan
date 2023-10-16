import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ item }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={item.img}
          title={`image ${item.title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {item.title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {item.price} .-
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/itemDetail/${item.id}`}>
            <Button size="small" variant="outlined">
              Ver detalle
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
