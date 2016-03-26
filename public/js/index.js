/* global angular */
var eppingList = angular.module('root', [])
eppingList.controller('index', ['$scope', function ($scope) {
  $scope.list = []
  $scope.num = []
  $scope.discountBook = 0
  $scope.sell = 0
  $scope.gett = function () {
    var t = 0
    for (var i = 0; i < $scope.list.length; i++) {
      t += ($scope.list[i].num * 100)
    }
    return t
  }

  $scope.remove = function (item) {
    var index = $scope.list.indexOf(item)
    $scope.list.splice(index, 1)
    var numproduct = []
    for (var i = 0; i < $scope.list.length; i++) {
      if (typeof $scope.list[i].num !== 'undefined') {
        numproduct.push($scope.list[i].num)
      }
      $scope.num = numproduct
    }
    $scope.getDisc($scope.num)
  }

  $scope.clear = function (list) {
    var length = list.length
    list.splice(0, length)
  }
  $scope.add = function (ep, name) {
    if (check($scope.list, ep)) {
      var index = findbook($scope.list, ep)
      $scope.list[index].num += 1
    } else {
      var data = {
        ep: ep,
        name: name,
        num: 1
      }
      $scope.list.push(data)
    }

    $scope.list.sort(function (a, b) {
      if (a.num > b.num) {
        return -1
      }
      if (a.num < b.num) {
        return 1
      }
      return 0
    })

    var numproduct = []
    for (var i = 0; i < $scope.list.length; i++) {
      if (typeof $scope.list[i].num !== 'undefined') {
        numproduct.push($scope.list[i].num)
      }
      $scope.num = numproduct
    }
    $scope.getDisc($scope.num)
  }
  var check = function (list, ep) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].ep === ep) {
        return true
      }
    }
  }
  var findbook = function (list, ep) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].ep === ep) {
        return i
      }
    }
  }
  $scope.getDisc = function (num) {
    $scope.sell = 0
    var countlist = 0
    var exit = 0
    console.log(num)
    do {
      for (var i = 0; i < num.length; i++) {
        if (num[i] !== 0) {
          countlist += 1
        }
        if (num[i] === 0) {
          countlist += 0
          break
        }
      }
      if (countlist === 1) {
        console.log('1')
      } if (countlist === 2) {
        $scope.sell += ((countlist * 100) * 0.1)
        console.log('2')
      } else if (countlist === 3) {
        $scope.sell += ((countlist * 100) * 0.2)
        console.log('3')
      } else if (countlist === 4) {
        $scope.sell += ((countlist * 100) * 0.3)
        console.log('4')
      } else if (countlist === 5) {
        $scope.sell += ((countlist * 100) * 0.4)
        console.log('5')
      } else if (countlist === 6) {
        $scope.sell += ((countlist * 100) * 0.5)
        console.log('6')
      } else if (countlist === 7) {
        $scope.sell += ((countlist * 100) * 0.6)
        console.log('7')
      } else if (countlist === 0) {
        exit = 1
        console.log('exit')
      }
      for (var o = 0; o < num.length; o++) {
        if (num[o] > 0) {
          num[o] -= 1
          countlist = 0
        }
      }
    } while (exit !== 1)

    console.log($scope.sell)
  }
}])
