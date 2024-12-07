/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Alert, Text, View, Button, Image, TextInput} from 'react-native';
import axios from 'axios';
import {useState} from 'react';

const GenerateQR = () => {
  const [productId, setProductId] = useState('');
  const [qrCode, setQrCode] = useState(null);

  const generateQRCode = async () => {
    try {
        const response = await axios.post('http://localhost:5000/generate_qr', { productId });
        setQrCode(response.data.qrCode);
    } catch (error) {
       Alert.alert('Error generating QR code.');
    }
};

  return (
    <View>
      <Text>Enter the product Id: </Text>
      <TextInput
        style={styles.input}
        value={productId}
        onChangeText={setProductId}
      />
      <Button title="Generate Qr Code" onPress={generateQRCode} />
      {qrCode && <Image source={{uri: qrCode}} style={styles.qrImage} />}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  qrImage: {
    marginTop: 20,
    width: 200,
    height: 200,
  },
});
export default GenerateQR;
