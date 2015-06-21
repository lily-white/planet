let React = require('react');
let SvgIcon = require('../../svg-icon');

let ImageMusicNote = React.createClass({

  render: function() {
    return (
      <SvgIcon {...this.props}>
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
      </SvgIcon>
    );
  }

});

module.exports = ImageMusicNote;