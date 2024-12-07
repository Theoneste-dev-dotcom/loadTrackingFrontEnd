/* eslint-disable prettier/prettier */
import QrCodeScanner from 'react-native-qrcode-scanner';
import axios from 'axios';
import {Alert, StyleSheet, View} from 'react-native';

type ScanResult = {
    data: string;  // The data from the scanned QR code
    type?: string; // Optional: the type of QR code (e.g., QR_CODE)
    rawData?: string; // Optional: raw data from the QR code
  };

const Scanner = ({ navigation }) => {
  const onSucess = async (e:ScanResult) => {
    console.log(e);
    const url = e.data;

    try {
        const response = await axios.get(url)
        Alert.alert('Scan successfully', `Product Id: ${response.data.product.productId}`)
        navigation.navigate('status', {product: response.data.product});

    } catch (error) {
        Alert.alert('Error', 'nable to track the product')
    }
  };
  return (
    <View style={styles.container}>
      <QrCodeScanner onRead={onSucess} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Scanner;
