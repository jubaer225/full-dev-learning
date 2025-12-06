// ===========================
// Theme JavaScript
// ===========================

document.addEventListener("DOMContentLoaded", function () {
  console.log("Theme loaded successfully!");

  // Example: Initialize theme features
  initTheme();
});

/**
 * Initialize theme functionality
 */
function initTheme() {
  // Add your initialization code here
  console.log("Initializing theme...");

  // Example: Log shop information
  if (typeof Shopify !== "undefined") {
    console.log("Shopify object available");
  }
}

/**
 * Example utility function
 */
function log(message) {
  if (window.DEBUG) {
    console.log("[Theme]", message);
  }
}

// Example: Listen for Shopify theme events
document.addEventListener("shopify:section:load", function (event) {
  console.log("Section loaded:", event.detail);
});

document.addEventListener("shopify:section:unload", function (event) {
  console.log("Section unloaded:", event.detail);
});

document.addEventListener("shopify:section:select", function (event) {
  console.log("Section selected:", event.detail);
});

document.addEventListener("shopify:section:deselect", function (event) {
  console.log("Section deselected:", event.detail);
});
