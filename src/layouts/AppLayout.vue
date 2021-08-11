<template>
  <q-layout view="lHh lpR fFf">
    <q-header class="bg-white text-grey">
      <q-toolbar>
        <q-input
          clearable
          clear
          clear-icon="close"
          style="min-width: 300px"
          label="Search your experienced doctor"
          type="search"
        >
          <template v-slot:prepend> <q-icon name="search" /> </template
        ></q-input>

        <q-space />

        <q-btn round dense icon="notifications" size="sm"></q-btn>
        <q-avatar size="sm" class="q-mx-md">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>

        <span class="text-black">
          Age Clinic
          <q-icon name="expand_more" />
        </span>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      :value="false"
      side="left"
      behavior="desktop"
      bordered
    >
      <div class="column justify-between items-center full-height q-pb-xl">
        <q-avatar class="q-my-md" size="60px">
          <img src="icons/favicon-128x128.png" />
        </q-avatar>

        <div class="column q-gutter-lg">
          <q-icon name="dashboard" size="20px" color="grey" />
          <q-icon name="person" size="20px" color="grey" />
          <q-icon name="folder" size="20px" color="grey" />
          <q-icon name="people" size="20px" color="grey" />
          <q-icon name="money" size="20px" color="purple" />
          <q-icon name="settings" size="20px" color="grey" />
          <q-icon name="email" size="20px" color="grey" />
        </div>

        <q-icon name="logout" size="20px" color="grey" />
      </div>
    </q-drawer>

    <q-drawer
      show-if-above
      :value="false"
      side="right"
      behavior="desktop"
      bordered
    >
      <b class="text-h5 q-pl-lg q-mt-lg">Payment Detail</b>

      <div class="column flex-center">
        <q-avatar class="q-my-md" size="80px">
          <img src="icons/favicon-128x128.png" />
        </q-avatar>

        <p class="text-subtitle1 text-grey q-mb-none">Paybank Refund</p>
        <p class="text-subtitle2">+$2.820,50</p>

        <div
          class="full-width row justify-between align-center text-grey q-px-md q-mt-lg"
        >
          <q-icon name="paper" />
          Delivery Time

          <q-space />
          11 April 2020, 10:00
        </div>

        <div
          class="full-width row justify-between align-center text-grey q-px-md"
        >
          <q-icon name="paper" />
          Commision

          <q-space />
          -$54,020
        </div>

        <div
          class="full-width row justify-between align-center text-grey q-px-md"
        >
          <q-icon name="paper" />
          Invoice

          <q-space />
          XA-2453-BS
        </div>
      </div>

      <q-card class="q-pa-lg q-ma-md rounded">
        <p class="caption text-grey q-mb-none">Total Spent:</p>
        <p>$1.240,450</p>
      </q-card>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",

  data() {
    return {};
  }
};
</script>
