<template>
  <div class="intern-list pb-3">
    <div class="container">
      <div class="row">
        <div class="col">
          <b-card class="mt-3" header="Dodaj nowego stażystę">
            <b-form @submit.stop.prevent="onSubmit" @reset.stop.prevent="onReset">
              <div class="row">
                <div class="col">
                  <b-form-group id="input-group-first-name" label="Imię" label-for="input-first-name">
                    <b-form-input id="input-first-name" v-model="$v.form.firstName.$model" type="text" required
                      placeholder="Podaj imię" :state="validateState('firstName')"
                      aria-describedby="input-first-name-valid">
                    </b-form-input>
                    <b-form-invalid-feedback id="input-first-name-valid">Imie jest wymagane</b-form-invalid-feedback>
                  </b-form-group>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <b-form-group id="input-group-last-name" label="Nazwisko" label-for="input-last-name">
                    <b-form-input id="input-last-name" v-model="$v.form.lastName.$model" type="text" required
                      placeholder="Podaj nazwisko" :state="validateState('lastName')"
                      aria-describedby="input-last-name-valid"></b-form-input>
                    <b-form-invalid-feedback id="input-last-name-valid">Nazwisko jest wymagane</b-form-invalid-feedback>
                  </b-form-group>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <b-form-group id="input-group-avatar" label="Podaj adres do obrazka" label-for="input-avatar">
                    <b-form-input id="input-avatar" v-model="$v.form.avatar.$model" type="text" required
                      placeholder="Podaj adres do obrazka" :state="validateState('avatar')"
                      aria-describedby="input-avatar-valid" @blur="showAvatarBlur"></b-form-input>
                    <b-form-invalid-feedback id="input-avatar-valid">Link do obrazka jest wymagany
                    </b-form-invalid-feedback>
                  </b-form-group>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <b-img :src="form.avatar" fluid alt="avatar" v-if="showAvatar"></b-img>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col">
                  <b-button class="mr-5" type="reset" variant="danger">Wyczyść pola</b-button>
                  <b-button type="submit" variant="success">Dodaj</b-button>
                </div>
              </div>
            </b-form>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'InternAdd',
  data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          avatar: ''
        },
        showAvatar: false
      }
    },
    validations: {
      form: {
          firstName: {
            required
          },
          lastName: {
            required
          },
          avatar: {
            required
          }
        }
    },
    methods: {
      validateState(name) {
        const { $dirty, $error } = this.$v.form[name];
        return $dirty ? !$error : null;
      },
      showAvatarBlur() {
        if (this.form.avatar) {
          this.showAvatar = true;
        } else {
          this.showAvatar = false;
        }
      },
      makeSuccessToast() {
        this.$bvToast.toast('Dane zostały poprawnie dodane do bazy', {
          title: 'Dodano stażystę',
          variant: 'success',
          solid: true
        })
      },
      onSubmit() {
        this.$http.post(`https://reqres.in/api/users`, {
          "first_name": this.form.firstName,
          "last_name": this.form.lastName,
          "avatar": this.form.avatar
        })
      .then((response) => {
        this.makeSuccessToast();
        this.$log.debug(response.data);
        this.onReset();
      })
      .catch(error => {
        this.$log.error(error);
      })
      },
      onReset() {
        this.form.firstName = '';
        this.form.lastName = '';
        this.form.avatar = '';
        this.showAvatar = false;

        this.$nextTick(() => {
          this.$v.$reset();
        });
      }
    }
}
</script>

<style scoped lang="scss">
</style>