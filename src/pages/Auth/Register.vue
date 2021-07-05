<template>
  <div class="row">
    <div class="card">
      <div class="card-header">
        <h3>Register</h3>
      </div>
      <div class="card-body">
        <div class="errors" v-if="errors.error">
          {{ errors.error }}
        </div>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              class="form-control"
              v-model="name"
              @blur="clearValidation('name')"
            />
            <small v-if="errors.name" class="error">
              {{ errors.name }}
            </small>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              class="form-control"
              v-model="email"
              @blur="clearValidation('email')"
            />
            <small v-if="errors.email" class="error">
              {{ errors.email }}
            </small>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model="password"
              @blur="clearValidation('password')"
            />
            <small v-if="errors.password" class="error">
              {{ errors.password }}
            </small>
          </div>
          <base-button :disabled="isLoading">
            Register <BaseSpinner v-if="isLoading" />
          </base-button>
        </form>
        <p>
          Have Already Account?
          <span @click="$router.push({ name: 'Login' })">Login Here</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
import { useRouter } from "vue-router";
import { firebaseAuth, db } from "../../firebase/init";
import useAalidation from "../../hooks/validation";
import BaseSpinner from "../../components/UI/BaseSpinner.vue";

export default {
  components: { BaseSpinner },
  setup() {
    const router = useRouter();
    const user = reactive({
      name: "",
      email: "",
      password: "",
    });
    const isLoading = ref(false);

    const { clearValidation, validation, errors } = useAalidation(user);

    const handleSubmit = async () => {
      errors.error = "";
      const isValidate = validation();
      if (isValidate) {
        isLoading.value = true;
        try {
          const res = await firebaseAuth.createUserWithEmailAndPassword(
            user.email,
            user.password
          );
          await res.user.updateProfile({ displayName: user.name });
          await db
            .collection("users")
            .doc(res.user.uid)
            .set({
              name: user.name,
              email: user.email,
              createdAt: new Date().toString(),
              online: true,
            });
          router.push({ name: "ChatScreen" });
        } catch (err) {
          errors.error = err.message;
        } finally {
          isLoading.value = false;
        }
      }
    };

    return {
      ...toRefs(user),
      clearValidation,
      validation,
      errors,
      handleSubmit,
      isLoading,
    };
  },
};
</script>

<style scoped>
p {
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  color: rgb(221, 221, 221);
}
p span {
  color: #fff;
  cursor: pointer;
  text-decoration: underline;
}
</style>
