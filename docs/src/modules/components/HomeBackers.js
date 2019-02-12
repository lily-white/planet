import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';
import MarkdownElement from '@material-ui/docs/MarkdownElement';
import mapTranslations from 'docs/src/modules/utils/mapTranslations';
import compose from 'docs/src/modules/utils/compose';

const req = require.context('docs/src/modules/components', false, /\.md$/);
const backers = mapTranslations(req, 'md');

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    minHeight: 600,
  },
  markdownElement: {
    // To replace with a layout component.
    maxWidth: theme.breakpoints.values.md,
    margin: 'auto',
    padding: theme.spacing(4, 2),
  },
});

function HomeBackers(props) {
  const { classes, userLanguage } = props;

  return (
    <div className={classes.root}>
      <NoSsr>
        <MarkdownElement className={classes.markdownElement} text={backers[userLanguage]} />
      </NoSsr>
    </div>
  );
}

HomeBackers.propTypes = {
  classes: PropTypes.object.isRequired,
  userLanguage: PropTypes.string.isRequired,
};

export default compose(
  connect(state => ({ userLanguage: state.options.userLanguage })),
  withStyles(styles),
)(HomeBackers);
