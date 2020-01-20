<template>
  <div class="intern-list mb-3">
    <div class="container">
      <div class="row">
        <div class="col">
          <b-card class="mt-3" header="Dodaj nowego stażystę">
            <b-form @submit="onSubmit" @reset="onReset">
              <b-form-group id="input-group-first-name" label="Imię" label-for="input-first-name">
                <b-form-input id="input-first-name" v-model="form.firstName" type="text" required placeholder="Podaj imię">
                </b-form-input>
              </b-form-group>

              <b-form-group id="input-group-last-name" label="Nazwisko" label-for="input-last-name">
                <b-form-input id="input-last-name" v-model="form.lastName" type="text" required placeholder="Podaj nazwisko"></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-avatar" label="Podaj adres do obrazka" label-for="input-avatar">
                <b-form-input id="input-avatar" v-model="form.avatar" type="text" required placeholder="Podaj adres do obrazka"></b-form-input>
              </b-form-group>

              <b-button class="mr-5" type="reset" variant="danger">Wyczyść pola</b-button>
              <b-button type="submit" variant="success">Dodaj</b-button>
            </b-form>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InternAdd',
  data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          avatar: ''
        }
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.$log.debug(this.form);
      },
      onReset(evt) {
        evt.preventDefault()
        this.form.firstName = ''
        this.form.lastName = ''
        this.form.avatar = ''
      }
    }
}
</script>

<style scoped lang="scss">
</style>