//your JS code here. If required.
document.getElementById("change_button").addEventListener("click", function () {
  const blockId = document.getElementById("block_id").value.trim();
  const color = document.getElementById("colour_id").value.trim();

  // Reset all grid colors first
  resetColors();

  // Validate blockId (must be between 1 and 9)
  const block = document.getElementById(blockId);
  if (!block || isNaN(blockId) || blockId < 1 || blockId > 9) {
    alert("Please enter a valid block ID between 1 and 9.");
    return;
  }

  // Change background color of selected block
  block.style.backgroundColor = color;
});

document.getElementById("Reset").addEventListener("click", resetColors);

// Helper function to clear all colors
function resetColors() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(item => {
    item.style.backgroundColor = "transparent";
  });
}
