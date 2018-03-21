<template>
    <div class="page-content col-md-10">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名" prop="name">
                <el-input type="text" v-model="ruleForm.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            var validateName = (rule, value, callback) => {
                var reg = /^[a-z\d]{4,}$/g;
                if (value === '') {
                    callback(new Error('请输入子帐户名称'));
                } else {
                    if (value.length < 4) {
                        callback(new Error('长度在 4 到 20 个字符'))
                    } else {
                        if (reg.test(value)) {
                            callback();
                        } else {
                            callback(new Error('您输入的子账户应为小写字母及数字的组合，长度不小于4位'))
                        }
                    }
                }
            };
            return {
                ruleForm: {
                    name: ''
                },
                rules: {
                    name: [{
                        validator: validateName,
                        trigger: 'blur'
                    }]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>