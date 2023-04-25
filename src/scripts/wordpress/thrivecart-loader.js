// ---------------------------------------------------------------- //
// Copyright: Innki Tech 2023. All Rights Reserved                  //
// Mantainer: Helder Torres <helder.torres@innki.tech>              //
// This file is licensed under the MPL 2.0 license                  //
// License text available at https://www.mozilla.org/en-US/MPL/2.0  //
// ---------------------------------------------------------------- //

// Settings
const queryParams             = new URLSearchParams(window.location.search);
const couponCodeValue         = queryParams.get(couponCodeParam);
const payFromSpainSelector    = document.querySelector(`#${payFromSpainParam}`);
const payTaxExemptionSelector = document.querySelector(`#${payTaxExemptionParam}`);

// Add Thrivecart Params
if (couponCodeValue !== null)      thrivecartObj.queryParams["coupon"]       = couponCodeValue;
if (couponCodeCacheParam !== null) thrivecartObj.queryParams["coupon_cache"] = (couponCodeCacheParam === 'true');
thrivecartObj.queryParams["passthrough[utm_source]"]                         = queryParams.get("utm_source");
thrivecartObj.queryParams["passthrough[utm_campaign]"]                       = queryParams.get("utm_campaign");
thrivecartObj.queryParams["passthrough[utm_content]"]                        = queryParams.get("utm_content");
thrivecartObj.queryParams["passthrough[utm_medium]"]                         = queryParams.get("utm_medium");
thrivecartObj.queryParams["passthrough[utm_term]"]                           = queryParams.get("utm_term");

// Store Params
storeParam(payProcessorParam, "mx");

// Store Query Params
storeQueryParam(queryParams, payFromSpainParam);
storeQueryParam(queryParams, payTaxExemptionParam);

// Load Params
loadParam(payFromSpainParam, payFromSpainSelector, "select");
loadParam(payTaxExemptionParam, payTaxExemptionSelector, "select");

// Remove Query Params
window.removeQueryParams();

// Add Event Listeners
payFromSpainSelector.addEventListener("change", (evt) => window.storeParam(evt.target.id, evt.target.value));
payFromSpainSelector.addEventListener("change", (evt) => window.loadParam(payTaxExemptionParam, payTaxExemptionSelector, "select"));
payTaxExemptionSelector.addEventListener("change", (evt) => window.storeParam(evt.target.id, evt.target.value));
payFromSpainSelector.addEventListener("change", () => window.toggleThrivecartCheckout(thrivecartObj, payProcessorParam, payFromSpainParam, payTaxExemptionParam));
payTaxExemptionSelector.addEventListener("change", () => window.toggleThrivecartCheckout(thrivecartObj, payProcessorParam, payFromSpainParam, payTaxExemptionParam));
window.addEventListener("load", () => window.toggleThrivecartCheckout(thrivecartObj, payProcessorParam, payFromSpainParam, payTaxExemptionParam));