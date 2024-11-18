import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppList from './AppList';
import AppForm from './AppForm';

const Tab = createBottomTabNavigator();

function AppTab() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#32264d',
                    tabBarInactiveTintColor: '#c1bccc',
                    tabBarActiveBackgroundColor: '#ebebf5',
                    tabBarInactiveBackgroundColor: '#fafafc',
                    tabBarLabelStyle: {
                        fontSize: 13,
                        position: "absolute",
                        top: 15,
                        bottom: 0,
                        left: 6,
                        right: 6
                    },
                    tabBarIconStyle: { display: 'none' }
                }}
            >
                <Tab.Screen name="AppList" component={AppList} 
                    options={{ tabBarLabel: "Compras" }}
                />
                <Tab.Screen name="AppForm" component={AppForm} 
                    options={{ tabBarLabel: "Adicionar" }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppTab;
