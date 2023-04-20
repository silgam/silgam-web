function scrollToPurchaseSection() {
  const purchaseSection = document.getElementById("section6");
  window.scrollTo({
    top: purchaseSection.offsetTop,
    behavior: "smooth",
  });
}
