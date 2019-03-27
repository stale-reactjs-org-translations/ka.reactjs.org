---
id: introducing-jsx
title: Introducing JSX
permalink: docs/introducing-jsx.html
prev: hello-world.html
next: rendering-elements.html
---

დაუკვირდით ცვლადის ამ გამოცხადებას:

```js
const element = <h1>Hello, world!</h1>;
```

ეს სახალისო ტეგ-სინტაქსი არც სტრინგია და არც - HTML.

ამ ტეგ-სინტაქსს ჰქვია JSX და წარმოადგენს Javascript-ის სინტაქსურ გაფართოებას. გირჩევთ, რეაქტის გამოყენებისას ისარგებლოთ ამ ტეგ-სინტაქსით, რომ აღწეროთ, თუ როგორ უნდა გამოიყურებოდეს UI. JSX-მა შესაძლოა მოგაგონოთ ტემპლეიტ ენები, თუმცა რეალურად JSX აქვს იგივე სიმძლავრე, რაც ზოგადად Javascript-ს.

JSX ქმნის React-"ელემენტებს". ელემენტების DOM-ში გარენდერებას [შემდგომ სექციაში](/docs/rendering-elements.html) განვიხილავთ. ქვემოთ შეგიძლიათ გაეცნოთ JSX-ის საფუძვლებს, რაც აუცილებელია მისი გამოყენების დასაწყებად.

### რატომ JSX? {#why-jsx}

React იმ მოცემულობას ემყარება, რომ რენდერის ლოგიკა არსებითად არის დაკავშირებული UI-ის სხვა ლოგიკებთან: ივენთების მართვა, სტეიტის ცვლილება დროში, და მონაცემების შემზადება გამოსაჩენად.

იმის მაგივრად, რომ ხელოვნურად დავყოთ *ტექნოლოგიები* ისე რომ მარქაფი და ლოგიკა სხვა და სხვა ფაილებში განვათავსოთ, React [ანაწევრებს *ფუნქცნიონალობებს*](https://en.wikipedia.org/wiki/Separation_of_concerns) ურთიერთდამოუკიდებელი ერთეულებით რომელთაც ეწოდებათ "კომპონენტები" და რომლებიც შეიცავენ ორივეს, მარქაფსაც და ლოგიკებსაც. კომპონენტებს [სხვა სექციაში](/docs/components-and-props.html) დავუბრუნდებით, თუმცა თუ თქვენთვის არ არის კომფორტული მარქაფის JS-ში ჩასმა, შესაძლოა [ამ ლექციამ](https://www.youtube.com/watch?v=x7cQ3mrcKaY) გადაგარწმუნოთ საპირისპიროში.

React [არ მოითხოვს](/docs/react-without-jsx.html) JSX-ის გამოყენებას, თუმცა დეველოპერთა უმრავლესობა უპირატესობას ანიჭებს მას როგორც ვიზუალურ დამხმარეს UI-ზე Javascript-ით მუშაობისას. ის, ასევე, საშუალებას აძლევს React-ს გამოიტანოს შეცდომებისა და გაფრთხილებების უფრო სასარგებლო შეტყობინებები.

ზემოთქმულის გათვალისწინებით, შევუდგეთ საქმეს!

### გამოსახულებების ჩასმა JSX-ში {#embedding-expressions-in-jsx}

ქვემოთ მოცემულ მაგალითში, ვაცხადებთ ცვლად `name`-ს და შემდგომ ვიყენებთ მას JSX-ში, ფიგურული ფრჩხილების გარშემო შემოვლებით:

```js{1,2}
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

ფიგურულ ფრჩხილებში მოქცეული ნებისმიერი ვალიდური [Javascript-ის გამოსახულება](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) შეგვიძლია ჩავსვათ JSX-ში. მაგალითად, `2 + 2`, `user.firstName`, ან `formatName(user)` - სამივე Javascript-ის ვალიდური გამოსახულებაა.

ქვემოთ მოცემულ მაგალითში, Javascript-ის ფუნქციის, `formatName(user)`, გამოძახების შედეგს ვსვამთ `<h1>` ელემენტში.

```js{12}
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

[](codepen://introducing-jsx)

ადვილად აღქმადი რომ იყოს, JSX-ს მრავალ ხაზად ვანაწევრებთ. აუცილებელი არ არის, მაგრამ როდესაც ასე დაანაწევრებთ, გირჩევთ, რომ მთლიან JSX-ს მრგვალი ფრჩხილები შემოავლოთ გარშემო, რათა აირიდოთ [წერტილმძიმის ავტომატური ჩამატების](https://stackoverflow.com/q/2846283) შესაძლო სირთულეები.

### JSX თავადაც გამოსახულებაა {#jsx-is-an-expression-too}

კომპილირების შედეგად, JSX გამოსახულებები გარდაიქმნებიან Javascript-ის ჩვეულებრივი ფუნქციების გამოძახებებად და საბოლოოდ იქცევიან Javascript-ობიექტებად.

ეს იმას ნიშნავს, რომ შეგვიძლია JSX გამოვიყენოთ `if` სტეიტმენტის და `for` ციკლის შიგნით, მივანიჭოთ ცვლადს, მივიღოთ ის როგორც არგუმენტ(ებ)ი, და დავაბრუნოთ ფუნქციის გამოძახებისას:

```js{3,5}
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

### ატრიბუტების განსაზღვრა JSX-ით {#specifying-attributes-with-jsx}

ატრიბუტი რომ განსაზღვროთ როგორც სტრინგი, შეგიძლიათ გამოიყენოთ ბრჭყალები:

```js
const element = <div tabIndex="0"></div>;
```

ასევე, შეგიძლიათ გამოიყენოთ ფიგურული ფრჩხილები, რომ ჩასვათ Javascript-ის გამოსახულება როგორც ატრიბუტი:

```js
const element = <img src={user.avatarUrl}></img>;
```

არ შემოავლოთ ბრჭყალები ფიგურულ ფრჩხილებს, როდესაც სვამთ Javascript-ის გამოსახულებას ატრიბუტში. ან ბრჭყალები უნდა გამოიყენოთ (სტრინგებისთვის), ან ფიგურული ფრჩხილები (გამოსახულებებისთვის), მაგრამ არა - ორივე ერთად ერთი და იმავე ატრიბუტისთვის.

>**გაფრთხილება:**
>
> რადგან JSX უფრო ახლოს არის Javascript-თან, ვიდრე HTML-თან, React იყენებს `camelCase` თვისების სახელდების კონვენციას HTML-ატრიბუტების სახელების მაგივრად.
>
>მაგალითადა, `class` იქნება [`className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) JSX-ში, და `tabindex` იქნება [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex).

### Children-ის განსაზღვრა JSX-ით {#specifying-children-with-jsx}

თუ ტეგი ცარიელია, შეგიძლიათ დახუროთ მაშინათვე `/>`, როგორც ეს XML-შია:

```js
const element = <img src={user.avatarUrl} />;
```

JSX-ტეგები შეიძლება შეიცავდნენ childen-ს:

```js
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

### JSX პრვენციას უკეთებს შეტევას ინექციების მეშვეობით {#jsx-prevents-injection-attacks}

მომხმარებლის ინფუთის ჩასმა JSX-ში უსაფრთხოა:

```js
const title = response.potentiallyMaliciousInput;
// უსაფრთხოა:
const element = <h1>{title}</h1>;
```

დეფოლტად, სანამ გაარენდერებს, React DOM [ასუფთავებს](https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html) ნებისმიერ მნიშვნელობას რომელიც JSX-შია ჩასმული. ამდენად, შეუძლებელია ისეთი რამის შეყვანა, რაც ექსპლიციტურად არ არის დაწერილი თქვენს აპლიკაციაში. სანამ გარენდერდება ყველაფერი გადაკონვერტირდება სტრინგად. ასე ხდება [XSS (cross-site-scripting)](https://en.wikipedia.org/wiki/Cross-site_scripting) შეტევების პრევენცია.

### JSX წარმოადგენს ობიექტებს {#jsx-represents-objects}

Babel აკომპილირებს JSX-ს `React.createElement()`-ის გამოძახებებად.

ეს ორი მაგალითი იდენტურია:

```js
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

```js
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

`React.createElement()` ასრულებს რამდენიმე შემოწმებას რომ დაგეხმაროთ ბაგებისაგან თავისუფალი კოდის დაწერაში, მაგრამ არსებითად ის უბრალოდ ქმნის ამგვარ ობიექტებს:

```js
// შენიშვნა: ქვემოთ მოცემული ობიექტის სტრუქტურა გამარტივებულია
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

ამ ობიექტებს ეწოდებათ "React-ელემენტები". ამ ობიექტებს შეგიძლიათ შეხედოთ როგორც აღწერებს იმისა, რისი გამოჩენაც გსურთ ეკრანზე. React კითხულობს ამ ობიექტებს და იყენებს მათ იმისათვის, რომ ააწყოს და, საჭიროების შემთხვევაში, განაახლოს DOM.

React-ელემენტების DOM-ში გარენდერებას განვიხილავთ შემდგომ სექციაში.

>**რჩევა:**
>
>გირჩევთ გამოიყენოთ ["Babel" ენის დეფინიცია](https://babeljs.io/docs/editors) თქვენი რჩეული ედიტორისთვის, რათა, როგორც ES6-ის, ასევე, JSX-ის კოდიც სწორად გაგიფერადოთ. ეს ვებსაიტი იყენებს [Oceanic Next](https://labs.voronianski.com/oceanic-next-color-scheme/) ფერთა სქემას, რომელიც თავსებადია ზემოთ აღნიშნულ დეფინიციასთან.
