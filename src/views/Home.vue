<template>
    <section class="home">
        <h1 class="title">Welcome to StarDB</h1>
        <div class="home-text">
            Api взятое с сайта - SWAPI. На этом сайте реализовано только api -
            Starships. Во вкладке Search можно найти корабель по названию
            модели. Во вкладке Starships можно просмотреть все корабли
            используемые в звёздных войнах и отсортировать их по модели и
            названию корабля.
        </div>
        <div class="decor"></div>
    </section>
</template>
<script>
export default {
    name: 'Home',
};
</script>
<style lang="scss" scoped>
.home {
    position: relative;
    .home-text {
        width: 85%;
        font-family: 'Gilroy';
        font-size: var(--size-second);
        line-height: 1.5;
        color: var(--color-first);
    }
    .decor {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, #8b39b2 0%, #e2f063 100%);
        opacity: 0.6;
        filter: blur(200px);
    }
}
@media screen and (max-width: 920px) {
    .home {
        .home-text {
            margin-right: 0;
            width: 100%;
        }
    }
}
</style>
