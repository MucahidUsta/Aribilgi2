// screens/NoteScreen.js

import React from 'react';
import { Text, View } from 'react-native';

function NoteScreen({ route }) {
  const { note } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{note}</Text>
    </View>
  );
}

export default NoteScreen;
