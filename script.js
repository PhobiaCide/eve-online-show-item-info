const categories = {
  weapons: {
    swords: ["long sword", "short sword", "great sword"],
    axes: ["battle axe", "hand axe", "throwing axe"],
    bows: ["long bow", "short bow", "composite bow"],
  },
  armor: {
    head: ["helmet", "hood", "circlet"],
    body: ["chest plate", "shirt", "robe"],
    legs: ["greaves", "leggings", "pants"],
  },
};

const typesByGroup = Object.fromEntries(
  Object.entries(categories).flatMap(([category, groups]) =>
    Object.entries(groups).map(([group, types]) => [
      `${category}-${group}`,
      types,
    ])
  )
);
console.log(typesByGroup);

const categorySelect = document.querySelector("#category-select");
const groupInput = document.querySelector("#group-input");
const typeInput = document.querySelector("#type-input");
const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-content");
//console.log(categorySelect)
for (const category of Object.keys(categories)) {
  const option = new Option(category, category);
  //categorySelect.add(option);
}
groupInput.disabled = true;


categorySelect.addEventListener("change", () => {
  groupInput.innerHTML = '<option value="">--Select a group--</option>';
  typeInput.innerHTML = '<option value="">--Select a type--</option>';

  const selectedCategory = categorySelect.value;
  const groups = Object.keys(categories[selectedCategory]);

  for (const group of groups) {
    const option = new Option(group, `${selectedCategory}-${group}`);
    groupInput.add(option);
  }

  groupInput.disabled = false;
});

groupInput.addEventListener("change", () => {
  typeInput.innerHTML = '<option value="">--Select a type--</option>';

  const selectedGroup = groupInput.value;
  const types = typesByGroup[selectedGroup];

  for (const type of types) {
    const option = new Option(type, type.toLowerCase().replace(" ", "-"));
    typeInput.add(option);
  }

  typeInput.disabled = false;
});

typeInput.addEventListener("change", () => {
  tabContents.forEach((tabContents) => {
    tabContent.classList.remove("active");
  });

  const marketPriceTab = document.querySelector("#tab-market-price");
  marketPriceTab.classList.add("active");

  for (const tabLink of tabLinks) {
    if (tabLink.getAttribute("href") === `#${typeInput.value}-tab`) {
      tabLink.classList.add("active");
    } else {
      tabLink.classList.remove("active");
      tabLink.classList.add("disabled");
    }
  }
});

class option {
  constructor({ categoryId, category, groupId, group,  type }) {
    this.category = category;
    this.group = group;
    this.type = type;
  }
}
