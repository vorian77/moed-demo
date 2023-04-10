<script>
import { Geolocation } from "@capacitor/geolocation"
import { Camera, CameraResultType } from "@capacitor/camera"
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Native API Demo",
  data() {
    return {
      location: null,
      imageUrl: "",
      imageUrlLocal: "./assets/shirt.jpg",
    }
  },
  methods: {
    async getCurrentPosition() {
      const coordinates = await Geolocation.getCurrentPosition()
      this.location = coordinates.coords
      console.log(this.location)
    },
    async takePicture() {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
      })
      this.imageUrl = image.webPath
    },
  },
}
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Navtive API Demo</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Geolocation API Test</ion-card-title>
          Click to get your device's location in Latitude and Longitude. Allow
          the app the required permissions once asked.
        </ion-card-header>

        <ion-card-content>
          <p>Your location is:</p>
          <p>Latitude: {{ location?.latitude }}</p>
          <p>Longitude: {{ location?.longitude }}</p>
        </ion-card-content>

        <ion-button expand="block" @click="getCurrentPosition()">
          Get Current Location
        </ion-button>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Camera API Test</ion-card-title>
          Click to use your device's camera to take a display and picture. Allow
          the app the required permissions once asked.
        </ion-card-header>
        <ion-card-content>
          <ion-img :src="imageUrl" alt="Picture taken by devices camera">
          </ion-img>
        </ion-card-content>

        <ion-button expand="block" @click="takePicture()">
          Take A Picture
        </ion-button>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
