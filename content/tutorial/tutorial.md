---
id: tutorial
title: "სახელმძღვანელო: შესავალი React-ში"
layout: tutorial
sectionid: tutorial
permalink: tutorial/tutorial.html
redirect_from:
  - "docs/tutorial.html"
  - "docs/why-react.html"
  - "docs/tutorial-ja-JP.html"
  - "docs/tutorial-ko-KR.html"
  - "docs/tutorial-zh-CN.html"
---

ეს სახელმძღვანელო არ მოითხოვს React-ის არანაირ (არსებულ) ცოდნას. 

## ვიდრე საქმეს შევუდგებოდეთ {#before-we-start-the-tutorial}

ამ პრაქტიკული სამუშაოს მიმდინარეობისას შევქმნით პატარა თამაშს. **თქვენ შესაძლოა მოგინდეთ მისი გამოტოვება, რადგან, შეიძლება მომავალში არ აპირებთ თამაშები შექმნათ, მაგრამ უმჯობესია არ გამოტოვოთ.** მიდგომები, რომლებსაც ამ სახელმძღვანელოდან შეიმეცნებთ, ფუნდამენტურია ნებისმიერი React აპლიკაციისთვის, და მათი დაუფლება გაგიმარტივებთ React-ის სიღრმისეულად გააზრებას.

>რჩევა
>
>ეს სახელმძღვანელო განკუთვნილია მათთვის, ვინც ამჯობინებს **ისწავლოს კეთებით**. თუ ამჯობინებთ, რომ ცნებები მიყოლებით შეისწავლოთ, გამოიყენეთ ჩვენი [ეტაპობრივი სახელმძღვანელო](/docs/hello-world.html). შეიძლება ითქვას, რომ პრაქტიკული სამუშაო და ეტაპობრივი სახელმძღვანელო ერთმანეთს ავსებენ.

სახელმძღვანელო დაყოფილია რამდენიმე განყოფილებად:

* [გარემოს მოწყობა](#setup-for-the-tutorial) დაგეხმარებათ, მიიღოთ **საწყისი პოზიცია**, რათა მიჰყვეთ შემდგომ მითითებებს.
* [მიმოხილვა](#overview) შეგასწავლით React-ის **ფუნდამენტურ საკითხებს**, როგორებიცაა: კომპონენტები, თვისებები და მდგომარეობა.
* [თამაშზე მუშაობის დასასრული](#completing-the-game) შეგასწავლით React-ზე წერისას **ყველაზე ხშირად გამოყენებულ მიდგომებს**.
* [დროში მოგზაურობის დამატება](#adding-time-travel) უფრო **მკაფიოდ დაგანახებთ** React-ის უნიკალურ ძლიერ მხარეებს.

სახელმძღვანელოდან სარგებლის მისაღებად არ არის აუცილებელი, რომ ერთდროულად ყველა განყოფილება გაიაროთ. ეცადეთ გაიაროთ იმდენი, რამდენსაც შეძლებთ, თუნდაც ეს იყოს ერთი ან ორი განყოფილება.

### რას ვქმნით? {#what-are-we-building}

ამ სახელმძღვანელოში გაჩვენებთ, თუ როგორ შექმნათ ინტერაქტიული თამაში - ჯვრები და ნულები React-ის გამოყენებით. 

თქვენ შეგიძლიათ იხილოთ, თუ რის შექმნას ვაპირებთ: **[საბოლოო შედეგი](https://codepen.io/gaearon/pen/gWWZgR?editors=0010)**. თუ ვერ ჩაწვდით კოდის შინაარსს, ან თუ თქვენთვის კოდის სინტაქსი არ არის ნაცნობი, არ იდარდოთ! სახელმძღვანელოს მიზანი ის არის, რომ დაგეხმაროთ React-ისა და მისი სინტაქსის შეცნობაში.

გირჩევთ, რომ ნახოთ თამაში ჯვრები და ნულების საბოლოო შედეგი, ვიდრე შეუდგებით პრაქტიკულ მუშაობას. ერთ-ერთი მთავარი მახასიათებელი, რომელიც უნდა გაითვალისწინოთ, არის სათამაშო სივრცის მარჯვენა მხარეს არსებული დანომრილი სია. ეს სია შეიცავს ისტორიას ყველა იმ სვლისა, რომელიც განხორციელდა თამაშის განმავლობაში, ხოლო მისი განახლება ხდება თამაშის მიმდინარეობისას.

როცა თამაში ჯვრები და ნულების საბოლოო ვერსიას გაეცნობით, შეგიძლიათ დახუროთ. ჩვენ დავიწყებთ უფრო მარტივი ნიმუშით. ჩვენი შემდეგი ნაბიჯია გარემოს მომზადება თამაშის შექმნის პროცესის დასაწყებად.

### წინაპირობები {#prerequisites}

ჩვენ ვვარაუდობთ, რომ თქვენთვის ნაცნობია HTML და JavaScript, მაგრამ თქვენ შეძლებთ მიყვეთ სახელმძღვანელოს იმ შემთხვევაშიც, თუ თქვენ იცით რომელიმე სხვა პროგრამირების ენა. ჩვენ ასევე ვვარაუდობთ, რომ თქვენთვის ნაცნობია პროგრამირების ცნებები, როგორებიცაა: ფუნქციები, ობიექტები, მასივები და, თუნდაც მცირედით - კლასები. 

თუ აპირებთ, რომ გადახედოთ JavaScript-ის საფუძვლებს, ჩვენ რეკომენდაციას ვუწევთ [ამ გზამკვლევს](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript). გაითვალისწინეთ, რომ ჩვენ ასევე გამოვიყენებთ ES6-ის (JavaScript-ის უახლესი ვერსია) ზოგიერთ თვისებას, როგორიცაა [ისარ-ფუნქციები](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), [კლასები](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) და [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const). შეგიძლიათ გამოიყენოთ [Babel REPL](babel://es5-syntax-example), რათა იხილოთ, თუ როგორ გამოიყურება ES6 კოდი კომპილაციის შემდეგ.

## გარემოს მოწყობა {#setup-for-the-tutorial}

ამ სახელმძღვანელოთი სარგებლობის ორი გზა არსებობს: წეროთ კოდი თქვენს ბრაუზერში, ან მოაწყოთ ლოკალური დეველოპმენტის გარემო თქვენს კომპიუტერში.

### ვარიანტი 1: კოდის წერა ბრაუზერში {#setup-option-1-write-code-in-the-browser}

ეს უსწრაფესი გზაა დასაწყებას! 

პირველ რიგში, გახსენით ეს **[საწყისი კოდი](https://codepen.io/gaearon/pen/oWWQNa?editors=0010)** ახალ ჩანართში. თქვენ დაინახავთ თამაში - ჯვრები და ნულების ცარიელ ცხრილს და React-ის კოდს. პრაქტიკული სამუშაოს განმავლობაში სწორედ ამ კოდის რედაქტირებას მოვახდენთ.

შეგიძლიათ გამოტოვოთ გარემოს მოწყობის მეორე ვარიანტი და გადახვიდეთ განყოფილებაზე, სადაც [მიმოვიხილავთ](#overview) React-ს.

### ვარიანტი 2: ლოკალური დეველოპმენტის გარემო {#setup-option-2-local-development-environment}

ეს არის არჩევითი და არასავალდებულო ამ პრაქტიკული სამუშაოსთვის!

<br>

<details>

<summary><b>არასავალდებულო: ინსტრუქციები, რომლებიც დაგეხმარებათ, შეძლოთ თქვენი რჩეული ტექსტური რედაქტორის გამოყენება პრაქტიკული მუშაობისთვის</b></summary>

ეს არის უფრო შრომატევადი გზა, მაგრამ, ამ გზით შეძლებთ, პრაქტიკული მუშაობისას გამოიყენოთ თქვენი რჩეული რედაქტორი. აი, რა უნდა გააკეთოთ:

1. დარწმუნდით, რომ თქვენს მოწყობილობაზე დაყენებულია [Node.js](https://nodejs.org/en/)-ის უახლესი ვერსია.
2. მიყევით [Create React App-ის დაყენების ინსტრუქციას](/docs/create-a-new-react-app.html#create-react-app), რომ შექმნათ ახალი პროექტი.

```bash
npx create-react-app my-app
```

3. წაშალეთ ახალი პროექტის `src/` საქაღალდეში არსებული ყველა ფაილი

>შენიშვნა:
>
>**არ წაშალოთ `src` საქაღალდე მთლიანად, წაშალეთ მხოლოდ მასში არსებული ფაილები.** ჩვენ ამ ფაილებს ჩვენი პროექტისთვის შესაბამისი ფაილებით ჩავანაცვლებთ.

```bash
cd my-app
cd src

# თუ თქვენ იყენებთ Mac-ს ან Linux-ს:
rm -f *

# ან, თუ Windows-ს იყენებთ:
del *

# შემდეგ დაბრუნდით უკან, პროექტის საქაღალდეში:
cd ..
```

4. `src/` საქაღალდეში შექმენით `index.css` ფაილი და ჩაწერეთ მასში [ეს CSS კოდი](https://codepen.io/gaearon/pen/oWWQNa?editors=0100).

5. `src/` საქაღალდეში შექმენით `index.js` ფაილი და ჩაწერეთ მასში [ეს JS კოდი](https://codepen.io/gaearon/pen/oWWQNa?editors=0010).

6. `src/` საქაღალდეში არსებულ `index.js` ფაილის თავში (ზემოთ), დაამატეთ ეს სამი ხაზი:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
```

ამის შემდეგ, თუ თქვენ გაუშვებთ `npm start` ბრძანებას პროექტის საქაღალდეში და ბრაუზერში გახსნით `http://localhost:3000` მისამართს, თქვენ უნდა დაინახოთ თამაში - ჯვრები და ნულების ცარიელი ცხრილი.

ჩვენ გირჩევთ, მიყვეთ [ამ ინსტრუქციებს](https://babeljs.io/docs/editors/), რომ მოახდინოთ სინტაქსის ხაზგასმის რეგულირება თქვენი რედაქტორისთვის.

</details>

### დამეხმარეთ, გავიჭედე! {#help-im-stuck}

თუ თქვენ გაიჭედეთ, გთხოვთ, შეამოწმეთ [საზოგადოების მხარდაჭერის წყაროები](/community/support.html). განსაკუთრებით, [ჩათი Reactiflux](https://discord.gg/reactiflux) არის დიდებული გზა, დახმარების უსწრაფესად მიღებისთვის. თუ პასუხს ვერ მიიღებთ, ან თუ ვერ დაგეხმარებიან, გთხოვთ, [განაცხადეთ ჩვენთან](https://github.com/reactjs/ru.reactjs.org/issues/new) და ჩვენ დაგეხმარებით.

## მიმოხილვა {#overview}

ახლა, როცა ყველაფერი მოვამზადეთ, მოდით, მიმოვიხილოთ React!

### რა არის React? {#what-is-react}

React არის დეკლარაციაული, ეფექტური და მოქნილი JavaScript-ის ბიბლიოთეკა მომხმარებლის ინტერფეისების შესაქმნელად. ის საშუალებას გაძლევთ, შეადგინოთ რთული UI-ს სტრუქტურა პატარა, იზოლირებული კოდის ნაწილებისგან, - „კომპონენტებისგან“.

React-ში გვაქვს რამოდენიმე, ერთმანეთისგან განსხვავებული სახის კომპონენტები, მაგრამ, ჩვენ დავიწყებთ `React.Component`-ის ქვეკლასებით: 

```javascript
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>საყიდლების სია {this.props.name}-სათვის</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// გამოყენების მაგალითი: <ShoppingList name="მარკი" />
```

ჩვენ ისევ მივუბრუნდებით ამ სახალისო, XML-ის მსგავს ტეგებს. კომპონენტების გამოყენებით ჩვენ ვეუბნებით React-ს, თუ რისი დანახვა გვინდა ეკრანზე. როცა მონაცემები იცვლება, React ეფექტურად ანახლებს და ხელახლა ასახავს ჩვენს კომპონენტებს.

*ShoppingList* არის **React-ის კლასური კომპონენტის** მაგალითი. კომპონენტს გადაეცემა პარამეტრები, რომლებსაც ეწოდება - `props` (`properties`-ის, ანუ *თვისებების* შემოკლებული ვარიანტი), და შედეგად აბრუნებს ვიზუალურ იერარქიას `render` მეთოდის გამოყენებით.

`render` მეთოდი აბრუნებს იმის *აღწერას*, თუ რისი ნახვა გვინდა ეკრანზე. React იღებს ამ აღწერას და გვიჩვენებს ვიზუალურ შედეგს. უფრო კონკრეტულად, `render` აბრუნებს **React-ის ელემენტს**, რომელიც არის მსუბუქი აღწერა იმისა, თუ რისი ასახვა გვსურს. React დეველოპერების უმეტესობა იყენებს სპეციალურ სინტაქსს, ეგრედ წოდებულ "JSX"-ს, რომელიც ამ სტრუქტურების აგებას ამარტივებს. აგების მომენტში, `<div />` გარდაიქმნება - `React.createElement('div')`-ად. ზემოთ მოცემული მაგალითი იგივეა, რაც:

```javascript
return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', /* ... h1-ის შვილობილები ... */),
  React.createElement('ul', /* ... ul-ის შვილობილები ... */)
);
```

[იხილეთ სრული ვერსია.](babel://tutorial-expanded-version)

თუ დაინტერესდებით, `createElement()` დეტალურად არის განხილული [API სქოლიო](/docs/react-api.html#createelement)-ში, მაგრამ, ამ პრაქტიკულ სახელმძღვანელოში მას აღარ გამოვიყენებთ. მის ნაცვლად გავაგრძელებთ JSX-ის გამოყენებას.

JSX აღჭურვილია JavaScript-ის სრული ძალით. JSX-ში, ფიგურილ ფრჩხილებს შორის, შეგიძლიათ გამოიყენოთ *ნებისმიერი* JavaScript გამოსახულება. React-ის ყოველი ელემენტი არის JavaScript-ის ობიექტი, რომელიც შეგიძლიათ შეინახოთ ცვლადში, ან გაავრცელოთ თქვენი პროგრამის ფარგლებში.

ზემოთ მოცემული `ShoppingList` კომპონენტი, მხოლოდ DOM-ში ჩაშენებულ კომპონენტებს გამოსახავს, როგორიცაა `<div />` და `<li />`. მაგრამ, ასევე შეგვიძლია, გამოვსახოთ ჩვენს მიერ შექმნილი კომპონენტებიც. მაგალითად, ახლა შეგვიძლია გამოვსახოთ საყიდლების სრული სია `<ShoppingList />`-ის დაწერით. React-ის ყოველი კომპონენტი ინკაფსულირებულია, და შესაძლოა, გამოყენებულ იქნეს დამოუკიდებლად; ეს საშუალებას გვაძლევს, შევქმნათ რთული ინტერფეისები - მარტივი კომპონენტებისგან.

### გავერკვეთ საწყის კოდში {#inspecting-the-starter-code}

თუ აპირებთ, რომ პრაქტიკული მუშაობა განაგრძოთ **თქვენს ბრაუზერში,** გახსენით **[საწყისი კოდი](https://codepen.io/gaearon/pen/oWWQNa?editors=0010)** ახალ ჩანართში. თუ გაგრძელებას **ლოკალურ გარემოში** აპირებთ, გახსენით `src/index.js` ფაილი, რომელიც თქვენი პროექტის საქაღალდეშია (ეს ფაილი [სამუშაო გარემოს მოწყობისას](#setup-option-2-local-development-environment) შექმენით).

ეს კოდი არის საწყისი წერტილი იმისა, რის შექმნასაც ვაპირებთ. უკვე უზრუნველვყავით საჭირო CSS სტილები, ასე რომ, შეგიძლიათ ფოკუსირდეთ მხოლოდ React-ის შესწავლაზე და თამაში - ჯვრები და ნულების შექმნაზე.

თუ კოდს დააკვირდებით, შენიშნავთ, რომ მოცემული გვაქვს სამი React კომპონენტი:

* Square (უჯრედი)
* Board (დაფა)
* Game (თამაში)

ყოველი `Square` კომპონენტი ასახავს თითო `<button>`-ს, ხოლო `Board` კომპონენტი ასახავს - ცხრა `<Square />`-ს. `Game` კომპონენტი ასახავს `<Board />`-ს და რამოდენიმე ელემენტს, რომლებსაც მოგვიანებით გადავაკეთებთ. ჯერ არ გვაქვს არც ერთი ინტერაქტიული კომპონენტი.

### მონაცემთა მიწოდება Props-ის მეშვეობით {#passing-data-through-props}

მოდით, ვცადოთ რაიმე მონაცემის გადაწოდება `Board` კომპონენტიდან - `Square` კომპონენტში.

გირჩევთ პრაქტიკული სამუშაოს განმავლობაში კოდი წეროთ თქვენი ხელით, არ გამოიყენოთ კოპირება-ჩასმის მიდგომა. ეს გაგიადვილებთ საკითხის შეცნობას და გაგიუმჯობესებთ მეხსიერებას.

`Board` კომპონენტის `renderSquare` მეთოდში შევიტანოთ ცვლილება, `Square` კომპონენტს გადავაწოდოთ `value` თვისება (`Prop`):

```js{3}
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}
```

შევცვალოთ `Square` კომპონენტის `render` მეთოდი, რათა მოვახდინოთ მიღებული მნიშვნელობის ჩვენება ეკრანზე. ამისათვის, `{/* TODO */}` ჩავანაცვლოთ `{this.props.value}`-ით:

```js{5}
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}
```

ცვლილებამდე:

![React Devtools](../images/tutorial/tictac-empty.png)

ცვლილების შემდეგ: ყოველი უჯრედის შიგნით იხალავთ ციფრს.

![React Devtools](../images/tutorial/tictac-numbers.png)

**[იხილეთ სრული კოდი ამჟამინდელი მდგომარეობით](https://codepen.io/gaearon/pen/aWWQOG?editors=0010)**

გილოცავთ! ახლახანს წარმატებით „გადააწოდეთ თვისება (prop)“ მშობელი `Board` კომპონენტიდან, - შვილობილ `Square` კომპონენტს. თვისებების გადაწოდება React-ის აპლიკაციებში არის გზა ინფორმაციის დინებისა მშობელი კომპონენტებიდან - შვილობილებში.

### გავხადოთ კომპონენტი ინტერაქტიული {#making-an-interactive-component}

მოდით, `Square` კომპონენტზე დაწკაპუნებისას, მასში ჩავწეროთ სიმბოლო - „X“.
პირველ რიგში, გადავაკეთოთ `Square` კომპონენტის `render()` ფუნქციის მიერ დაბრუნებული `button` ტეგი: 

```javascript{4}
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={function() { console.log('დააწკაპუნეთ'); }}>
        {this.props.value}
      </button>
    );
  }
}
```

ამის შემდეგ, თუ თქვენ რომელიმე უჯრედზე დააწკაპუნებთ, თქვენი ბრაუზერის კონსოლში გამოჩნდება შეტყობინება - „დააწკაპუნეთ“.

>შენიშვნა
>
>იმისათვის, რომ ნაკლები ვწეროთ და თავი ავარიდოთ [`this`-ის დამაბნეველ ქცევას](https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/), მოვლენების დამმუშავებლებისთვის (აქ და შემდგომში) გამოვიყენებთ [ისარ-ფუნქციების სინტაქსს](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions):
>
>```javascript{4}
>class Square extends React.Component {
>  render() {
>    return (
>      <button className="square" onClick={() => console.log('დააწკაპუნეთ')}>
>        {this.props.value}
>      </button>
>    );
>  }
>}
>```
>
>მიაქციეთ ყურედღება, თუ როგორ გადავცემთ `onClick={() => console.log('click')}`-ით *ფუნქციას*, როგორც `onClick` თვისებას (prop). React ამ ფუნქციას გამოიძახებს მხოლოდ დაწკაპუნების შემდეგ. `() =>`-ის გამოტოვება, და `onClick={console.log('click')}`-ის დაწერა არის ხშირი შეცდომა. მსგავსი კოდი გაეშვება იმდენჯერ, რამდენჯერაც კომპონენტის ასახვა (render) მოხდება.

ჩვენი შემდეგი მიზანია `Square` კომპონენტმა „დაიმახსოვროს“, რომ მასზე მოხდა დაწკაპუნება და ჩავწეროთ მასში სიმბოლო - „X“. იმისათვის, რომ კომპონენტმა რამე „დაიმახსოვროს“, იყენებს **state**-ს (მდგომარეობა).

React-ის კომპონენტებისთვის მდგომარეობის განსასაზღვრად, მათსავე კონსტრუქტორში `this.state` უნდა დავამატოთ. `this.state` უნდა განვიხილოთ, როგორც React-ის იმ კომპონენტის კერძო საკუთრება, რომელშიც განსაზღვრულია. მოდით, შევინახოთ `Square`-ის მიმდინარე მნიშვნელობა `this.state`-ში და მოვახდინოთ მისი შეცვლა, როცა `Square`-ზე მოხდება დაწკაპუნება.

state-ის ინიციალიზებისთვის, პირველ რიგში, კლასს უნდა დავამატოთ კონსტრუქტორი:

```javascript{2-7}
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => console.log('დააწკაპუნეთ')}>
        {this.props.value}
      </button>
    );
  }
}
```

>შენიშვნა
>
>[JavaScript-ის კლასებში](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), როცა შვილობილი კლასის კონსტრუქტორს განვსაზღვრავთ, ყოველთვის გვჭირდება `super`-ის გამოძახება. React-ის ყოველი კლასური კომპონენტი, რომელსაც `constructor` გააჩნია, უნდა იწყებოდეს `super(props)`-ის გამოძახებით.

ახლა მოდით, შევცვალოთ  `Square` კომპონენტის `render` მეთოდი, რომ ავსახოთ მიმდინარე მდგომარეობის (state) მნიშვნელობა დაწკაპუნებისას:

* `<button>` ტეგში, `this.props.value` შევცვალოთ `this.state.value`-ით.
* შევცვალოთ `onClick={...}` მოვლენის დამმუშავებელი `onClick={() => this.setState({value: 'X'})}`-ით.
* `className` და `onClick`  თვისებები (props) მოვათავსოთ სხვადასხვა ხაზზე, რათა კოდი გავხადოთ უფრო მარტივად წაკითხვადი.

ამ ცვლილებების შემდეგ, `Square` კომპონენტის `render` მეთოდის მიერ დაბრუნებული `<button>` ტეგი ასე გამოიყურება:

```javascript{12-13,15}
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
}
```

`Square` კომპონენტის `render` მეთოდში `onClick` დამმუშავებლის მიერ `this.setState`-ის გამოძახებით, ჩვენ React-ს ვეუბნებით, რომ `Square` კომპონენტი ასახოს (render) ხელახლა, როცა მასში არსებულ `<button>`-ზე მოხდება დაწკაპუნება. განახლების შემდეგ, `Square` კომპონენტის `this.state.value`-ს მნიშვნელობა გახდება `'X'`, ამიტომ, თამაშის დაფაზე გამოჩნდება სიმბოლო -`X`.

როცა კომპონენტში ვიძახებთ `setState`-ს, React ანგარიშმიუცემლად ანახლებს ამ კომპონენტში მოთავსებულ, შვილობილ კომპონენტებსაც.

**[იხილეთ სრული კოდი ამჟამინდელი მდგომარეობით](https://codepen.io/gaearon/pen/VbbVLg?editors=0010)**

### დეველოპერის ინსტრუმენტები {#developer-tools}

[Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)-ისა და [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)-ისათვის განკუთვნილი დამატება (extension) - React Devtools საშუალებას გაძლევთ, თქვენი ბრაუზერის დეველოპერის ხელსაწყოთა ჩანართიდან დააკვირდეთ React კომპონენტების იერარქიას.

<img src="../images/tutorial/devtools.png" alt="React Devtools" style="max-width: 100%">

React Devtools დამატება საშუალებას მოგცემთ, შეამოწმოთ თქვენი React კომპონენტების თვისებები (props) და მდგომარეობა (state).

React Devtools დამატების ინსტალაციის შემდეგ, შეგიძლიათ მაუსის მარჯვენა ღილაკით დააწკაპუნოთ გვერდზე არსებულ ნებისმიერ ელემენტზე, შემდეგ დააწკაპუნოთ `Inspect` (`გამოკვლევა`)-ზე, რომ გახსნათ დეველოპერის ხელსაწყოთა ჩანართი, რომელშიც მარჯვნივ გამოჩნდება React-ის განყოფილებები ("⚛️ Components" და "⚛️ Profiler"). კომპონენტების იერარქიის სანახავად გამოიყენება "⚛️ Components" განყოფილება.

**მაგრამ იმისათვის, რომ ეს CodePen-ზე ავამუშავოთ, რამოდენიმე დამატებითი ეტაპის გავლაა საჭირო:**

1. გაიარეთ ავტორიზაცია, ან დარეგისტრირდით და დაადასტურეთ თქვენი ელ. ფოსტის მისამართის ავთენტურობა (აუცილებელია სპამის თავიდან ასაცილებლად).
2. დააწკაპუნეთ "Fork" ღილაკზე.
3. დააწკაპუნეთ "Change View"-ზე და შემდეგ აირჩიეთ "Debug mode". 
4. ახალ ჩანართში, რომელიც გაიხსნება, დეველოპერის ხელსაწყოთა შორის უნდა იყოს React-ის განყოფილება.

## დავასრულოთ თამაშზე მუშაობა {#completing-the-game}

ჩვენ უკვე მზად გვაქვს ძირითადი ელემენტები ჩვენი თამაშისთვის - ჯვრები და ნულები. იმისათვის, რომ თამაში დავასრულოთ, გვჭირდება "X" და "O" სიმბოლოების მონაცვლეობითი ასახვა დაფაზე, და გამარჯვებულის გამოვლენის გზა.

### მდგომარეობის გადატანა ზემოთ {#lifting-state-up}

ამჟამად, ყოველი `Square` კომპონენტი ინახავს თამაშის მდგომარეობას. იმისათვის, რომ გამარჯვებულის განსაზღვრა შევძლოთ, ცხრავე უჯრედის მნიშვნელობა ერთ ადგინზე უნდა შევინახოთ.

შესაძლოა ვიფიქროთ, რომ საჭიროა, უბრალოდ `Board` კომპონენტმა მოახდინოს ყოველი `Square` კომპონენტის მდგომარეობის შემოწმება. მიუხედავად იმისა, რომ ასეთი რამ React-ში შესაძლებელია, ჩვენ უარვყოფთ ამ მიდგომას, რადგან კოდი ხდება რთულად გასაგები, რთულია მისი [რესტრუქტურიზაცია](https://en.wikipedia.org/wiki/Code_refactoring) და იზრდება შეცდომების დაშვების ალბათობა. ყოველ `Square` კომპონენტში ცალ-ცალკე შენახვის ნაცვლად, თამაშის მდგომარეობის შენახვისათვის საუკეთესო ადგილია მშობელი, `Board` კომპონენტი. `Board` კომპონენტს შეუძლია თვისების გადაწოდების გზით უთხრას თითოეულ `Square`-ს, თუ რა უნდა ასახოს ეკრანზე, [ისევე, როგორც ეს გავაკეთეთ, როცა თითოეულ `Square`-ს გადავაწოდეთ ციფრი](#passing-data-through-props).

**იმისათვის, რომ შევაგროვოთ მრავალი შვილობილი კომპონენტების მონაცემები, ან გვქონდეს ორ კომპონენტს შორის კავშირი, საჭიროა, შევქმნათ საზიარო მდგომარეობა მათ მშობელ კომპონენტში. მშობელი კომპონენტიდან შეგვიძლია მდგომარეობა გადავაწოდოთ შვილობილ კომპონენტებს თვისებების სახით; ამ გზით შვილობილი კომპონენტები ერწყმიან ერთმანეთს და - მშობელ კომპონენტს.**

მდგომარეობის გადატანა მშობელ კომპონენტში ხშიარია, -- როცა ხდება React-ის კომპონენტების რესტრუქტურიზაცია. მოდით, გამოვიყენოთ ხელსაყრელი შესაძლებლობა და ვცადოთ ამის გაკეთება.

`Board` კომპონენში დავამატოთ კონსტრუქტორი და საწყის მდგომარეობად განვსაზღვროთ ცხრა ელემენტისგან (რომელთა მნიშვნელობაა - `null`) შემდგარი მასივი. ეს ელემენტები შეესაბამება ცხრა უჯრედს:

```javascript{2-7}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  renderSquare(i) {
    return <Square value={i} />;
  }
```

შემდგომში, როცა დაფას შევავსებთ, `this.state.squares` მასივი დაემსგავსება რაღაც ასეთს:

```javascript
[
  'O', null, 'X',
  'X', 'X', 'O',
  'O', null, null,
]
```

`Board` კომპონენტის `renderSquare` მეთოდი ამჟამად ასე გამოიყურება:

```javascript
  renderSquare(i) {
    return <Square value={i} />;
  }
```

დასაწყისში, ჩვენ [გადავაწოდეთ `value` თვისება შვილობილ კომპონენტს](#passing-data-through-props) `Board` კომპონენტიდან, რათა ყოველ უჯრედში გვეჩვენებინა ციფრები 0-დან 8-ის ჩათვლით. შემდეგ, ჩვენ ჩავანაცვლეთ ციფრები სიმბოლო „X“-ით, რომელიც განვსაზღვრეთ [უშუალოდ `Square` კომპონენტის მდგომარეობად](#making-an-interactive-component). ამიტომაც აღარ აქცევს ყურადღებას `Square` კომპონენტი `Board` კომპონენტისაგან გადმოწოდებულ `value` თვისებას.

ახლა ისევ თვისების გადაწოდების ხერხს გამოვიყენებთ. ჩვენ გადავეკეთებთ `Board` კომპონენტს ისე, რომ ყოველ ცალკეულ უჯრედს უთხრას, თუ რა არის მისი მიმდინარე მნიშვნელობა (`'X'`, `'O'`, თუ `null`). `Board` კომპონენტის კონსტრუქტორში უკვე განვსაზღვრეთ `squares` მასივი, ახლა ჩვენ გადავაკეთებთ `Board` კომპონენტის `renderSquare` მეთოდს ისე, რომ მნიშვნელობები ამ მასივიდან წაიკითხოს:

```javascript{2}
  renderSquare(i) {
    return <Square value={this.state.squares[i]} />;
  }
```

**[იხილეთ სრული კოდი ამჟამინდელი მდგომარეობით](https://codepen.io/gaearon/pen/gWWQPY?editors=0010)**

ახლა ყოველი `Square` კომპონენტი მიიღებს `value` თვისებას, რომლის მნიშვნელობაც იქნება `'X'`, `'O'`, ან `null` - ცარიელი უჯრედებისათვის.

ახლა ჩვენ გვჭირდება, რომ შევცვალოთ უჯრედზე დაწკაპუნების შედეგი. ახლა `Board` კომპონენტი ადგენს, თუ რომელი უჯრედებია შევსებული. უნდა ვიპოვოთ გზა, რომლითაც `Square` კომპონენტიდან მოვახერხებთ `Board` კომპონენტის მდგომარეობის განახლებას. რადგან მდგომარეობა მიჩნეულია იმ კომპონენტის კერძო მახასიათებლად, რომელშიც არის განსაზღვრული, ჩვენ არ შეგვიძლია `Board` კომპონენტის მდგომარეობის განახლება უშუალოდ `Square` კომპონენტიდან.

ნაცვლად ამისა, ჩვენ `Board` კომპონენტიდან `Square` კომპონენტს გადავაწვდით ფუნქციას, და უჯრედზე დაწკაპუნებისას, `Square` კომპონენში მოხდება ამ ფუნქციის გამოძახება. მოდით, შევცვალოთ `Board` კომპონენტის `renderSquare` მეთოდი:

```javascript{5}
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
```

>შენიშვნა
>
>ჩვენ წარმოვადგინეთ დაბრუნებული ელემენტი მრავალ ხაზზე უკეთესი წაკითხვადობისთვის, და მოვაქციეთ ფრჩხილებს შორის, რადგან, ზოგადად, JavaScript-ში `return`-ის შემდეგ არ იწერება წერტილ-მძიმე, ეს იწვევს კოდის მუშაობის შეწყვეტას.

Now we're passing down two props from Board to Square: `value` and `onClick`. The `onClick` prop is a function that Square can call when clicked. We'll make the following changes to Square:
ამჟამად, `Board` კომპონენტიდან `Square` კომპონენტს ვაწვდით ორ თვისებას: `value` და `onClick`. `onClick` თვისება არის ფუნქცია, რომელიც `Square` კომპონენტმა უნდა გამოიძახოს მასზე (უჯრედზე) დაწკაპუნებისას. მოდით, `Square` კომპონენტში შევიტანოთ შემდეგი ცვლილებები:

* `Square` კომპონენტის `render` მეთოდში `this.state.value` ჩავანაცვლოთ `this.props.value`-ით.
* `Square` კომპონენტის `render` მეთოდში `this.setState()` ჩავანაცვლოთ `this.props.onClick()`-ით.
* `Square` კომპონენტიდან ამოვშალოთ `constructor`, რადგან `Square` კომპონენტი აღარ არის თამაშის მდგომარეობის შენახვაზე პასუხისმგებელი.

ამ ცვლილებების შემდეგ `Square` კომპონენტი ასე გამოიყურება:

```javascript{1,2,6,8}
class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}
```

როცა უჯრედზე დავაწკაპუნებთ, მოხდება `Board` კომპონენტის მიერ უზრუნველყოფილი `onClick` ფუნქციის გამოძახება. განვიხილოთ, როგორ მიიღწევა ეს:

1. DOM-ის ჩაშენებული `<button>` კომპონენტის `onClick` თვისება ეუბნება React-ს, შექმნას მოვლენის (დაწკაპუნების) დამმუშავებელი.
2. როცა ღილაკზე დაწკაპუნება მოხდება, React გამოიძახებს `Square` კომპონენტის `render()` მეთოდში განსაზღვრულ `onClick` მოვლენის დამმუშავებელს.
3. ეს მოვლენის დამმუშავებელი იძახებს `this.props.onClick()`-ს. `Square` კომპონენტის `onClick` თვისება გადმოწოდებულია `Board` კომპონენტიდან.
4. რადგან `Board` კომპონენტიდან `Square` კომპონენტში გადმოწოდებულია - `onClick={() => this.handleClick(i)}`, დაწკაპუნებისას `Square` კომპონენტი იძახებს `this.handleClick(i)`-ს.
5. ჩვენ ჯერ არ განგვისაზღვრავს `handleClick()` მეთოდი, ამიტომ ჩვენი კოდი არ იმუშავებს. თუ თქვენ ახლა უჯრედზე დააწკაპუნებთ, დაინახავთ წითელ ეკრანს შეცდომის მსგავსი შეტყობინებით:  „this.handleClick is not a function“.

>შენიშვნა
>
>DOM-ის `<button>` ელემენტის `onClick` ატრიბუტს React-ისთვის განსაკუთრებული მნიშვნელობა აქვს, რადგან ეს არის ჩაშენებული კომპონენტი. `Square`-ის მსგავსი, ინდივიდუალური კომპონენტებისთვის სახელების შერჩევა თქვენს განკარგულებაშია. ჩვენ შეგვიძლია, `Square`-ის `onClick` თვისებას, ან `Board`-ის `handleClick` მეთოდს დავარქვათ ნებისმიერი სახელი, და კოდი ისევ იგივენაირად იმუშავებს. React-ში, ზოგადად მიღებულია, `on[Event]` - ვუწოდოთ მახასიათებლებს, რომლებიც წარმოადგენენ მოვლენებს, და `handle[Event]` - ვუწოდოთ მოვლენების დამმუშავებელ მეთოდებს.

როდესაც უჯრედზე დავაწკაპუნებთ, მივიღებთ შეცდომას, რადგან `handleClick` მეთოდი ჯერ არ განგვისაზღვრავს. მოდით, დავამატოთ `handleClick` მეთოდი `Board` კლასში:

```javascript{9-13}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
```

**[იხილეთ სრული კოდი ამჟამინდელი მდგომარეობით](https://codepen.io/gaearon/pen/ybbQJX?editors=0010)**

ამ ცვლილებების შემდეგ, ჩვენ შევძლებთ უჯრედების შევსებას მათსე დაწკაპუნებით ისევე, როგორც ადრე. თუმცა, ახლა ყოველი ცალკეული `Square` კომპონენტის ნაცვლად, მდგომარეობა ინახება - `Board` კომპონენტში. როცა `Board` კომპონენტის მდგომარეობა იცვლება, ანგარიშმიუცემლად ხდება ყოველი `Square` კომპონენტის ხელახლა ასახვა. ყოველი უჯრედის მდგომარეობის შენახვა `Board` კომპონენტში, მომავალში, საშუალებას მოგვცემს, - გამოვავლინოთ გამარჯვებული.

მას შემდეგ, რაც `Square` კომპონენტი აღარ ინახავს მდგომარეობას, უჯრედები მნიშვნელობებს იღებენ `Board` კომპონენტისაგან, და ატყობინებენ `Board` კომპონენტს, როცა მათზე ხდება დაწკაპუნება. React-ის ენით რომ ვთქვათ, `Square` კომპონენტი ახლა არის - **კონტროლირებადი კომპონენტი**. მას სრულად აკონტროლებს `Board` კომპონენტი.

გასათვალისწინებელია, `handleClick` მეთოდში როგორ ვქმნით `squares` მასივის ასლს `.slice()`-ის გამოძახებით გარდაქმნისთვის იმის ნაცვლად, რომ გარდავქმნათ უკვე არსებული მასივი. შემდეგ განყოფილებაში განვმარტავთ, თუ რატომ გვჭირდება `squares` მასივის ასლის შექმნა.

### რატომ არის უცვლელობა მნიშვნელოვანი? {#why-immutability-is-important}

კოდის წინა მაგალითში `.slice()` მეთოდის გამოყენებით `squares` მასივის ასლი შევქმენით, ნაცვლად იმისა, რომ ცვლილება მოგვეხდინა უშუალოდ არსებულ მასივზე. ახლა განვიხილავთ უცვლელობას და გავარკვევთ, თუ რატომ არის მისი შესწავლა ასე მნიშვნელოვანი.

მონაცემში ცვლილების შეტანის ორი საშუალება არსებობს. პირველი საშუალება არის უშუალოდ მონაცემის მნიშვნელობის *მუტაცია* (შეცვლა). მეორე საშუალებაა - ამ მონაცემის ჩანაცვლება მისი ასლით, რომელიც შეიცავს სასურველ ცვლილებს.

#### მონაცემთა უშუალო ცვლილება {#data-change-with-mutation}
```javascript
var player = {score: 1, name: 'გიორგი'};
player.score = 2;
// ახლა player-ის მნიშვნელობა არის {score: 2, name: 'გიორგი'}
```

#### მონაცემთა ირიბი ცვლილება {#data-change-without-mutation}
```javascript
var player = {score: 1, name: 'გიორგი'};

var newPlayer = Object.assign({}, player, {score: 2});
// player-ის მნიშვნელობა არ შეცვლილა, მაგრამ newPlayer-ის მნიშვნელობა არის {score: 2, name: 'გიორგი'}

// ან, თუ თქვენ იყენებთ ობიექტის განვრცობის (spread) სინტაქსს, შეგიძლიათ დაწეროთ:
// var newPlayer = {...player, score: 2};
```

საბოლოო შედეგი იგივე იქნება, ოღონდ (საწყისი მნიშვნელობის) უშუალო ცვლილების გარეშე. ამ მიდგომის რამოდენიმე უპირატესობა განხილულია ქვემოთ.

#### მარტივდება რთული ფუნქციონალი {#complex-features-become-simple}

უცვლელობა გაცილებით ამარტივებს რთული ფუნქციონალის გამართვას. ამ სახელმძღვანელოში, მოგვიანებით, შევიმუშავებთ „დროში მოგზაურობის“ ფუნქციონალს, რომელიც საშუალებას მოგვცემს, გადავხედოთ თამაშის ისტორიას და წინა სვლებზე „გადავხტეთ“. ეს არ არის მხოლოდ თამაშებისთვის განკუთვნილი ფუნქციონალი, წინ და უკან „ხტომის“ შესაძლებლობა ხშირად გვხვდება სხვადასხვა სახის აპლიკაციებში. მონაცემთა უშუალო ცვლილების თავიდან აცილებით საშუალება გვეძლევა, ხელუხლებლად შევინარჩუნოთ თამაშის ისტორიის უწინდელი მდგომარეობა, და მოგვიანებით ხელახლა გამოვიყენოთ.

#### ცვლილებების გამოვლენა {#detecting-changes}

ცვალებად ობიექტებში ცვლილებების გამოვლენა რთულია, რადგან ისინი უშუალოდ იცვლებიან. ასეთ შემთხვევაში ცვლილებების გამოსავლენად ცვალებადი ობიექტის შედარება უნდა მოხდეს მისი წინა ვერსიების ასლი ობიექტების მთელ ხესთან.

უცვლელ ობიექტებში ცვლილებების გამოვლენა ბევრად მარტივია. თუ წარმოდგენილი უცვლელი ობიექტი წინასგან განსხვავებულია, გამოდის, რომ ეს ობიექტი შეიცვალა.

#### დავადგინოთ, როდის უნდა მოხდეს React-ში ხელახალი ასახვა {#determining-when-to-re-render-in-react}

უცვლელობის მთავარი ხეირი ის არის, რომ ის React-ში _სუფთა (pure) კომპონენტების_ შექმნაში გვეხმარება. უცვლელ მონაცემებში ადვილი გამოსავლენია ცვლილება, რაც გვეხმარება იმის დადგენაში, თუ როდის საჭიროებს კომპონენტი ხელახლა ასახვას.

[წარმადობის გაუმჯობესების](/docs/optimizing-performance.html#examples) შესახებ წაკითხვით შეიტყობთ მეტს `shouldComponentUpdate()`-ისა და იმის შესახებ, თუ როგორ იქმნება _სუფთა (pure) კომპონენტები_.

### ფუნქციური კომპონენტები {#function-components}

ახლა `Square` კომპონენტს გადავაკეთებთ **ფუნქციურ კომპონენტად**.

React-ში **ფუნქციური კომპონენტი** არის უფრო მოკრძალებული ხერხი კომპონენტის ჩაწერისა. ასეთი კომპონენტები შეიცავენ მხოლოდ `render` მეთოდს, და არ გააჩნიათ საკუთარი მდგომარეობა. `React.Component`-ის შვილობილი კლასის განსაზღვრის ნაცვლად, შეგვიძლია შევქმნათ მარტივი ფუნქცია, რომელსაც გადაეცემა `props`, და აბრუნებს ვიზუალურ იერარქიას. ფუნქციური კომპონენტის ჩაწერა, კლასურთან შედარებით ნაკლებად შრომატევადია, და მრავალი კომპონენტი შეიძლება გამოისახოს ამ ხერხით.

ჩავანაცვლოთ `Square` კლასი ამ ფუნქციით:

```javascript
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
```

ორივეგან, სადაც `this.props` ფიგურირებს, ჩავანაცვლეთ `props`-ით.

**[იხილეთ სრული კოდი ამჟამინდელი მდგომარეობით](https://codepen.io/gaearon/pen/QvvJOv?editors=0010)**

>შენიშვნა
>
>როცა `Square` კომპონენტი გადავაკეთეთ ფუნქციურ კომპონენტად, ასევე შევცვალეთ ჩანაწერი `onClick={() => this.props.onClick()}` უფრო მოკლე ჩანაწერით - `onClick={props.onClick}` (გაითვალისწინეთ, *ორივე* მხარეს მოშორდა ფრჩხილები).

### სვლების მონაცვლეობა {#taking-turns}

ახლა საჭიროა, გავასწოროთ ჩვენი თამაშის აშკარა ნაკლი: დაფაზე შეუძლებელია გამოისახოს სიმბოლო - „O“.

ნაგულისხმევად, პირველი სვლას განახორციელებს - „X“. ნაგულისხმევი მნიშვნელობის განსაზღვრა შეგვიძლია `Board` კომპონენტის კონსტრუქტორში საწყისი მდგომარეობის გარდაქმნით:

```javascript{6}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
```

მოთამაშის ყოველი სვლის შემდეგ, `xIsNext` (ლოგიკური გამოსახულება)-ის მნიშვნელობა შეიცვლება საპირისპიროთი, - რათა დადგინდეს შემდეგი სვლის მფლობელის ვინაობა, - და მოხდება თამაშის მდგომარეობის შენახვა. მოდით, განვაახლოთ `Board` კომპონენტის `handleClick` ფუნქცია, რომ მოვახდინოთ `xIsNext`-ის მნიშვნელობის შეცვლა - საპირისპიროთი:

```javascript{3,6}
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
```

ამ ცვლილებით, „X“-სა და „O“-ს შორის მოხდება სვლის მონაცვლეობა. სცადეთ!

მოდით, „სტატუსის“ ტექსტიც შევცვალოთ `Board` კომპონენტის `render`-ში ისე, რომ გვაჩვენოს მოთამაშე, რომელმაც უნდა გააკეთოს შემდეგი სვლა:

```javascript{2}
  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      // დანარჩენი არ შეცვლილა
```

ამ ცვლილებების შემდეგ თქვენი `Board` კომპონენტი ასე უნდა გამოიყურებოდეს:

```javascript{6,11-16,29}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
```

**[იხილეთ სრული კოდი ამჟამინდელი მდგომარეობით](https://codepen.io/gaearon/pen/KmmrBy?editors=0010)**

### გამარჯვებულის გამოვლენა {#declaring-a-winner}

ახლა, როცა ვაჩვენებთ მოთამაშეს, რომელმაც უნდა გააკეთოს შემდეგი სვლა, თამაშის დასრულებისას ასევე უნდა ვაჩვენოთ, რომ სვლა აღარ არის. განათავსეთ ამ დამხმარე ფუნქციის ასლი თქვენი ფაილის ბოლოში:

```javascript
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
```

გადაცემული 9 უჯრედის მასივით, ეს ფუნქცია დაადგენს გამარჯვებულს და შესაბამისად დააბრუნებს `'X'`-ს, `'O'`-ს, ან - `null`-ს.

`Board` კომპონენტის `render` ფუნქციაში გამოვიძახებთ `calculateWinner(squares)`-ს იმის შესამოწმებლად, გაიმარჯვა თუ არა მოთამაშემ. თუ მოთამაშე გაიმარჯვებს, შეგვიძლია გამოვაჩინოთ შეტყობინება "გამარჯვებული: X", ან - "გამარჯვებული: O". `Board` კომპონენტის `render` ფუნქციაში `სტატუსის` გამოცხადების მიდგომა უნდა შევცვალოთ ასე:

```javascript{2-8}
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      // დანარჩენი არ შეცვლილა
```

ახლა ჩვენ შეგვიძლია `Board` კომპონენტის `handleClick` ფუნქცია შევცვალოთ ისე, რომ თუ ვიღაცამ გაიმარჯვა, ან თუ უჯრედი უკვე შევსებულია, მოხდეს ფუნქციიდან ნაადრევი გამოსვლა:

```javascript{3-5}
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
```

**[იხილეთ სრული კოდი ამჟამინდელი მდგომარეობით](https://codepen.io/gaearon/pen/LyyXgK?editors=0010)**

გილოცავთ! ახლა თქვენ გაქვთ მუშა თამაში - ჯვრები და ნულები. ამასთანავე, ახლახანს შეისწავლეთ React-ის საფუძვლები. როგორც ჩანს, აქ საბოლოო გამარჯვებული *თქვენ ხართ*.

## Adding Time Travel {#adding-time-travel}

As a final exercise, let's make it possible to "go back in time" to the previous moves in the game.

### Storing a History of Moves {#storing-a-history-of-moves}

If we mutated the `squares` array, implementing time travel would be very difficult.

However, we used `slice()` to create a new copy of the `squares` array after every move, and [treated it as immutable](#why-immutability-is-important). This will allow us to store every past version of the `squares` array, and navigate between the turns that have already happened.

We'll store the past `squares` arrays in another array called `history`. The `history` array represents all board states, from the first to the last move, and has a shape like this:

```javascript
history = [
  // Before first move
  {
    squares: [
      null, null, null,
      null, null, null,
      null, null, null,
    ]
  },
  // After first move
  {
    squares: [
      null, null, null,
      null, 'X', null,
      null, null, null,
    ]
  },
  // After second move
  {
    squares: [
      null, null, null,
      null, 'X', null,
      null, null, 'O',
    ]
  },
  // ...
]
```

Now we need to decide which component should own the `history` state.

### Lifting State Up, Again {#lifting-state-up-again}

We'll want the top-level Game component to display a list of past moves. It will need access to the `history` to do that, so we will place the `history` state in the top-level Game component.

Placing the `history` state into the Game component lets us remove the `squares` state from its child Board component. Just like we ["lifted state up"](#lifting-state-up) from the Square component into the Board component, we are now lifting it up from the Board into the top-level Game component. This gives the Game component full control over the Board's data, and lets it instruct the Board to render previous turns from the `history`.

First, we'll set up the initial state for the Game component within its constructor:

```javascript{2-10}
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
    };
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
```

Next, we'll have the Board component receive `squares` and `onClick` props from the Game component. Since we now have a single click handler in Board for many Squares, we'll need to pass the location of each Square into the `onClick` handler to indicate which Square was clicked. Here are the required steps to transform the Board component:

* Delete the `constructor` in Board.
* Replace `this.state.squares[i]` with `this.props.squares[i]` in Board's `renderSquare`.
* Replace `this.handleClick(i)` with `this.props.onClick(i)` in Board's `renderSquare`.

The Board component now looks like this:

```javascript{17,18}
class Board extends React.Component {
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
```

We'll update the Game component's `render` function to use the most recent history entry to determine and display the game's status:

```javascript{2-11,16-19,22}
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
```

Since the Game component is now rendering the game's status, we can remove the corresponding code from the Board's `render` method. After refactoring, the Board's `render` function looks like this:

```js{1-4}
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
```

Finally, we need to move the `handleClick` method from the Board component to the Game component. We also need to modify `handleClick` because the Game component's state is structured differently. Within the Game's `handleClick` method, we concatenate new history entries onto `history`.

```javascript{2-4,10-12}
  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext,
    });
  }
```

>Note
>
>Unlike the array `push()` method you might be more familiar with, the `concat()` method doesn't mutate the original array, so we prefer it.

At this point, the Board component only needs the `renderSquare` and `render` methods. The game's state and the `handleClick` method should be in the Game component.

**[View the full code at this point](https://codepen.io/gaearon/pen/EmmOqJ?editors=0010)**

### Showing the Past Moves {#showing-the-past-moves}

Since we are recording the tic-tac-toe game's history, we can now display it to the player as a list of past moves.

We learned earlier that React elements are first-class JavaScript objects; we can pass them around in our applications. To render multiple items in React, we can use an array of React elements.

In JavaScript, arrays have a [`map()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) that is commonly used for mapping data to other data, for example:

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2); // [2, 4, 6]
```

Using the `map` method, we can map our history of moves to React elements representing buttons on the screen, and display a list of buttons to "jump" to past moves.

Let's `map` over the `history` in the Game's `render` method:

```javascript{6-15,34}
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
```

**[View the full code at this point](https://codepen.io/gaearon/pen/EmmGEa?editors=0010)**

For each move in the tic-tac-toe game's history, we create a list item `<li>` which contains a button `<button>`. The button has a `onClick` handler which calls a method called `this.jumpTo()`. We haven't implemented the `jumpTo()` method yet. For now, we should see a list of the moves that have occurred in the game and a warning in the developer tools console that says:

>  Warning:
>  Each child in an array or iterator should have a unique "key" prop. Check the render method of "Game".

Let's discuss what the above warning means.

### Picking a Key {#picking-a-key}

When we render a list, React stores some information about each rendered list item. When we update a list, React needs to determine what has changed. We could have added, removed, re-arranged, or updated the list's items.

Imagine transitioning from

```html
<li>Alexa: 7 tasks left</li>
<li>Ben: 5 tasks left</li>
```

to

```html
<li>Ben: 9 tasks left</li>
<li>Claudia: 8 tasks left</li>
<li>Alexa: 5 tasks left</li>
```

In addition to the updated counts, a human reading this would probably say that we swapped Alexa and Ben's ordering and inserted Claudia between Alexa and Ben. However, React is a computer program and does not know what we intended. Because React cannot know our intentions, we need to specify a *key* property for each list item to differentiate each list item from its siblings. One option would be to use the strings `alexa`, `ben`, `claudia`. If we were displaying data from a database, Alexa, Ben, and Claudia's database IDs could be used as keys.

```html
<li key={user.id}>{user.name}: {user.taskCount} tasks left</li>
```

When a list is re-rendered, React takes each list item's key and searches the previous list's items for a matching key. If the current list has a key that didn't exist before, React creates a component. If the current list is missing a key that existed in the previous list, React destroys the previous component. If two keys match, the corresponding component is moved. Keys tell React about the identity of each component which allows React to maintain state between re-renders. If a component's key changes, the component will be destroyed and re-created with a new state.

`key` is a special and reserved property in React (along with `ref`, a more advanced feature). When an element is created, React extracts the `key` property and stores the key directly on the returned element. Even though `key` may look like it belongs in `props`, `key` cannot be referenced using `this.props.key`. React automatically uses `key` to decide which components to update. A component cannot inquire about its `key`.

**It's strongly recommended that you assign proper keys whenever you build dynamic lists.** If you don't have an appropriate key, you may want to consider restructuring your data so that you do.

If no key is specified, React will present a warning and use the array index as a key by default. Using the array index as a key is problematic when trying to re-order a list's items or inserting/removing list items. Explicitly passing `key={i}` silences the warning but has the same problems as array indices and is not recommended in most cases.

Keys do not need to be globally unique; they only need to be unique between components and their siblings.


### Implementing Time Travel {#implementing-time-travel}

In the tic-tac-toe game's history, each past move has a unique ID associated with it: it's the sequential number of the move. The moves are never re-ordered, deleted, or inserted in the middle, so it's safe to use the move index as a key.

In the Game component's `render` method, we can add the key as `<li key={move}>` and React's warning about keys should disappear:

```js{6}
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
```

**[View the full code at this point](https://codepen.io/gaearon/pen/PmmXRE?editors=0010)**

Clicking any of the list item's buttons throws an error because the `jumpTo` method is undefined. Before we implement `jumpTo`, we'll add `stepNumber` to the Game component's state to indicate which step we're currently viewing.

First, add `stepNumber: 0` to the initial state in Game's `constructor`:

```js{8}
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }
```

Next, we'll define the `jumpTo` method in Game to update that `stepNumber`. We also set `xIsNext` to true if the number that we're changing `stepNumber` to is even:

```javascript{5-10}
  handleClick(i) {
    // this method has not changed
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    // this method has not changed
  }
```

We will now make a few changes to the Game's `handleClick` method which fires when you click on a square.

The `stepNumber` state we've added reflects the move displayed to the user now. After we make a new move, we need to update `stepNumber` by adding `stepNumber: history.length` as part of the `this.setState` argument. This ensures we don't get stuck showing the same move after a new one has been made.

We will also replace reading `this.state.history` with `this.state.history.slice(0, this.state.stepNumber + 1)`. This ensures that if we "go back in time" and then make a new move from that point, we throw away all the "future" history that would now become incorrect.

```javascript{2,13}
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
```

Finally, we will modify the Game component's `render` method from always rendering the last move to rendering the currently selected move according to `stepNumber`:

```javascript{3}
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    // the rest has not changed
```

If we click on any step in the game's history, the tic-tac-toe board should immediately update to show what the board looked like after that step occurred.

**[View the full code at this point](https://codepen.io/gaearon/pen/gWWZgR?editors=0010)**

### Wrapping Up {#wrapping-up}

Congratulations! You've created a tic-tac-toe game that:

* Lets you play tic-tac-toe,
* Indicates when a player has won the game,
* Stores a game's history as a game progresses,
* Allows players to review a game's history and see previous versions of a game's board.

Nice work! We hope you now feel like you have a decent grasp of how React works.

Check out the final result here: **[Final Result](https://codepen.io/gaearon/pen/gWWZgR?editors=0010)**.

If you have extra time or want to practice your new React skills, here are some ideas for improvements that you could make to the tic-tac-toe game which are listed in order of increasing difficulty:

1. Display the location for each move in the format (col, row) in the move history list.
2. Bold the currently selected item in the move list.
3. Rewrite Board to use two loops to make the squares instead of hardcoding them.
4. Add a toggle button that lets you sort the moves in either ascending or descending order.
5. When someone wins, highlight the three squares that caused the win.
6. When no one wins, display a message about the result being a draw.

Throughout this tutorial, we touched on React concepts including elements, components, props, and state. For a more detailed explanation of each of these topics, check out [the rest of the documentation](/docs/hello-world.html). To learn more about defining components, check out the [`React.Component` API reference](/docs/react-component.html).
