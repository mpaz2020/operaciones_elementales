<template>
  <Operation nombre="RESTA" :descripcion="descripcion" operacion="-" />
</template>

<script setup>
import Operation from "src/components/OperationComponent.vue";
const descripcion =
  "Consiste en quitar una cantidad (el sustraendo) de otra (el minuendo)  para averiguar la diferencia entre las dos.";
</script>
