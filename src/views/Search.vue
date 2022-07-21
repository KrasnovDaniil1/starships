<template>
    <div class="search">
        <h1 class="title">Search</h1>

        <label class="search-block">
            <input
                type="text"
                class="search-text"
                placeholder="Название корабля ..."
            />
            <button class="search-btn">Поиск</button>
        </label>
        <div class="card-block">
            <StarshipCard v-for="index in 9" :key="index" />
        </div>
    </div>
</template>
<script>
import StarshipCard from '../components/StarshipCard.vue';

export default {
    name: 'Search',
    components: {
        StarshipCard,
    },
    setup() {},
};
</script>
<style lang="scss" scoped>
.search {
    .search-block {
        margin: 0 auto;
        display: flex;
        width: 50%;
        font-size: var(--size-first);
        .search-text {
            background: var(--color-first);
            border-radius: 10px;
            padding: 0 10px;
        }
        .search-btn {
            padding: 10px 20px;
            background: var(--color-second);
            margin-left: clamp(10px, 3vw, 50px);
            border-radius: 10px;
        }
    }
    .card-block {
        margin-top: clamp(30px, 3vw, 50px);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: clamp(30px, 3vw, 50px);
    }
}
@media screen and (max-width: 1360px) {
    .search {
        .search-block {
            width: 80%;
        }
        .card-block {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}
@media screen and (max-width: 768px) {
    .search {
        .search-block {
            width: 100%;
            .search-btn {
                padding: 10px;
            }
        }
        .card-block {
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 20px 0;
        }
    }
}
</style>
