app.controller('sortController', function($scope) { alert("hi");
      $scope.test= "test";
      $scope.swap = function(num1, num2) {
        var temp = num1;
        num1=num2;
        num2=num1;
        return [num1, num2];
      }

      $scope.selectionSort = function() { alert("sort");
        var Arr = $scope.values;
        var mn = 0;
        var len = Arr.length;
        for(var i =0;i<len-1;i++){
          mn=i;
          for(var j=i+1;j<len;j++){
            if(Arr[j] < Arr[mn])
              mn=j;
          }
          [Arr[i], Arr[mn]]= $scope.swap(Arr[i], Arr[mn]);
        }
      }
  }
});
