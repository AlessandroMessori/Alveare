class StaticData {
    constructor($state, $rootScope) {

        this.subjects = [
            {
                name: "Italiano",
                value: false
            }, {
                name: "Francese",
                value: false
            },
            {
                name: "Inglese",
                value: false
            },
            {
                name: "Tedesco",
                value: false
            },
            {
                name: "Latino",
                value: false
            },
            {
                name: "Matematica",
                value: false
            },
            {
                name: "Fisica",
                value: false
            },
            {
                name: "Scienze",
                value: false
            },
            {
                name: "Informatica",
                value: false
            },
            {
                name: "Storia",
                value: false
            },
            {
                name: "Filosofia",
                value: false
            },
            {
                name: "Arte",
                value: false
            },
            {
                name: "Diritto",
                value: false
            }
        ];

        this.adminLinks = [

            {
                "name": "Scrivi Articolo del Giornalino",
                "url": "addArticle",
                "icon": "icon ion-ios-paper",
                "direct": function () {
                    $state.go(this.url);
                    $rootScope.contentType = "Giornalino";
                }
            },
            {
                "name": "Scrivi Post d'orientamento",
                "url": "sendMessage",
                "icon": "icon ion-ios-navigate",
                "direct": function () {
                    $state.go(this.url);
                    $rootScope.contentType = "Orientamento";
                }
            },
            {
                "name": "Scrivi Avviso",
                "icon": "icon ion-ios-bell",
                "url": "sendMessage",
                "direct": function () {
                    $state.go(this.url);
                    $rootScope.contentType = "Comunicazioni";
                }
            },
            {
                "name": "Modera Commenti",
                "url": "moderation",
                "icon": "icon ion-ios-trash",
                "direct": function () {
                    $state.go(this.url);
                }
            },
            {
                "name": "Modera Post",
                "url": "deletePosts",
                "icon": "ion-close-circled",
                "direct": function () {
                    $state.go(this.url);
                }
            },
            {
                "name": "Leggi Segnalazioni",
                "url": "readReports",
                "icon": "ion-email-unread",
                "direct": function () {
                    $state.go(this.url);
                }
            }
        ];

        this.links = [
            {
                "name": "Registro Elettronico",
                "url": "https://spallanzani-re-sito.registroelettronico.com/login/?next=/select-student/",
                "icon": "icon ion-ios-book-outline"
            },
            {
                "name": "Quaderno Elettronico",
                "url": "https://ariostospallanzani-re.registroelettronico.com/quaderno/",
                "icon": "icon ion-ios-book"
            },
            {
                "name": "Sito Web Della Scuola",
                "url": "http://www.liceoariostospallanzani-re.gov.it/",
                "icon": "icon ion-ios-world"
            },
            {
                "name": "Accesso Web Mail",
                "url": "https://mail.google.com",
                "icon": "icon ion-ios-email"
            }
        ];

        this.conventions = [
            {
                name: "Tosi Dischi",
                address: "via a caso 1",
                description: "Sconto del 5% su tutti i prodotti",
                img: require("../../../../Images/Conventions/con1.jpeg")
            },
            {
                name: "Armandos",
                address: "via cicciona 10",
                description: "Sconto del 10% su tutti i prodotti",
                img: require("../../../../Images/Conventions/con2.jpeg")

            },
            {
                name: "A Riccione",
                address: "via adjflkdfslkfd",
                description: "Sconto del 5% sulle pizze",
                img: require("../../../../Images/Conventions/con3.jpeg")
            },
            {
                name: "Re Vegano",
                address: "via  di fronte allo spalla",
                description: "La seconda Pasta è gratis",
                img: require("../../../../Images/Conventions/con4.jpeg")

            },
            {
                name: "Mister Pizza",
                address: "via rossi 5",
                description: "Sconto del 5% sulle torte",
                img: require("../../../../Images/Conventions/con5.jpeg")
            },
            {
                name: "Fior di Latte",
                address: "via einstein 10",
                description: "Sconto del 5%",
                img: require("../../../../Images/Conventions/con6.png")
            },
            {
                name: "Forno Panciroli",
                address: "via a caso 197",
                description: "Sconto del 5% sul Gnocco",
                img: require("../../../../Images/Conventions/con7.png")
            },
            {
                name: "Fritti Mistici",
                address: "via per Modena 6",
                description: "Granite Gratis per tutti",
                img: require("../../../../Images/Conventions/con8.png")
            },
            {
                name: "Baguetteria Pullo",
                address: "via senza nome",
                description: "Sconto a caso",
                img: require("../../../../Images/Conventions/con9.png")
            },
            {
                name: "Cartoleria Rossi",
                address: "via a caso 154",
                description: "Sconto del 20% su tutto",
                img: require("../../../../Images/Conventions/con10.png")
            }
        ];
    }

}

export default StaticData;