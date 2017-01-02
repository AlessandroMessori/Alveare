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
            }
        ];

        this.conventions = [
            {
                name: "Tosi Dischi",
                address: "via a caso 1",
                description: ["10% di sconto su CD nuovi"],
                img: require("../../../../Images/Conventions/con1.jpeg")
            },
            {
                name: "Armandos",
                address: "via cicciona 10",
                description: ["Doppia timbro su ogni nuova tessera"],
                img: require("../../../../Images/Conventions/con2.jpeg")

            },
            {
                name: "A Riccione",
                address: "via adjflkdfslkfd",
                description: [
                    "Piada con salume a scelta + mozzarella o fontina = 5€",
                    "Piada con 2 ingredienti + lattina da 1€ = 6€"
                ],
                img: require("../../../../Images/Conventions/con3.jpeg")
            },
            {
                name: "Re Vegano",
                address: "via  di fronte allo spalla",
                description: [
                    "Panino/Piadina + acqua = 5.50€",
                    "Panino/Piadina + bibita/estratto di frutta = 7€",
                    "Trancio di pizza + erbazzone + acqua = 3.5€",
                    "Panino + pizza + estratto di frutta = 9€",
                ],
                img: require("../../../../Images/Conventions/con4.jpeg")
            },
            {
                name: "Mister Pizza",
                address: "via rossi 5",
                description: [
                    "Sconto del 10% su tutti i prodotti",
                    "Tessera Raccolta Punti",
                    "Sconti su prodotti selezionati"
                ],
                img: require("../../../../Images/Conventions/con5.jpeg")
            },
            {
                name: "Fritti Mistici",
                address: "via per Modena 6",
                description: [
                    "Menu Pizza(panzerotto + montanara + bibita) = 5€",
                    "Menu Pollo(pollo 2pz/bocconcici 3pz + bibita) = 5€",
                    "Menu Mix(pollo 2pz/bocconcini 3pz +panzerotto/montanara + arancino + bibita) = 8€",
                    "Sconto del 10% su una spesa di 10€(a persona)"
                ],
                img: require("../../../../Images/Conventions/con8.png")
            },
            {
                name: "Cartoleria Rossi",
                address: "via a caso 154",
                description: ["Sconto del 15% su tutti i prodotti di cancelleria"],
                img: require("../../../../Images/Conventions/con10.png")
            }
        ];
    }

}

export default StaticData;