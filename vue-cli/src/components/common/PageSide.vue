<template>
    <div class="page-side col-md-2">
        <!-- label-primary label-success label-info label-warning label-danger -->
        <router-link tag="span" to='/TestFocus' class="label label-default">TestFocus</router-link>
        <router-link tag="span" to='/HelloWorld' class="label label-primary">HelloWorld</router-link>
        <router-link tag="span" to='/TestI18n1' class="label label-success">i18n1</router-link>
        <router-link tag="span" to='/TestI18n2' class="label label-success">i18n2</router-link>
        <router-link tag="span" to='/TestEleForm' class="label label-success">TestEleForm</router-link>
        <router-link tag="span" to='/TestEleForm2' class="label label-success">TestEleForm2</router-link>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>
