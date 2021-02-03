import React from 'react';
import {getHeroData} from '../Services/superHeroService';
import {dataTypes} from '../common/types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    homepage: {
        height: '100%',
    },
    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      position: 'relative',
    },
    loading: {
        position: 'absolute'
    },
    formControl: {
        marginTop: theme.spacing(2),
        width: '100%',
    },
    
  }));

const Home = () => {
    const [data, setData] = React.useState([]);
    const [chosenType, setChosenType] = React.useState(''); 
    const [loading, setLoading] = React.useState(false); 
    const classes = useStyles();

    const handleSubmit = () => {
        if(chosenType !== '') {
            setLoading(true);
            getHeroData('superman', chosenType).then(data => {
                setLoading(false)
                setData(data);
            })
        }
    }

    const handleChange = (event) => {
        setChosenType(event.target.value);
    };

    return (
    <Container className={classes.homepage} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Chose Super hero!
        </Typography>
        <form className={classes.form} noValidate>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">type</InputLabel>
                    <Select
                        fullWidth
                        value={chosenType}
                        onChange={handleChange}
                        label="type"
                    >
                        {dataTypes.map((type, index) => (
                            <MenuItem key={index} value={type}>
                                {type}
                            </MenuItem>
                        ))}
                </Select>
            </FormControl>

          <Button
            onClick={() => handleSubmit()}
            fullWidth
            disabled={loading}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Chose
            {
                loading  && <CircularProgress className={classes.loading} size={23} /> 
            }
          </Button>
        </form>

        <div>
            {data.length > 0 && JSON.stringify(data)}
        </div>
      </div>
    </Container>
    )
}

export default Home;