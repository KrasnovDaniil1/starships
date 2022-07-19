<template>
    <header class="header">
        <router-link class="logo" to="/">About</router-link>
        <nav class="nav-router">
            <router-link class="nav" to="/search">Search</router-link>
            <router-link class="nav" to="/starships">Starships</router-link>
        </nav>
    </header>
</template>
<script>
export default {
    name: 'Header',
    setup() {},
};
</script>
