import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function MultiActionAreaCard(recipe) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={recipe.image}
          // alt={recipe.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {recipe.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {recipe.ingredients}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to the menu
        </Button>
      </CardActions>
    </Card>
  );
}

{/* <div className="recipe-card" key={recipe.id}>
          <div className="recipe-card__image">
            <img src={recipe.image} alt={recipe.name} />
          </div>
          <div className="recipe-card__content">
            <h2 className="recipe-card__title">{recipe.name}</h2>
            <p className="recipe-card__description">{recipe.instructions.join(' ')}</p>
            <button className="recipe-card__button">View Recipe</button>
          </div>
        </div> */}