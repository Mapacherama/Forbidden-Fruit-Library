<template>
    <v-app-bar app class="elon-header">
      <!-- Logo -->
      <v-btn class="ml-3" variant="text" to="/">
        <v-icon size="32" class="icon-glow">mdi-hexagon-multiple</v-icon>
        <span class="ml-2 text-uppercase text-bold">Forbidden Fruit Library</span>
      </v-btn>
  
      <!-- Navigation Links -->
      <v-spacer></v-spacer>
      <v-btn v-for="link in links" :key="link.title" :to="link.to" variant="text" class="nav-link">
        <v-icon left>{{ link.icon }}</v-icon> {{ link.title }}
      </v-btn>
  
      <!-- Login / Signup -->
      <v-btn color="primary" variant="outlined" class="mr-3">
        <v-icon left>mdi-account</v-icon> Login
      </v-btn>
    </v-app-bar>
  </template>
  
  <script setup>
  const links = [
    { title: "Generate Fruit", icon: "mdi-creation", to: "/generate" },
    { title: "Awakened Forms", icon: "mdi-fire", to: "/awakened" },
    { title: "Mihawk’s Tier List", icon: "mdi-sword", to: "/tierlist" },
  ];
  </script>
  
  <style scoped>
  .elon-header {
    background: #000;
    color: white;
    box-shadow: 0 4px 10px rgba(0, 255, 255, 0.2);
  }
  
  .nav-link {
    text-transform: uppercase;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
  }
  
  .nav-link:hover {
    color: #0ff !important;
  }
  
  .icon-glow {
    color: #0ff;
    animation: glow 1.5s infinite alternate;
  }
  
  @keyframes glow {
    from {
      text-shadow: 0 0 5px rgba(0, 255, 255, 0.7);
    }
    to {
      text-shadow: 0 0 15px rgba(0, 255, 255, 1);
    }
  }
  </style>
  