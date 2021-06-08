<template>
    <div>
        <v-form ref="form" v-model="valid">
            <div>
                <div class="label">
                    <v-text-field
                        class="input"
                        maxlength="100"
                        :rules="rules.name"
                        label="Name*"
                        required
                        dark
                        v-model.trim="form.name"
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
                        required
                        @input="changeInput('phone')"
                    />
                </div>

                <div class="label">
                    <v-text-field
                        class="input"
                        :rules="rules.email"
                        label="Email*"
                        v-model.trim="form.email"
                        maxLength="50"
                        dark
                        required
                        @input="changeInput('email')"
                    />
                </div>

                <div class="label">
                    <v-textarea
                        class="textarea"
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
                </div>

                <div class="label">
                    <div style="">
                        <div>
                            <v-btn color="white" style="font-family: Montserrat;" @click="onPickFile"><b>upload file</b>
                            </v-btn>
                            <div class="fileLoad">
                                <v-chip
                                    v-for="(item,ind) in form.file"
                                    :key="ind"
                                    class="v-chip-item"
                                    close
                                    label
                                    style="font-family: Montserrat; height: 36px; background: #58A0A3; border-radius: 5px;"
                                    @click:close="unsetFile(ind)"
                                >
                                    {{ fileName(item.name) }}
                                </v-chip>
                            </div>
                        </div>
                    </div>
                    <input multiple type="file" style="display: none" ref="file" @change="uploadFile">
                    <div
                        v-show="fileError.error.expansion || fileError.error.maxFile || fileError.error.repeat"
                        class="file-error"
                    >
                        {{ fileError.message }}
                        <v-icon v-if="fileError.error.expansion" @mouseover="titleBtn(true)"
                                @mouseleave="titleBtn(false)" dense color="#ff5252">mdi-progress-question
                        </v-icon>
                    </div>
                    <div>
                        <transition name="prompt">
                            <div v-if="prompt" class="message-expansion">
                                Supported file formats:<br>
                                TAR, Z, ZIP, PPT, XLS,
                                DOC, DOCX, PDF, TXT, BMP,
                                GIF, JPG, JPEG, PNG, TIF
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
            <div class="row send-policy">
                <div class="col-4 send-policy-col-1">
                    <button class="btn" type="button" @click="send"><b>SUBMIT</b></button>
                </div>
                <div class="col">
                    <span class="privat-policy-span">
                        Sending your data you agree to our terms <br>
                        and conditions:
                        <a href="/private-policy" target="_blank" class="privat-policy-a">Our Privacy Policy</a>
                    </span>
                </div>
            </div>
        </v-form>
    </div>

</template>

<script>
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
        titleBtn(bool) {
            this.prompt = bool;
        },
        fileName(name) {
            let nameF = name.split('.')
            name = '';
            for (let i = 0; i < nameF.length - 1; i++) {
                name += nameF[i]
            }
            name = name.replace(/\s+/g, '');
            if (name.length > 6) {
                name = name.substring(0, 6) + "..";
            }
            name += '.' + nameF[nameF.length - 1]
            return name;
        },
        changeInput(text) {
            this.form[text] = this.form[text].replace(/\s{2,}/g, ' ');
        },
        onPickFile() {
            this.$refs.file.click()
        },
        async send() {
            let formData = new FormData();
            this.$emit('screen',{bool: true,step: 2})
            // if (this.$refs.form.validate()) {
            //     for (let i in this.form) {
            //         if (i === 'file'){
            //             for(let j = 0; j<this.form.file.length; j++ ){
            //                 formData.append('files[]', this.form.file[j]);
            //             }
            //         } else{
            //             formData.append(i,this.form[i])
            //         }
            //     }
            //     await fetch('http://' + config.baseUrlApi + '/send/create', {
            //         method: 'POST',
            //         body: formData,
            //     })
            //         .then(response => response.json())
            //         .then((res) => {
            //             console.log(res)
            //             if (res.success) {
            //                 this.success.bool = true;
            //                 this.success.step = 2;
            //             }
            //         })
            // }
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
        // screen(event) {
        //     if (this.success.step === 2) {
        //         if (event.target.className === 'btn' || event.target.className === '') {
        //             return;
        //         }
        //         if (event.target.className !== 'model-container' || event.target.className !== 'img') {
        //             this.$emit('screen',false,1)
        //             this.success.bool = false;
        //             this.success.step = 1;
        //         }
        //     }
        // }
    }
}
</script>

<style scoped>
@media screen and (min-width: 1420px) and (max-width: 1660px) {
    .file-error {
        width: 42.2vw !important;
    }
}

@media screen and (min-width: 1660px) and (max-width: 1900px) {
    .file-error {
        width: 36vw !important;
    }
}

.v-chip-item:nth-child(1) {
    margin-left: 0;
}

.v-chip-item {
    margin-left: 10px;
}

.input {
    width: 600px;
    height: 50px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
}

.label:nth-child(1) {
    margin-top: 0;
}

.label {
    margin-top: 35px;
}

.textarea {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    width: 600px;
}

.file-error {
    width: 31.5vw;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    margin-top: 20px;
    padding: 0 0 5px 0;
    border-bottom: 3px #ff5252 solid;
    color: #ff5252;
}

.fileLoad {
    display: inline-block;
    margin: 0 0 0 10px;
}

.prompt-enter-active, .prompt-leave-active {
    transition: opacity .5s;
}

.prompt-enter, .prompt-leave-to /* .fade-leave-active до версии 2.1.8 */
{
    opacity: 0;
}

.message-expansion {
    z-index: 1;
    position: absolute;
    display: inline-block;
    font-family: Montserrat;
    background: #FFFFFF;
    border: 3px solid #58A0A3;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 15px 30px;
    width: 350px;
    margin-top: 20px;
}

.btn {
    width: 180px;
    height: 55px;
    background: #FFFFFF;
    box-shadow: 6px 8px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    border: none;
    color: #000000;
}

.btn:hover {
    border: none;
    background: rgba(88, 160, 163, 0.53);
    box-shadow: inset 4px 5px 8px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
}

.btn:active {
    border: none;
    background: rgba(88, 160, 163, 0.76);
    box-shadow: inset -3px -3px 8px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
}

.send-policy {
    margin-top: 35px;
    margin-left: -15px;
}

.privat-policy-span {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.02em;

    color: #FFFFFF;
}

.send-policy-col-1 {
    margin-right: -15px;
}

.privat-policy-a {
    text-decoration: none;
    color: #58a0a3 !important;
    cursor: pointer;
}

.privat-policy-a:hover {
    color: #5b5b5b !important;
}

.modal-mask {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 120vw;
    height: 120vh;
    background-color: rgba(254, 254, 254, 0.53);;
    transition: 0.3s;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    display: flex;
    justify-content: center;
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

</style>