import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  SafeAreaView, 
  TouchableOpacity, 
  ScrollView, 
  StatusBar 
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [userType, setUserType] = useState('');
  const [department, setDepartment] = useState('');
  const [activityStatus, setActivityStatus] = useState('');

  const handleClear = () => {
    setUserType('');
    setDepartment('');
    setActivityStatus('');
  };

  const deviceInfo = {
    sdks: Constants.supportedExpoSdks || 'Desconhecido',
    deviceName: Constants.deviceName || 'Desconhecido',
    version: Constants.systemVersion || 'Desconhecido'
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      
      <View style={styles.header}>
        <Ionicons name="people-circle-outline" size={28} color="#fff" />
        <Text style={styles.headerTitle}>Gestão de funcionários</Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Tipo de Usuário</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={userType}
                onValueChange={(itemValue) => setUserType(itemValue)}
                style={styles.picker}
                dropdownIconColor="#3498db"
              >
                <Picker.Item label="Selecione o tipo de usuário" value="" color="#95a5a6" />
                <Picker.Item label="Administrador" value="admin" />
                <Picker.Item label="Gestor" value="manager" />
                <Picker.Item label="Colaborador" value="employee" />
              </Picker>
            </View>
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Departamento</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={department}
                onValueChange={(itemValue) => setDepartment(itemValue)}
                style={styles.picker}
                dropdownIconColor="#3498db"
              >
                <Picker.Item label="Selecione o departamento" value="" color="#95a5a6" />
                <Picker.Item label="RH" value="hr" />
                <Picker.Item label="Financeiro" value="finance" />
                <Picker.Item label="Jurídico" value="legal" />
                <Picker.Item label="TI" value="it" />
                <Picker.Item label="Comercial" value="sales" />
              </Picker>
            </View>
          </View>
          
          {/* Status de Atividade */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Status de Atividade</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={activityStatus}
                onValueChange={(itemValue) => setActivityStatus(itemValue)}
                style={styles.picker}
                dropdownIconColor="#3498db"
              >
                <Picker.Item label="Selecione o status" value="" color="#95a5a6" />
                <Picker.Item label="Ativo" value="active" />
                <Picker.Item label="Inativo" value="inactive" />
                <Picker.Item label="Em férias" value="vacation" />
                <Picker.Item label="Desligado" value="terminated" />
              </Picker>
            </View>
          </View>
          
          <View style={styles.deviceInfoContainer}>
            <Text style={styles.deviceInfoTitle}>Informações do Dispositivo</Text>
            
            <View style={styles.deviceInfoItem}>
              <Ionicons name="phone-portrait-outline" size={20} color="#3498db" />
              <Text style={styles.deviceInfoLabel}>Versão do Android:</Text>
              <Text style={styles.deviceInfoValue}>{deviceInfo.version}</Text>
            </View>
            
            <View style={styles.deviceInfoItem}>
              <Ionicons name="laptop-outline" size={20} color="#3498db" />
              <Text style={styles.deviceInfoLabel}>Nome do Dispositivo:</Text>
              <Text style={styles.deviceInfoValue}>{deviceInfo.deviceName}</Text>
            </View>
            
            <View style={styles.deviceInfoItem}>
              <Ionicons name="hardware-chip-outline" size={20} color="#3498db" />
              <Text style={styles.deviceInfoLabel}>SDK:</Text>
              <Text style={styles.deviceInfoValue}>{deviceInfo.sdks}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      
      {/* Botões de ação */}
      <View style={styles.actionButtons}>
        <TouchableOpacity 
          style={[styles.button, styles.clearButton]} 
          onPress={handleClear}
        >
          <Ionicons name="refresh-outline" size={20} color="#fff" />
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  header: {
    backgroundColor: '#2c3e50',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#34495e',
    marginBottom: 8,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  deviceInfoContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  deviceInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 12,
  },
  deviceInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  deviceInfoLabel: {
    fontSize: 14,
    color: '#7f8c8d',
    marginLeft: 8,
    width: 150,
  },
  deviceInfoValue: {
    fontSize: 14,
    color: '#2c3e50',
    fontWeight: '500',
    flex: 1,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 8,
    elevation: 2,
  },
  saveButton: {
    backgroundColor: '#3498db',
  },
  clearButton: {
    backgroundColor: '#95a5a6',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
    fontSize: 16,
  },
});