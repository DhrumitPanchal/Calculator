var result = document.getElementById("result");

      function AC() {
        result.value = "";
      }

      function DC() {
        result.value = result.value.toString().slice(0, -1);
      }

      function append(char) {
        result.value += char;
      }

      function equalto() {
        result.value = eval(result.value);
      }