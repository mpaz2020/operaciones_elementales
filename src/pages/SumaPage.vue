<template>
  <Operation nombre="SUMA" :descripcion="descripcion" operacion="+" />
</template>

<script setup>
import Operation from "src/components/OperationComponent.vue";
const descripcion =
  "Consiste en reunir varias cantidades en una sola (adicionar).";
</script>
