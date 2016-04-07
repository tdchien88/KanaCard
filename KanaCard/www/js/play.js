// This is a JavaScript file
var app = angular.module('kanaCardApp', []);
app.controller('FirstCtrl', function ($scope) {
    $scope.question = "あ";
    $scope.ans1 = "X";
    $scope.ans2 = "A";
    $scope.ans3 = "I";
    $scope.ans4 = "U";
    var goals = "";
    var list = [];
    var cur = 0;

    $scope.init = function () {
        getList();
    };

    function getList() {
        $.ajax({
            type: 'GET',
            url: "http://192.168.1.63:3000/api/players",
            async: false,
            dataType: 'json',
            success: function (json) {
                $scope.question = json[0].quest;
                $scope.ans1 = json[0].ans1;
                $scope.ans2 = json[0].ans2;
                $scope.ans3 = json[0].ans3;
                $scope.ans4 = json[0].ans4;
                goals = json[0].goals;
                list = json;
            }
        });
    }
    

    function nextQuestion() {
        incorrectCount = 0;
        $scope.question = list[cur].quest;
        $scope.ans1 = list[cur].ans1;
        $scope.ans2 = list[cur].ans2;
        $scope.ans3 = list[cur].ans3;
        $scope.ans4 = list[cur].ans4;
        $scope.goals = "";
        goals = list[cur].goals;

        cur += 1;
        if (cur >= list.length) {
            getList();
            cur = 0;
        }
    }

    $scope.clickQ = function () {
        nextQuestion();
    }

    var incorrectCount = 0;
    function check(ans) {
        if (ans == goals) {
            $scope.goals = "CORRECT !!!";
            nextQuestion();
        } else {
            incorrectCount += 1;
            if (incorrectCount >= 3) {
                $scope.goals = "I am a CHICKEN !!! (" + goals + ")";
            } else {
                $scope.goals = "I am a CHICKEN !!! (" + incorrectCount + ")";
            }
        }
    }

    $scope.click1 = function () {
        check($scope.ans1);
    }

    $scope.click2 = function () {
        check($scope.ans2);
    }
    $scope.click3 = function () {
        check($scope.ans3);
    }
    $scope.click4 = function () {
        check($scope.ans4);
    }
});



