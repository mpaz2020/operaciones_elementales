<template>
  <Operation nombre="MULTIPLICACIÓN" :descripcion="descripcion" operacion="*" />
</template>

<script setup>
import Operation from "src/components/OperationComponent.vue";
const descripcion =
  "Consiste en calcular el resultado (producto) de sumar un mismo numero (multiplicando) tantas veces como indica otro numero (multiplicador)";
</script>
