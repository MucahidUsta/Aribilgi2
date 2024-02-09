// screens/HomeScreen.js

import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

function HomeScreen({ navigation }) {
  const [note, setNote] = useState('');

  const handleNoteChange = (text) => {
    setNote(text);
  };

  const handleSaveNote = () => {
    navigation.navigate('Note', { note });
  };

  const handleViewNotes = () => {
    navigation.navigate('Note');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={{ height: 200, width: '80%', borderColor: 'gray', borderWidth: 1, marginBottom: 20, padding: 10 }}
        multiline
        placeholder="Notunuzu buraya yazın..."
        onChangeText={handleNoteChange}
        value={note}
      />
      <Button
        title="Not Oluştur"
        onPress={handleSaveNote}
      />
      <Button
        title="Notları Görüntüle"
        onPress={handleViewNotes}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

export default HomeScreen;
