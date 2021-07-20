<template>
    <div>
        <b-carousel
            with-carousel-list
            :indicator="false"
            :overlay="gallery"
        >
            <b-carousel-item v-for="(item, i) in items" :key="i">
                <div class="hero-body has-text-centered">
                    <h1 class="title">{{item.title}}</h1>
                </div>
                <figure class="image">
                    <img :src="item.image">
                </figure>
            </b-carousel-item>

        </b-carousel>
        <section class="hero is-primary">
            <div class="hero-body">
                <p class="title">
                Lorem ipsum, dolor sit
                </p>
                <p class="subtitle">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium corrupti nisi tenetur illo ipsam nobis atque, rem recusandae blanditiis neque deleniti distinctio, eligendi nihil sunt reiciendis, et doloremque inventore amet!

                </p>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                gallery: false,
                items: [
                        {
                            title: 'Slide 1',
                            image: 'https://picsum.photos/id/0/1230/500'
                        },
                        {
                            title: 'Slide 2',
                            image: 'https://picsum.photos/id/1/1230/500'
                        },
                        {
                            title: 'Slide 3',
                            image: 'https://picsum.photos/id/2/1230/500'
                        },
                        {
                            title: 'Slide 4',
                            image: 'https://picsum.photos/id/3/1230/500'
                        },
                        {
                            title: 'Slide 5',
                            image: 'https://picsum.photos/id/4/1230/500'
                        },
                        {
                            title: 'Slide 6',
                            image: 'https://picsum.photos/id/5/1230/500'
                        },
                        {
                            title: 'Slide 7',
                            image: 'https://picsum.photos/id/6/1230/500'
                        },
                        {
                            title: 'Slide 8',
                            image: 'https://picsum.photos/id/7/1230/500'
                        }
                ]
            }
        },
    }
</script>

<style scoped>
</style>