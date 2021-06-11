<template>
    <div @click="screen">
                <div v-if="success.bool">
                    <transition name="modal">
                        <div class="modal-mask">
                            <div class="modal-wrapper">
                                <div class="modal-container">
                                    <img class="img" src="../assets/img/success-send.png" alt="">
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
        <v-form class="form" ref="form" v-model="valid">
            <div class="inputs">
                <div>
                    <div class="label">
                        <v-text-field
                            class="input"
                            maxlength="100"
                            :rules="rules.name"
                            label="Name*"
                            v-model.trim="form.name"
                            required
                            dark
                            @input="changeInput('name')"
                        />
                    </div>

                    <div class="label">
                        <v-text-field
                            class="input"
                            maxlength="50"
                            :rules="rules.company"
                            label="Company"
                            v-model.trim="form.company"
                            dark
                            @input="changeInput('company')"
                        />
                    </div>

                    <div class="label">
                        <v-text-field
                            class="input"
                            maxlength="15"
                            :rules="rules.phone"
                            label="Phone*"
                            v-model.trim="form.phone"
                            dark
                            @input="changeInput('phone')"
                        />
                    </div>

                    <div class="label">
                        <v-text-field
                            class="input"
                            :rules="rules.email"
                            label="Email*"
                            v-model.trim="form.email"
                            dark
                            @input="changeInput('email')"
                        />
                    </div>

                    <label class="label">
                        <v-textarea
                            class="input"
                            counter
                            auto-grow
                            maxlength="500"
                            label="Comment"
                            :rules="rules.comment"
                            v-model.trim="form.comment"
                            dark
                            rows="4"
                            @input="changeInput('comment')"
                        ></v-textarea>
                    </label>

                    <div class="label">
                        <div style="">
                            <div>
                                <v-btn color="white" style="font-family: Montserrat;width: 220px;" @click="onPickFile"><b>upload file</b>
                                </v-btn>
                                <div class="fileLoad">
                                    <v-chip
                                        v-for="(item,ind) in form.file"
                                        :key="ind"
                                        class="v-chip-item"
                                        close
                                        label
                                        color="#fff"
                                        style="font-family: Montserrat; height: 36px; background: #fff; border-radius: 5px; margin-top: 10px; justify-content: space-around !important;"
                                        @click:close="unsetFile(ind)"
                                    >
                                        {{ fileName(item.name) }}
                                    </v-chip>
                                </div>
                            </div>
                        </div>
                        <input multiple type="file" style="display: none" ref="file" @change="uploadFile">
                        <div
                            v-show="fileError.error.maxFile || fileError.error.repeat"
                            class="file-error"
                        >
                            {{ fileError.message }}
                        </div>
                        <div>
                            <transition name="prompt">
                                <div v-if="fileError.error.expansion" class="message-expansion">
                                    Supported file formats:<br>
                                    TAR, Z, ZIP, PPT, XLS,
                                    DOC, DOCX, PDF, TXT, BMP,
                                    GIF, JPG, JPEG, PNG, TIF
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>

            <div class="send-policy">
                <div>
                    <button class="btn" type="button" @click="send"><b>SUBMIT</b></button>
                </div>
<!--                <div class="col">-->
<!--                    <span class="privat-policy-span">-->
<!--                        Sending your data you agree to our terms <br>and conditions:-->
<!--                        <a href="#/private-policy" target="_blank" class="privat-policy-a">Our Privacy Policy</a>-->
<!--                    </span>-->
<!--                </div>-->
            </div>
        </v-form>


    </div>

</template>

<script>
// import config from "../config";

import config from "../config";

export default {
    name: "contactForm",

    data: () => ({
        rules: {
            name: [
                value => !!value || 'Enter your name.',
                value => value.length <= 100 || 'This field should contain 1-100 symbols.',
            ],
            company: [
                value => value.length <= 50 || 'This field should contain 0-50 symbols.',
            ],
            phone: [
                value => !!value || 'Enter your phone number.',
                value => {
                    const pattern = /^[\d()+-]{5,15}$/
                    return pattern.test(value) || 'This field should contain 5-15 symbols (the numbers “0-9").'
                }
            ],
            email: [
                value => !!value || 'Enter your email.',
                value => {
                    const pattern = /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
                    return pattern.test(value) || 'Enter a valid email.'
                }
            ],
            comment: [
                value => value.length <= 500 || 'This field should contain 1-100 symbols.',
            ]

        },
        valid: true,
        form: {
            name: '',
            company: '',
            phone: '',
            email: '',
            comment: '',
            file: []
        },
        fileError: {
            message: '',
            error: {
                maxFile: false,
                expansion: false,
                repeat: false
            }
        },
        prompt: false,
        enlargement: [
            'tar', 'z', 'zip', 'ppt', 'xls',
            'doc', 'docx', 'pdf', 'txt', 'bmp',
            'gif', 'jpg', 'jpeg', 'png', 'tif'
        ],
        success: {
            bool: false,
            step: 1
        },
    }),
    methods: {
        titleBtn(bool){
            this.prompt = bool;
        },
        fileName(name) {
            let nameF = name.split('.')
            name = '';
            for (let i = 0; i < nameF.length - 1; i++) {
                name += nameF[i]
            }
            name = name.replace(/\s+/g, '');
            if (name.length > 10) {
                name = name.substring(0, 10) + "..";
            }
            name += '.' + nameF[nameF.length - 1]
            return name;
        },
        changeInput(text) {
            if (text === 'name') {
                this.form[text] = this.form[text].replace(/[\d]+/ , '')
            }
            this.form[text] = this.form[text].replace(/\s{2,}/g, ' ');
        },
        onPickFile() {
            this.$refs.file.click()
        },
        async send() {
            let formData = new FormData();

            if (this.$refs.form.validate()) {
                for (let i in this.form) {
                    if (i === 'file'){
                        for(let j = 0; j<this.form.file.length; j++ ){
                            formData.append('files[]', this.form.file[j]);
                        }
                    } else{
                        formData.append(i,this.form[i])
                    }
                }
                await fetch(config.baseUrlApi + '/api/send', {
                    method: 'POST',
                    body: formData,
                })
                    .then(response => response.json())
                    .then((res) => {
                        if (res.status) {
                            this.success.bool = true;
                            this.success.step = 2;
                        }
                    })
            }
        },
        uploadFile() {
            this.fileError.error.maxFile = false;
            this.fileError.error.expansion = false;
            this.fileError.error.repeat = false;
            if (this.form.file.length + this.$refs.file.files.length > 3) {
                this.fileError.error.maxFile = true;
                this.fileError.message = 'The number of attachments should not exceed three.'
                return;
            }
            for (let i = 0; i < this.$refs.file.files.length; i++) {
                if (this.form.file.find(item => item.name === this.$refs.file.files[i].name)) {
                    this.fileError.message = 'You have uploaded a duplicate file.';
                    this.fileError.error.repeat = true;
                    return;
                }
            }

            let str = '/';
            let name = '';

            for (let i in this.enlargement) { // создание строки для регулярного выражения
                str += this.enlargement[i];
                if (Number(i) !== this.enlargement.length - 1) {
                    str += '|'
                } else {
                    str += '/'
                }
            }

            for (let i = 0; i < this.$refs.file.files.length; i++) {
                name = this.$refs.file.files[i].name.split('.')
                if (name[name.length - 1].match(str) == null) {
                    this.fileError.message = 'Unsupported file format';
                    this.fileError.error.expansion = true;
                    return;
                } else {
                    this.form.file.push(this.$refs.file.files[i])
                }
            }
            this.$refs.file.value = '';
        },
        unsetFile(id) {
            this.form.file.splice(id, 1)
            console.log(this.form.file)
        },
        screen(event) {
            if (this.success.step === 2) {
                if (event.target.className === 'btn' || event.target.className === '') {
                    return;
                }
                if (event.target.className !== 'model-container' || event.target.className !== 'img') {
                    this.success.bool = false;
                    this.success.step = 1;
                }
            }
        }
    }
}
</script>

<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 300px;
    display: flex;
    justify-content: center;
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}
.fileLoad {
    display: block;
}
.v-chip-item{
    width: 220px;
}
.file-error {
    width: 220px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    margin-top: 20px;
    padding: 0 0 5px 0;
    border-bottom: 3px #ff5252 solid;
    color: #ff5252;
}
.message-expansion {
    font-family: Montserrat;
    background: #FFFFFF;
    border: 3px solid #58A0A3;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 15px 30px;
    width: 220px;
    margin-top: 20px;
}
.inputs {
    display: flex;
    justify-content: center;
}

.input {
    width: 220px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
}

.send-policy {
    z-index: 1;
    display: flex;
    justify-content: center;
}

.btn {
    z-index: 100;
    width: 220px;
    background: #FFFFFF;
    border-radius: 10px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: #000000;
    padding: 9px 45px;
    margin-top: 30px;
}


</style>