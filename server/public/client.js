
let foodApp = angular.module('FoodApp', [])

foodApp.controller('FoodController', function() {
    let self = this;
    self.food  = [
        { name:'burrito', deliciousness: 75 }
    ];
    
    self.input = '';
    self.click = function() {
        console.log(self.food);
        self.food.push (self.input);
    }
    
    })