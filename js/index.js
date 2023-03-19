//<script>
  const searchIcon = document.querySelector('.search-icon');
  const form = document.querySelector('form');
  
  searchIcon.addEventListener('click', (event) => {
    event.preventDefault();
    form.submit();
  });
//</script>

//<!-- Login form behavior -->
//<script>
$(document).ready(function() {
    $("#userType").change(function() {
        var selectedOption = $(this).children("option:selected").val();
        if (selectedOption === "customer") {
            $("#userID").replaceWith('<input type="email" class="form-control" id="email" placeholder="Email">');
            $("#passwordInput").html('<label for="password">Password</label><input type="password" class="form-control" id="password" placeholder="Password">');
        } else {
            $("#userID").replaceWith('<input type="text" class="form-control" id="userID" placeholder="User ID">');
            $("#passwordInput").html('<label for="password">Password</label><input type="password" class="form-control" id="password" placeholder="Password">');
        }
    });
});
//</script>
