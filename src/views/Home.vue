<template>
  <div class="main">
    <header class="py-5">
        <vue-typed-js :strings="words" :loop="true">
            <h1 class="font-weight-bold pt-5">Looking for &nbsp;
                <br/>
                <span class="text-primary worded font-weight-bold pt-2 typing">
                </span>
                <hr/>
            </h1>
        </vue-typed-js>
        <p class="lead py-4">
            At your convenience
        </p>
        <div class="py-4">
            <div class="filter_tag">
                <button aria-invalid="false" class="tag_press" aria-pressed="pressed">
                    <span aria-label="Photographer">
                        <div class="inner_tag_press">
                            <span>
                                Hair Stylist
                            </span>
                        </div>
                    </span>
                </button>
            </div>
            <div class="filter_tag">
                <button aria-invalid="false" class="tag_press" aria-pressed="pressed">
                    <span aria-label="Photographer">
                        <div class="inner_tag_press">
                            <span>
                                Photographer
                            </span>
                        </div>
                    </span>
                </button>
            </div>
            <div class="filter_tag">
                <button aria-invalid="false" class="tag_press" aria-pressed="pressed">
                    <span aria-label="Photographer">
                        <div class="inner_tag_press">
                            <span>
                                Chefs
                            </span>
                        </div>
                    </span>
                </button>
            </div>
            <div class="filter_tag">
                <button aria-invalid="false" class="tag_press" aria-pressed="pressed">
                    <span aria-label="Photographer">
                        <div class="inner_tag_press">
                            <span>
                                Makeup artist
                            </span>
                        </div>
                    </span>
                </button>
            </div>
        </div>
    </header>
    <div class="reviews">
        <div class="py-5 text-center">
            <h1 class="font-weight-bold">
                What others are saying
            </h1>
            <p class="py-4 lead">
                Whether you’re looking to bill customers on a recurring basis,
                set up a marketplace, or simply accept.
            </p>
        </div>
    </div>
    <div class="why">
        <div class="row why_1">
            <div class="col-xs-12 col-sm-12 col-md-6">
                <div class="py-5">
                    <h1 class="font-weight-bold">
                        Convenient
                    </h1>
                    <p class="py-4 lead">
                        Whether you’re looking to bill customers on a recurring basis,
                        set up a marketplace, or simply accept.
                    </p>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6">
            </div>
        </div>
        <div class="row why_2">
            <div class="col-xs-12 col-sm-12 col-md-6">
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6">
                <div class="py-5">
                    <h1 class="font-weight-bold">
                        Authentic
                    </h1>
                    <p class="py-4 lead">
                        Whether you’re looking to bill customers on a recurring basis,
                        set up a marketplace, or simply accept.
                    </p>
                </div>
            </div>
        </div>
        <div class="row why_3">
            <div class="col-xs-12 col-sm-12 col-md-6">
                <div class="py-5">
                    <h1 class="font-weight-bold">
                        Safe &amp; Reliable
                    </h1>
                    <p class="py-4 lead">
                        Whether you’re looking to bill customers on a recurring basis,
                        set up a marketplace, or simply accept.
                    </p>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6">
            </div>
        </div>
    </div>
    <div class="contact">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6">
                <div class="py-5">
                    <h2 class="font-weight-light">
                        <span class="subtitle text-primary">
                            Ready to get started?
                        </span>
                        <br/>
                        Get in touch or create an account
                    </h2>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6">
                <div class="py-5">
                    <b-button-toolbar>
                        <b-button class="mx-2" variant="primary">
                            Start now
                        </b-button>
                        <b-button variant="secondary">
                            Contact us
                        </b-button>
                    </b-button-toolbar>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      words: ['drivers', 'artists', 'chefs', 'photographers', 'makeup artists', 'designers', 'freelancers', 'go-getters'],
    };
  },
  components: {
  },
};
</script>
