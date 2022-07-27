<template>
    <div class="starships">
        <h1 class="title">Straships</h1>
        <div class="card-block">
            <StarshipCard v-for="index in 9" :key="index" />
        </div>
    </div>
</template>
<script>
import StarshipCard from '../components/StarshipCard.vue';
export default {
    name: 'Home',
    components: {
        StarshipCard,
    },
};
</script>
<style lang="scss" scoped>
.starships {
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
