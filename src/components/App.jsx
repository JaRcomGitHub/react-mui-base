import {
  Button,
  ButtonGroup,
  Checkbox,
  Fab,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  Switch,
  ToggleButtonGroup,
  ToggleButton,
  Avatar,
  Badge,
  Chip,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import NavigationIcon from '@mui/icons-material/Navigation';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Mail } from '@mui/icons-material';

import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import NestedList from './NestedList';
import StickySubHeader from './StickySubHeader';
import Customization from './Customization';
import TableSortingAndSelecting from './TableSortingAndSelecting';
import PositionedTooltips from './Tooltips';
import Alert from './Alert';
import TransitionAlerts from './Transition';
import SimpleBackdrop from './BackdropExample';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'lightBlue',
};

export const App = () => {
  const handleClick = () => ({});

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
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
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
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <br />
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
      <br />
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />
      <Switch {...label} defaultChecked color="secondary" />
      <Switch {...label} defaultChecked color="warning" />
      <Switch {...label} defaultChecked color="default" />
      <br />
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
      </FormGroup>
      <br />
      <ToggleButtonGroup
        color="primary"
        value="center"
        exclusive
        // onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="web">Web</ToggleButton>
        <ToggleButton value="android">Android</ToggleButton>
        <ToggleButton value="ios">iOS</ToggleButton>
      </ToggleButtonGroup>
      <br />
      <div style={{ display: 'flex', gap: 10 }}>
        <Avatar variant="square">H</Avatar>
        <Avatar sx={{ bgcolor: deepOrange[500] }} variant="rounded">
          N
        </Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
      </div>
      <br />
      <div style={{ display: 'flex', gap: 10 }}>
        <Badge badgeContent={4} color="primary">
          <Mail color="action" />
        </Badge>
        <Badge badgeContent={4} color="secondary">
          <Mail color="action" />
        </Badge>
        <Badge badgeContent={4} color="success">
          <Mail color="action" />
        </Badge>
      </div>
      <br />
      <div style={{ display: 'flex', gap: 10 }}>
        <Chip label="Chip Filled" size="small" />
        <Chip label="Chip Outlined" variant="outlined" icon={<EditIcon />} />
        <Chip label="Clickable" onClick={handleClick} color="success" />
        <Chip label="Clickable" variant="outlined" onClick={handleClick} />
      </div>
      <br />
      <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button>
          <EditIcon />
          <ListItemText primary="Inbox" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
      <br />
      <div>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 'fit-content',
            border: theme => `1px solid ${theme.palette.divider}`,
            borderRadius: 1,
            bgcolor: deepPurple[500],
            color: 'text.secondary',
            '& svg': {
              m: 1.5,
            },
            '& hr': {
              mx: 0.5,
            },
          }}
        >
          <FormatAlignLeftIcon />
          <FormatAlignCenterIcon />
          <FormatAlignRightIcon />
          <Divider orientation="vertical" flexItem />
          <FormatBoldIcon />
          <FormatItalicIcon />
        </Box>
      </div>
      <br />
      <NestedList />
      <br />
      <StickySubHeader />
      <br />
      <Customization />
      <br />
      <TableSortingAndSelecting />
      <br />
      <PositionedTooltips />
      <br />
      <Alert />
      <br />
      <TransitionAlerts />
      <br />
      <SimpleBackdrop />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
