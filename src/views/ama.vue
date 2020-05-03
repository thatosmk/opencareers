<template>
    <div class="container">
        <div class="py-5 text-center">
            <h1 class="font-weight-bold">
                AMAs
            </h1>
            <p class="text-muted py-2">
                Ask me anything
            </p>
        </div>
        <div class="py-4">
            <varsities :unis="universities"/>
        </div>
    </div>
</template>
<script>
export default {
  name: 'AMA',
};
</script>
