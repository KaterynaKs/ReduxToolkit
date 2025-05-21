import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Box, Modal } from '@mui/material';
import { useState } from 'react';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px',
};

export default function MultiActionAreaCard({ recipe }) {
  if (!recipe) return null;

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log("Recipe data:", recipe);
  // const {image, name, ingredients} = recipe;
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={recipe.image}
            alt={recipe.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {recipe.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {recipe.ingredients}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleOpen}>
            View Recipe
          </Button>
        </CardActions>
      </Card>
      
      {/* <Button onClick={handleOpen}>Open recept</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-title" variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
            {recipe.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
            {recipe.instructions}
          </Typography>
          <Button onClick={handleClose} sx={{ mt: 2 }} variant="outlined">
            Close
          </Button>
        </Box>
      </Modal>
    </>
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