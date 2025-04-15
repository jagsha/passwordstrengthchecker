<!DOCTYPE html>
<html>
<head>
  <title>Password Strength Checker</title>
  <style>
    body { font-family: Arial; padding: 20px; background: #1e004d; color: #fff; }
    input { padding: 10px; width: 300px; }
    .strength { font-weight: bold; margin-top: 10px; }
  </style>
</head>
<body>

  <h2>Password Complexity Checker</h2>
  <input type="password" id="password" placeholder="Enter password" onkeyup="checkStrength()" />
  <div class="strength" id="strengthMessage"></div>

  <script>
    function checkStrength() {
      const password = document.getElementById("password").value;
      const message = document.getElementById("strengthMessage");

      let strength = 0;
      if (password.length >= 8) strength++;
      if (/[A-Z]/.test(password)) strength++;
      if (/[a-z]/.test(password)) strength++;
      if (/[0-9]/.test(password)) strength++;
      if (/[^A-Za-z0-9]/.test(password)) strength++;

      const strengths = ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"];
      message.textContent = `Strength: ${strengths[strength - 1] || "Too short"}`;
      message.style.color = ["red", "orange", "gold", "lime", "lightgreen"][strength - 1] || "gray";
    }
  </script>

</body>
</html>
