<template>
  <q-layout
    view="lHh Lpr lFf"
    :class="$route.path === '/' ? 'bg-primary' : 'bg-white text-black'"
  >
    <q-header>
      <q-toolbar
        class="text-center text-black q-py-xl"
        :class="$route.path === '/' ? 'bg-primary' : 'bg-white text-black'"
      >
        <q-toolbar-title> Operaciones elementales </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-toolbar
        class="text-center text-black q-py-md"
        :class="$route.path === '/' ? 'bg-primary' : 'bg-white text-black'"
      >
        <q-toolbar-title>
          <q-btn
            :color="$route.path === '/' ? 'white' : 'primary'"
            text-color="black"
            label="SIGUIENTE ACTIVIDAD"
            style="border-radius: 20px"
            class="q-pa-md text-h6"
            @click="siguiente"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const nextPage = ref(-1);
const routes = ref(
  router
    .getRoutes()
    .filter((route) => route.path.length > 2 && !route.path.includes(":"))
);
function siguiente() {
  if (nextPage.value >= routes.value.length - 1) {
    nextPage.value = -1;
  }
  nextPage.value = nextPage.value + 1;
  router.push(routes.value[nextPage.value].path);
}
</script>
