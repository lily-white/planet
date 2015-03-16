var React = require('react');
var StylePropable = require('./mixins/style-propable');
var Typography = require('./styles/core/typography');
var CustomVariables = require('./styles/variables/custom-variables');
var IconButton = require('./icon-button');
var NavigationMenu = require('./svg-icons/navigation-menu');
var Paper = require('./paper');

var AppBar = React.createClass({

  mixins: [StylePropable],

  propTypes: {
    onMenuIconButtonTouchTap: React.PropTypes.func,
    showMenuIconButton: React.PropTypes.bool,
    iconClassNameLeft: React.PropTypes.string,
    iconElementLeft: React.PropTypes.element,
    iconElementRight: React.PropTypes.element,
    title : React.PropTypes.node,
    zDepth: React.PropTypes.number,
  },

  getDefaultProps: function() {
    return {
      showMenuIconButton: true,
      title: '',
      zDepth: 1
    }
  },

  /** Styles */

  _main: function() {
    return this.mergeAndPrefix({
      zIndex: 5,
      width: '100%',
      minHeight: CustomVariables.spacing.desktopKeylineIncrement,
      backgroundColor: CustomVariables.appBarColor,
    });
  },

  _title: function() {
    return {      
      float: 'left',
      paddingTop: 0,
      letterSpacing: 0,
      marginBottom: 12,
      fontSize: '24px',
      fontWeight: Typography.fontWeightNormal,
      color: CustomVariables.appBarTextColor,
      lineHeight: CustomVariables.spacing.desktopKeylineIncrement + 'px',
    };
  },

  _iconButton: function() {
    return {
      style: {
        marginTop: (CustomVariables.appBarHeight - CustomVariables.iconButtonSize) / 2,
        float: 'left',
        marginRight: 8,
        marginLeft: -16,
      },
      iconStyle: {
        fill: CustomVariables.appBarTextColor,
        color: CustomVariables.appBarTextColor,
      }
    }
  },

  _paper: function() {
    return {
      paddingLeft: CustomVariables.spacing.desktopGutter,
      paddingRight: CustomVariables.spacing.desktopGutter,
    };
  },

  componentDidMount: function() {
    if (process.NODE_ENV !== 'production' && 
       (this.props.iconElementLeft && this.props.iconClassNameLeft)) {
        var warning = 'Properties iconClassNameLeft and iconElementLeft cannot be simultaneously ' +
                      'defined. Please use one or the other.';
        console.warn(warning);
    }
  },

  render: function() {
    var {
      onTouchTap,
      ...other
    } = this.props;

    var title, menuElementLeft, menuElementRight;

    if (this.props.title) {
      // If the title is a string, wrap in an h1 tag.
      // If not, just use it as a node.
      title = toString.call(this.props.title) === '[object String]' ?
        <h1 style={this._title()}>{this.props.title}</h1> :
        this.props.title;
    }

    if (this.props.showMenuIconButton) {
      if (this.props.iconElementLeft) {
        menuElementLeft = (
          <div style={this._iconButton().style}> 
            {this.props.iconElementLeft} 
          </div>
        );
      } else {
        var child = (this.props.iconClassNameLeft) ? '' : <NavigationMenu style={this._iconButton().iconStyle}/>;
        menuElementLeft = (
          <IconButton
            style={this._iconButton().style}
            iconClassName={this.props.iconClassNameLeft}
            onTouchTap={this._onMenuIconButtonTouchTap}>
              {child}
          </IconButton>
        );
      }
    }

    menuElementRight = (this.props.children) ? this.props.children : 
                       (this.props.iconElementRight) ? this.props.iconElementRight : '';

    return (
      <Paper rounded={false} className={this.props.className}  style={this._main()} innerStyle={this._paper()} zDepth={this.props.zDepth}>
        {menuElementLeft}
        {title}
        {menuElementRight}
      </Paper>
    );
  },

  _onMenuIconButtonTouchTap: function(e) {
    if (this.props.onMenuIconButtonTouchTap) this.props.onMenuIconButtonTouchTap(e);
  }

});

module.exports = AppBar;
