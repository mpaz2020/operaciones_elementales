<template>
  <q-page class="q-pa-lg text-center text-primary text-bold text-h5 q-pt-xl">
    <q-list class="q-gutter-sm">
      <q-item
        clickable
        v-ripple
        class="bg-black q-px-xl"
        style="border-radius: 10px"
        to="/suma"
      >
        <q-item-section>SUMA</q-item-section>
      </q-item>
      <q-item
        clickable
        v-ripple
        class="bg-black q-px-xl"
        style="border-radius: 10px"
        to="/resta"
      >
        <q-item-section>RESTA</q-item-section>
      </q-item>
      <q-item
        clickable
        v-ripple
        class="bg-black q-px-xl"
        style="border-radius: 10px"
        to="/multiplicacion"
      >
        <q-item-section>MULTIPLICACIÓN</q-item-section>
      </q-item>
      <q-item
        clickable
        v-ripple
        class="bg-black q-px-xl"
        style="border-radius: 10px"
        to="/division"
      >
        <q-item-section>DIVISIÓN</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup></script>
