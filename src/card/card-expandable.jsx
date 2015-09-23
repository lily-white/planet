const React = require('react');
const Extend = require('../utils/extend');
const OpenIcon = require('../svg-icons/hardware/keyboard-arrow-up');
const CloseIcon = require('../svg-icons/hardware/keyboard-arrow-down');
const IconButton = require('../icon-button');
const StylePropable = require('../mixins/style-propable');
const DefaultRawTheme = require('../styles/raw-themes/light-raw-theme');
const ThemeManager = require('../styles/theme-manager');

const CardExpandable = React.createClass({
  mixins: [StylePropable],

  getStyles() {
    const contextProps = this.getContextProps();

    const directionStyle = contextProps.isRtl ? {
      left: 4,
    } : {
      right: 4,
    };

    return {
      root: Extend({
        top: 0,
        bottom: 0,
        margin: 'auto',
        position: 'absolute',
      }, directionStyle),
    };
  },

  contextTypes: {
    muiTheme: React.PropTypes.object,
  },

  propTypes: {
    onExpanding: React.PropTypes.func.isRequired,
    expanded: React.PropTypes.bool,
  },

  //for passing default theme context to children
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getChildContext () {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  getContextProps() {
    const theme = this.state.muiTheme;

    return {
      isRtl: theme.isRtl,
    };
  },

  getInitialState() {
    return {
      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme),
    };
  },

  //to update theme inside state whenever a new theme is passed down
  //from the parent / owner using context
  componentWillReceiveProps (nextProps, nextContext) {
    let newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({muiTheme: newMuiTheme});
  },

  _onExpanding() {
    if (this.props.expanded === true)
      this.props.onExpanding(false);
    else
      this.props.onExpanding(true);
  },

  render() {
    let styles = this.getStyles();

    let expandable;
    if (this.props.expanded === true)
      expandable = <OpenIcon/>;
    else
      expandable = <CloseIcon/>;

    let mergedStyles = this.mergeAndPrefix(styles.root, this.props.style);

    let expandableBtn = (
      <IconButton
        style={mergedStyles}
        onClick={this._onExpanding}>
        {expandable}
      </IconButton>
    );


    return expandableBtn;
  },
});

module.exports = CardExpandable;
