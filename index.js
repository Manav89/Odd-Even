function chk() {
  let a = parseInt(document.getElementById("oe").value);

  if (a % 2 != 0) {
    document.getElementById("ids").innerHTML = a + " is odd.";
  } else {
    document.getElementById("ids").innerHTML = a + " is even.";
  }
}
