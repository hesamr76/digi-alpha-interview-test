import { users } from "../../router/api";

export function fetchUsers({ commit }, callback) {
  users()
    .then(res => {
      if (res.status == 200) {
        commit("users", res.data);
        callback(true);
        return;
      }

      throw Error("request failed");
    })
    .catch(err => {
      alert(err.message);
      callback(false);
    });
}
