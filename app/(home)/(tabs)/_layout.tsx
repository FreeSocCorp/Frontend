import { Tabs } from "expo-router";
import React from "react";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Chats",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="news"
        options={{
          title: "News",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="newspaper-o" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
  // const colorScheme = useColorScheme();

  // return (
  //   <Tabs
  //     screenOptions={{
  //       tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
  //       headerShown: false,
  //     }}>
  //     <Tabs.Screen
  //       name="index"
  //       options={{
  //         title: 'Home',
  //         tabBarIcon: ({ color, focused }) => (
  //           <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
  //         ),
  //       }}
  //     />
  //     <Tabs.Screen
  //       name="explore"
  //       options={{
  //         title: 'Explore',
  //         tabBarIcon: ({ color, focused }) => (
  //           <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
  //         ),
  //       }}
  //     />
  //   </Tabs>
  // );
}
