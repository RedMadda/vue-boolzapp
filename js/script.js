const boolzApp = new Vue({
    el: "#vue-container",
    data:{
        contactVisible: 0,
        contacts: [
            {
                name: "Beatrice Rovazzi",
                photo: "https://cdn.pixabay.com/photo/2016/11/22/06/05/girl-1848454__340.jpg",
                
                messages: [
                    {
                        date: "29/06/2021",
                        text: "Ciao! Domani andiamo da Capuano's, verresti?",
                        status: "received"
                    },
                    {
                    date: "29/06/2021",
                     text: "Volentieri! C'è posto all'aperto?",
                     status: "sent"
                    },
                    {   date: "29/06/2021",
                        text: "Sì",
                        status: "received"
                    }
                ]
            },
            {
                name: "zio tobia",
                photo: "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457__340.jpg",
              
                messages: [
                    {
                        date: "00000",
                        text: "Ciao! Domani andiamo da Capuano's, verresti?",
                        status: "received"
                    },
                    {
                    date: "00000",
                     text: "Volentieri! C'è postall'aperto?",
                     status: "sent"
                    },
                    {   date: "20000001",
                        text: "Sì",
                        status: "received"
                    }
                ]
            }

        ]   

    },
    methods: {
        activingContact(index){
            this.contactVisible = index;
            console.log(this.contactVisible);
        }
        
    }
})