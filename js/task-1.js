const itemsList = document.querySelectorAll(".item");
    console.log("Number of categories: ", `${itemsList.length}`);

itemsList.forEach(item =>
    console.log(`Category:  ${item.firstElementChild.textContent}`,
        `\nElements:  ${item.lastElementChild.childElementCount}`));