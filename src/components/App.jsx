import { Button, ButtonGroup, Checkbox, Fab } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import NavigationIcon from '@mui/icons-material/Navigation';
import FavoriteIcon from '@mui/icons-material/Favorite';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const App = () => {
  return (
    <div>
      <h1>React mui base</h1>
      <h2>Button</h2>
      <br />
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br />
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
      <br />
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
      <br />
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <br />
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
      <br />
      <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="delete" size="large">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" size="large">
        <DeleteIcon fontSize="inherit" />
      </IconButton>
      <br />
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <br />
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
      <br />
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
    </div>
  );
};