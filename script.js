/* =========================================================
   YUGA FASHION
   PRODUCT POPUP + SIZE SELECTION + QUANTITY + WHATSAPP
========================================================= */


/* =========================================================
   WHATSAPP NUMBER
   Country code included
========================================================= */

const WHATSAPP_NUMBER = "917888759939";


/* =========================================================
   GET MODAL ELEMENTS
========================================================= */

const productModal = document.getElementById("productModal");

const modalClose = document.getElementById("modalClose");

const modalImage = document.getElementById("modalImage");

const modalName = document.getElementById("modalName");

const modalPrice = document.getElementById("modalPrice");

const modalColour = document.getElementById("modalColour");

const modalSizes = document.getElementById("modalSizes");


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
   CREATE ORDER CONTROLS
========================================================= */

function createOrderControls() {

    if (!productModal) {
        return;
    }

    const modalInfo = productModal.querySelector(".modal-info");

    if (!modalInfo) {
        return;
    }


    /* Prevent duplicate controls */

    if (document.getElementById("orderControls")) {
        return;
    }


    /* Create order controls */

    const orderControls = document.createElement("div");

    orderControls.id = "orderControls";


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
            🛒 ORDER ON WHATSAPP
        </button>


        <p class="order-note">
            You'll be redirected to WhatsApp to confirm your order.
        </p>

    `;


    /* Put controls after store status */

    const storeBox = modalInfo.querySelector(".modal-store");


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
        document.getElementById("whatsappOrderButton");


    /* =====================================================
       QUANTITY -
    ===================================================== */

    quantityMinus.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            if (quantity > 1) {

                quantity--;

                quantityValue.textContent = quantity;

            }

        }
    );


    /* =====================================================
       QUANTITY +
    ===================================================== */

    quantityPlus.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            if (quantity < 20) {

                quantity++;

                quantityValue.textContent = quantity;

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


            /* ---------------------------------------------
               CHECK SIZE
            --------------------------------------------- */

            if (!selectedSize) {

                alert(
                    "Please select your size first."
                );

                return;

            }


            /* ---------------------------------------------
               CREATE ORDER MESSAGE
            --------------------------------------------- */

    const message = `Hi YUGA, I want to place an order.

Product: ${selectedProduct}
Colour: ${selectedColour}
Price: ${selectedPrice}
Size: ${selectedSize}
Quantity: ${quantity}

Please confirm availability and total amount.

Thank you!
YUGA Fashion
Wear Your Era.`;


            /* ---------------------------------------------
               CREATE WHATSAPP URL
            --------------------------------------------- */

            const whatsappURL =
                "https://wa.me/" +
                WHATSAPP_NUMBER +
                "?text=" +
                encodeURIComponent(message);


            /* ---------------------------------------------
               OPEN WHATSAPP
            --------------------------------------------- */

            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}


/* =========================================================
   ORDER CONTROLS CSS
========================================================= */

const orderStyles = document.createElement("style");

orderStyles.innerHTML = `

#orderControls {
    margin-top: 25px;
}


/* =========================
   QUANTITY
========================= */

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
    color: #111;

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


/* =========================
   SIZE SELECTION
========================= */

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


/* =========================
   WHATSAPP BUTTON
========================= */

.whatsapp-order-button {

    width: 100%;

    padding: 16px;

    border: none;

    background: #25D366;
    color: #fff;

    font-size: 13px;
    font-weight: bold;

    letter-spacing: 1px;

    cursor: pointer;

    transition: 0.25s;
}

.whatsapp-order-button:hover {

    background: #1ebe5d;

    transform: translateY(-2px);
}


/* =========================
   ORDER NOTE
========================= */

.order-note {

    text-align: center;

    font-size: 11px !important;

    color: #777;

    margin: 10px 0 0 !important;
}


/* =========================
   MOBILE
========================= */

@media (max-width: 700px) {

    #orderControls {
        margin-top: 20px;
    }

    .whatsapp-order-button {
        padding: 15px;
    }

}

`;

document.head.appendChild(orderStyles);


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
       GET PRODUCT COLOUR
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
       RESET ORDER
    ===================================================== */

    selectedSize = "";

    quantity = 1;


    const quantityValue =
        document.getElementById("quantityValue");


    if (quantityValue) {

        quantityValue.textContent = "1";

    }


    /* =====================================================
       UPDATE PRODUCT NAME
    ===================================================== */

    if (modalName) {

        modalName.textContent =
            selectedProduct;

    }


    /* =====================================================
       UPDATE PRICE
    ===================================================== */

    if (modalPrice) {

        modalPrice.textContent =
            selectedPrice;

    }


    /* =====================================================
       UPDATE COLOUR
    ===================================================== */

    if (modalColour) {

        modalColour.textContent =
            selectedColour;

    }


    /* =====================================================
       UPDATE IMAGE
    ===================================================== */

    if (modalImage) {

        modalImage.src =
            selectedImage;

        modalImage.alt =
            selectedProduct +
            " - " +
            selectedColour;

    }


    /* =====================================================
       CLEAR OLD SIZES
    ===================================================== */

    if (modalSizes) {

        modalSizes.innerHTML = "";

    }


    /* =====================================================
       GET AVAILABLE SIZES
    ===================================================== */

    const sizeElements =
        product.querySelectorAll(
            ".sizes span"
        );


    sizeElements.forEach(
        function (sizeElement) {


            /* ---------------------------------------------
               GET SIZE TEXT
            --------------------------------------------- */

            let sizeText =
                sizeElement.textContent
                    .replace("✓", "")
                    .replace("✕", "")
                    .trim();


            /* ---------------------------------------------
               CHECK STOCK
            --------------------------------------------- */

            const available =
                sizeElement.classList.contains(
                    "in-stock"
                );


            /* ---------------------------------------------
               CREATE SIZE BUTTON
            --------------------------------------------- */

            const sizeButton =
                document.createElement("span");


            sizeButton.textContent =
                sizeText;


            /* ---------------------------------------------
               AVAILABLE SIZE
            --------------------------------------------- */

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


                        /* Remove old selection */

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


                        /* Select new size */

                        sizeButton.classList.add(
                            "selected-size"
                        );


                        selectedSize =
                            sizeText;

                    }
                );

            }


            /* ---------------------------------------------
               OUT OF STOCK
            --------------------------------------------- */

            else {

                sizeButton.classList.add(
                    "modal-out-stock"
                );

            }


            /* ---------------------------------------------
               ADD SIZE TO MODAL
            --------------------------------------------- */

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

        productModal.classList.add("active");

    }

    document.body.classList.add("modal-open");

}


/* =========================================================
   CLOSE PRODUCT MODAL
========================================================= */

function closeProductModal() {

    if (!productModal) {
        return;
    }


    productModal.classList.remove("active");

    document.body.classList.remove("modal-open");


    selectedSize = "";

    quantity = 1;


    const quantityValue =
        document.getElementById(
            "quantityValue"
        );


    if (quantityValue) {

        quantityValue.textContent = "1";

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
                event.target === productModal
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
            productModal.classList.contains("active")
        ) {

            closeProductModal();

        }

    }
);


/* =========================================================
   CREATE ORDER CONTROLS
========================================================= */

createOrderControls();
/* =========================================================
   PRODUCT IMAGE MOUSE ZOOM
========================================================= */

document.querySelectorAll(".product-image-zoom").forEach(function (box) {

    const image = box.querySelector("img");

    if (!image) {
        return;
    }

    box.addEventListener("mouseenter", function () {

        box.classList.add("is-zooming");

        image.style.transform = "scale(1.8)";

    });


    box.addEventListener("mousemove", function (event) {

        const rect = box.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        image.style.transformOrigin =
            xPercent + "% " + yPercent + "%";

    });


    box.addEventListener("mouseleave", function () {

        box.classList.remove("is-zooming");

        image.style.transformOrigin = "center center";

        image.style.transform = "scale(1)";

    });

});
/* =========================================================
   YUGA AI CHATBOT
========================================================= */

const yugaChatButton =
    document.getElementById("yugaChatButton");

const yugaChatbot =
    document.getElementById("yugaChatbot");

const yugaChatClose =
    document.getElementById("yugaChatClose");

const yugaChatInput =
    document.getElementById("yugaChatInput");

const yugaChatSend =
    document.getElementById("yugaChatSend");

const yugaChatMessages =
    document.getElementById("yugaChatMessages");


/* =========================================================
   OPEN CHAT
========================================================= */

if (yugaChatButton) {

    yugaChatButton.addEventListener("click", function () {

        yugaChatbot.classList.add("active");

        if (yugaChatInput) {
            yugaChatInput.focus();
        }

    });

}


/* =========================================================
   CLOSE CHAT
========================================================= */

if (yugaChatClose) {

    yugaChatClose.addEventListener("click", function () {

        yugaChatbot.classList.remove("active");

    });

}


/* =========================================================
   ADD MESSAGE
========================================================= */

function addYugaMessage(message, type) {

    const messageDiv =
        document.createElement("div");

    messageDiv.className =
        "yuga-message " + type;

    messageDiv.innerHTML =
        message;

    yugaChatMessages.appendChild(messageDiv);

    yugaChatMessages.scrollTop =
        yugaChatMessages.scrollHeight;

}


/* =========================================================
   YUGA AI RESPONSES
========================================================= */

function getYugaResponse(question) {

    const q =
        question.toLowerCase();


    /* GREETING */

    if (
        q.includes("hi") ||
        q.includes("hello") ||
        q.includes("hey")
    ) {

        return `
            Hey! 👋 Welcome to <strong>YUGA Fashion</strong>.
            <br><br>
            I'm here to help you with products, prices,
            sizes and orders.
        `;

    }


    /* PRODUCTS */

    if (
        q.includes("t-shirt") ||
        q.includes("tshirt") ||
        q.includes("t shirt") ||
        q.includes("product") ||
        q.includes("collection")
    ) {

        return `
            👕 We have YUGA collections including
            <strong>Plain, Polo and Printed</strong> styles.
            <br><br>
            You can explore them from the
            <strong>Our Collections</strong> section.
        `;

    }


    /* PRICE */

    if (
        q.includes("price") ||
        q.includes("cost") ||
        q.includes("how much")
    ) {

        return `
            💰 You can see the current price by
            opening any product.
            <br><br>
            Select a product from our collection
            to view its price.
        `;

    }


    /* SIZE */

    if (
        q.includes("size") ||
        q.includes("sizes")
    ) {

        return `
            📏 Available sizes are shown when you
            open a product.
            <br><br>
            Choose an available size before placing
            your order.
        `;

    }


    /* ORDER */

    if (
        q.includes("order") ||
        q.includes("buy") ||
        q.includes("purchase")
    ) {

        return `
            🛒 Ordering is simple!
            <br><br>
            1. Choose your product.<br>
            2. Select your size.<br>
            3. Select quantity.<br>
            4. Click <strong>ORDER ON WHATSAPP</strong>.
            <br><br>
            We'll confirm the order with you.
        `;

    }


    /* DELIVERY */

    if (
        q.includes("delivery") ||
        q.includes("deliver") ||
        q.includes("shipping")
    ) {

        return `
            🚚 For delivery and shipping information,
            please contact YUGA directly on WhatsApp.
            <br><br>
            We'll confirm availability and delivery
            details with you.
        `;

    }


    /* CONTACT */

    if (
        q.includes("contact") ||
        q.includes("whatsapp") ||
        q.includes("talk")
    ) {

        return `
            💬 You can contact YUGA through WhatsApp.
            <br><br>
            Open a product and click
            <strong>ORDER ON WHATSAPP</strong>.
        `;

    }


    /* LOCATION */

    if (
        q.includes("location") ||
        q.includes("address") ||
        q.includes("where")
    ) {

        return `
            📍 Our store location is:
            <br><br>
            <strong>Sector 20, Chandigarh</strong>
            <br>
            160020
            <br><br>
            You can use the
            <strong>OPEN IN GOOGLE MAPS</strong>
            button on our website.
        `;

    }


    /* BRAND */

    if (
        q.includes("yuga") ||
        q.includes("brand")
    ) {

        return `
            ✦ <strong>YUGA Fashion</strong>
            <br><br>
            Fashion for your era.
            <br><br>
            <em>Wear Your Era.</em>
        `;

    }


    /* DEFAULT */

    return `
        Hmm 🤔 I'm still learning!
        <br><br>
        Try asking me about:
        <br>
        👕 Products
        <br>
        💰 Prices
        <br>
        📏 Sizes
        <br>
        🛒 Ordering
        <br>
        🚚 Delivery
        <br>
        📍 Location
    `;

}


/* =========================================================
   SEND MESSAGE
========================================================= */

function sendYugaMessage() {

    const question =
        yugaChatInput.value.trim();


    if (!question) {
        return;
    }


    /* USER MESSAGE */

    addYugaMessage(
        question,
        "user"
    );


    /* CLEAR INPUT */

    yugaChatInput.value = "";


    /* BOT RESPONSE */

    setTimeout(function () {

        const response =
            getYugaResponse(question);

        addYugaMessage(
            response,
            "bot"
        );

    }, 350);

}


/* =========================================================
   SEND BUTTON
========================================================= */

if (yugaChatSend) {

    yugaChatSend.addEventListener(
        "click",
        sendYugaMessage
    );

}


/* =========================================================
   ENTER KEY
========================================================= */

if (yugaChatInput) {

    yugaChatInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                sendYugaMessage();

            }

        }
    );

}


/* =========================================================
   QUICK QUESTIONS
========================================================= */

document
    .querySelectorAll(".yuga-quick-buttons button")
    .forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const question =
                    button.dataset.question;

                yugaChatInput.value =
                    question;

                sendYugaMessage();

            }
        );

    });
