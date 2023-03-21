const range = (n) =>
  Array(n)
    .fill(0)
    .map((_, i) => i);
const random = (n) => Math.random() * n;
const randInt = (n) => Math.floor(random(n));
const randomColor = () =>
  `#${range(6)
    .map(() => randInt(10))
    .join("")}`;
const randomBackground = () =>
  `linear-gradient(${random(
    180
  )}deg, ${randomColor()} 0%, ${randomColor()} 100%)`;

const images = [
    "https://res.cloudinary.com/ds574fco0/image/upload/v1679326882/github/0_o5kehl.jpg",
    "https://res.cloudinary.com/ds574fco0/image/upload/v1679326883/github/2_wk18oy.jpg",
    "https://res.cloudinary.com/ds574fco0/image/upload/v1679326883/github/1_fvfe7a.jpg",
    "https://res.cloudinary.com/ds574fco0/image/upload/v1679326883/github/5_fmy9kb.jpg",
    "https://res.cloudinary.com/ds574fco0/image/upload/v1679326883/github/4_oyg7fc.jpg",
    "https://res.cloudinary.com/ds574fco0/image/upload/v1679326885/github/10_i3llly.jpg",
    "https://res.cloudinary.com/ds574fco0/image/upload/v1679326885/github/8_sajoy5.jpg",
    "https://res.cloudinary.com/ds574fco0/image/upload/v1679326885/github/7_wtyh8v.jpg",
    "https://res.cloudinary.com/ds574fco0/image/upload/v1679326885/github/6_i1msni.jpg",
    
  null,
  null
];
const randomImage = () => images[randInt(images.length)];

const app = new Vue({
  el: "#app",
  data: {
    items: [],
    containerW: 0,
    containerH: 0
  },
  methods: {
    createItems: function () {
      const h = window.innerHeight;
      const w = window.innerWidth;

      const segs = 10;
      const d = 1 / segs;
      const s = w * d * 0.95;
      const rows = Math.floor((h * 0.95) / (s * 0.85));

      const items = [];
      range(rows).forEach((iy) => {
        const mody = iy % 2;
        range(segs - 1 * mody).forEach((ix) => {
          const left = s * ix + mody * s * 0.5;
          const top = 0.85 * s * iy;
          const img = randomImage();
          const background = randomBackground();
          items.push({ key: `${ix}-${iy}`, background, top, left, s, img });
        });
      });

      this.containerW = w * 0.95;
      this.containerH = 0.85 * s * (rows - 1) + s;
      this.items = items;
    }
  },
  created: function () {
    window.addEventListener("resize", this.createItems);
    this.createItems();
  }
});
