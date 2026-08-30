const themeBtn = document.querySelector("#theme-btn");

if (themeBtn) {
  themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
}

const placesData = [
  {
    title: "الحرم الإبراهيمي",
    city: "الخليل",
    image: "images/ibrahemmousq.jpg",
    badge: "آثار",
    badgeColor: "darkgoldenrod",
    description:
      "معلم تاريخي وديني بارز يقع في مدينة الخليل القديمة ويضم أضرحة الأنبياء.",
  },

  {
    title: "المسجد الأقصى",
    city: "القدس",
    image: "images/domoftheerock.JPG",
    badge: "آثار",
    badgeColor: "darkgoldenrod",
    description:
      "أحد أكبر المساجد في العالم ومن أكثرها قدسية، يقع داخل البلدة القديمة بالقدس.",
  },

  {
    title: "كنيسة المهد",
    city: "بيت لحم",
    image: "images/almahd.jpg",
    badge: "آثار",
    badgeColor: "darkgoldenrod",
    description:
      "الكنيسة التي ولد فيها السيد المسيح، وتعد من أقدم كنائس العالم.",
  },

  {
    title: "مطعم ابو رامي",
    city: "بيت لحم",
    image: "images/aborami.jpg",
    badge: "مطاعم",
    badgeColor: "rgb(36, 109, 102)",
    description:
      "يقدم أشهى المأكولات الشعبية والشرقية في مدينة بيت لحم.",
  },

  {
    title: "مطعم القدس العتيقة",
    city: "القدس",
    image: "images/alqudsres.jpg",
    badge: "مطاعم",
    badgeColor: "rgb(36, 109, 102)",
    description:
      "مطعم مميز يقدم المأكولات المقدسيّة التقليدية في أجواء تراثية.",
  },

  {
    title: "مطعم فيلا",
    city: "الخليل",
    image: "images/villa.jpg",
    badge: "مطاعم",
    badgeColor: "rgb(36, 109, 102)",
    description:
      "تجربة طعام مميزة وأجواء هادئة في قلب مدينة الخليل.",
  },

  {
    title: "واد القف",
    city: "الخليل",
    image: "images/images (5).jpg",
    badge: "طبيعة",
    badgeColor: "rgb(170, 89, 73)",
    description:
      "محمية طبيعية خلابة وغابات أشجار صنوبر مناسبة للتنزه والمشي.",
  },

  {
    title: "بتير",
    city: "بيت لحم",
    image: "images/images (6).jpg",
    badge: "طبيعة",
    badgeColor: "rgb(170, 89, 73)",
    description:
      "قرية مدرجة على قائمة التراث العالمي وتشتهر بمدرجاتها الزراعية ونظام الري القديم.",
  },
];



const urlParams = new URLSearchParams(window.location.search);
const placeId = urlParams.get("id");



if (placeId !== null && placesData[placeId]) {
  const place = placesData[placeId];

  const titleEl = document.querySelector("#details-title");
  const imageEl = document.querySelector("#details-img");
  const cityEl = document.querySelector("#details-city");
  const badgeEl = document.querySelector("#details-badge");
  const descEl = document.querySelector("#details-desc");

  if (titleEl) {
    titleEl.textContent = place.title;
  }

  if (imageEl) {
    imageEl.src = place.image;
  }

  if (cityEl) {
    cityEl.textContent = "⚲ " + place.city;
  }

  if (badgeEl) {
    badgeEl.textContent = place.badge;
    badgeEl.style.backgroundColor = place.badgeColor;
  }

  if (descEl) {
    descEl.textContent = place.description;
  }
}