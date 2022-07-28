<template>
    <router-link :to="{ path: `/starship/${id ?? -1}` }" class="card">
        <img
            v-if="!imageError"
            class="image"
            :src="`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`"
            alt="Корабль"
            @error="imageError = true"
        />
        <img
            v-else
            class="image"
            src="https://static3.depositphotos.com/1007959/232/i/600/depositphotos_2328703-stock-photo-nothing-road-sign-with-dramatic.jpg"
            alt="Корабль"
        />
        <div class="text-block">
            <span class="text-title">Cost:</span>
            <h1 class="text-value">{{ cost }}</h1>
        </div>
        <div class="text-block">
            <span class="text-title">Name:</span>
            <h1 class="text-value">{{ name }}</h1>
        </div>
    </router-link>
</template>
<script>
import { ref } from 'vue';

export default {
    name: 'StarshipCard',

    props: {
        id: {
            type: String,
            required: true,
        },
        cost: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
    },
    setup() {
        const imageError = ref(false);
        return {
            imageError,
        };
    },
};
</script>
<style lang="scss" scoped>
.card {
    padding: clamp(10px, 1.04vw, 20px);
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 10px;
    background: var(--color-first);
    transition: all 0.25s cubic-bezier(0.57, 0.17, 0.42, 0.83);
    cursor: pointer;
    .image {
        width: 100%;
        border-radius: 10px;
        aspect-ratio: 4/3;
    }
    .text-block {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        font-family: 'Gilroy';
        font-size: var(--size-first);
        .text-title {
            margin-top: auto;
            font-weight: 400;
        }
        .text-value {
            font-weight: 500;
            text-align: right;
        }
    }
    &:hover {
        transform: scale(1.05);
    }
}
</style>
