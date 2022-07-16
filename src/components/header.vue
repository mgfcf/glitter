<template>
    <header>
        <router-link to="/"><img alt="Giller" class="logo" src="@/assets/giller-logo.svg" width="125" height="125" />
        </router-link>
        <div class="navigation">
            <router-link to="/memos">Memos</router-link>
            <router-link to="/essays">Essays</router-link>
            <router-link to="/about">About</router-link>
        </div>
    </header>
</template>

<script></script>

<style scoped>


header {
    text-align: center;
}

.navigation {
    margin: 0;
    padding: 0;
}

.navigation * {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    margin: 0rem 1rem;
}

.navigation *:hover {
    text-decoration: underline;
}

.navigation a.router-link-active {
    border: 0.5px solid;
    border-radius: 0.4rem;
}
</style>
