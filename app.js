var data = [
  {
    "name": "Test	Task #1",
    "date": "12/01/2012",
    "assigned": "John	Doe"
  },
  {
    "name": "Test	Task #2",
    "date": "12/02/2012",
    "assigned": "John	Doe"
  },
  {
    "name": "Test	Task #3",
    "date": "12/03/2012",
    "assigned": "John	Doe"
  },
  {
    "name": "Test	Task #4",
    "date": "12/04/2012",
    "assigned": "John	Doe"
  },
  {
    "name": "Test	Task #5",
    "date": "12/05/2012",
    "assigned": "John	Doe"
  },
  {
    "name": "Test	Task #6",
    "date": "12/06/2012",
    "assigned": "John Doe"
  },
  {
    "name": "Test	Task #7",
    "date": "12/07/2012",
    "assigned": "John	Doe"
  }
];

function displayTable() {
  for (i = 0; i < data.length; i++) {
    $('tbody').append("<tr><td><b>" + data[i].name + "</b></td><td> " + data[i].date + "</td><td><span class='slideRight'>" + data[i].assigned + "</span></td></tr>");
  }
}

$("#submit").click(function () {
  //To check if the values exist.
  if ($("#name").val() && $("#date").val() && $("#assignedTo").val()) {
    var valid = new RegExp(/^[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/);
    // To validate input date 
    if (valid.exec($("#date").val())) {
      const obj = {
        "name": $("#name").val(),
        "date": $("#date").val(),
        "assigned": $("#assignedTo").val()
      }
      data.unshift(obj);
  
      $('tbody').empty();
      $("#name").val("");
      $("#date").val("");
      $("#assignedTo").val("");
      displayTable();
    }
    else {
      alert("Invalid date format.\nDate must be mm/dd/yyyy")
    }
  }
  else {
    if (!$("#assignedTo").val() && !$("#date").val() && (!$("#name").val())) {
      alert("Form can't be empty");
    }
    // if (!$("#assignedTo").val()) {
    //   $("#assignedTo").focus();
    // }
    // if (!$("#date").val()) {
    //   $("#date").focus();
    // }
    // if (!$("#name").val()) {
    //   $("#name").focus();
    // }
  }
})
$("document").ready(function () {
  displayTable();
})