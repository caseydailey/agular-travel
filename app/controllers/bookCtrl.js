"use strict";

app.controller("bookCtrl", function($scope, guideFactory){

    const vm = $scope;

    const showGuides = function(){
        guideFactory.getGuides()
            .then(data => {
                console.log("data in ctrl", data);
                vm.books = data;
            });
    };


    showGuides();

});