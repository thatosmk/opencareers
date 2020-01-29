<template>
  <div class="customer">
    <Customers/>
      <h1>
        Customers
      </h1>
  </div>
</template>
// @ is an alias to /src
import Customers from '@/components/Customers.vue';

<script>
export default {
  name: 'customer',
  components: {
    Customers,
  },
  data() {
    return {
      item: {},
    };
  },
};
</script>
