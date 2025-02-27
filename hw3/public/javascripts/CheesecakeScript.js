// java script stuff
// Author: Rowena Archer
    $(document).ready(function(){
        

        //script for order button
        $(":button").click(function(){
            // record values from input
            let notesText = $("#notes").val();
            let quant = $("#Quantity").val();
            let topping = $('input[name="topping"]:checked').val();
            
            // send alert if user inputs vegan
            if (notesText.includes("vegan") || notesText.includes("Vegan")){
                alert("Our cheesecakes contain dairy and are not vegan.")
            }
            else { // process order, reiterate order
            $(".Order").hide();
            $("#Change").replaceWith("Thank you! Your order has been placed. Quantity: " + quant + ", Toppings: " + topping + ", Additional notes: " + notesText)
            }
        });

        // script for  month dropdown menu
        $("#menu-options a").click(function(event) {
            event.preventDefault();
            var selection = $(this).text(); // Get the selected option text

            // Update the button text
            $("#menu-btn").text(selection);

            // Close the dropdown
            $("#menu-options").removeClass("show");
        });

    });