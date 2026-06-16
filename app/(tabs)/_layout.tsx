import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#D4AF37', // Gold accent
        headerStyle: {
          backgroundColor: '#001F3F', // Deep navy
        },
        headerTintColor: '#FFFFFF',
      },
    }>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: 'Camera',
        }}
      />
      <Tabs.Screen
        name="gallery"
        options={{
          title: 'Gallery',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
        }}
      />
    </Tabs>
  );
}
