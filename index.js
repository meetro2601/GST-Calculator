        var btn = document.querySelector('button')

        function calculate() {
            var buyer = document.querySelector("#buyer").value
            var address = document.querySelector("#address").value
            var gstNum = document.querySelector("#gstNum").value
            var quantity9 = document.querySelector('#quantity9').value
            var price9gst = document.querySelector('#price9gst').value
            var quantity = document.querySelector('#quantity').value
            var pricegst = document.querySelector('#pricegst').value
            var gst = document.querySelector("#gstrate").value
            var sgst = gst / 2
            var cgst = gst / 2
            document.querySelector("#sgst").innerHTML = sgst
            document.querySelector("#cgst").innerHTML = cgst

            if(!quantity && !quantity9 && !pricegst && !price9gst && !gst){
                alert('Values Required')
            }else{

            if(!quantity && !pricegst){
                var quantity = 0
                var pricegst = 0
            }else if(!quantity9 && !price9gst){
                var quantity9 = 0
                var price9gst = 0
            }

            if (quantity9 == 0) {
                var price9 = 0
            } else {
                var price9 = (price9gst / (1 + (0.01 * gst))).toFixed(4)
            }
            document.querySelector('#price9').innerText = price9

            if (quantity == 0) {
                var price = 0
            } else {
                var price = (pricegst / (1 + (0.01 * gst))).toFixed(4)
            }
            document.querySelector('#price').innerText = price

            var grandTotal = (quantity9 * price9gst) + (quantity * pricegst)
            document.querySelector("#grandTotal").nextElementSibling.innerText = grandTotal

            var gstRs = (grandTotal - [grandTotal / (1 + (0.01 * gst))]).toFixed(2)
            var sgstRs = (gstRs / 2).toFixed(2)
            var cgstRs = (gstRs / 2).toFixed(2)
            document.querySelector('#sgstRs').innerText = sgstRs
            document.querySelector('#cgstRs').innerText = cgstRs
            document.querySelector('#totalgst').nextElementSibling.innerText = gstRs

            var amount = (grandTotal - gstRs).toFixed(2)
            document.querySelector("#amount").nextElementSibling.innerText = amount

            var totalprice9 = (amount - (price * quantity).toFixed(2)).toFixed(2)
            document.querySelector('#totalprice9').innerText = totalprice9

            var totalprice = (amount - (price9 * quantity9).toFixed(2)).toFixed(2)
            document.querySelector('#totalprice').innerText = totalprice

            var billDetail = {
                buyer,
                address,
                gstNum,
                quantity9,
                quantity,
                price9gst,
                pricegst,
                gst,
                gstRs,
                price9,
                price,
                totalprice9,
                totalprice,
                amount,
                grandTotal
            }

            var id = new Date().toLocaleString()

            localStorage.setItem(id,JSON.stringify(billDetail))
        }
        }

        btn.addEventListener('click', () => {
            calculate()
        })
    