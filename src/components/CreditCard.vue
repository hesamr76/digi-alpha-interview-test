<template>
  <q-card
    :class="{
      'bg-purple text-white': isActive,
      'bg-white text-grey': !isActive
    }"
    :bordered="!isActive"
  >
    <q-card-section>
      <div class="row items-center justify-between">
        <q-icon size="30px" name="sim_card"></q-icon>
        <q-icon size="30px" name="wifi"></q-icon>
      </div>
    </q-card-section>

    <q-card-section>
      <div class="row items-center justify-between">
        <div>
          <p class="q-mb-none">Name</p>
          <p class="text-h6 text-bold">{{ card.name }}</p>
        </div>
        <div>
          <p class="q-mb-none">Number</p>
          <p class="text-subtitle2 text-bold">{{ card.number }}</p>
        </div>
      </div>
    </q-card-section>
    <hr />
    <q-card-section>
      <div class="row items-center justify-between">
        <div>
          <p class="q-mb-none text-h5 text-bold">${{ card.balance }}</p>
          <p class="caption q-mb-none">Balance</p>
        </div>

        <p class="q-mb-none">{{ card.type }}</p>
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped>
.q-card {
  min-width: 48%;

  .q-icon {
    transform: rotate(90deg);
  }
}
.q-card.text-grey {
  .text-bold {
    color: black;
  }
}
</style>

<script>
export default {
  name: "CreditCardComponent",
  props: ["card", "isActive"]
};
</script>
