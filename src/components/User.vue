<template>
  <q-item>
    <q-item-section top avatar>
      <q-avatar>
        <img :src="user.avatar" />
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ user.name }}</q-item-label>

      <q-item-label caption>
        <q-icon name="phone" />
        {{ user.phone }}
      </q-item-label>

      <q-item-label caption>
        <q-icon name="web" />
        {{ user.website }}
      </q-item-label>

      <q-item-label caption>
        <q-icon name="company" />
        {{ user.company }}
      </q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-badge :label="`@${user.username}`" />
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "UserComponent",
  props: ["user"]
};
</script>
