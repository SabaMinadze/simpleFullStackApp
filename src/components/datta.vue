<template>
    <div>
        <h1>Hello datta.vue</h1>
        <h1 v-for="(person, index) in products" :key="index" class="jsonBox">
            <h3>{{ person.name }}ს ხელფასი აქვს {{ person.sallaryPerMounth }}
               ლარი და არის {{ person.age }} წლის პროფესია: {{ person.profession }}</h3>
            <br/><br/>
            <a :href="person.githubLink">Link to profile</a>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <p v-if="person.isEmployed">დასაქმებულია</p>
            <p v-else>დაუსაქმებელია</p>
        </h1>
        
    

    </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
      eployed: true,
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:3000/api/data');
        this.products = response.data;
        console.log(this.products);
        
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
  },
};
</script>

<style scoped>
h3{
    color: rgb(33, 25, 129);
    font-size: 30px;
}

a{
  font-size: 25px;
}

.jsonBox{
  display: flex;
}

p{
  font-size: 28px;
  color: white;
}

</style>