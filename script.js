function getFormvalue(event) {
  event.preventDefault();
  const form = document.forms[0];
  const fname = form.fname.value.trim();
  const lname = form.lname.value.trim();
  alert(fname + " " + lname);
}
