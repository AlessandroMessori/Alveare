export const drawerCtrl = ($element, $attr, $ionicGesture, $document) => {

    this.el = $element[0];
    this.dragging = false;
    this.startX, lastX, offsetX, newX;
    this.side = $attr.side == "left" ? LEFT : RIGHT;
    this.thresholdX = 0; // How far to drag before triggering
    this.edgeX = 0; // How far from edge before triggering
    this.LEFT = 0;
    this.RIGHT = 1;
    this.isTargetDrag = false;
    this.width = $element[0].clientWidth;

    this.enableAnimation = () => $element.addClass("animate");

    this.disableAnimation = () => $element.removeClass("animate");

    // Check if this is on target or not
    this.isTarget = (el) => {
        while (el) {
            if (el === $element[0]) {
                return true;
            }
            el = el.parentNode;
        }
    };

    this.startDrag = () => {
        this.disableAnimation();

        this.dragging = true;
        this.offsetX = this.lastX - this.startX;
    };

    this.startTargetDrag = () => {
        this.disableAnimation();

        this.dragging = true;
        this.isTargetDrag = true;
        this.offsetX = this.lastX - this.startX;
    };

    this.doEndDrag = () => {
        this.startX = null;
        this.lastX = null;
        this.offsetX = null;
        this.isTargetDrag = false;

        if (!this.dragging) {
            return;
        }

        this.dragging = false;

        this.enableAnimation();

        ionic.requestAnimationFrame(()=> {
            if (newX < (-width / 2)) {
                el.style.transform = el.style.webkitTransform = "translate3d(" + -width + "px, 0, 0)";
            } else {
                el.style.transform = el.style.webkitTransform = "translate3d(0px, 0, 0)";
            }
        });
    };

    this.doDrag = (e) => {
        if (e.defaultPrevented) {
            return;
        }

        if (!this.lastX) {
            this.startX = e.gesture.touches[0].pageX;
        }

        this.lastX = e.gesture.touches[0].pageX;

        if (!this.dragging) {

            // Dragged 15 pixels and finger is by edge
            if (Math.abs(lastX - startX) > thresholdX) {
                if (isTarget(e.target)) {
                    startTargetDrag(e);
                } else if (startX < edgeX) {
                    startDrag(e);
                }
            }
        } else {
            newX = Math.min(0, (-width + (lastX - offsetX)));
            ionic.requestAnimationFrame(() => {
                el.style.transform = el.style.webkitTransform = "translate3d(" + newX + "px, 0, 0)";
            });

        }

        if (dragging) {
            e.gesture.srcEvent.preventDefault();
        }
    };

    this.close = () => {
        enableAnimation();
        ionic.requestAnimationFrame(() => {
            if (side === LEFT) {
                el.style.transform = el.style.webkitTransform = "translate3d(-100%, 0, 0)";
            } else {
                el.style.transform = el.style.webkitTransform = "translate3d(100%, 0, 0)";
            }
        });
    };

    this.open = () => {
        enableAnimation();
        ionic.requestAnimationFrame(() => {
            if (side === LEFT) {
                el.style.transform = el.style.webkitTransform = "translate3d(0%, 0, 0)";
            } else {
                el.style.transform = el.style.webkitTransform = "translate3d(0%, 0, 0)";
            }
        });
    };

    $ionicGesture.on("drag", (e) => this.doDrag(e), $document);

    $ionicGesture.on("dragend", (e) => this.doEndDrag(e), $document);
};

export const drawer = () => {
    return {
        restrict: "E",
        controller: drawerCtrl,
        link: ($scope, $element, $attr, ctrl) => {
            $element.addClass($attr.side);
            $scope.openDrawer = () => {
                ctrl.open();
            };
            $scope.closeDrawer = () => {
                ctrl.close();
            };
        }
    };
};

export const drawerClose = () => {
    return {
        restrict: "A",
        link: ($scope, $element) => {
            $element.bind("click", () => {
                var drawerCtrl = $element.inheritedData("$drawerController");
                drawerCtrl.close();
            });
        }
    };
};