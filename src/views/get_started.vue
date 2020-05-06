<template>
    <div class="container">
        <div class="py-2 text-center hero">
            <h1 class="font-weight-light">
                Contribute today and impact lifes
            </h1>
            <p class="lead text-muted py-4">
                We are looking for content creators, moderators, speakers to
                volunteer to enrich this platform with thoughtful and useful
                content.
            </p>
        </div>
        <div>
            <b-card-group deck class="py-4">
                <b-card class="shadow">
                    <b-card-text>
                        <h4 class="py-4 text-primary">
                            Content contributor
                        </h4>
                        Add careers and details around
                        how to get into particular careers.
                        Source data from the web and add it into the
                        platform, you will add university programme info,
                        term dates etc.
                    </b-card-text>
                </b-card>
                <b-card class="shadow">
                    <b-card-text>
                        <h4 class="py-4 text-primary">
                        AMAs
                        </h4>
                        <em>Ask me anything</em> is a thread
                        where successful individuals in their
                        careers open themselves up for questions
                        pertaining to their career paths.
                    </b-card-text>
                </b-card>
                <b-card class="shadow">
                    <b-card-text>
                        <h4 class="py-4 text-primary">
                            Mentorship
                        </h4>
                        We strongly feel that most of the black folk
                        have little to no exposure around careers and
                        their different flavours. A mentor would expose,
                        nurture and inspire the high school student to follow
                        their dreams.
                    </b-card-text>
                </b-card>
            </b-card-group>
        </div>
        <div class="py-4">
            <b-button
                variant="primary"
                size="lg"
                class="py-4 px-5"
                href="https://threaded.typeform.com/to/MFVFiZ">
                I want to contribute somehow
            </b-button>
            <router-link
                :to="{ path: '/register' }"
                class="btn btn-lg btn-danger mx-4 py-4 px-5"
            >
                Get started today
            </router-link>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'GetStarted',
};
</script>
