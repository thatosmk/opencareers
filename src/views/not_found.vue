<template>
    <div class="container">
        <div class="pt-5 text-center">
            <h1>
                Something terribly wrong happened
            </h1>
            <p class="text-muted py-4">
                We are terribly sorry about this, we will look into this as soon as we can.
            </p>
            <b-button
                variant="primary"
                size="lg"
                href="/">
                Return to home page
            </b-button>
        </div>
        <div class="py-2 text-center">
            <b-img-lazy
                :src="notFound"
                height="480px"
                alt="threaded-404"
                >
            </b-img-lazy>
        </div>
    </div>
</template>
<script>
import notFound from '@/assets/images/not-found.png';

export default {
  name: 'AMA',
  data() {
    return {
      notFound,
    };
  },
};
</script>
