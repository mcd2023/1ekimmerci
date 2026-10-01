/* =========================================================
   MERCI CHEF.CO
   CHEF BOOKING SYSTEM
   TR / EN / FR / AR
   ========================================================= */

(() => {
    "use strict";

    /* =========================
       AYARLAR
    ========================= */

    const WHATSAPP_NUMBER = "905304150729";

    const state = {
        lang: localStorage.getItem("merciLang") || "tr",
        step: 1,

        chef: null,
        cuisine: null,
        menu: null,
        event: null,

        date: "",
        time: "",
        guests: 2,
        notes: ""
    };


    /* =========================
       VERİLER
    ========================= */

    const chefs = [
        {
            id: "mert",
            name: "Chef Mert",
            price: 180,
            cuisines: [
                "mediterranean",
                "turkish",
                "modern"
            ]
        },

        {
            id: "ece",
            name: "Chef Ece",
            price: 200,
            cuisines: [
                "mediterranean",
                "italian",
                "fine-dining"
            ]
        },

        {
            id: "daniel",
            name: "Chef Daniel",
            price: 240,
            cuisines: [
                "french",
                "modern",
                "fine-dining"
            ]
        }
    ];


    const cuisines = [
        {
            id: "mediterranean",
            tr: "Akdeniz Mutfağı",
            en: "Mediterranean Cuisine",
            fr: "Cuisine Méditerranéenne",
            ar: "المطبخ المتوسطي"
        },

        {
            id: "turkish",
            tr: "Türk Mutfağı",
            en: "Turkish Cuisine",
            fr: "Cuisine Turque",
            ar: "المطبخ التركي"
        },

        {
            id: "italian",
            tr: "İtalyan Mutfağı",
            en: "Italian Cuisine",
            fr: "Cuisine Italienne",
            ar: "المطبخ الإيطالي"
        },

        {
            id: "french",
            tr: "Fransız Mutfağı",
            en: "French Cuisine",
            fr: "Cuisine Française",
            ar: "المطبخ الفرنسي"
        },

        {
            id: "modern",
            tr: "Modern Avrupa",
            en: "Modern European",
            fr: "Cuisine Européenne Moderne",
            ar: "المطبخ الأوروبي الحديث"
        },

        {
            id: "fine-dining",
            tr: "Fine Dining",
            en: "Fine Dining",
            fr: "Gastronomie",
            ar: "فاين دايننغ"
        }
    ];


    const menus = [
        {
            id: "classic",
            tr: "Classic Menü",
            en: "Classic Menu",
            fr: "Menu Classique",
            ar: "القائمة الكلاسيكية",
            price: 65
        },

        {
            id: "premium",
            tr: "Premium Menü",
            en: "Premium Menu",
            fr: "Menu Premium",
            ar: "القائمة المميزة",
            price: 95
        },

        {
            id: "signature",
            tr: "Signature Menü",
            en: "Signature Menu",
            fr: "Menu Signature",
            ar: "قائمة سيغنتشر",
            price: 135
        }
    ];


    const events = [
        {
            id: "birthday",
            tr: "Doğum Günü",
            en: "Birthday",
            fr: "Anniversaire",
            ar: "عيد ميلاد"
        },

        {
            id: "special",
            tr: "Özel Gün",
            en: "Special Occasion",
            fr: "Occasion Spéciale",
            ar: "مناسبة خاصة"
        },

        {
            id: "romantic",
            tr: "Romantik Akşam",
            en: "Romantic Dinner",
            fr: "Dîner Romantique",
            ar: "عشاء رومانسي"
        },

        {
            id: "corporate",
            tr: "Kurumsal Organizasyon",
            en: "Corporate Event",
            fr: "Événement d'Entreprise",
            ar: "فعالية مؤسسية"
        },

        {
            id: "private",
            tr: "Özel Davet",
            en: "Private Event",
            fr: "Événement Privé",
            ar: "فعالية خاصة"
        }
    ];


    /* =========================
       ÇEVİRİLER
    ========================= */

    const translations = {

        tr: {
            select: "SEÇ",
            selected: "SEÇİLDİ",
            continue: "DEVAM ET",
            back: "GERİ",
            chef: "Şef",
            cuisine: "Mutfak",
            menu: "Menü",
            event: "Organizasyon",
            date: "Tarih",
            time: "Saat",
            guests: "Kişi Sayısı",
            notes: "Notlar",
            total: "Toplam",
            payment: "ÖDEMEYE GEÇ",
            summary: "REZERVASYON ÖZETİ",
            required: "Lütfen gerekli seçimleri tamamlayın.",
            person: "kişi",
            bookingReady: "Rezervasyon bilgileriniz hazır.",
            whatsapp: "WHATSAPP İLE GÖNDER"
        },

        en: {
            select: "SELECT",
            selected: "SELECTED",
            continue: "CONTINUE",
            back: "BACK",
            chef: "Chef",
            cuisine: "Cuisine",
            menu: "Menu",
            event: "Event",
            date: "Date",
            time: "Time",
            guests: "Guests",
            notes: "Notes",
            total: "Total",
            payment: "PROCEED TO PAYMENT",
            summary: "BOOKING SUMMARY",
            required: "Please complete all required selections.",
            person: "guests",
            bookingReady: "Your booking details are ready.",
            whatsapp: "SEND VIA WHATSAPP"
        },

        fr: {
            select: "CHOISIR",
            selected: "SÉLECTIONNÉ",
            continue: "CONTINUER",
            back: "RETOUR",
            chef: "Chef",
            cuisine: "Cuisine",
            menu: "Menu",
            event: "Événement",
            date: "Date",
            time: "Heure",
            guests: "Personnes",
            notes: "Notes",
            total: "Total",
            payment: "PASSER AU PAIEMENT",
            summary: "RÉSUMÉ DE RÉSERVATION",
            required: "Veuillez compléter les sélections obligatoires.",
            person: "personnes",
            bookingReady: "Les informations de votre réservation sont prêtes.",
            whatsapp: "ENVOYER VIA WHATSAPP"
        },

        ar: {
            select: "اختيار",
            selected: "تم الاختيار",
            continue: "متابعة",
            back: "رجوع",
            chef: "الشيف",
            cuisine: "المطبخ",
            menu: "القائمة",
            event: "المناسبة",
            date: "التاريخ",
            time: "الوقت",
            guests: "عدد الأشخاص",
            notes: "ملاحظات",
            total: "الإجمالي",
            payment: "الانتقال إلى الدفع",
            summary: "ملخص الحجز",
            required: "يرجى إكمال جميع الاختيارات المطلوبة.",
            person: "أشخاص",
            bookingReady: "بيانات الحجز جاهزة.",
            whatsapp: "إرسال عبر واتساب"
        }
    };


    /* =========================
       YARDIMCI FONKSİYONLAR
    ========================= */

    const $ = (selector, parent = document) =>
        parent.querySelector(selector);

    const $$ = (selector, parent = document) =>
        [...parent.querySelectorAll(selector)];


    function t(key) {

        return (
            translations[state.lang]?.[key] ||
            translations.tr[key] ||
            key
        );

    }


    function itemText(item) {

        return (
            item[state.lang] ||
            item.tr ||
            item.name ||
            ""
        );

    }


    function money(value) {

        return Number(value || 0).toLocaleString(
            state.lang === "tr"
                ? "tr-TR"
                : state.lang === "fr"
                    ? "fr-FR"
                    : state.lang === "ar"
                        ? "ar-SA"
                        : "en-US",
            {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2
            }
        ) + " €";

    }


    /* =========================
       DİL DEĞİŞTİRME
    ========================= */

    function changeLang(lang) {

        if (!translations[lang]) return;

        state.lang = lang;

        localStorage.setItem(
            "merciLang",
            lang
        );

        document.documentElement.lang = lang;

        document.documentElement.dir =
            lang === "ar"
                ? "rtl"
                : "ltr";

        $$("[data-tr][data-en]").forEach(el => {

            const text =
                el.getAttribute(`data-${lang}`) ||
                el.getAttribute("data-tr") ||
                el.getAttribute("data-en");

            if (
                el.tagName === "INPUT" ||
                el.tagName === "TEXTAREA"
            ) {

                el.placeholder = text;

            } else {

                el.innerHTML = text;

            }

        });


        renderAll();

    }


    window.changeLang = changeLang;


    /* =========================
       ŞEF LİSTESİ
    ========================= */

    function renderChefs() {

        const container =
            $("#chef-list") ||
            $("#chefs") ||
            $("[data-chef-list]");

        if (!container) return;


        container.innerHTML =
            chefs.map(chef => {

                const selected =
                    state.chef?.id === chef.id;


                return `

                <button
                    type="button"
                    class="booking-option chef-option ${selected ? "selected" : ""}"
                    data-chef="${chef.id}"
                >

                    <span class="option-title">
                        ${chef.name}
                    </span>

                    <span class="option-price">
                        ${money(chef.price)}
                    </span>

                    <span class="option-action">
                        ${selected ? t("selected") : t("select")}
                    </span>

                </button>

                `;

            }).join("");


        $$("[data-chef]", container)
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const id =
                            button.dataset.chef;

                        state.chef =
                            chefs.find(
                                chef =>
                                    chef.id === id
                            ) || null;


                        /*
                         * Şef değiştiğinde
                         * mutfak seçimi sıfırlanıyor.
                         */

                        state.cuisine = null;

                        renderChefs();
                        renderCuisines();
                        updateSummary();
                        validateStep();

                    }
                );

            });

    }


    /* =========================
       MUTFAK
    ========================= */

    function renderCuisines() {

        const container =
            $("#cuisine-list") ||
            $("#cuisines") ||
            $("[data-cuisine-list]");

        if (!container) return;


        let available =
            cuisines;


        /*
         * Şef seçilmişse yalnızca
         * şefin desteklediği mutfakları göster.
         */

        if (state.chef) {

            available =
                cuisines.filter(
                    cuisine =>
                        state.chef.cuisines.includes(
                            cuisine.id
                        )
                );

        }


        container.innerHTML =
            available.map(cuisine => {

                const selected =
                    state.cuisine?.id === cuisine.id;


                return `

                <button
                    type="button"
                    class="booking-option cuisine-option ${selected ? "selected" : ""}"
                    data-cuisine="${cuisine.id}"
                >

                    <span class="option-title">
                        ${itemText(cuisine)}
                    </span>

                    <span class="option-action">
                        ${selected ? t("selected") : t("select")}
                    </span>

                </button>

                `;

            }).join("");


        $$("[data-cuisine]", container)
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        state.cuisine =
                            cuisines.find(
                                cuisine =>
                                    cuisine.id ===
                                    button.dataset.cuisine
                            ) || null;


                        renderCuisines();
                        updateSummary();
                        validateStep();

                    }
                );

            });

    }


    /* =========================
       MENÜ
    ========================= */

    function renderMenus() {

        const container =
            $("#menu-list") ||
            $("#menus") ||
            $("[data-menu-list]");

        if (!container) return;


        container.innerHTML =
            menus.map(menu => {

                const selected =
                    state.menu?.id === menu.id;


                return `

                <button
                    type="button"
                    class="booking-option menu-option ${selected ? "selected" : ""}"
                    data-menu="${menu.id}"
                >

                    <span class="option-title">
                        ${itemText(menu)}
                    </span>

                    <span class="option-price">
                        ${money(menu.price)} / ${t("person")}
                    </span>

                    <span class="option-action">
                        ${selected ? t("selected") : t("select")}
                    </span>

                </button>

                `;

            }).join("");


        $$("[data-menu]", container)
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        state.menu =
                            menus.find(
                                menu =>
                                    menu.id ===
                                    button.dataset.menu
                            ) || null;


                        renderMenus();
                        updateSummary();
                        validateStep();

                    }
                );

            });

    }


    /* =========================
       ORGANİZASYON
    ========================= */

    function renderEvents() {

        const container =
            $("#event-list") ||
            $("#events") ||
            $("[data-event-list]");

        if (!container) return;


        container.innerHTML =
            events.map(event => {

                const selected =
                    state.event?.id === event.id;


                return `

                <button
                    type="button"
                    class="booking-option event-option ${selected ? "selected" : ""}"
                    data-event="${event.id}"
                >

                    <span class="option-title">
                        ${itemText(event)}
                    </span>

                    <span class="option-action">
                        ${selected ? t("selected") : t("select")}
                    </span>

                </button>

                `;

            }).join("");


        $$("[data-event]", container)
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        state.event =
                            events.find(
                                event =>
                                    event.id ===
                                    button.dataset.event
                            ) || null;


                        renderEvents();
                        updateSummary();
                        validateStep();

                    }
                );

            });

    }


    /* =========================
       TARİH / SAAT / KİŞİ
    ========================= */

    function setupInputs() {

        const date =
            $("#booking-date") ||
            $("#date") ||
            $('input[name="date"]');


        const time =
            $("#booking-time") ||
            $("#time") ||
            $('input[name="time"]') ||
            $('select[name="time"]');


        const guests =
            $("#guest-count") ||
            $("#guests") ||
            $('input[name="guests"]');


        const notes =
            $("#booking-notes") ||
            $("#notes") ||
            $('textarea[name="notes"]');


        if (date) {

            const today =
                new Date()
                    .toISOString()
                    .split("T")[0];

            date.min = today;

            date.addEventListener(
                "change",
                event => {

                    state.date =
                        event.target.value;

                    updateSummary();
                    validateStep();

                }
            );

        }


        if (time) {

            time.addEventListener(
                "change",
                event => {

                    state.time =
                        event.target.value;

                    updateSummary();
                    validateStep();

                }
            );

        }


        if (guests) {

            guests.value =
                state.guests;

            guests.min = 1;
            guests.max = 100;


            guests.addEventListener(
                "input",
                event => {

                    let value =
                        Number(event.target.value);

                    if (!value || value < 1)
                        value = 1;

                    if (value > 100)
                        value = 100;

                    state.guests = value;

                    event.target.value =
                        value;

                    updateSummary();

                }
            );

        }


        if (notes) {

            notes.addEventListener(
                "input",
                event => {

                    state.notes =
                        event.target.value;

                }
            );

        }

    }


    /* =========================
       TOPLAM HESAPLAMA
    ========================= */

    function calculateTotal() {

        if (
            !state.chef ||
            !state.menu
        ) {

            return 0;

        }


        const chefPrice =
            Number(state.chef.price);


        const menuPrice =
            Number(state.menu.price);


        const guestCount =
            Number(state.guests);


        return (
            chefPrice +
            (menuPrice * guestCount)
        );

    }


    /* =========================
       TARİH FORMAT
    ========================= */

    function formatDate(value) {

        if (!value)
            return "-";


        const date =
            new Date(`${value}T00:00:00`);


        return date.toLocaleDateString(
            state.lang === "tr"
                ? "tr-TR"
                : state.lang === "fr"
                    ? "fr-FR"
                    : state.lang === "ar"
                        ? "ar-SA"
                        : "en-US",
            {
                day: "2-digit",
                month: "long",
                year: "numeric"
            }
        );

    }


    /* =========================
       ÖZET
    ========================= */

    function updateSummary() {

        const summary = {

            chef:
                state.chef?.name || "-",

            cuisine:
                state.cuisine
                    ? itemText(state.cuisine)
                    : "-",

            menu:
                state.menu
                    ? itemText(state.menu)
                    : "-",

            event:
                state.event
                    ? itemText(state.event)
                    : "-",

            date:
                formatDate(state.date),

            time:
                state.time || "-",

            guests:
                `${state.guests} ${t("person")}`,

            total:
                money(calculateTotal())

        };


        Object.entries(summary)
            .forEach(([key, value]) => {

                const element =
                    $(`#summary-${key}`);


                if (element)
                    element.textContent =
                        value;

            });


        $$("[data-summary]")
            .forEach(element => {

                const key =
                    element.dataset.summary;


                if (
                    summary[key] !== undefined
                ) {

                    element.textContent =
                        summary[key];

                }

            });

    }


    /* =========================
       ADIM KONTROL
    ========================= */

    function isStepValid(step) {

        switch (step) {

            case 1:
                return !!state.chef;

            case 2:
                return !!state.cuisine;

            case 3:
                return !!state.menu;

            case 4:
                return !!state.event;

            case 5:
                return (
                    !!state.date &&
                    !!state.time &&
                    state.guests > 0
                );

            default:
                return true;

        }

    }


    function validateStep() {

        const button =
            $("#next-step") ||
            $("#continue-btn") ||
            $("[data-next]");


        if (!button)
            return;


        const valid =
            isStepValid(state.step);


        button.disabled =
            !valid;


        button.classList.toggle(
            "opacity-50",
            !valid
        );


        button.classList.toggle(
            "cursor-not-allowed",
            !valid
        );

    }


    /* =========================
       ADIM GÖSTER
    ========================= */

    function showStep(step) {

        if (step < 1)
            step = 1;

        if (step > 6)
            step = 6;


        state.step =
            step;


        $$("[data-step]")
            .forEach(section => {

                const active =
                    Number(section.dataset.step) ===
                    state.step;


                section.classList.toggle(
                    "hidden",
                    !active
                );


                section.classList.toggle(
                    "active",
                    active
                );

            });


        $$("[data-step-number]")
            .forEach(item => {

                const number =
                    Number(
                        item.dataset.stepNumber
                    );


                item.classList.toggle(
                    "active",
                    number === state.step
                );


                item.classList.toggle(
                    "completed",
                    number < state.step
                );

            });


        const progress =
            $("[data-progress]");


        if (progress) {

            progress.style.width =
                `${((state.step - 1) / 5) * 100}%`;

        }


        validateStep();
        updateSummary();

    }


    /* =========================
       İLERİ / GERİ
    ========================= */

    function nextStep() {

        if (
            !isStepValid(state.step)
        ) {

            showMessage(
                t("required"),
                "error"
            );

            return;

        }


        showStep(
            state.step + 1
        );

    }


    function previousStep() {

        showStep(
            state.step - 1
        );

    }


    /* =========================
       NAVİGASYON
    ========================= */

    function setupNavigation() {

        $$("[data-next]")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    nextStep
                );

            });


        $$("[data-back]")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    previousStep
                );

            });


        $$("[data-go-step]")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const step =
                            Number(
                                button.dataset.goStep
                            );


                        if (
                            step < state.step
                        ) {

                            showStep(step);

                        }

                    }
                );

            });


        const next =
            $("#next-step") ||
            $("#continue-btn");


        if (next) {

            next.addEventListener(
                "click",
                nextStep
            );

        }


        const back =
            $("#back-step") ||
            $("#prev-step");


        if (back) {

            back.addEventListener(
                "click",
                previousStep
            );

        }

    }


    /* =========================
       WHATSAPP MESAJI
    ========================= */

    function createWhatsAppMessage() {

        const lines = [

            "MERCI CHEF.CO",
            "------------------------",

            `${t("chef")}: ${
                state.chef?.name || "-"
            }`,

            `${t("cuisine")}: ${
                state.cuisine
                    ? itemText(state.cuisine)
                    : "-"
            }`,

            `${t("menu")}: ${
                state.menu
                    ? itemText(state.menu)
                    : "-"
            }`,

            `${t("event")}: ${
                state.event
                    ? itemText(state.event)
                    : "-"
            }`,

            `${t("date")}: ${
                formatDate(state.date)
            }`,

            `${t("time")}: ${
                state.time || "-"
            }`,

            `${t("guests")}: ${
                state.guests
            }`,

            `${t("total")}: ${
                money(calculateTotal())
            }`

        ];


        if (state.notes) {

            lines.push(
                `${t("notes")}: ${state.notes}`
            );

        }


        return lines.join("\n");

    }


    function openWhatsApp() {

        const message =
            encodeURIComponent(
                createWhatsAppMessage()
            );


        window.open(
            `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
            "_blank"
        );

    }


    function setupWhatsApp() {

        $$("[data-whatsapp]")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    openWhatsApp
                );

            });


        const button =
            $("#whatsapp-order");


        if (button) {

            button.addEventListener(
                "click",
                openWhatsApp
            );

        }

    }


    /* =========================
       ÖDEME
    ========================= */

    function goToPayment() {

        if (!isStepValid(5)) {

            showMessage(
                t("required"),
                "error"
            );

            showStep(5);

            return;

        }


        /*
         =====================================================
         GERÇEK ÖDEME ENTEGRASYONU

         Buraya Stripe / iyzico / PayTR backend bağlantısı
         gelecek.

         Front-end içinde SECRET KEY kullanılmamalıdır.

         Örnek backend isteği:

         fetch("/api/create-payment", {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({
                 chef: state.chef,
                 cuisine: state.cuisine,
                 menu: state.menu,
                 event: state.event,
                 date: state.date,
                 time: state.time,
                 guests: state.guests,
                 notes: state.notes,
                 total: calculateTotal()
             })
         })
         .then(response => response.json())
         .then(data => {
             window.location.href =
                 data.checkoutUrl;
         });

         =====================================================
        */


        const paymentPanel =
            $("#payment-panel") ||
            $("#payment") ||
            $("[data-payment-panel]");


        if (paymentPanel) {

            paymentPanel.classList.remove(
                "hidden"
            );


            paymentPanel.scrollIntoView({
                behavior: "smooth"
            });


        } else {

            showMessage(
                t("bookingReady"),
                "success"
            );

        }

    }


    function setupPayment() {

        $$("[data-payment]")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    goToPayment
                );

            });


        const payment =
            $("#payment-btn");


        if (payment) {

            payment.addEventListener(
                "click",
                goToPayment
            );

        }

    }


    /* =========================
       MESAJ
    ========================= */

    function showMessage(
        message,
        type = "info"
    ) {

        let box =
            $("#booking-message");


        if (!box) {

            box =
                document.createElement(
                    "div"
                );


            box.id =
                "booking-message";


            box.style.position =
                "fixed";

            box.style.right =
                "20px";

            box.style.bottom =
                "20px";

            box.style.zIndex =
                "99999";

            box.style.maxWidth =
                "360px";

            box.style.padding =
                "16px 20px";

            box.style.borderRadius =
                "12px";

            box.style.background =
                "#0F1729";

            box.style.color =
                "#fff";

            box.style.boxShadow =
                "0 15px 40px rgba(0,0,0,.3)";


            document.body.appendChild(
                box
            );

        }


        box.textContent =
            message;


        box.dataset.type =
            type;


        clearTimeout(
            showMessage.timer
        );


        showMessage.timer =
            setTimeout(
                () => {

                    box.remove();

                },
                3500
            );

    }


    /* =========================
       MOBİL MENÜ
    ========================= */

    function setupMobileMenu() {

        const button =
            $("#mobile-menu-btn");

        const menu =
            $("#mobile-menu");


        if (!button || !menu)
            return;


        button.addEventListener(
            "click",
            () => {

                menu.classList.toggle(
                    "hidden"
                );

            }
        );


        $$("a", menu)
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        menu.classList.add(
                            "hidden"
                        );

                    }
                );

            });

    }


    /* =========================
       NAVBAR
    ========================= */

    function setupNavbar() {

        const navbar =
            $("#navbar");


        if (!navbar)
            return;


        window.addEventListener(
            "scroll",
            () => {

                if (
                    window.scrollY > 50
                ) {

                    navbar.classList.add(
                        "bg-merci-dark/95",
                        "backdrop-blur-md",
                        "shadow-lg"
                    );


                    navbar.classList.remove(
                        "bg-transparent"
                    );

                } else {

                    navbar.classList.remove(
                        "bg-merci-dark/95",
                        "backdrop-blur-md",
                        "shadow-lg"
                    );


                    navbar.classList.add(
                        "bg-transparent"
                    );

                }

            }
        );

    }


    /* =========================
       FADE ANIMATION
    ========================= */

    function setupAnimations() {

        if (
            !("IntersectionObserver" in window)
        ) {

            $$(".fade-in")
                .forEach(el =>
                    el.classList.add(
                        "visible"
                    )
                );

            return;

        }


        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList
                                    .add("visible");

                            }

                        }
                    );

                },
                {
                    threshold: 0.1
                }
            );


        $$(".fade-in")
            .forEach(el =>
                observer.observe(el)
            );

    }


    /* =========================
       PROJE KAYDIRICI
    ========================= */

    function setupProjectCarousel() {

        window.scrollProjects =
            function(direction) {

                const container =
                    $("#projects-container");


                if (!container)
                    return;


                container.scrollBy({

                    left:
                        direction * 420,

                    behavior:
                        "smooth"

                });

            };

    }


    /* =========================
       SMOOTH SCROLL
    ========================= */

    function setupSmoothScroll() {

        $$('a[href^="#"]')
            .forEach(anchor => {

                anchor.addEventListener(
                    "click",
                    event => {

                        const target =
                            $(anchor.getAttribute("href"));


                        if (!target)
                            return;


                        event.preventDefault();


                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }
                );

            });

    }


    /* =========================
       HER ŞEYİ YENİLE
    ========================= */

    function renderAll() {

        renderChefs();

        renderCuisines();

        renderMenus();

        renderEvents();

        updateSummary();

        validateStep();

    }


    /* =========================
       BAŞLAT
    ========================= */

    function init() {

        document.documentElement.lang =
            state.lang;


        document.documentElement.dir =
            state.lang === "ar"
                ? "rtl"
                : "ltr";


        setupInputs();

        setupNavigation();

        setupWhatsApp();

        setupPayment();

        setupMobileMenu();

        setupNavbar();

        setupAnimations();

        setupProjectCarousel();

        setupSmoothScroll();

        renderAll();

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            init
        );

    } else {

        init();

    }

})();
