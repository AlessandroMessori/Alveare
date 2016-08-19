var linkCtrl = function ($scope, $window) {

    $scope.OpenLink = function (url) {
        cordova.InAppBrowser.open(url, '_system', 'location=yes');
    };

    $scope.Links = [
        {
            "name": "Registro Elettronico",
            "url": "https://spallanzani-re-sito.registroelettronico.com/login/?next=/select-student/",
            "icon": "icon ion-ios-book-outline"
        },
        {
            "name": "Quaderno Elettronico",
            "url": "http://2.229.79.199/quaderno/index.php",
            "icon": "icon ion-ios-book"
        },
        {
            "name": "Sito Web Della Scuola",
            "url": "http://www.liceoariostospallanzani-re.gov.it/",
            "icon": "icon ion-ios-world"
        }
    ];

};

module.exports = linkCtrl;