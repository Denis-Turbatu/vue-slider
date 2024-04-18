const { createApp } = Vue;

createApp({
  data() {
    return {
      sliderIndex: 0,
      images: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man."
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality."
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city"
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay."
        }
      ]
    };
  },
  computed: {
    imageUrl() {
      return `./img/0${this.sliderIndex + 1}.webp`;
    },
  },
  methods: {
    // aumenta l'indice del carosello di 1
    showNext: function () {
      this.sliderIndex++;
      if (this.sliderIndex > 4) {
        this.sliderIndex = 0;
      }
      console.log(this.sliderIndex);
    },
    // diminuisce l'indice del carosello di 1
    showPrevious: function () {
      this.sliderIndex--;
      if (this.sliderIndex < 0) {
        this.sliderIndex = 4;
      }
      console.log(this.sliderIndex);
    },
  }
}).mount("#app");