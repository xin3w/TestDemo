<template>
    <div class="page-side col-md-2">
        <!-- label-primary label-success label-info label-warning label-danger -->
        <router-link tag="span" to='/TestFocus' class="label label-default">TestFocus</router-link>
        <router-link tag="span" to='/HelloWorld' class="label label-primary">HelloWorld</router-link>
        <router-link tag="span" to='/HelloWorld' class="label label-success">HelloWorld</router-link>
        <router-link tag="span" to='/HelloWorld' class="label label-info">HelloWorld</router-link>
        <router-link tag="span" to='/HelloWorld' class="label label-warning">HelloWorld</router-link>
        <router-link tag="span" to='/HelloWorld' class="label label-danger">HelloWorld</router-link>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>
