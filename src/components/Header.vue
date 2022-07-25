<template>
    <header class="header">
        <router-link class="logo" to="/">About</router-link>
        <nav
            class="nav-router"
            :style="{
                left: burgerActive ? '100%' : '0',
            }"
        >
            <button class="close" @click="burgerActive = !burgerActive">
                <i class="fas fa-times"></i>
            </button>
            <router-link
                class="nav"
                @click="burgerActive = !burgerActive"
                to="/search"
                >Search</router-link
            >
            <router-link
                class="nav"
                @click="burgerActive = !burgerActive"
                to="/starships"
                >Starships</router-link
            >
        </nav>

        <button class="burger" @click="burgerActive = !burgerActive">
            <i class="fas fa-bars"></i>
        </button>
    </header>
</template>
<script>
import { ref } from 'vue';
export default {
    name: 'Header',
    data() {
        return {
            burgerActive: ref(true),
        };
    },
    // setup() {
    //     const burgerActive = ref(true);
    //     return { burgerActive };
    // },
};
</script>
<style lang="scss" scoped>
.header {
    padding: clamp(20px, 2vw, 40px) 0 clamp(70px, 8vw, 150px) 0;
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
        transition: all 0.5s cubic-bezier(0.57, 0.17, 0.42, 0.83);
        .nav {
            margin-left: 40px;
        }
        .close {
            display: none;
        }
    }

    .burger {
        display: none;
    }
    .router-link-active {
        color: var(--color-second);
        text-decoration: underline;
    }
}
@media screen and (max-width: 920px) {
    .header {
        .nav-router {
            z-index: 1;
            position: absolute;
            top: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
            font-size: var(--size-third);
            background: var(--color-third);
            .nav {
                padding: 20px 0;
                margin-left: 0;
            }
            .close {
                display: revert;
                position: absolute;
                top: 30px;
                right: 30px;
            }
        }

        .burger {
            display: revert;
            font-size: var(--size-second);
        }
    }
}
</style>
