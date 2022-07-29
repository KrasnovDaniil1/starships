<template>
    <div class="starships">
        <h1 class="title">Straships</h1>
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
    </div>
    <Loader v-if="loaderActive" />
</template>
<script>
import StarshipCard from '../components/StarshipCard.vue';
import Loader from '../components/Loader.vue';
import Pagination from '../components/Pagination.vue';

import { ref, onMounted } from 'vue';
import { GetAllStarships } from '../app.js';
import { useRouter } from 'vue-router';

export default {
    name: 'Home',
    components: {
        StarshipCard,
        Pagination,
        Loader,
    },
    setup() {
        const allStarships = ref([]);
        const page = ref(1);
        const router = useRouter();
        const loaderActive = ref(false);
        const nextPage = (selectPage) => {
            page.value = selectPage;
            getStarships();
            window.scrollTo(0, 0);
        };
        const getStarships = async () => {
            loaderActive.value = true;
            allStarships.value = await GetAllStarships(page.value);
            loaderActive.value = false;
            router.push({
                query: { page: page.value },
            });
        };
        onMounted(() => {
            getStarships();
            page.value = router.currentRoute.value.query.page ?? 1;
        });
        return {
            allStarships,
            page,
            loaderActive,
            nextPage,
            getStarships,
        };
    },
};
</script>
<style lang="scss" scoped>
.starships {
    .card-block {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: clamp(30px, 3vw, 50px);
        justify-content: center;
    }
}
@media screen and (max-width: 1360px) {
    .starships {
        .card-block {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}
@media screen and (max-width: 768px) {
    .starships {
        .card-block {
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 20px 0;
        }
    }
}
</style>
