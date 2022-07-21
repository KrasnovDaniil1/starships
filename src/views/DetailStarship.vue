<template>
    <div class="detail">
        <h1 class="title">Detail Starships</h1>
        <div class="main-block">
            <img
                class="image"
                src="https://starwars-visualguide.com/assets/img/starships/9.jpg"
                alt=""
            />
            <div class="block-info">
                <div class="text-block">
                    <span class="text-title">Model:</span>
                    <h1 class="text-value">MYT-1300 light freighter</h1>
                </div>
                <div class="text-block">
                    <span class="text-title">Name:</span>
                    <h1 class="text-value">Millennium Falcon</h1>
                </div>
                <div class="text-block">
                    <span class="text-title">Length:</span>
                    <h1 class="text-value">34.37</h1>
                </div>
                <div class="text-block">
                    <span class="text-title">Cost:</span>
                    <h1 class="text-value">$30.000.000.000</h1>
                </div>
                <div class="text-block">
                    <span class="text-title">Created:</span>
                    <h1 class="text-value">10.12.2014</h1>
                </div>
            </div>
        </div>
        <h2 class="detail-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim
        </h2>
    </div>
</template>
<script>
export default {
    name: 'DetailStarship',
    setup() {},
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
