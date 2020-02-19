import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Container, Grid, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function HeroContent() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        Album layout
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Something short and leading about the collection below—its contents, the creator, etc.
        Make it short and sweet, but not too short so folks don&apos;t simply skip over it
        entirely.
      </Typography>
      <div className={classes.heroButtons}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button variant="contained" color="primary">
              Main call to action
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">
              Secondary action
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
