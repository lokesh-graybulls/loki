// JavaScript to control RoofAudit AI flow

document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("start-audit-btn");
    const scanPage = document.getElementById("scanning-page");
    const homePage = document.getElementById("homepage");
    const proposalPage = document.getElementById("proposal-page");
    const checkoutPage = document.getElementById("checkout-page");
    const congratsPage = document.getElementById("congrats-page");
    const progressBar = document.getElementById("progress-bar");
    const scanMessage = document.getElementById("scan-message");
    const packageButtons = document.querySelectorAll(".select-package-btn");
    const orderSummary = document.getElementById("order-summary");
    const subtotal = document.getElementById("subtotal");
    const total = document.getElementById("total");
    const completeOrderBtn = document.getElementById("complete-order-btn");

    let selectedPackage = null;
    let selectedPrice = 0;

    // Start audit button logic
    startBtn.addEventListener("click", () => {
        homePage.classList.add("hidden");
        scanPage.classList.remove("hidden");
        simulateScan();
    });

    function simulateScan() {
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            progressBar.style.width = progress + "%";
            scanMessage.textContent = `Scanning... ${progress}% complete`;
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    scanPage.classList.add("hidden");
                    proposalPage.classList.remove("hidden");
                    showFreeRecommendations();
                    showSolutions();
                }, 1000);
            }
        }, 400);
    }

    function showFreeRecommendations() {
        const container = document.createElement("div");
        container.className = "bg-white rounded-xl shadow-lg p-6 mb-12 max-w-4xl mx-auto";

        container.innerHTML = `
            <h3 class="text-xl font-bold text-gray-800 mb-6">Free Recommendations</h3>
            <ul class="space-y-3 text-gray-600 text-sm list-disc pl-5">
                <li>Update your logo to a modern, high-resolution version for better brand perception.</li>
                <li>Add customer testimonials or star ratings on your homepage to build trust instantly.</li>
                <li>Ensure your contact form is mobile-friendly and working on all devices.</li>
                <li>Improve your Instagram bio with clear service offerings and a link to your website.</li>
                <li>Create highlight covers for social media to showcase services, reviews, and offers.</li>
            </ul>
        `;

        const proposalSection = document.querySelector("#proposal-page .container");
        const referenceElement = proposalSection.querySelector("h3.text-2xl");
        proposalSection.insertBefore(container, referenceElement);
    }

    function showSolutions() {
        const container = document.createElement("div");
        container.className = "bg-white rounded-xl shadow-lg p-6 mb-12";

        container.innerHTML = `
            <h3 class="text-xl font-bold text-gray-800 mb-6">Suggested Solutions</h3>
            <div class="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
                <div class="bg-gray-50 rounded-lg p-4">
                    <div class="flex items-center mb-2">
                        <svg class="h-5 w-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm2-11H8v2h4V7zm0 4H8v2h4v-2z" clip-rule="evenodd"/></svg>
                        <h4 class="font-semibold text-red-600">Website – Necessary</h4>
                    </div>
                    <ul class="list-disc pl-5">
                        <li>Write concise meta descriptions for each page using relevant keywords.</li>
                        <li>Optimize image sizes, leverage browser caching, and use a CDN to improve page load speed.</li>
                        <li>Increase keyword usage naturally within headings, content, and image alt attributes.</li>
                    </ul>
                </div>
                <div class="bg-gray-50 rounded-lg p-4">
                    <div class="flex items-center mb-2">
                        <svg class="h-5 w-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"/></svg>
                        <h4 class="font-semibold text-amber-600">Google Presence – Normal</h4>
                    </div>
                    <ul class="list-disc pl-5">
                        <li>Update Google My Business with complete details and latest photos.</li>
                        <li>Collect client reviews to boost local trust and search visibility.</li>
                    </ul>
                </div>
                <div class="bg-gray-50 rounded-lg p-4">
                    <div class="flex items-center mb-2">
                        <svg class="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                        <h4 class="font-semibold text-green-600">Instagram – Necessary</h4>
                    </div>
                    <ul class="list-disc pl-5">
                        <li>Add a call-to-action and business link in your Instagram bio.</li>
                        <li>Use location-based hashtags and keywords in captions and reels.</li>
                    </ul>
                </div>
                <div class="bg-gray-50 rounded-lg p-4">
                    <div class="flex items-center mb-2">
                        <svg class="h-5 w-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"/></svg>
                        <h4 class="font-semibold text-amber-600">Facebook – Normal</h4>
                    </div>
                    <ul class="list-disc pl-5">
                        <li>Pin top testimonials or promotions to build credibility.</li>
                        <li>Share blog posts and direct traffic to landing pages regularly.</li>
                    </ul>
                </div>
            </div>
        `;

        const proposalSection = document.querySelector("#proposal-page .container");
        const auditSummary = proposalSection.querySelector(".bg-white.rounded-xl.shadow-lg.p-6.mb-12.max-w-4xl");
        proposalSection.insertBefore(container, auditSummary.nextSibling);
    }

    // Package selection logic
    packageButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            selectedPackage = btn.getAttribute("data-package");
            selectedPrice = parseInt(btn.getAttribute("data-price"));

            proposalPage.classList.add("hidden");
            checkoutPage.classList.remove("hidden");

            updateOrderSummary(selectedPackage, selectedPrice);
        });
    });

    function updateOrderSummary(pkg, price) {
        let name = "";
        if (pkg === "starter") name = "Starter SEO Kit";
        else if (pkg === "social") name = "Social Booster Pack";
        else if (pkg === "full") name = "Full Growth Pack";

        orderSummary.innerHTML = `
            <div class="flex justify-between mb-2">
                <span class="text-gray-700 font-medium">${name}</span>
                <span class="text-gray-700 font-medium">$${price}</span>
            </div>
        `;
        subtotal.textContent = `$${price}`;
        total.textContent = `$${price}`;
    }

    // Final order complete logic
    completeOrderBtn.addEventListener("click", () => {
        checkoutPage.classList.add("hidden");
        congratsPage.classList.remove("hidden");
    });
});
