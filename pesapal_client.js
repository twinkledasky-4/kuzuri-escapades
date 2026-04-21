/**
 * PESAPAL FRONTEND CLIENT (pesapal_client.js)
 * 
 * This script handles the interaction between the checkout form
 * and the PHP backend relay.
 */

const PesapalClient = {
    // Path to your PHP script
    backendUrl: 'pesapal_gateway.php',

    /**
     * Submits order details to the backend to get the Pesapal IFrame URL.
     * @param {Object} orderData - The customer and order information.
     */
    async initiatePayment(orderData) {
        try {
            console.log("[Pesapal] Initializing transaction...");
            
            const response = await fetch(this.backendUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    orderDetails: {
                        fullName: orderData.fullName,
                        firstName: orderData.firstName,
                        lastName: orderData.lastName,
                        email: orderData.email,
                        phone: orderData.phone,
                        amount: orderData.amount,
                        currency: orderData.currency || 'USD',
                        bookingRef: orderData.bookingRef,
                        description: orderData.description || 'Safari Payment',
                        address: orderData.address,
                        city: orderData.city,
                        state: orderData.state,
                        zip: orderData.zip
                    }
                })
            });

            const result = await response.json();

            if (!response.ok) {
                console.error("[Pesapal] Backend Error:", result);
                throw new Error(result.details || result.error || 'Failed to initialize payment.');
            }

            // Pesapal V3 returns 'redirect_url' and 'order_tracking_id'
            if (result.redirect_url) {
                console.log("[Pesapal] Redirecting to secure IFrame...");
                // You can either redirect the whole window:
                // window.location.href = result.redirect_url;
                
                // Or embed it in an IFrame:
                this.renderIframe(result.redirect_url);
            } else {
                throw new Error("No redirect_url found in API response.");
            }

        } catch (error) {
            console.error("[Pesapal] Integration Error:", error);
            alert("Error: " + error.message);
        }
    },

    /**
     * Renders the Pesapal payment page inside a specified container.
     * @param {string} url - The secure URL from Pesapal.
     */
    renderIframe(url) {
        const container = document.getElementById('pesapal-iframe-container');
        if (!container) {
            console.error("IFrame container (#pesapal-iframe-container) not found.");
            window.location.href = url; // Fallback to full redirect
            return;
        }

        container.innerHTML = `
            <iframe 
                src="${url}" 
                width="100%" 
                height="700px" 
                frameborder="0" 
                scrolling="auto"
                style="border: none; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border-radius: 8px;"
            >
                <p>Browser does not support IFrames.</p>
            </iframe>
        `;
    }
};

// --- USAGE EXAMPLE ---
// document.getElementById('proceed-button').addEventListener('click', function() {
//    const myData = { ... gather from form ... };
//    PesapalClient.initiatePayment(myData);
// });
