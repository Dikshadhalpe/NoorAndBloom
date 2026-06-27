# Noir & Bloom — Coffee Shop Landing Page

A premium, modern, fully responsive landing page for a fictional coffee brand, **Noir & Bloom**. Built with plain HTML5, CSS3, and vanilla JavaScript (ES6) — no frameworks, no build step.

![Status](https://img.shields.io/badge/status-complete-4CAF50) ![No Bootstrap](https://img.shields.io/badge/framework-none-6F4E37)

---

## ✨ Features

- Sticky navbar — transparent on load, solid on scroll, with a slide-in mobile menu
- Full-screen parallax hero with a floating cup illustration and animated scroll indicator
- Featured Coffee product grid with hover lift + image zoom
- "Why Choose Us" feature cards with icon micro-animations
- About section with animated, scroll-triggered stat counters
- Best Sellers horizontal scroll-snap carousel
- Masonry-style photo gallery
- Auto-sliding testimonials carousel with dot navigation
- Newsletter section with inline form feedback
- Contact form + opening hours + map placeholder + social links
- Luxury footer with quick links and working hours
- Ripple-effect buttons, "Add to Cart" confirmation state, back-to-top button
- Scroll-reveal animations on every section
- Fully responsive (desktop → tablet → mobile), no horizontal scroll
- Accessible: semantic HTML, ARIA labels, visible focus states, alt text on every image, `prefers-reduced-motion` support

---

## 📁 Project Structure

```
coffee/
├── index.html      # Page markup and content
├── style.css       # Design system, layout, animations, responsive rules
├── script.js       # Navbar state, carousels, counters, form handling, micro-interactions
└── README.md       # This file
```

---

## 🚀 Getting Started

No build tools or dependencies required.

1. Download/copy all three files (`index.html`, `style.css`, `script.js`) into the same folder.
2. Open `index.html` directly in any modern browser — **or**, for the best experience with relative paths and fonts, serve it locally:

   ```bash
   # Python
   python3 -m http.server 8000

   # Node
   npx serve .
   ```
3. Visit `http://localhost:8000` in your browser.

That's it — it's a static site, so it can also be deployed as-is to GitHub Pages, Netlify, Vercel, or any static host.

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#F8F5F2` |
| Primary Coffee | `#6F4E37` |
| Secondary | `#A67C52` |
| Accent | `#D4A373` |
| Dark Text | `#2C1810` |
| Light Surface | `#FFF8F0` |
| Success | `#4CAF50` |

**Typography:** Playfair Display (headings) · Poppins (body) · Montserrat (buttons) — all loaded via Google Fonts.

**Spacing:** 8px base spacing scale (`--s1` through `--s9` in `style.css`).

---

## 🖼️ Image Credits

All photography is sourced from **[Unsplash](https://unsplash.com)** and used under the [Unsplash License](https://unsplash.com/license) (free to use, no attribution legally required — credited below as good practice). Images are hot-linked directly from Unsplash's CDN, so no local image files are included in this project.

> ⚠️ For a production deployment, download and self-host these images (or replace with your own/licensed photography) rather than hot-linking indefinitely.

### Hero
| Section | URL |
|---|---|
| Hero background | https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1800&auto=format&fit=crop |

### Featured Coffee
| Item | URL |
|---|---|
| Ethiopian Pour-Over | https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=900&auto=format&fit=crop |
| Velvet Oat Latte | https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=900&auto=format&fit=crop |
| Midnight Espresso | https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=900&auto=format&fit=crop |
| Slow Cold Brew | https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=900&auto=format&fit=crop |

### About
| Item | URL |
|---|---|
| Barista at counter | https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1000&auto=format&fit=crop |

### Best Sellers
| Item | URL |
|---|---|
| Heritage Cappuccino | https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=700&auto=format&fit=crop *(same photo as hero, smaller crop)* |
| Smoked Mocha | https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=700&auto=format&fit=crop |
| Salted Caramel Macchiato | https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=700&auto=format&fit=crop |
| Classic Flat White | https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=700&auto=format&fit=crop |
| Single Origin Espresso | https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=700&auto=format&fit=crop |

### Gallery
| Item | URL |
|---|---|
| Cozy interior | https://images.unsplash.com/photo-1493857671505-72967e2e2760?q=80&w=800&auto=format&fit=crop |
| Coffee beans close-up | https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop |
| Espresso machine in action | https://images.unsplash.com/photo-1463797221720-6b07e6426c24?q=80&w=800&auto=format&fit=crop |
| Pour-over brewing | https://images.unsplash.com/photo-1504627298434-2119d6928e9e?q=80&w=800&auto=format&fit=crop |
| Latte art in mug | https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=800&auto=format&fit=crop |
| Counter with pastries | https://images.unsplash.com/photo-1442550528053-c431ecb55509?q=80&w=800&auto=format&fit=crop |

### Testimonials (customer portraits)
| Item | URL |
|---|---|
| Ananya R. | https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop |
| Kabir M. | https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop |
| Priya S. | https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop |

*(All testimonial names and quotes are fictional, written for this demo.)*

---

## 🛠️ Customization Tips

- **Swap images:** replace any Unsplash URL in `index.html` with a local path (e.g. `assets/hero.jpg`) once you've downloaded your own assets.
- **Colors/fonts:** all editable from the `:root` variables at the top of `style.css`.
- **Carousel timing:** adjust the `5500` (ms) value in the testimonial autoplay logic in `script.js`.
- **Form submissions:** the newsletter and contact forms currently show a client-side success message only — wire up the `fetch()` calls in `script.js` to your backend or a service like Formspree to actually send data.

---

## 📄 License

This is a demo/portfolio project. Code is free to use and modify. Image rights belong to their respective Unsplash photographers under the Unsplash License.