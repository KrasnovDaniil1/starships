<template>
    <div class="detail" v-if="!loaderActive">
        <h1 class="title">{{ starship.name }}</h1>
        <div class="main-block">
            <img
                v-if="!imageError"
                class="image"
                :src="`https://starwars-visualguide.com/assets/img/starships/${router.params.id}.jpg`"
                alt="Корабль"
                @error="imageError = true"
            />
            <img
                v-else
                class="image"
                src="https://static3.depositphotos.com/1007959/232/i/600/depositphotos_2328703-stock-photo-nothing-road-sign-with-dramatic.jpg"
                alt="Корабль"
            />
            <div class="block-info">
                <div class="text-block">
                    <span class="text-title">Model:</span>
                    <h1 class="text-value">{{ starship.model }}</h1>
                </div>
                <div class="text-block">
                    <span class="text-title">Name:</span>
                    <h1 class="text-value">{{ starship.name }}</h1>
                </div>
                <div class="text-block">
                    <span class="text-title">Length:</span>
                    <h1 class="text-value">{{ starship.length }}</h1>
                </div>
                <div class="text-block">
                    <span class="text-title">Cost:</span>
                    <h1 class="text-value">{{ starship.cost_in_credits }}</h1>
                </div>
                <div class="text-block">
                    <span class="text-title">Created:</span>
                    <h1 class="text-value">{{ starship.created }}</h1>
                </div>
            </div>
        </div>
        <h2 class="detail-text">
            {{ starship.manufacturer }}
        </h2>
    </div>
    <Loader v-if="loaderActive" />
</template>
<script>
import { onMounted, ref } from '@vue/runtime-core';
import { GetStarshipById } from '../app';
import { useRoute } from 'vue-router';
import Loader from '../components/Loader.vue';

export default {
    name: 'DetailStarship',
    components: {
        Loader,
    },
    setup() {
        const starship = ref({});
        const router = useRoute();
        const imageError = ref(false);
        const loaderActive = ref(true);

        onMounted(async () => {
            starship.value = await GetStarshipById(router.params.id);
            loaderActive.value = false;
        });
        return { starship, router, imageError, loaderActive };
    },
};
</script>
<style lang="scss" scoped>
.detail {
    font-family: 'Gilroy';
    color: var(--color-first);
    .main-block {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: clamp(20px, 2.5vw, 50px);
        .image {
            border-radius: 10px;
        }
        .block-info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .text-block {
                display: flex;
                justify-content: space-between;
                font-family: 'Gilroy';
                font-size: var(--size-second);
                .text-title {
                    margin-top: auto;
                    font-weight: 400;
                }
                .text-value {
                    font-weight: 500;
                    text-align: right;
                }
            }
        }
    }
    .detail-text {
        margin-top: clamp(20px, 2.5vw, 50px);
        font-size: var(--size-first);
        font-weight: 400;
        line-height: 1.4;
    }
}
@media screen and (max-width: 1368px) {
    .detail {
        .main-block {
            grid-template-columns: repeat(1, 1fr);
        }
        .block-info {
            grid-gap: clamp(20px, 2.5vw, 50px);
        }
    }
}
@media screen and (max-width: 678px) {
    .detail {
        .main-block {
            .block-info {
                grid-gap: clamp(20px, 2.5vw, 50px);
                .text-block {
                    flex-direction: column;
                    grid-gap: clamp(20px, 2.5vw, 50px);
                }
            }
        }
    }
}
</style>
