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

        // Month dropdown menu script
        $("#menu-options a").click(function (event) {
            event.preventDefault();
            var month = $(this).text(); // Get selected month

            // Update the dropdown button text
            $("#menu-btn").text(month);

            // Close the dropdown
            $("#menu-options").removeClass("show");

            // AJAX request to fetch orders for the selected month
            $.ajax({
                url: '/orders', 
                type: 'POST', // Change to POST since body data is sent
                contentType: 'application/json',
                data: JSON.stringify({ month: month }), // Send month in the body
                success: function (response) {
                    $('#ordersList').empty();
                    if (response.length === 0) {
                        $('#ordersList').append('<li>No orders found for this month.</li>');
                    } else {
                        response.forEach(order => {
                            $('#ordersList').append(`<li>${order.topping} - Quantity: ${order.quantity}</li>`);
                        });
                    }
                },
                error: function () {
                    alert('Error fetching orders.');
                }
            });
        });

        

    });