<template>
  <div class="about">
    <div class="row">
        <div class="col-xs-12 col-md-3">
            <div class="py-5 toc position-fixed">
                <b-nav
                    vertical
                    nav-wrapper-class="w-50"
                    v-b-scrollspy:nav-scroller
                    class="flex-column"
                >
                    <b-nav-item
                        href="#what"
                        >What is
                    </b-nav-item>
                    <b-nav-item
                        href="#how"
                        >How to get started
                    </b-nav-item>
                    <b-nav-item
                        href="#links"
                        >Further reading
                    </b-nav-item>
                </b-nav>
            </div>
        </div>
        <div class="col-xs-12 col-md-9">
            <div class="pt-2 pb-5 position-relative">
                <h1 class="text-center">
                    About threaded
                </h1>
                <p class="py-4 text-center">
                </p>
                <p id="what" class="py-5">
                </p>
                <p id="how" class="py-5">
                </p>
                <p id="links" class="py-2">
                </p>
            </div>
            <div class="py-4">
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
};
</script>
