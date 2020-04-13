<template>
  <div class="home">
    <HelloWorld/>
    <div class="header-home pb-5">
    <div class="row">
        <div class="col-md-6 col-lg-6 col-xl-6">
            <h1>
                Find
                <transition name="fade">
                 <p :if="show" v-for="fruit in fruits" :key="fruit">
                     {{ fruit }}
                 </p>
                </transition>
            </h1>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-6">
            <div>
              <b-img src="./assets/sitting-2x.png" fluid alt="Responsive image"></b-img>
          </div>
        </div>
    </div>
    </div>
    <div class="book">
        <div  class="container">
            <h1>
                Book your artist anytime
            </h1>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  data() {
    return {
      fruits: ['apple', 'banana', 'pear'],
      show: true,
    };
  },
  components: {
    HelloWorld,
  },
};
</script>
