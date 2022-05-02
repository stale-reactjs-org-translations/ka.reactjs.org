---
id: cdn-links
title: CDN ბმულები
permalink: docs/cdn-links.html
prev: create-a-new-react-app.html
next: release-channels.html
---

როგორც React, ისე ReactDOM ხელმისაწვდომია შინაარის მიწოდების ქსელის (CDN) მეშვეობით.

```html
<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

ზემოთ მოცემული ვერსიები განკუთვნილია მხოლოდ დეველოპმენტისათვის და არ არის შესაფერისი საწარმოო გარემოსათვის გამოსაყენებლად. React-ის შეკუმშული (მინიფიცირებული) და ოპტიმიზირებული ვერსიები ხელმისაწვდომია შემდეგ ბმულებზე:

```html
<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
```

`react`-ისა და `react-dom`-ის კონკრეტული ვერსიის ჩასატვირთად ჩაანაცვლეთ `17` სასურველი ვერსიის ნომრით.

### რატომ `crossorigin` ატრიბუტი? {#why-the-crossorigin-attribute}

თუ React-თან სამუშაოდ CDN-ს იყენებთ, გირჩევთ, გამოიყენოთ [`crossorigin`](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) ატრიბუტი:

```html
<script crossorigin src="..."></script>
```

ასევე გირჩევთ, დარწმუნდეთ, რომ თქვენს მიერ გამოყენებული CDN ადგენს `Access-Control-Allow-Origin: *` HTTP-სათაურს:

![Access-Control-Allow-Origin: *](../images/docs/cdn-cors-header.png)

React 16 და უფრო ახალ ვერსიებში ეს აუმჯობესებს [შეცდომების დამუშავების პრაქტიკას](/blog/2017/07/26/error-handling-in-react-16.html).
