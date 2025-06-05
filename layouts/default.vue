<template>
  <q-layout view="hHh lpR lFf">
    
    <!-- Header -->
    <q-header elevated class="bg-grey-6 text-white">
      <q-toolbar>

        <!-- App Title with Logo -->
        <q-toolbar-title class="cursor-pointer" @click="toHome">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" alt="Logo" />
          </q-avatar>
          Personal Task Manager
        </q-toolbar-title>

        <!-- Navigation Buttons -->
        <q-btn outline color="white" label="Contact Us" no-caps to="/contactus" />
        <q-btn outline color="white" label="About Us" class="q-ml-md" no-caps to="/aboutus" />

      </q-toolbar>
    </q-header>

    <!-- Page Content -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer elevated class="bg-grey-3 text-grey-7">
      <q-toolbar>
        <q-toolbar-title>
          <span class="float-right text-subtitle2">
            waqas81.net@gmail.com
          </span>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const toHome = () => {
  router.push('/')
}
</script>
