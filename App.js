"use client"

import { useState } from "react"
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, StatusBar } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import CustomDropdown from "./components/CustomDropdown.tsx"

export default function App() {
  const [userType, setUserType] = useState("")
  const [department, setDepartment] = useState("")
  const [status, setStatus] = useState("")

  const userTypes = [
    { label: "Administrador", value: "admin" },
    { label: "Gestor", value: "manager" },
    { label: "Colaborador", value: "collaborator" },
  ]

  const departments = [
    { label: "RH", value: "hr" },
    { label: "Financeiro", value: "finance" },
    { label: "Jurídico", value: "legal" },
    { label: "TI", value: "it" },
    { label: "Comercial", value: "commercial" },
  ]

  const statuses = [
    { label: "Ativo", value: "active" },
    { label: "Inativo", value: "inactive" },
    { label: "Em férias", value: "vacation" },
    { label: "Desligado", value: "terminated" },
  ]

  const handleSave = () => {
    console.log("Dados salvos:", { userType, department, status })
    // Implementar lógica de salvamento
  }

  const handleCancel = () => {
    // Implementar lógica de cancelamento
  }

  const handleClear = () => {
    setUserType("")
    setDepartment("")
    setStatus("")
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cadastro de Usuário</Text>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {/* Form Fields */}
        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Informações do Usuário</Text>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Tipo de Usuário</Text>
            <CustomDropdown
              data={userTypes}
              value={userType}
              onSelect={setUserType}
              placeholder="Selecione o tipo de usuário"
              icon="person-outline"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Departamento</Text>
            <CustomDropdown
              data={departments}
              value={department}
              onSelect={setDepartment}
              placeholder="Selecione o departamento"
              icon="business-outline"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Status de Atividade</Text>
            <CustomDropdown
              data={statuses}
              value={status}
              onSelect={setStatus}
              placeholder="Selecione o status"
              icon="ellipse-outline"
            />
          </View>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={handleClear}>
          <Ionicons name="refresh-outline" size={20} color="#505A5F" />
          <Text style={styles.clearButtonText}>Limpar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancel}>
          <Ionicons name="close-outline" size={20} color="#505A5F" />
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSave}>
          <Ionicons name="checkmark-outline" size={20} color="#FFFFFF" />
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    backgroundColor: "#2c3e50",
    paddingVertical: 16,
    paddingHorizontal: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  formContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: 20,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#505A5F",
    marginBottom: 8,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#e9ecef",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  clearButton: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e9ecef",
  },
  clearButtonText: {
    color: "#505A5F",
    fontWeight: "500",
    marginLeft: 5,
  },
  cancelButton: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e9ecef",
    marginHorizontal: 10,
  },
  cancelButtonText: {
    color: "#505A5F",
    fontWeight: "500",
    marginLeft: 5,
  },
  saveButton: {
    backgroundColor: "#3498db",
  },
  saveButtonText: {
    color: "#ffffff",
    fontWeight: "500",
    marginLeft: 5,
  },
})
