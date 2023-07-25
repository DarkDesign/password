<template>
    <div class="wrapper">
        <Card style="width: 25em">
            <template #title> Password Generator </template>
            <template #subtitle> For the extra lazy. Allows you to make different passwords from one password :D </template>
            <template #content>

                <Password
                    class="password"
                    placeholder="Password"
                    v-model="text"
                    :feedback="false"
                    toggleMask/>

                <InputNumber
                    class="w-full mt-10"
                    placeholder="Iterations"
                    :min="0"
                    :max="100"
                    :disabled="text.length === 0"
                    v-model="numberOfCycles"
                    showButtons
                    buttonLayout="horizontal"
                    :step="1"/>

                <Slider
                    class="w-full mt-10"
                    :disabled="text.length === 0"
                    :min="0"
                    :max="100"
                    v-model="numberOfCycles"/>

                <div class="switch mt-10">
                    <InputSwitch v-model="isWildcards" /> Use special characters
                </div>

                <div class="p-inputgroup flex-1  mt-10">
                    <InputText :disabled="cryptoResult.length === 0" placeholder="Result" readonly :value="cryptoResult" />
                    <Button @click="copy(cryptoResult)" :disabled="cryptoResult.length === 0" icon="pi pi-copy" />
                </div>


            </template>
            <template #footer>
                <Button
                    :disabled="text.length === 0"
                    @click="onGenerate"
                    class="w-full"
                    label="Generate password"/>
            </template>
        </Card>
    </div>
    <Toast />
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Crypto } from './crypto/Crypto'

@Options({})
export default class App extends Vue {
    public modelValue = {
        text: '',
        numberOfCycles: 0,
        isWildcards: false
    }

    public cryptoResult = ''

    public get text(): string {
        return this.modelValue.text
    }

    public set text(value: string) {
        this.cryptoResult = ''
        this.modelValue.text = value
    }

    public get numberOfCycles(): number {
        return this.modelValue.numberOfCycles
    }

    public set numberOfCycles(value: number) {
        this.cryptoResult = ''
        this.modelValue.numberOfCycles = value
    }

    public get isWildcards(): boolean {
        return this.modelValue.isWildcards
    }

    public set isWildcards(value: boolean) {
        this.cryptoResult = ''
        this.modelValue.isWildcards = value
    }

    public onGenerate(): void {
        this.cryptoResult = new Crypto().createFromString(
            this.text,
            this.numberOfCycles,
            this.isWildcards
        )
    }

    public copy(text: string): void {
        if (document.execCommand) {
            const inp = document.createElement('input')
            inp.value = text
            document.body.appendChild(inp)
            inp.select()
            if (document.execCommand('copy')) {
                this.$toast.add({
                    severity: 'success',
                    summary: 'Success!',
                    detail: 'Saved to clipboard',
                    life: 3000
                });
            } else {
                this.$toast.add({
                    severity: 'error',
                    summary: 'Error!',
                    detail: 'Failed to save to clipboard',
                    life: 3000
                });
            }
            document.body.removeChild(inp)
            return
        }

        navigator.clipboard.writeText(text)
            .then(() => {
                this.$toast.add({
                    severity: 'success',
                    summary: 'Success!',
                    detail: 'Saved to clipboard',
                    life: 3000
                });
            })
            .catch(() => {
                this.$toast.add({
                        severity: 'error',
                        summary: 'Error!',
                        detail: 'Failed to save to clipboard',
                        life: 3000
                    });
                })
    }
}
</script>

<style lang="scss">
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .w-full {
        width: 100%;
    }
    .password {
        width: 100%;
        input  {
            width: 100%;
        }
    }
    .mt-10 {
        margin-top: 20px;
    }
    .switch {
        display: flex;
        align-items: center;
        height: 100%;
        gap: 10px
    }
}
</style>
