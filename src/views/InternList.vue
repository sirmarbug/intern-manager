<template>
  <div class="intern-list">
    <div class="container">
      <div class="row">
        <div class="col">
          <b-card class="mt-3" header="Stażyści">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Imię</th>
                  <th scope="col">Nazwisko</th>
                  <th scope="col">Avatar</th>
                  <th scope="col">Operacje</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Mariusz</th>
                  <td>Bugajski</td>
                  <td>
                    <b-img class="avatar"
                      :src="'https://bugajsky.pl/wp-content/uploads/2020/01/podsumowanie-grudnia-2019-388x220.png'"
                      fluid alt="avatar"></b-img>
                  </td>
                  <td>
                    <b-button variant="outline-primary" class="mr-3">Edytuj</b-button>
                  </td>
                </tr>
              </tbody>
            </table>
            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" @change="changedPage">
            </b-pagination>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InternList',
  data() {
    return {
      currentPage: 1,
      rows: 12,
      perPage: 6,
      items: [{
          age: 40,
          first_name: 'Dickerson',
          last_name: 'Macdonald'
        },
        {
          age: 21,
          first_name: 'Larsen',
          last_name: 'Shaw'
        },
        {
          age: 89,
          first_name: 'Geneva',
          last_name: 'Wilson'
        },
        {
          age: 38,
          first_name: 'Jami',
          last_name: 'Carney'
        }
      ]
    }
  },
  methods: {
    changedPage() {
      this.$log.debug('changedPage');
    }
  }
}
</script>

<style scoped lang="scss">
.avatar {
  max-width: 100px;
}
</style>