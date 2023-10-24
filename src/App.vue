<template>
  <div class="w-full h-screen flex flex-col justify-center items-center">
    <GoogleSignInButton
      @success="handleLoginSuccess"
      @error="handleLoginError"
    ></GoogleSignInButton>
  </div>
</template>

<script setup lang="ts">
import {
  GoogleSignInButton,
  type CredentialResponse,
} from "vue3-google-signin";

// handle success event
const handleLoginSuccess = (response: CredentialResponse) => {
  const { credential } = response;
  console.log("Access Token", credential);
};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};

/* const callback = (response) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  const userData = decodeCredential(response.credential);
  userStore.setUser(userData);
  localStorage.setItem("token", response.credential);
  router.push("/");
}; */
</script>
