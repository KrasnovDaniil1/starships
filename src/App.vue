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
// .app {
//     max-width: 100vw;
//     overflow: hidden;
// }
// :root {
//     --font-first: 'Playfair Display';
//     --size-first: max(22px, 1.3vw);
//     --size-second: max(25px, 1.5vw);
//     --size-third: max(40px, 2.2vw);
// }
// @media screen and (max-width: 920px) {
//     :root {
//         --size-third: 32px;
//     }
// }
// @media screen and (max-width: 420px) {
//     :root {
//         --size-second: 22px;
//         --size-first: 20px;
//     }
// }
.app {
    background: #1e1e1e;
    padding: 0 80px;
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
    font: inherit;
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
    /*блок скролла*/
    background: #f2f2f2;
    width: 5px;
}
::-webkit-scrollbar-thumb {
    /*ползунок скролла*/
    background: #000;
    border-radius: 10px;
}
@font-face {
    font-family: 'Gilroy';
    src: url('./font/Gilroy-Regular.eot');
    src: local('Gilroy Regular'), local('Gilroy-Regular'),
        url('./font/Gilroy-Regular.eot?#iefix') format('embedded-opentype'),
        url('./font/Gilroy-Regular.woff2') format('woff2'),
        url('./font/Gilroy-Regular.woff') format('woff'),
        url('./font/Gilroy-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Gilroy';
    src: url('./font/Gilroy-Medium.eot');
    src: local('Gilroy Medium'), local('Gilroy-Medium'),
        url('./font/Gilroy-Medium.eot?#iefix') format('embedded-opentype'),
        url('./font/Gilroy-Medium.woff2') format('woff2'),
        url('./font/Gilroy-Medium.woff') format('woff'),
        url('./font/Gilroy-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}
</style>
