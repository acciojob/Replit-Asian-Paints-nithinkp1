document.addEventListener("DOMContentLoaded", () => {
    const changeBtn = document.getElementById("change_button");
    const resetBtn = document.getElementById("Reset");
    const gridItems = document.querySelectorAll(".grid-item");

    function resetColors() {
        gridItems.forEach(item => {
            item.style.backgroundColor = "transparent";
        });
    }

    resetBtn.addEventListener("click", resetColors);

    changeBtn.addEventListener("click", () => {
        const blockId = document.getElementById("block_id").value;
        const colorId = document.getElementById("colour_id").value;

        resetColors();

        if (blockId < 1 || blockId > 9) {
            alert("Please enter a valid Block ID between 1 and 9");
            return;
        }

        const block = document.getElementById(blockId);
        block.style.backgroundColor = colorId;
    });
});
