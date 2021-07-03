import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TaskForm from './src/taskForm';
import TaskList from './src/taskList';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default AppStack = () =>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="TaskForm"
        component={TaskForm}
        options={{
          title: 'Clock-a-Do',
          headerTintColor: 'gold',
          headerStyle: {
            backgroundColor: 'chocolate'
          }
        }}
      />
      <Stack.Screen
        name="TaskList"
        component={TaskList}
        options={{
          title: 'To-Do List',
          headerTintColor: 'gold',
          headerStyle: {
            backgroundColor: 'chocolate'
          }
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>