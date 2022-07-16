<template>
    <header class="navigation">
        <router-link class="button" to="/memos">Memos</router-link>
        <router-link class="button" to="/essays">Essay</router-link>
        <router-link class="button" to="/about">About</router-link>
        <router-link to="/"><img alt="Giller" class="logo" src="@/assets/giller-logo.svg" width="125" height="125" />
        </router-link>
    </header>
</template>

<script>
</script>

<style scoped>

header {
    text-align: right;
}

.navigation {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: inline;
    line-height: 6;
}

.navigation *.button {
    display: inline-block;
    padding: 1rem;

    vertical-align: top;
}

.navigation * {
    margin: 0rem 1rem;
}

.navigation *:hover {
    text-decoration: underline;
    cursor: default;
    -webkit-user-select: none;
    /* Safari */
    -moz-user-select: none;
    /* Firefox */
    -ms-user-select: none;
    /* IE10+/Edge */
    user-select: none;
    /* Standard */
}

.logo {
    display: inline;
}
</style>