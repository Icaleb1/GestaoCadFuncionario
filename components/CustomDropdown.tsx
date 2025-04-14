"use client"

import type React from "react"
import { useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native"
import { Ionicons } from "@expo/vector-icons"

interface DropdownItem {
  label: string
  value: string
}

interface CustomDropdownProps {
  data: DropdownItem[]
  value: string
  onSelect: (value: string) => void
  placeholder: string
  icon?: string
}

const { width } = Dimensions.get("window")

const CustomDropdown: React.FC<CustomDropdownProps> = ({ data, value, onSelect, placeholder, icon }) => {
  const [visible, setVisible] = useState(false)

  const toggleDropdown = () => {
    setVisible(!visible)
  }

  const renderItem = ({ item }: { item: DropdownItem }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        onSelect(item.value)
        setVisible(false)
      }}
    >
      <Text style={[styles.itemText, value === item.value && styles.selectedItemText]}>{item.label}</Text>
      {value === item.value && <Ionicons name="checkmark" size={20} color="#3498db" />}
    </TouchableOpacity>
  )

  const renderDropdown = () => {
    const selectedItem = data.find((item) => item.value === value)

    return (
      <Modal visible={visible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
          <View style={styles.overlay}>
            <View style={[styles.dropdown, { width: width - 40 }]}>
              <Text style={styles.dropdownTitle}>{placeholder}</Text>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.value}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }

  return (
    <TouchableOpacity style={styles.button} onPress={toggleDropdown} activeOpacity={0.8}>
      {icon && <Ionicons name={icon as any} size={20} color="#505A5F" style={styles.icon} />}

      <Text style={[styles.buttonText, !value && styles.placeholderText]}>
        {value ? data.find((item) => item.value === value)?.label : placeholder}
      </Text>

      <Ionicons name={visible ? "chevron-up" : "chevron-down"} size={20} color="#505A5F" />

      {renderDropdown()}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#e9ecef",
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },
  buttonText: {
    flex: 1,
    fontSize: 16,
    color: "#2c3e50",
  },
  placeholderText: {
    color: "#adb5bd",
  },
  icon: {
    marginRight: 10,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  dropdown: {
    maxHeight: 300,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  dropdownTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f3f5",
  },
  itemText: {
    fontSize: 16,
    color: "#495057",
  },
  selectedItemText: {
    color: "#3498db",
    fontWeight: "500",
  },
})

export default CustomDropdown
