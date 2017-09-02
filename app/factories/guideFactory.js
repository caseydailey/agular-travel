"use strict";

app.factory("guideFactory", function($q, $http){

    const getGuides = function(){
        return $q((resolve, reject)=>{
            $http.get('../../data/guides.json')
                .then(data => resolve(data.data.guides));
        });
    }

    return {getGuides};
})