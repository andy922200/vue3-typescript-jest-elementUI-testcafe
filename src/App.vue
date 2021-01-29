<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/demo">Demo</router-link>
    </div>
    <Suspense>
        <template #default>
            <router-view />
        </template>
        <template #fallback>
            <p>Loading...</p>
        </template>
    </Suspense>
</template>

<style lang="scss" src="./styles/App.scss"></style>
