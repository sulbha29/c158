AFRAME.registerComponent("cursor-events", {
  schema: {
    selectedItemId: { default: "", type: "string" }
  },
  init() {
    this.handleMouseEnter()
  },
  handlePlacesState() {
    id = this.el.getAttribute("id")
    console.log(id)
    const placesId = ["taj_mahal", "budapest", "new_york_city", "eiffel_tower"]
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container")
      placeContainer.setAttribute("cursor-events", { selectedItemId: id })
    }
    this.el.setAttribute("material", { color: "pink", opacity: 1 })
  },
  handleMouseEnter() {
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesState()
    })
  }
})