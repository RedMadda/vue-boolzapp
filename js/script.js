const boolzApp = new Vue({
    el: "#vue-container",
    data:{
        contactVisible: 0,
        mesSent: "",
        search: "",
        contacts: [
            {
                name: "Beatrice Rovazzi",
                photo: "https://cdn.pixabay.com/photo/2016/11/22/06/05/girl-1848454__340.jpg",
                visible: true,
                researchOk: false,
                profileVis: false,
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
                name: "Zio Tobia",
                photo: "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457__340.jpg",
                visible: false,
                researchOk:  false,
                profileVis: false,
                messages: [
                    {
                        date: "01/07/2021",
                        text: "Hai dato da mangiare al cane?",
                        status: "received"
                    },
                    {
                    date: "01/07/2021",
                     text: "No, vado adesso!",
                     status: "sent"
                    },
                    {   date: "01/07/2021",
                        text: "Non te ne dimenticare, eh.",
                        status: "received"
                    }
                ]
            },
            {
                name: "Maurizio Corona",
                photo: "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg",
                visible: false,
                researchOk:  false,
                profileVis: false,
                messages: [
                    {
                        date: "31/06/2021",
                        text: "Hey, come va?",
                        status: "sent"
                    },
                    {
                        date: "31/06/2021",
                        text: "Hey, bene grazie, tu?",
                        status: "received"
                    },
                    {
                        date: "31/06/2021",
                        text: "Solita! Birretta stase?",
                        status: "sent"
                    }
                ]
            },
            {
                name: "Margherita Rezzi",
                photo: "https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg",
                visible: false,
                researchOk:  false,
                profileVis: false,
                messages: [
                    {
                        date: "22/08/2021",
                        text: "Ciao! Domani vieni a calcetto?",
                        status: "received"
                    }
                    ,
                    {
                        date: "22/08/2021",
                        text: "Siamo via, torniamo a settembre!",
                        status: "sent"
                    },
                    {
                        date: "22/08/2021",
                        text: "Bello! Buone ferie, allora.",
                        status: "received"
                    }
                ]
            }

        ]   

    },
    methods: {
        activingContact(index){
            this.contactVisible = index;
            // console.log(this.contactVisible);
            this.contacts[index].visible = true;
            // console.log(this.contacts[index].visible);
        },
        

        addMes(){
           
             const newMess = {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                text: this.mesSent,
                status: "sent"
             };
            
             this.contacts[this.contactVisible].messages.push(newMess);
             this.mesSent = " ";
            

            setTimeout(() => {

                const mesBot = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: "ok",
                    status: 'received'
                }

                this.contacts[this.contactVisible].messages.push(mesBot);

            }, 1000);

           
        },
        
        lookInContacts(){
            this.contacts.forEach((el) => {el.researchOk = el.name.toLowerCase().includes(this.search.toLowerCase());return el.researchOk})
            
            console.log(this.search);
        }
        
    }
})
