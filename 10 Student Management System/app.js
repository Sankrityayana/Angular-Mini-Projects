var app = angular.module('studentApp', []);

app.controller('StudentController', function($scope) {
    // Sample student data
    $scope.students = [
        { name: "John Doe", rollNo: "101", email: "john@example.com" },
        { name: "Jane Smith", rollNo: "102", email: "jane@example.com" }
    ];

    // Initial student object for the modal
    $scope.student = { name: "", rollNo: "", email: "" };
    $scope.modalTitle = "Add Student";
    $scope.modalAction = "Add";

    // Open Add Student Form
    $scope.openAddForm = function() {
        $scope.student = { name: "", rollNo: "", email: "" };
        $scope.modalTitle = "Add Student";
        $scope.modalAction = "Add";
    };

    // Open Edit Student Form
    $scope.openEditForm = function(student) {
        $scope.student = angular.copy(student); // Ensure we're working with a copy of the object
        $scope.modalTitle = "Edit Student";
        $scope.modalAction = "Save";
    };

    // Save (Add/Edit) Student
    $scope.saveStudent = function() {
        if ($scope.modalAction === "Add") {
            // Add new student
            $scope.students.push(angular.copy($scope.student));
        } else if ($scope.modalAction === "Save") {
            // Update existing student
            var index = $scope.students.findIndex(s => s.rollNo === $scope.student.rollNo);
            if (index !== -1) {
                $scope.students[index] = angular.copy($scope.student);
            }
        }
        // Reset student form and close modal
        $scope.student = { name: "", rollNo: "", email: "" };
        $('#studentModal').modal('hide');
    };

    // Delete Student
    $scope.deleteStudent = function(student) {
        var index = $scope.students.indexOf(student);
        if (index !== -1) {
            $scope.students.splice(index, 1);
        }
    };
});
