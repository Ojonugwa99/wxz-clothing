// ── PRODUCT DATA ──
const products = [
  {
    name: 'Galaxy Knit Sweater',
    price: '₦85,000',
    tag: 'Featured · Knitwear',
    desc: 'A dramatic black-to-white pixel gradient knit that mimics a galaxy exploding across the shoulder. Premium heavyweight yarn. Relaxed boxy fit.',
    img: 'images/hero.jpg'
  },
  {
    name: 'Star Stud Wide Jeans',
    price: '₦72,000',
    tag: 'New · Denim',
    desc: 'Extra-wide black denim with silver cross-stud detailing cascading down both back pockets. Red WXZ label at waistband. Heavy canvas weight.',
    img: 'images/jeans-stud.jpg'
  },
  {
    name: 'Cross Stud Zip Hoodie',
    price: '₦68,000',
    tag: 'Hoodies',
    desc: 'Full-zip black hoodie with scattered cross-stud pattern in a galaxy arrangement across the chest and sleeves. Heavy-duty zip with chain pull.',
    img: 'images/hoodie-stud.jpg'
  },
  {
    name: 'Scroll Print Denim',
    price: '₦70,000',
    tag: 'Denim',
    desc: 'Indigo denim featuring large-scale ornate scrollwork print in tonal grey. Red WXZ label. Straight wide leg with raw selvedge details.',
    img: 'images/scroll-denim.jpg'
  },
  {
    name: 'Davril Leather Jacket',
    price: '₦145,000',
    tag: 'Outerwear · Leather',
    desc: '"Davril Supply 5ème Étage" chest embroidery on premium grained black leather. Cream quilted interior lining. Tonal logo on chest.',
    img: 'images/leather-black.jpg'
  },
  {
    name: 'Red Wing Leather Jacket',
    price: '₦155,000',
    tag: 'Limited · Outerwear',
    desc: 'Rich crimson leather with white wing embroidery along the sleeve. Decorative cross-motif zipper pull. A statement piece for rare occasions.',
    img: 'images/leather-red.jpg'
  },
  {
    name: '323 Bird Cardigan',
    price: '₦78,000',
    tag: 'Knitwear',
    desc: 'Heavy black cardigan with embroidered bird and cursive "323" graphic at the chest. Asymmetric button placket with WXZ branded buttons.',
    img: 'images/bird-cardigan.jpg'
  },
  {
    name: 'Light Wash Star Jeans',
    price: '₦65,000',
    tag: 'Denim',
    desc: 'Oversized baggy light wash denim with six-pointed star embroidery at both back pockets. Extreme wide leg for a gravity-defying silhouette.',
    img: 'images/light-jeans.jpg'
  },
  {
    name: 'Red Scroll Embroidery Jeans',
    price: '₦68,000',
    tag: 'Denim',
    desc: 'Washed black denim with bold red satin-stitch scroll embroidery over both legs and waist.',
    img: 'images/red-scroll-jeans.jpg'
  },
  {
    name: 'Spiral Bomber Jacket',
    price: '₦120,000',
    tag: 'Outerwear',
    desc: 'All-black satin bomber with tonal embossed spiral "90" graphic on the back. Subtle yellow side panel stripes.',
    img: 'images/spiral-full.jpg'
  },
  {
    name: 'Cross Velvet Bomber',
    price: '₦135,000',
    tag: 'Limited · Outerwear',
    desc: 'Crushed velvet bomber in acid-washed black with a large ornate cross embroidered on the back in red, white, and gold.',
    img: 'images/velvet-bomber.jpg'
  },
  {
    name: 'Scrollwork Ribbed Knit',
    price: '₦82,000',
    tag: 'Knitwear',
    desc: 'Tightly-ribbed black knit sweater with dense tonal scrollwork and floral embroidery across the front.',
    img: 'images/ribbed-knit.jpg'
  },
];

// ── NAV SCROLL ──
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', scrollY > 20);
});

// ── MOBILE NAV ──
let navOpen = false;
function toggleMobileNav() {
  navOpen = !navOpen;
  const mn = document.getElementById('mobileNav');
  mn.classList.toggle('open', navOpen);
  const spans = document.getElementById('hamburger').querySelectorAll('span');
  spans[0].style.transform = navOpen ? 'rotate(45deg) translate(4px, 6px)' : '';
  spans[1].style.opacity   = navOpen ? '0' : '1';
  spans[2].style.transform = navOpen ? 'rotate(-45deg) translate(4px, -6px)' : '';
}
function closeMobileNav() {
  navOpen = false;
  document.getElementById('mobileNav').classList.remove('open');
}

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── MODAL ──
let cartCount = 0;

function openModal(i) {
  const p = products[i];
  document.getElementById('modalImg').src   = p.img;
  document.getElementById('modalImg').alt   = p.name;
  document.getElementById('modalTag').textContent  = p.tag;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalPrice').textContent = p.price;
  document.getElementById('modalDesc').textContent  = p.desc;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function closeModalOnOverlay(e) {
  if (e.target === e.currentTarget) closeModal();
}
function selectSize(btn) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}
function addToCart() {
  cartCount++;
  document.getElementById('cartBtn').textContent = `Bag (${cartCount})`;
  closeModal();
  showToast('Added to bag ✓');
}

// ── TOAST ──
function showToast(msg) {
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, {
    position: 'fixed', bottom: '32px', left: '50%',
    transform: 'translateX(-50%)',
    background: '#1A1A1A', color: '#FAFAF8',
    fontFamily: "'Space Mono', monospace",
    fontSize: '11px', letterSpacing: '0.12em',
    padding: '12px 24px', zIndex: '3000',
    transition: 'opacity 0.3s'
  });
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2200);
}

// ── NEWSLETTER ──
function handleSubscribe(e) {
  e.preventDefault();
  showToast('Welcome to the inner circle ◆');
  e.target.querySelector('input').value = '';
}

// ── DRAG SCROLL (New Arrivals) ──
const sw = document.getElementById('naScroll');
let isDown = false, startX, scrollLeft;
sw.addEventListener('mousedown', e => {
  isDown = true;
  startX = e.pageX - sw.offsetLeft;
  scrollLeft = sw.scrollLeft;
});
sw.addEventListener('mouseleave', () => isDown = false);
sw.addEventListener('mouseup',    () => isDown = false);
sw.addEventListener('mousemove',  e => {
  if (!isDown) return;
  e.preventDefault();
  sw.scrollLeft = scrollLeft - (e.pageX - sw.offsetLeft - startX) * 1.5;
});
