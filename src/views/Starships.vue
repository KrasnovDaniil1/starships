<template>
    <div class="starships">
        <h1 class="title">Straships</h1>
        <!-- <div class="sort-block">
            <span class="sort">Sort by:</span>
            <span
                :class="['sort', { 'sort-active': sortValue == 'model' }]"
                @click="sortValue = 'model'"
                >Model</span
            >
            <span class="sort">/</span>
            <span
                :class="['sort', { 'sort-active': sortValue == 'name' }]"
                @click="sortValue = 'name'"
                >Name</span
            >
        </div> -->
        <div class="card-block">
            <StarshipCard v-for="index in 9" :key="index" />
        </div>
    </div>
</template>
<script>
import StarshipCard from '../components/StarshipCard.vue';
// import { ref } from 'vue';
export default {
    name: 'Home',
    components: {
        StarshipCard,
    },
    setup() {
        // const sortValue = ref('model');
        // return {
        //     sortValue,
        // };
    },
};
</script>
<style lang="scss" scoped>
.starships {
    // .sort-block {
    //     margin-bottom: clamp(20px, 4vw, 60px);
    //     display: flex;
    //     font-family: 'Gilroy';
    //     font-size: var(--size-first);
    //     .sort {
    //         padding: 0 5px;
    //         color: var(--color-first);
    //         cursor: pointer;
    //     }
    //     .sort-active {
    //         color: var(--color-second);
    //         text-decoration: underline;
    //     }
    // }
    .card-block {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: clamp(30px, 3vw, 50px);
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
