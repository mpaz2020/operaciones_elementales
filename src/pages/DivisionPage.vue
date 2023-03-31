<template>
  <Operation nombre="DIVISIÓN" :descripcion="descripcion" operacion="/" />
</template>

<script setup>
import Operation from "src/components/OperationComponent.vue";
const descripcion = "Es la operacion aritmetica inversa a la multiplicación";
</script>
