<template>
  <q-page class="q-px-lg">
    <p class="text-h5">Personal Cards</p>
    <div class="row justify-between full-width q-mb-xl">
      <CreditCard
        v-for="card in creditCards"
        :key="card.id"
        :card="card"
        :isActive="card.isActive"
      />
    </div>

    <p class="text-h6">Last Transactions</p>

    <!-- need to be develop as two components for list and list item  -->
    <q-list padding>
      <q-item-label header>
        <div class="row items-center justify-between">
          <p class="q-mb-none">10 April 2020</p>
          <p class="q-mb-none">+$1,840.20</p>
        </div>
      </q-item-label>

      <q-item>
        <q-item-section avatar>
          <q-icon color="grey" name="credit_card" />
        </q-item-section>
        <q-item-section>Buying New Credit</q-item-section>
        <q-item-section>
          <div class="row flex-center">
            <q-icon name="radio_button_checked" size="sm" color="purple" />
            <p class="q-mb-none q-ml-sm text-grey">
              Credit
            </p>
          </div>
        </q-item-section>
        <q-item-section class="text-grey">10 April 2020</q-item-section>
        <q-item-section>-$140,20</q-item-section>
        <q-item-section side>
          <q-icon name="more_vert" size="lg" color="grey"></q-icon>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section avatar>
          <q-icon color="grey" name="undo" />
        </q-item-section>
        <q-item-section>Refund Credit</q-item-section>
        <q-item-section>
          <div class="row flex-center">
            <q-icon name="radio_button_checked" size="sm" color="green" />
            <p class="q-mb-none q-ml-sm text-grey">
              Refund
            </p>
          </div>
        </q-item-section>
        <q-item-section class="text-grey">11 April 2020</q-item-section>
        <q-item-section>
          <p class="text-purple">
            +$2.820,50
          </p>
        </q-item-section>
        <q-item-section side>
          <q-icon name="more_vert" size="lg" color="grey"></q-icon>
        </q-item-section>
      </q-item>

      <q-separator spaced inset="item" />

      <q-item-label header>
        <div class="row items-center justify-between">
          <p class="q-mb-none">15 April 2020</p>
          <p class="q-mb-none">-$2,130.50</p>
        </div>
      </q-item-label>

      <q-item>
        <q-item-section avatar>
          <q-icon color="grey" name="person_add_alt" />
        </q-item-section>
        <q-item-section>Metting Payment</q-item-section>
        <q-item-section>
          <div class="row flex-center">
            <q-icon name="radio_button_checked" size="sm" color="blue" />
            <p class="q-mb-none q-ml-sm text-grey">
              Payment
            </p>
          </div>
        </q-item-section>
        <q-item-section class="text-grey">12 April 2020</q-item-section>
        <q-item-section>+$450,15</q-item-section>
        <q-item-section side>
          <q-icon name="more_vert" size="lg" color="grey"></q-icon>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",

  components: {
    CreditCard: () => import("src/components/CreditCard.vue")
  },

  data() {
    return {
      // data of cards and transactions should fetch from store
      creditCards: [
        {
          id: 1,
          name: "Andres Nora",
          number: "**** **** 1106",
          type: "Master Card",
          balance: "240,450",
          isActive: true
        },
        {
          id: 2,
          name: "Andres Nora",
          number: "**** **** 5177",
          type: "Visa Card",
          balance: "124,820",
          isActive: false
        }
      ]
    };
  }
};
</script>
