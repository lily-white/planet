var React = require('react');
var SvgIcon = require('./svg-icon.jsx');

var GitHub = React.createClass({

  render: function() {
    return (
      <SvgIcon {...this.props}>
        <path d="M256 420.395c-117.226 0-212.288-95.061-212.288-212.288 0-93.803 60.822-173.355 145.173-201.429 10.602-1.942 14.486 4.608 14.486 10.219 0 5.056-0.192 21.803-0.298 39.51-59.029-12.822-71.51 25.024-71.51 25.024-9.664 24.512-23.573 31.040-23.573 31.040-19.285 13.163 1.472 12.906 1.472 12.906 21.312-1.472 32.533-21.866 32.533-21.866 18.944-32.448 49.707-23.062 61.781-17.622 1.92 13.675 7.424 23.062 13.482 28.352-47.125 5.354-96.704 23.574-96.704 104.918 0 23.19 8.277 42.112 21.824 56.982-2.155 5.397-9.451 26.986 2.112 56.213 0 0 17.814 5.696 58.389-21.76 16.917 4.715 35.072 7.040 53.12 7.125 18.026-0.085 36.202-2.432 53.142-7.168 40.512 27.499 58.325 21.76 58.325 21.76 11.606-29.248 4.31-50.816 2.134-56.17 13.611-14.87 21.824-33.771 21.824-56.982 0-81.558-49.642-99.499-96.938-104.768 7.637-6.592 14.4-19.478 14.4-39.274 0-28.373-0.277-51.264-0.277-58.262 0-5.654 3.861-12.267 14.613-10.176 84.288 28.118 145.067 107.669 145.067 201.429 0 117.227-95.062 212.288-212.288 212.288z"/>
      </SvgIcon>
    );
  }

});

module.exports = GitHub;