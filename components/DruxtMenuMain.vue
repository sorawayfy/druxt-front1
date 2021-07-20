<template>
    <b-navbar shadow class="px-2">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <NuxtLink prefetch active-class="is-primary" exact v-for="(item, i) of sItems" :key="i" :to="item.entity.attributes.url" class="navbar-item">{{item.entity.attributes.title}}</NuxtLink>
        </template>
        <template #end>
            <b-navbar-item v-for="(item, i) of eItems" :key="i" tag="div">
                <NuxtLink active-class="is-primary" exact :to="item.entity.attributes.url" class="button is-primary">{{item.entity.attributes.title}}</NuxtLink>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    data() {
        return {
            sItems: null,
            eItems: null
        }
    },
    mounted() {
        this.sItems = this.$attrs.items.filter(el => !el.entity.id.includes('log'))
        this.eItems = this.$attrs.items.filter(el => el.entity.id.includes('log'))
    }
}
</script>