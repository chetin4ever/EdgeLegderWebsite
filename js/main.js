function initMap() {
  const loc = { lat: 21.006209, lng: 75.549481 }
  const map = new google.maps.Map(document.querySelector(".map"), {
    center: { lat: 21.006209, lng: 75.549481 },
    zoom: 14,
  })
  const marker = new google.maps.Marker({ position: loc, map })
}
//sticky menu background
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9
  } else {
    document.querySelector("#navbar").style.opacity = 1
  }
})

//scroll animation
$("#navbar a , .btn").on("click", function (event) {
  console.log(this.hash)
  if (this.hash !== "") {
    event.preventDefault()
    const hash = this.hash
    $("html,body").animate(
      {
        scrollTop: $(hash).offset().top - 10,
      },
      800
    )
  }
})
