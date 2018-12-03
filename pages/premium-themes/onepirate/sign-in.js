import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import AppTheme from 'docs/src/modules/components/AppTheme';
import SignIn from 'docs/src/pages/premium-themes/onepirate/SignIn';

function Page() {
  return (
    <AppTheme title="Onepirate theme - Material-UI" description="A onepirate theme">
      <SignIn />
    </AppTheme>
  );
}

export default withRoot(Page);
