import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// import Home from './pages/Home';
import Users from './pages/Users';

import DashboardRoutes from './routes/dashboard.routes';

export default function Routes() {
  return (
    <Stack.Navigator 
      initialRouteName="Users" 
      screenOptions={{ 
        headerTintColor: '#FFF' 
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={DashboardRoutes} 
        options={{ title: 'Dashboard' }}
      />
      <Stack.Screen 
        name="Users" 
        component={Users}
      />
    </Stack.Navigator>
  );
}