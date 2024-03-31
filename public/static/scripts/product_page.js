function scrollToPurchaseSection() {
  const purchaseSection = document.getElementById("section8");
  window.scrollTo({
    top: purchaseSection.offsetTop,
    behavior: "smooth",
  });
}
