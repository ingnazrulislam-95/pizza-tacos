# Prague Pizza & Tacos – Website

A static, mobile-friendly website for a pizza and tacos shop in Prague. It uses plain HTML, CSS and JavaScript, so it needs no build step and can be hosted for free on GitHub Pages.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure: header, hero, menu, offers, contact, cart drawer |
| `style.css` | Design (colors are variables at the top) |
| `script.js` | Menu data, shop details, cart, search, filters, English/Czech texts, WhatsApp ordering |

## Features

- English and Czech with a language switcher (the choice is remembered)
- Menu with search and category filters (Pizza, Tacos, Combo Meals, Sides, Drinks)
- Shopping cart: add, change quantity, remove, total in CZK (saved in the browser)
- Delivery or pickup choice, with form validation
- "Send order via WhatsApp" opens a pre-filled message to the restaurant
- Special offers and a student deal (sample offers)
- Contact details, opening hours and a Google Maps link
- Responsive layout for mobile, tablet and desktop

## Important limits

- This is a **static site**. Orders are not stored or processed. An order exists only when the customer sends the WhatsApp message.
- **There is no online payment.** Payment is arranged with the restaurant.
- All prices, offers, the address, the phone number and the opening hours are **sample values or placeholders** until the owner confirms them.
- Product images are emoji placeholders. Add real photos (see below).

## Run it locally

1. Keep `index.html`, `style.css` and `script.js` in the same folder.
2. Double-click `index.html` to open it in your browser.

## Edit the website

Everything you will normally change is at the top of `script.js`.

**WhatsApp number**
In `CONFIG`, set `whatsapp` to the number with the country code, digits only, no `+` or spaces. Example: `420123456789`. Placeholder: `420000000000`.

**Address, phone, hours, map**
In `CONFIG`, edit `address`, `phone` and `hours` (English and Czech). Put the full address in `mapQuery` so the map link opens the right place.

**Menu items and prices**
In the `MENU` list, edit, copy or delete items. Each item has:

```js
{ id: 1, cat: "pizza", emoji: "🍕", img: "", price: 199,
  name: { en: "Margherita Pizza", cs: "Pizza Margherita" },
  desc: { en: "…", cs: "…" } }
```

- Use a unique `id` for every item.
- `cat` can be `pizza`, `tacos`, `combo`, `sides` or `drinks`. To add a new category, also add its name to both languages in the `T` object (the same key you used for `cat`).
- `price` is a number in CZK.

**Product photos**
1. Create an `images` folder next to `index.html` and add your photos (use photos you own or have a licence for).
2. Set `img: "images/margherita.jpg"` for that item. If `img` is empty, the emoji is shown.

**Special offers**
Edit the `OFFERS` list in `script.js`.

**Shop name**
Change it in `index.html` (the `<title>` and the `.brand` link) and in the WhatsApp message text in `script.js` (search for `Prague Pizza & Tacos`).

**Colors**
Change the variables at the top of `style.css` (`--red`, `--deep`, `--orange`).

## Publish for free with GitHub Pages

1. Create a GitHub account and a new repository (for example `pizza-shop`).
2. Upload `index.html`, `style.css` and `script.js` (and the `images` folder if you made one).
3. Go to **Settings → Pages**, choose **Deploy from a branch**, select the `main` branch and the `/ (root)` folder, then save.
4. After a minute or two the site is available at `https://yourusername.github.io/pizza-shop/`.
5. Test it on a phone, then share the link on Facebook, Instagram, Google Business Profile and WhatsApp.

To update the site later, edit the files on GitHub and commit. The site refreshes automatically.

## Before going live – checklist

- [ ] Replace the WhatsApp placeholder number and send yourself a test order
- [ ] Confirm all prices and offers with the owner, then remove the "sample prices" note (`sample` text in `script.js`)
- [ ] Add the real address, phone and opening hours
- [ ] Add real food photos
- [ ] Check the Czech texts with a native speaker
- [ ] Check the page on a phone

## What needs more than a static site

These cannot work on GitHub Pages alone:

- Saving orders and showing them to staff (needs a backend and database)
- Online card payments (needs a payment provider such as Stripe or Comgate, plus a server)
- A secure admin login and editing the menu from a web page (needs a backend or a service such as Supabase or Firebase)
- Order emails or SMS (needs an email or SMS service)
- Real customer reviews (add only genuine ones from real customers)
