/* =========================================================
   YUGA FASHION
   PRODUCT POPUP + SIZE SELECTION + QUANTITY + WHATSAPP
========================================================= */


/* =========================================================
   YOUR WHATSAPP NUMBER
========================================================= */

const WHATSAPP_NUMBER = "917888759939";


/* =========================================================
   GET EXISTING MODAL ELEMENTS FROM HTML
========================================================= */

const productModal =
    document.getElementById("productModal");

const modalClose =
    document.getElementById("modalClose");

const modalImage =
    document.getElementById("modalImage");

const modalName =
    document.getElementById("modalName");

const modalPrice =
    document.getElementById("modalPrice");

const modalColour =
    document.getElementById("modalColour");

const modalSizes =
    document.getElementById("modalSizes");


/* =========================================================
   ORDER VARIABLES
========================================================= */

let selectedProduct = "";
let selectedPrice = "";
let selectedColour = "";
let selectedImage = "";

let selectedSize = "";

let quantity = 1;


/* =========================================================
   ADD ORDER CONTROLS
========================================================= */

function createOrderControls() {

    if (!productModal) {
        return;
    }

    const modalInfo =
        productModal.querySelector(".modal-info");

    if (!modalInfo) {
        return;
    }

    /*
       Prevent duplicate controls
    */

    if (
        document.getElementById("orderControls")
    ) {
        return;
    }


    const orderControls =
        document.createElement("div");

    orderControls.id =
        "orderControls";


    orderControls.innerHTML = `

        <!-- QUANTITY -->

        <div class="quantity-section">

            <p class="quantity-title">
                QUANTITY
            </p>

            <div class="quantity-control">

                <button
                    type="button"
                    id="quantityMinus"
                >
                    −
                </button>

                <span id="quantityValue">
                    1
                </span>

                <button
                    type="button"
                    id="quantityPlus"
                >
                    +
                </button>

            </div>

        </div>


        <!-- WHATSAPP ORDER -->

        <button
            type="button"
            class="whatsapp-order-button"
            id="whatsappOrderButton"
        >
            ORDER NOW ON WHATSAPP
        </button>


        <p class="order-note">
            You'll be redirected to WhatsApp to confirm your order.
        </p>

    `;


    /*
       Put controls after store message
    */

    const storeBox =
        modalInfo.querySelector(".modal-store");


    if (storeBox) {

        storeBox.insertAdjacentElement(
            "afterend",
            orderControls
        );

    } else {

        modalInfo.appendChild(
            orderControls
        );

    }


    /* =====================================================
       GET CONTROLS
    ===================================================== */

    const quantityMinus =
        document.getElementById("quantityMinus");

    const quantityPlus =
        document.getElementById("quantityPlus");

    const quantityValue =
        document.getElementById("quantityValue");

    const whatsappOrderButton =
        document.getElementById(
            "whatsappOrderButton"
        );


    /* =====================================================
       QUANTITY MINUS
    ===================================================== */

    quantityMinus.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            if (quantity > 1) {

                quantity--;

                quantityValue.textContent =
                    quantity;

            }

        }
    );


    /* =====================================================
       QUANTITY PLUS
    ===================================================== */

    quantityPlus.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            if (quantity < 20) {

                quantity++;

                quantityValue.textContent =
                    quantity;

            }

        }
    );


    /* =====================================================
       WHATSAPP ORDER
    ===================================================== */

    whatsappOrderButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();


            /* =============================================
               CHECK SIZE
            ============================================= */

            if (!selectedSize) {

                alert(
                    "Please select your size first."
                );

                return;

            }


            /* =============================================
               CREATE WHATSAPP MESSAGE
            ============================================= */

            const message =

`Hi YUGA! 👋

I want to place an order.

━━━━━━━━━━━━━━━━
ORDER DETAILS
━━━━━━━━━━━━━━━━

Product: ${selectedProduct}

Colour: ${selectedColour}

Price: ${selectedPrice}

Size: ${selectedSize}

Quantity: ${quantity}

━━━━━━━━━━━━━━━━
CUSTOMER DETAILS
━━━━━━━━━━━━━━━━

Name:
Phone:
Address:

Please confirm availability and total amount.

Thank you! ❤️

YUGA Fashion
Wear Your Era.`;


            /* =============================================
               CREATE WHATSAPP URL
            ============================================= */

            const whatsappURL =
                "https://wa.me/" +
                WHATSAPP_NUMBER +
                "?text=" +
                encodeURIComponent(
                    message
                );


            /* =============================================
               OPEN WHATSAPP
            ============================================= */

            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}


/* =========================================================
   ORDER CSS
========================================================= */

const orderStyles =
    document.createElement("style");


orderStyles.innerHTML = `

/* =====================================================
   ORDER CONTROLS
===================================================== */

#orderControls {

    margin-top: 25px;

}


/* =====================================================
   QUANTITY
===================================================== */

.quantity-section {

    margin-bottom: 18px;

}


.quantity-title {

    font-size: 11px !important;

    font-weight: bold;

    letter-spacing: 1.5px;

    margin: 0 0 8px !important;

}


.quantity-control {

    display: flex;

    align-items: center;

    width: fit-content;

    border: 1px solid #ddd;

}


.quantity-control button {

    width: 38px;

    height: 38px;

    border: none;

    background: #fff;

    font-size: 20px;

    cursor: pointer;

    transition: 0.2s;

}


.quantity-control button:hover {

    background: #111;

    color: #fff;

}


.quantity-control span {

    width: 45px;

    text-align: center;

    font-size: 14px;

    font-weight: bold;

}


/* =====================================================
   SIZE SELECTION
===================================================== */

.selectable-size {

    cursor: pointer;

    transition: 0.2s;

}


.selectable-size:hover {

    background: #111 !important;

    color: #fff !important;

}


.selected-size {

    background: #111 !important;

    color: #fff !important;

    border-color: #111 !important;

}


/* =====================================================
   WHATSAPP BUTTON
===================================================== */

.whatsapp-order-button {

    width: 100%;

    padding: 16px;

    border: none;

    background: #111;

    color: #fff;

    font-size: 13px;

    font-weight: bold;

    letter-spacing: 1px;

    cursor: pointer;

    transition: 0.25s;

}


.whatsapp-order-button:hover {

    background: #25D366;

    color: #fff;

    transform: translateY(-2px);

}


/* =====================================================
   ORDER NOTE
===================================================== */

.order-note {

    text-align: center;

    font-size: 11px !important;

    color: #777;

    margin: 10px 0 0 !important;

}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 700px) {

    #orderControls {

        margin-top: 20px;

    }

    .whatsapp-order-button {

        padding: 15px;

    }

}

`;

document.head.appendChild(
    orderStyles
);


/* =========================================================
   PRODUCT CARD CLICK
========================================================= */

document
    .querySelectorAll(".product")
    .forEach(function (product) {

        product.addEventListener(
            "click",
            function () {

                openProductModal(product);

            }
        );

    });


/* =========================================================
   OPEN PRODUCT MODAL
========================================================= */

function openProductModal(product) {


    /* =====================================================
       GET PRODUCT IMAGE
    ===================================================== */

    const productImage =
        product.querySelector("img");


    /* =====================================================
       GET PRODUCT NAME
    ===================================================== */

    const productName =
        product.querySelector("h3");


    /* =====================================================
       GET PRODUCT PRICE
    ===================================================== */

    const productPrice =
        product.querySelector(".price");


    /* =====================================================
       GET COLOUR
    ===================================================== */

    const paragraphs =
        product.querySelectorAll("p");


    let colour = "";


    paragraphs.forEach(
        function (paragraph) {

            const text =
                paragraph.textContent.trim();


            if (
                text
                    .toLowerCase()
                    .startsWith("colour:")
            ) {

                colour =
                    text
                        .replace(
                            /colour:/i,
                            ""
                        )
                        .trim();

            }

        }
    );


    /* =====================================================
       STORE PRODUCT DATA
    ===================================================== */

    selectedProduct =
        productName
            ? productName.textContent.trim()
            : "YUGA Product";


    selectedPrice =
        productPrice
            ? productPrice.textContent.trim()
            : "";


    selectedColour =
        colour || "Not specified";


    selectedImage =
        productImage
            ? productImage.getAttribute("src")
            : "";


    /* =====================================================
       RESET
    ===================================================== */

    selectedSize = "";

    quantity = 1;


    const quantityValue =
        document.getElementById(
            "quantityValue"
        );


    if (quantityValue) {

        quantityValue.textContent =
            "1";

    }


    /* =====================================================
       UPDATE MODAL
    ===================================================== */

    if (modalName) {

        modalName.textContent =
            selectedProduct;

    }


    if (modalPrice) {

        modalPrice.textContent =
            selectedPrice;

    }


    if (modalColour) {

        modalColour.textContent =
            "Colour: " +
            selectedColour;

    }


    if (modalImage) {

        modalImage.src =
            selectedImage;


        modalImage.alt =
            selectedProduct +
            " - " +
            selectedColour;

    }


    /* =====================================================
       LOAD SIZES
    ===================================================== */

    if (modalSizes) {

        modalSizes.innerHTML = "";

    }


    const sizeElements =
        product.querySelectorAll(
            ".sizes span"
        );


    sizeElements.forEach(
        function (sizeElement) {


            /* =============================================
               GET SIZE
            ============================================= */

            let sizeText =
                sizeElement.textContent
                    .replace("✓", "")
                    .replace("✕", "")
                    .trim();


            /* =============================================
               CHECK STOCK
            ============================================= */

            const available =
                sizeElement.classList.contains(
                    "in-stock"
                );


            /* =============================================
               CREATE SIZE
            ============================================= */

            const sizeButton =
                document.createElement(
                    "span"
                );


            sizeButton.textContent =
                sizeText;


            /* =============================================
               AVAILABLE
            ============================================= */

            if (available) {

                sizeButton.classList.add(
                    "modal-in-stock"
                );


                sizeButton.classList.add(
                    "selectable-size"
                );


                sizeButton.addEventListener(
                    "click",
                    function (event) {

                        event.stopPropagation();


                        /*
                           Remove previous selection
                        */

                        modalSizes
                            .querySelectorAll(
                                ".selected-size"
                            )
                            .forEach(
                                function (item) {

                                    item.classList.remove(
                                        "selected-size"
                                    );

                                }
                            );


                        /*
                           Select size
                        */

                        sizeButton.classList.add(
                            "selected-size"
                        );


                        selectedSize =
                            sizeText;

                    }
                );

            }


            /* =============================================
               OUT OF STOCK
            ============================================= */

            else {

                sizeButton.classList.add(
                    "modal-out-stock"
                );

            }


            /* =============================================
               ADD TO MODAL
            ============================================= */

            if (modalSizes) {

                modalSizes.appendChild(
                    sizeButton
                );

            }

        }
    );


    /* =====================================================
       SHOW MODAL
    ===================================================== */

    if (productModal) {

        productModal.classList.add(
            "active"
        );

    }


    document.body.classList.add(
        "modal-open"
    );

}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeProductModal() {

    if (!productModal) {
        return;
    }


    productModal.classList.remove(
        "active"
    );


    document.body.classList.remove(
        "modal-open"
    );


    selectedSize = "";

    quantity = 1;


    const quantityValue =
        document.getElementById(
            "quantityValue"
        );


    if (quantityValue) {

        quantityValue.textContent =
            "1";

    }

}


/* =========================================================
   CLOSE BUTTON
========================================================= */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            closeProductModal();

        }
    );

}


/* =========================================================
   CLICK OUTSIDE MODAL
========================================================= */

if (productModal) {

    productModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                productModal
            ) {

                closeProductModal();

            }

        }
    );

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            productModal &&
            productModal.classList.contains(
                "active"
            )
        ) {

            closeProductModal();

        }

    }
);


/* =========================================================
   CREATE ORDER CONTROLS
========================================================= */

createOrderControls();