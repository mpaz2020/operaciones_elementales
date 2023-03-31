<template>
  <q-page padding class="q-pa-lg text-center q-pt-xl bg-white q-gutter-md">
    <div
      class="bg-black text-primary text-h5 q-pa-sm text-bold"
      style="border-radius: 10px"
    >
      {{ nombre }}
    </div>
    <div class="text-subtitle1 text-left q-py-md">
      {{ descripcion }}
    </div>
    <div class="q-gutter-y-md">
      <q-input
        v-model="numero1"
        type="number"
        placeholder="Ingresa la primera cifra o numero"
        outlined
        standout
        color="black"
        class="shadow-10"
      />
      <q-input
        v-model="numero2"
        type="number"
        placeholder="Ingresa la segunda cifra o numero"
        outlined
        standout
        color="black"
        class="shadow-10"
      />

      <q-btn
        color="white"
        text-color="black"
        label="CALCULAR"
        outline
        size="lg"
        style="border-radius: 30px; border-width: 2px; border-style: solid"
        class="full-width text-bold"
        @click="calcular"
      />

      <div class="text-left text-subtitle1">
        El resultado es: {{ resultado }}
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, toRefs } from "vue";
const props = defineProps({
  operacion: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
});
const numero1 = ref(null);
const numero2 = ref(null);
const { operacion } = toRefs(props);
const resultado = ref(null);

function calcular() {
  if (numero1.value && numero2.value) {
    resultado.value = eval(
      numero1.value + "" + operacion.value + "" + numero2.value
    );
  }
}
</script>
