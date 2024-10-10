var studentList = [];

    function addStudent(studName) {
      studentList.push(studName);
    }

    function displayList() {
      console.log(studentList);
    }

    function remove(studentList, studName) {
      var index = studentList.indexOf(studName);
      if (index > -1) {
        studentList.splice(index, 1);
        console.log("Student removed from the list.");
      } else {
        console.log("Student name not found in the list.");
      }
      return studentList;
    }

    var start = prompt("Do you want to continue to the web roster app? (yes/no)");

    if (start === "yes") {
      while (true) {
        var action = prompt("Please select an action to perform: add, remove, display, quit");

        if (action === "add") {
          var studName = prompt("Enter the name you want to add:");
          addStudent(studName);

        } else if (action === "display") {
          displayList();

        } else if (action === "remove") {
          var studName = prompt("Enter the name you want to remove:");
          remove(studentList, studName);

        } else if (action === "quit") {
          alert("Thanks for using the web roster app.");
          break;
        } else {
          alert("Enter a valid action (add, remove, display, or quit).");
        }
      }
    } else if (start === "no") {
      alert("User does not want to use the web roster app!");
    } else {
      alert("Enter a valid input: 'yes' or 'no'.");
    }