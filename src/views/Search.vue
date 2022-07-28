<template>
    <div class="search">
        <h1 class="title">Search</h1>
        <label class="search-block">
            <input
                type="text"
                class="search-text"
                placeholder="Название корабля ..."
                v-model="starshipName"
                @keydown.enter="newSearch()"
            />
            <button class="search-btn" @click="newSearch()">Поиск</button>
        </label>

        <h1 class="emptiness-page" v-if="!Math.ceil(allStarships.count)">
            Пока здесь пусто...
        </h1>
        <div class="card-block">
            <StarshipCard
                v-for="(starship, index) in allStarships.results"
                :id="starship.url.split('/')[5]"
                :cost="starship.cost_in_credits"
                :name="starship.name"
                :key="index"
            />
        </div>
        <template v-if="Math.ceil(allStarships.count)">
            <Pagination
                @selectPage="(i) => nextPage(i)"
                :pages="Math.ceil(allStarships.count / 10)"
                :activePage="page"
            />
        </template>
        <Loader v-if="loaderActive" />
    </div>
</template>
<script>
import StarshipCard from '../components/StarshipCard.vue';
import Pagination from '../components/Pagination.vue';
import Loader from '../components/Loader.vue';

import { ref, onMounted } from 'vue';
import { SearchStarships } from '../app.js';
import { useRouter } from 'vue-router';

export default {
    name: 'Search',
    components: {
        StarshipCard,
        Pagination,
        Loader,
    },
    setup() {
        const starshipName = ref('');
        const allStarships = ref([]);
        const page = ref(1);
        const router = useRouter();
        const loaderActive = ref(false);
        const nextPage = (selectPage) => {
            page.value = selectPage;
            searchStrashipByName();
        };
        const newSearch = () => {
            page.value = 1;
            searchStrashipByName();
        };
        const searchStrashipByName = async () => {
            loaderActive.value = true;
            allStarships.value = await SearchStarships(
                starshipName.value,
                page.value
            );
            loaderActive.value = false;
            router.push({
                query: { name: starshipName.value, page: page.value ?? 1 },
            });
        };
        onMounted(() => {
            starshipName.value = router.currentRoute.value.query.name;
            page.value = router.currentRoute.value.query.page;

            searchStrashipByName();
        });
        return {
            starshipName,
            allStarships,
            page,
            loaderActive,
            newSearch,
            nextPage,
            searchStrashipByName,
        };
    },
};
</script>
<style lang="scss" scoped>
.search {
    font-family: 'Gilroy';
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
    .emptiness-page {
        font-size: var(--size-second);
        color: var(--color-first);
        margin-top: 10%;
        text-align: center;
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
