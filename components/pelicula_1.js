app.component('product-display', {
    props: {
      premium: {
        type: Boolean,
        required: true
      }
    },
    template: 
    /*html*/
    `<div class="product-display">
      <div class="product-container">
        <div class="product-image"
            >
          <img v-bind:src="image">
          
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p><b> {{ nombre }}</b>
          <p><b> URL Imagen:</b> {{ url }}
          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>
          <div 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)" 
            class="color-circle" 
            :style="{ backgroundColor: variant.color }">
          </div>
        </div>
      </div>
      <review-list v-if="reviews.length" :reviews="reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>
    </div>`,
    data() {
      return {
          title: 'Spiderman: No Way Home',
          selectedVariant: 0,
          variants: [
            { id: 2234, nombre: 'Spiderman', color: 'red', image: './assets/images/spiderman1.gif', url:'https://n9.cl/9lz8h' },
            { id: 2235, nombre: 'Spiderman', color: 'red', image: './assets/images/spiderman2.gif', url:'https://n9.cl/87t14' },
            { id: 2236, nombre: 'Spiderman', color: 'red', image: './assets/images/spiderman3.gif', url:'https://n9.cl/nqxl1' },
            { id: 2237,nombre: 'Green Goblin', color: 'green', image: './assets/images/duende_verde.gif', url:'https://n9.cl/ai25k' },
            { id: 2238,nombre: 'Dr. Octopus', color: 'brown', image: './assets/images/dr_octopus.gif', url:'https://n9.cl/e7o38' },
            { id: 2239,nombre: 'Electro', color: 'yellow', image: './assets/images/electro.gif', url:'https://n9.cl/gc5ur' },
          ],
          reviews: []
      }
    },
    methods: {
        updateVariant(index) {
            this.selectedVariant = index
        },
        addReview(review) {
          this.reviews.push(review)
        }
    },
    computed: {
        title() {
            return this.title
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        nombre() {
          return this.variants[this.selectedVariant].nombre
      },
      url() {
        return this.variants[this.selectedVariant].url
    },
    }
  })