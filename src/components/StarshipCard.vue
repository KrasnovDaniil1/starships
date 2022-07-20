<template>
    <router-link to="/9" class="card">
        <img
            class="image"
            src="https://starwars-visualguide.com/assets/img/starships/9.jpg"
            alt=""
        />

        <div class="text-block">
            <span class="text-title">Cost:</span>
            <h1 class="text-value">$2.000.000.000</h1>
        </div>
        <div class="text-block">
            <span class="text-title">Name:</span>
            <h1 class="text-value">Millennium Falcon</h1>
        </div>
    </router-link>
</template>
<script>
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
    setup() {},
};
</script>
<style lang="scss" scoped>
.card {
    padding: 20px;
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
