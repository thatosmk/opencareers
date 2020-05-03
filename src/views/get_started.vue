<template>
    <div class="container">
        <div class="py-5 text-center">
            <h1 class="font-weight-bold">
                Contribute today and impact lifes
            </h1>
            <p class="lead text-muted py-4">
                We are looking for content creators, moderators, speakers to
                volunteer to enrich this platform with thoughtful and useful
                content.
            </p>
            <b-button
                variant="success"
                size="lg"
                href="#">
                Register to get started
            </b-button>
        </div>
        <div class="py-4">
            <varsities :unis="universities"/>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'GetStarted',
};
</script>
