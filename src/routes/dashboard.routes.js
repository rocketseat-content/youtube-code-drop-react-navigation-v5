import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Wildcard({ title }) {
  return <Text>Wildcard {title}</Text>
}

export default function DashboardRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={() => <Wildcard title="Home" />} />
      <Tab.Screen name="Settings" component={() => <Wildcard title="Settings" />} />
    </Tab.Navigator>
  );
}