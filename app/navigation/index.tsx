import {NavigationContainer} from '@react-navigation/native';

import * as React from 'react';
import {RootNavigator} from './RootNavigation';

const Navigation = () => (
  //@ts-ignore
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
);

export {Navigation};
