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
<style lang="scss" scoped>
.header {
    padding: 40px 0 156px 0;
    display: flex;
    justify-content: space-between;
    color: var(--color-first);
    .logo {
        font-family: 'Open Sans';
        font-size: var(--size-second);
        font-weight: 600;
    }
    .nav-router {
        margin-top: auto;
        font-family: 'Gilroy';
        font-weight: 400;
        font-size: var(--size-first);
        .nav {
            margin-left: 40px;
        }
    }
    .router-link-active {
        color: var(--color-second);
        text-decoration: underline;
    }
}
</style>
