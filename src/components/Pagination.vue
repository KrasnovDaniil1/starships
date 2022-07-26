<template>
    <div class="pagination">
        <button
            @click="$emit('selectPage', index)"
            class="page"
            :class="{ 'page-active': activePage == index }"
            v-for="index in pages"
            :key="index"
        >
            {{ index }}
        </button>
    </div>
</template>
<script>
export default {
    name: 'Pagination',
    props: {
        pages: {
            type: Number,
            required: true,
        },
        activePage: {
            type: Number,
            required: true,
        },
    },
    setup() {},
};
</script>
<style lang="scss" scoped>
.pagination {
    display: flex;
    justify-content: center;
    font-size: var(--size-first);
    .page {
        background: var(--color-second);
        padding: 10px 15px;
        margin: 20px;
        border-radius: 4px;
    }
    .page-active {
        background: var(--color-first);
    }
}
</style>
