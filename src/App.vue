<template>
    <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.2/css/all.css"
    />
    <div class="app">
        <Header />
        <router-view />
    </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
    components: {
        Header,
    },
    setup() {},
};
</script>

<style lang="scss">
:root {
    --size-first: 25px;
    --size-second: 40px;
    --size-third: 70px;
    --color-first: #fff;
    --color-second: #e2f063;
    --color-third: #1e1e1e;
}
@media screen and (max-width: 920px) {
    :root {
        --size-first: 23px;
        --size-second: 35px;
        --size-third: 50px;
    }
}
@media screen and (max-width: 460px) {
    :root {
        --size-first: 22px;
        --size-second: 30px;
        --size-third: 40px;
    }
}

.app {
    position: relative;
    padding: 0 clamp(10px, 5vw, 80px);
    padding-bottom: 100px;
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    background: var(--color-third);
}
.title {
    margin-bottom: clamp(20px, 4vw, 60px);
    font-family: 'Gilroy';
    font-size: var(--size-third);
    font-weight: 500;
    color: #e2f063;
}
body,
head {
    padding: 0;
    margin: 0;
}
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 100%;
    line-height: 1;
    color: inherit;
}

img {
    width: 100%;
    height: 100%;
}
a,
button {
    outline: none;
    color: inherit;
    background: none;
    text-decoration: none;
    cursor: pointer;
    border: none;
    &:hover,
    &:focus,
    &:active {
        outline: none;
        color: inherit;
        background: none;
        text-decoration: none;
        border: none;
    }
}
ul,
ol,
li {
    list-style: none;
}
input,
textarea {
    width: 100%;
    white-space: pre-wrap;
    background: none;
    border: none;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    color: none;
    resize: none;
    &::placeholder {
        color: inherit;
    }
}
::-webkit-scrollbar {
    background: var(--color-third);
    width: 5px;
}
::-webkit-scrollbar-thumb {
    background: var(--color-second);
}
@font-face {
    font-family: 'Gilroy';
    src: url('./assets/font/Gilroy-Regular.eot');
    src: local('Gilroy Regular'), local('Gilroy-Regular'),
        url('./assets/font/Gilroy-Regular.eot?#iefix')
            format('embedded-opentype'),
        url('./assets/font/Gilroy-Regular.woff2') format('woff2'),
        url('./assets/font/Gilroy-Regular.woff') format('woff'),
        url('./assets/font/Gilroy-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Gilroy';
    src: url('./assets/font/Gilroy-Medium.eot');
    src: local('Gilroy Medium'), local('Gilroy-Medium'),
        url('./assets/font/Gilroy-Medium.eot?#iefix')
            format('embedded-opentype'),
        url('./assets/font/Gilroy-Medium.woff2') format('woff2'),
        url('./assets/font/Gilroy-Medium.woff') format('woff'),
        url('./assets/font/Gilroy-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}
</style>
