
        function getValue() {
            var a, b, c, D, x1, x2, n;

         a = document.getElementById("Factor_A").value;
         b = document.getElementById("Factor_B").value;
         c = document.getElementById("Factor_C").value;

            D = b * b - 4 * a * c;
            document.getElementById("Dis").innerHTML = D;

            if (a == 0) {
               document.getElementById("Conclusion").innerHTML = "this is not a Quadratic Equation, enter Factor A at least";

            }
            else if (D < 0) {
                document.getElementById("Conclusion").innerHTML = "equation has no solution";
                document.getElementById("X1").innerHTML = (-b + Math.sqrt(D)) / 2 / a;
                document.getElementById("X2").innerHTML = (-b - Math.sqrt(D)) / 2 / a;

            }

            else if (D == 0) {
                document.getElementById("Conclusion").innerHTML = "equation has one solution";
                document.getElementById("X1").innerHTML = (-b + Math.sqrt(D)) / 2 / a;
                document.getElementById("X2").innerHTML = (-b - Math.sqrt(D)) / 2 / a;
            }
            else if (D > 0) {
                document.getElementById("Conclusion").innerHTML = "equation has two solutions";
                document.getElementById("X1").innerHTML = (-b + Math.sqrt(D)) / 2 / a;
                document.getElementById("X2").innerHTML = (-b - Math.sqrt(D)) / 2 / a;
            }





        }