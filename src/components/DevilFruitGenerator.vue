<template>
    <v-card class="pa-5">
      <h2 class="mb-3">Create a Devil Fruit 🍏🔥</h2>
  
      <!-- Input for the Fruit Concept -->
      <v-text-field v-model="fruitName" label="Enter a Concept (e.g., Fire, Gravity, Music)" outlined></v-text-field>
  
      <!-- Generate Button -->
      <v-btn @click="generateFruit" color="primary" block>
        <v-icon left>mdi-creation</v-icon> Generate Fruit
      </v-btn>
  
      <!-- Display Generated Fruit -->
      <v-alert v-if="fruitResult" type="info" class="mt-4">
        <strong>{{ fruitResult.name }}</strong> - <em>{{ fruitResult.type }}</em>
        <p>{{ fruitResult.description }}</p>
        <p><strong>Weakness:</strong> {{ fruitResult.weakness }}</p>
      </v-alert>
  
      <!-- Save Button (For future database integration) -->
      <v-btn v-if="fruitResult" @click="saveFruit" color="success" block class="mt-2">
        <v-icon left>mdi-content-save</v-icon> Save to Library
      </v-btn>
    </v-card>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import axios from "axios";
  
  const fruitName = ref("");
  const fruitResult = ref(null);
  
  // Generate a Devil Fruit based on input
  const generateFruit = async () => {
    if (!fruitName.value.trim()) return;
    
    try {
      const response = await axios.post("http://localhost:8000/api/generate-fruit", {
        name: fruitName.value,
      });
  
      fruitResult.value = response.data;
    } catch (error) {
      console.error("Error generating fruit:", error);
    }
  };
  
  // Save the generated fruit to a future database
  const saveFruit = async () => {
    try {
      await axios.post("http://localhost:8000/api/save-fruit", fruitResult.value);
      alert("Fruit saved successfully!");
    } catch (error) {
      console.error("Error saving fruit:", error);
    }
  };
  </script>
  
  <style scoped>
  h2 {
    text-align: center;
    font-weight: bold;
  }
  </style>
  