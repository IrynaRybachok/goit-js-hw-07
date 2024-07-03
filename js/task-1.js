const totalCategories = document.querySelectorAll(`ul#categories .item`);

console.log (`Number of categories: ${totalCategories.length}`);

totalCategories.forEach(categories => {
    const category = categories.children[0].textContent;
    const element = categories.children[1].children.length;
    console.log (`Category: ${category} \n Elements: ${element}`)
})
