import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import { BaseProvider, DarkTheme } from 'baseui';
import {
  ALIGN,
  HeaderNavigation,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';
import React from 'react';

const engine = new Styletron();


function App(): React.ReactElement {
  // Return the App component.
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={DarkTheme}>
        <HeaderNavigation>
          <NavigationList $align={ALIGN.left}>
            <NavigationItem>DarkTheme</NavigationItem>
          </NavigationList>
        </HeaderNavigation>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
