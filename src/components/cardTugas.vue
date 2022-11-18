<template>
    <v-main>
        <v-container style="height:max-content; width:max-content">
            <div v-for="(item, index) in merchandises" :style="{backgroundColor: randomColor(item)}" :class="merchandises[index]" style="padding:10px; margin: 5px;">
                    {{item.artist}} {{item.merchandise}}
            </div>
        </v-container>
    </v-main>
</template>

<script>
import { db } from "../firebase";
import { ref, set, remove, get, push, onValue } from '@firebase/database';

export default {
    name: "MerchandisePage",
    data () {
        return {
            load: false,
            search: '',
            filter: '',
            snackbar: false,
            error_message: '',
            color: '',
            headers: [
                {text: "Merchandies Name", value: "merchandise"},
                {text: "Artist Name", value: "artist"},
                {text: "Price", value: "price"},
                {text: "Stock", value: "stock"},
                {text: "Packaging", value: "package"},
                {text: "", value: "actions"},
            ],
            type:[
                'Hot',
                'Cool',
                'Cold',
            ],
            inputRules: [
                (v) => !!v || 'Must be filled!',
            ],
            merchandise : new FormData,
            merchandises: [],
            dialog: false,
            dialogConfirm: false,
            form: {
                merchandise: '',
                artist: '',
                price: '',
                stock: '',
                package: ''
            },
            formType: 0,
            selectedId: '',
            colorCache: {},
        }
    },

    created() {
        onValue(ref(db, 'merchandises'), (snapshot) => {
            this.merchandises = [],
            snapshot.forEach((merchandise) => {
                this.merchandises.push({
                    id: merchandise.key,
                    merchandise: merchandise.val().merchandise,
                    artist: merchandise.val().artist,
                    price: merchandise.val().price,
                    stock: merchandise.val().stock,
                    package: merchandise.val().package
                });
            })
        })
    },

    methods: {
        randomColor(item) {
            const r = () => Math.floor(256 * Math.random());
            return this.colorCache[item.id] || (this.colorCache[item.id] = `rgb(${r()}, ${r()}, ${r()})`);
        }
    },
}
</script>