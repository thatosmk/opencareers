<template>
  <div class="main container">
    <div class="landing-left">
        <div class="landing-container">
            <h2>Popular Careers</h2>
            <div class="d-flex flex-md-row flex-column">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import backGraphic from '@/assets/images/background-main.png';
import magnolia from '@/assets/images/marginalia-success.png';
import social from '@/assets/images/social-girl.png';
import mOffice from '@/assets/images/hero-company.png';
import heroCompany from '@/assets/images/hero-company-1.png';
import smiling from '@/assets/images/smiling.jpg';
import growth from '@/assets/images/love.png';
import book from '@/assets/images/book.jpg';

export default {
  name: 'home',
  data() {
    return {
      words: ['a friend', 'an advisor', 'an icon', 'a miracle', 'a blessing',
      ],
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: '#bbb',
        width: 600,
        height: 400,
        class: 'my-5',
      },
      backGraphic,
      magnolia,
      book,
      smiling,
      social,
      growth,
      mOffice,
      heroCompany,
    };
  },
  computed: {
  },
  created() {
  },
  components: {
  },
  methods: {
  },
};
</script>
