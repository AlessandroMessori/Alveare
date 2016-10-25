export const LinkModal = () => {
    return {
        restrict: "E",
        template: require("./linkModal.html"),
    };
};

export const linkModalCtrl = ($scope) => {

    $scope.addLink = (title, link) => {

        if (!title) {
            alert("compila tutti i campi");
        }
        else if (!link) {
            alert("aggiungi un link valido");
        }
        else {

            $scope.$parent.$parent.$parent.linkList.push({
                title,
                link
            });

            $scope.modal.remove();
        }

    };

    $scope.closeModal = ()=> {
        $scope.modal.remove();
    };

};

