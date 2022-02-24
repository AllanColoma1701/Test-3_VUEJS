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
        <div class="product-image">
          <img v-bind:src="image">
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p>{{ nombre }}</p>
          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>
  
          <div 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)" 
            class="color-circle_2" 
            :style="{ backgroundColor: variant.color }">
          </div>
        </div>
      </div>
      <review-list v-if="reviews.length" :reviews="reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>
    </div>`,
    data() {
      return {
          title: 'Justice League',
          selectedVariant: 0,
          variants: [
            { id: 2234, nombre: 'Batman', color: 'black', image: './assets/images/batman.jpg', url:'https://n9.cl/m321p' },
            { id: 2235,nombre: 'Superman', color: 'blue', image: './assets/images/superman.jpg', url:'https://n9.cl/4b32c' },
            { id: 2235,nombre: 'Wonder Women', color: 'yellow', image: './assets/images/mujer_maravilla.jpg', url:'https://n9.cl/1x2u86' },
            { id: 2235,nombre: 'Flash', color: 'red', image: './assets/images/flash.jpg', url:'https://n9.cl/96krq' },
            { id: 2235,nombre: 'Aquaman', color: 'darkgreen', image: './assets/images/aquaman.jpg', url:'https://n9.cl/7gptn' },
            { id: 2235,nombre: 'Cyborg', color: 'grey', image: './assets/images/cyborg.jpg', url:'https://n9.cl/qmx0v' },
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
    }
  })