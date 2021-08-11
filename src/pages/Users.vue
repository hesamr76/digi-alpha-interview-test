<template>
  <q-page class="flex justify-center">
    <q-list bordered separator v-if="!isLoading" class="full-width">
      <q-toolbar class="shadow-2 q-mb-sm">
        <q-input
          clearable
          clear-icon="close"
          v-model="searchText"
          style="min-width: 400px"
          label="Search name or username"
          type="search"
        >
          <template v-slot:append> <q-icon name="search" /> </template
        ></q-input>

        <q-space />

        <span>
          sort by: username
          <q-toggle
            color="blue"
            label="name"
            v-model="sortBy"
            false-value="username"
            true-value="name"
          />
        </span>
      </q-toolbar>

      <User v-for="user in users" :key="user.id" :user="user" />
    </q-list>

    <q-inner-loading :showing="isLoading">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
  </q-page>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PageUsers",

  components: {
    User: () => import("src/components/User.vue")
  },

  data() {
    return {
      isLoading: false,

      searchText: "",
      sortBy: null
    };
  },

  methods: {
    fetchUsers() {
      this.isLoading = true;

      const callback = res => {
        this.isLoading = false;
      };

      this.$store.dispatch("app/fetchUsers", callback);
    }
  },

  created() {
    this.fetchUsers();
  },

  computed: {
    ...mapState({
      allUsers: state => state.app.users
    }),

    searchedUsers: function() {
      if (this.searchText) {
        return this.allUsers.filter(user => {
          return (
            user.name.toUpperCase().includes(this.searchText.toUpperCase()) ||
            user.username.toUpperCase().includes(this.searchText.toUpperCase())
          );
        });
      }

      return this.allUsers;
    },

    users: function() {
      const temp = [...this.searchedUsers];

      if (this.sortBy) {
        return temp.sort((a, b) => {
          if (a[this.sortBy] < b[this.sortBy]) {
            return -1;
          }
          if (a[this.sortBy] > b[this.sortBy]) {
            return 1;
          }

          return 0;
        });
      }

      return temp;
    }
  }
};
</script>
