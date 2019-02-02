function clearValues() {
  $("#name").val("");
  $("#q1").val("");
  $("#q2").val("");
  $("#q3").val("");
  $("#q4").val("");
  $("#q5").val("");
}

clearValues();

$("#submitBtn").on("click", function(event) {
  event.preventDefault();
  var newTrainer = {
    name: $("#name")
      .val()
      .trim(),
    answers: [
      $("#q1").val(),
      $("#q2").val(),
      $("#q3").val(),
      $("#q4").val(),
      $("#q5").val()
    ]
  };

  if ($("#name").val() !== "" && newTrainer.answers.indexOf(null) == "-1") {
    $.post("/api/trainers", newTrainer, function(data) {
      Swal.fire({
        title: "Your PokéMatch is " + data.name + "!",
        text: data.description,
        imageUrl: data.photo,
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "PokeMatch Reveal Picture",
        animation: false
      });
      clearValues();
    });
  } else {
    Swal.fire({
      type: "error",
      title: "Oops...",
      text: "Please fill in all the required fields."
    });
  }
});
