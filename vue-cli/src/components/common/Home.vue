<template>
    <div class="container-fluid">
        <div class="row">
            <router-view name="side"></router-view>
            <router-view name="content"></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>