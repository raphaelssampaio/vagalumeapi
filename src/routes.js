import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from './screens/Main';

const routes = createAppContainer(createSwitchNavigator({Main}));

export default routes;
