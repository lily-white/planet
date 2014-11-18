/**
 * @jsx React.DOM
 */

var React = require('react'),
  mui = require('mui'),
  AppBar = mui.AppBar,
  AppCanvas = mui.AppCanvas,
  Menu = mui.Menu,
  IconButton = mui.IconButton,
  AppLeftNav = require('./app-left-nav.jsx');

var Master = React.createClass({

  render: function() {
    return (
      <AppCanvas predefinedLayout={1}>

        <AppBar
          className="mui-dark-theme"
          onMenuIconButtonTouchTap={this._onMenuIconButtonTouchTap}
          title={this.props.activeRouteHandler().props.pageTitle}
          zDepth={0}>
          <IconButton className="github-icon-button" icon="mui-icon-github" onTouchTap={this._onGithubTouchTap} />
        </AppBar>

        <AppLeftNav ref="leftNav" />

        <this.props.activeRouteHandler />

        <div className="footer full-width-section mui-dark-theme">
          <p>
            Hand crafted with love by the engineers at <a href="http://call-em-all.com">Call-Em-All</a> and our 
            awesome <a href="https://github.com/callemall/material-ui/graphs/contributors">contributors</a>.
          </p>
          <IconButton className="github-icon-button" icon="mui-icon-github" onTouchTap={this._onGithubTouchTap} />
        </div>

      </AppCanvas>
    );
  },

  _onGithubTouchTap: function() {
    document.location.href='https://github.com/callemall/material-ui';
  },

  _onMenuIconButtonTouchTap: function() {
    this.refs.leftNav.toggle();
  }
  
});

module.exports = Master;