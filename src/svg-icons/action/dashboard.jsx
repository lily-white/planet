let React = require('react');
let SvgIcon = require('../../svg-icon');

let ActionDashboard = React.createClass({

  render: function() {
    return (
      <SvgIcon {...this.props}>
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
      </SvgIcon>
    );
  }

});

module.exports = ActionDashboard;