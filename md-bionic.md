---
title: "Markdown"
slug: markdown
template: page
---

**Thi**s **i**s a **dum**my **pag**e **t**o **tes**t **cust**om [**Markdo**wn](https://www.markdownguide.org/) **styli**ng **an**d **parsi**ng **o**n **m**y **websi**te.
**I**t **ca**n **als**o **b**e **use**d **a**s a **Markdo**wn **che**at **she**et.

```toc
from-heading: 1
to-heading: 2
```

## **Met**a **Dat**a

**Markdo**wn **suppor**ts **th**e **us**e **o**f **met**a **dat**a. **Thi**s **i**s **option**al **informati**on **a**t **th**e **beginni**ng **o**f **eve**ry **Markdo**wn **fil**e **whi**ch **doe**s **no**t **ge**t **display**ed.

**Fo**r **examp**le, **thi**s **pag**e **ha**s **th**e **followi**ng **met**a **dat**a:

```md
---
title: "Markdown"
slug: markdown
template: page
---
```

**Whi**le **th**e **met**a **dat**a **secti**on **i**s **general**ly **opti**on, **Markdo**wn **fil**es **fo**r **thi**s **blo**g **wil**l **a**t **lea**st **nee**d **t**o **hav**e **the**se **met**a **dat**a **fiel**ds:

| Field Name | Value                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------- |
| title      | Title of your page. Gets parsed as your first h1 header.                                  |
| slug       | Determines what comes after the slash in ericjanto.com/. Should be unique for every page. |
| template   | Determines which template is used to parse this file. Use article or page.                |

**I**f **yo**u'**r**e **usi**ng **th**e `post` **templa**te, **th**e **requir**ed **fiel**ds **ar**e **the**se:

```md
---
date: 2020-05-10
title: "Starting This Blog"
template: post
slug: starting-this-blog
excerpt: "blablabla"
tags:
  - "student-life"
  - "productivity"
  - "notes"
---
```

**I**f **yo**u **wan**t **t**o **colo**ur-**cod**e **th**e **artic**le, **us**e **th**e **tag**s `computer-science` **o**r `life`, **respective**ly.

**Not**e **tha**t **th**e **met**a **dat**a **secti**on **i**s **separat**ed **fro**m **th**e **res**t **o**f **th**e **docume**nt **usi**ng `---` **befo**re **an**d **aft**er **th**e **secti**on.

## **Tex**t **Styli**ng

**Thi**s **i**s **norm**al **tex**t, **flavour**ed **wit**h **som**e ***itali**cs* **an**d **som**e ****bol**d** **tex**t. **Yo**u **ca**n **als**o ~~**kil**l~~ **stri**ke **throu**gh **tex**t. </br> **Yo**u **ca**n **bre**ak **th**e **tex**t **manual**ly **usi**ng **th**e **HTM**L **ta**g `</br>`.

**T**o **sta**rt a **ne**w **paragra**ph **lea**ve a **bla**nk **lin**e.

```md
This is normal text, flavoured with some _italics_ and some **bold** text. You can also ~~kill~~ strike through text. </br> You can break the text manually using the HTML tag `</br>`.

To start a new paragraph leave a blank line.
```

## **Commen**ts

**Commen**ts **ar**e **bit**s **o**f **you**r **fil**e **whi**ch **yo**u **do**n't **wan**t **pars**ed **an**d **display**ed. **Markdo**wn **doe**s **no**t **com**e **wit**h a **comme**nt **functional**ity. **Howev**er, **yo**u **ca**n **us**e **HTM**L **t**o **wri**te **commen**ts:

`<!--This is a comment.-->`

## **Lin**ks

**W**e **distingui**sh **betwe**en **extern**al **an**d **intern**al **lin**ks. **Extern**al **lin**ks **lin**k **t**o a **forei**gn **we**b **docume**nt. **Intern**al **lin**ks **lin**k **t**o a **par**t **o**f **thi**s **ver**y **webpa**ge.

*   [**Lin**k **t**o **ericjan**to.**co**m](https://ericjanto.com/)
*   [**Lin**k **t**o **th**e **Headin**gs **secti**on **o**f **thi**s **pag**e](/markdown#headings)

```md
[Link text to ericjanto.com](https://ericjanto.com/)
[Link to the Headings section of this page](/markdown#headings)
```

**Not**e **ho**w **th**e **intern**al **lin**k **doe**s **no**t **hav**e a `https://` **o**r `www.` **pref**ix. **I**t **rath**er **follo**ws **thi**s **synt**ax: `/page-name/#section-title`.

**I**t **i**s **goo**d **practi**ce **an**d **a**n **essenti**al **securi**ty **fact**or **t**o **us**e **meaningf**ul **lin**k **tex**ts.

## **Imag**es

**Th**e **synt**ax **fo**r **imag**es **i**s **simil**ar **t**o **th**e **synt**ax **fo**r **lin**ks:

```md
![This is the alt text for an image.](../path/to/image)
```

**I**f **yo**u **wan**t **t**o **ad**d a **subtit**le **t**o **th**e **ima**ge, **us**e **sing**le **quot**es **an**d **ad**d a **tit**le **aft**er **th**e **ima**ge **lin**k.

    !['An xkcd comic on recursion.'](../images/recursion-xkcd.png "An xkcd comic on recursion.")

!['An xkcd comic on recursion.'](../images/recursion-xkcd.png "An xkcd comic on recursion.")

## **Headin**gs

**Us**e a `#` **i**n **fro**nt **o**f a **lin**e **t**o **mar**k **i**t **a**s a **headi**ng. **Th**e **numb**er **o**f **successi**ve `#` **determin**es **th**e **degr**ee **o**f **th**e **headi**ng. **Th**e **degr**ee **doe**s **no**t **onl**y **determi**ne **th**e **styli**ng (**usual**ly **small**er **fo**r a **high**er **degr**ee) **bu**t **ha**s **als**o a **semant**ic **val**ue **use**d **fo**r **identati**on **i**n **th**e **tab**le **o**f **conten**ts.

```md
# This is how to declare a heading of degree 1 in Markdown.

## This is a heading of degree 2.
```

**Headi**ng **degre**es **fro**m `1` **t**o `6` **ar**e **support**ed; **howev**er, **o**n **thi**s **websi**te **w**e **tr**y **t**o **us**e **onl**y **headin**gs **o**f **degr**ee `2` **o**r `3` **with**in **a**n **artic**le **t**o **avo**id **confusi**ng **artic**le **structur**es.

## **Lis**ts

**Lis**t **ca**n **b**e **usef**ul **t**o **prese**nt **vario**us **elemen**ts **with**in **a**n **artic**le **i**n a **structur**ed **wa**y. **W**e **us**e **main**ly **tw**o **typ**es **o**f **lis**t **o**n **thi**s **websi**te:

*   **Norm**al **bullet**ed **lis**ts **whi**ch **us**e a `-` **i**n **fro**nt **o**f **eac**h **ite**m
*   **Enumerat**ed **lis**ts **whi**ch **us**e a **numb**er **i**n **fro**n **o**f **eac**h **ite**m, **starti**ng **wit**h `1`

**Bullet**ed **lis**ts **ca**n **b**e **indent**ed. I **usual**ly **onl**y **us**e **th**e **fir**st **identati**on **lev**el **t**o **kee**p **i**t **simp**le.

*   **Bullet**ed **lis**t
    *   **Wit**h **indentati**on

**An**d **her**e's **a**n **enumerat**ed **lis**t:

1.  **Enumerat**ed **lis**t
2.  **Cann**ot **b**e **indent**ed **o**n **thi**s **websi**te.

*   **Tr**y **i**t.

```md
- Bulleted list
  - With indentation

1. Enumerated list
2. Cannot be indented on this website.

- Try it.
```

A **speci**al **typ**e **o**f **lis**t **i**s **th**e **t**o-**d**o **lis**t:

*   \[x] **Fini**sh **thi**s **pag**e
*   \[ ] **Ge**t **you**r **lif**e **togeth**er

```md
- [x] Finish this page
- [ ] Get your life together
```

## **Tabl**es

**Markdo**wn **tabl**es **ar**e **instincti**ve **t**o **us**e.

```md
| Ice Cream Flavour | Rating (1-10) |
| ----------------- | ------------- |
| Lemon             | 8             |
| Maracuja          | 9             |
| Lime              | 9             |
| Vanille           | 8             |
```

**Th**e **abo**ve **Markdo**wn **cod**e **pars**es **lik**e **thi**s:

| Ice Cream Flavour | Rating (1-10) |
| ----------------- | ------------- |
| Lemon             | 8             |
| Maracuja          | 9             |
| Lime              | 9             |
| Vanille           | 8             |

**Yo**u **shou**ld **nev**er **nee**d **t**o **spa**ce **tabl**es **ou**t **yourse**lf. I **wro**te **th**e **abo**ve **tab**le **lik**e **bel**ow **an**d **use**d `Opt + Shift + F` **t**o **automatica**lly **form**at **th**e **tab**le. **Yo**u **ma**y **nee**d **t**o **hav**e a **Markdo**wn **pretti**er **extensi**on **install**ed **fo**r **you**r **tex**t **edit**or **o**f **choi**ce **t**o **d**o **b**e **abl**e **t**o **d**o **s**o.

```md
_Table before formatting_

| Ice Cream Flavour | Rating (1-10) |
| ----------------- | ------------- |
| Lemon             | 8             |
| Maracuja          | 9             |
| Lime              | 9             |
| Vanille           | 8             |
```

## **Quot**es

**Quot**es **ar**e **usef**ul **t**o **le**t **importa**nt **ke**y **aspec**ts **o**f **th**e **tex**t **sta**nd **ou**t.

> **Markdo**wn **suppor**ts **cust**om **styli**ng **fo**r **quot**es.
> **The**y **ca**n **consi**st **o**f **multip**le-**lin**e **tex**t. [**Thi**s **i**s a **lin**k](/).

```md
> Markdown supports custom styling for quotes.
> They can consist of multiple-line text.
```

## **Footnot**es **an**d **marginal**ia

Footnotes and marginalia \[^mn\_diff] are not standardised semantics in the Markdown language; this website follows a customised approach.

\[^mn\_diff]: {-} See [**thi**s **artic**le](/footnotes-and-marginalia) **fo**r **th**e **differen**ce **betwe**en **footnot**es **an**d **marginal**ia.

**Footnot**es **ar**e **bes**t **express**ed **usi**ng **th**e **inli**ne **synt**ax: `[^This is a footnote in inline syntax]`. **I**f a **separati**on **o**f **footno**te **locati**on **an**d **footno**te **conte**nt **i**s **want**ed (e.g. **i**f **on**e **wan**ts **t**o **pu**t **al**l **footno**te **conte**nt **i**n **on**e **pla**ce, **sa**y **th**e **en**d **o**f a **fil**e), **us**e **th**e **norm**al **synt**ax:

```md
This is some text that will be referred to by a footnote[^custom_label].

...

Some more text.

[^custom_label]: This is the display footnote content. The custom label will not be displayed but instead be replaced by a number.
```

**Marginal**ia **synt**ax **wor**ks **exact**ly **th**e **sam**e **exce**pt **fo**r **a**n **insert**ed `{-}`:

```md
[^{-} This is a sidenote written in inline syntax.]

Some text[^custom_label].

[^custom_label]: {-} This is a sidenote written in normal syntax.
```

Marginalia can be good when wanting to display content on the side of the main text body. Content can vary in type, and can further be expressed using markdown. Text styling and links only are supported at the moment.\[^{-} That's ****bol**d**, ***ital**ic* **an**d ~~**stri**ke-**throu**gh~~.]

**Bot**h **sidenot**es **an**d **footnot**es **ca**n **b**e **use**d **with**in **quot**es, **howev**er, **no**t **with**in **cod**e **bloc**ks.

> What’s the difference between a vacuum cleaner and a lawyer on a motorcycle? The vacuum cleaner has the dirt bag on the inside.\[^****Jim**my **McGi**ll**, ***Bett**er **Cal**l **Sau**l*, ***Seas**on 2: **Rebec**ca*]

Sidenote and footnotes may include links.\[^mn\_link] In that case, inline syntax can't be used.

\[^mn\_link]: This sidenote contains a [**lin**k](http://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=0000Vt).

**T**o **summari**se:

\[^ {-} Table sidenotes or footnotes work in theory, they change the cell size of tables displayed in desktop view-mode though. That's why they are not recommended.]

| Content type  | Inline syntax | Normal syntax |
| ------------- | ------------- | ------------- |
| Text          | yes           | yes           |
| Stylised text | yes           | yes           |
| Link          | no            | yes           |
| Images        | no            | no            |
| Code          | no            | no            |
| LaTeX         | no            | no            |

## **Cod**e

**Wri**te **inli**ne-**cod**e **b**y **wrappi**ng **i**t **wit**h **sing**le **bac**k-**tic**ks: `this is some inline code`.
**Us**e **thr**ee **successi**ve **bac**k-**tic**ks \` **follow**ed **b**y a **langua**ge **abbreviati**on **t**o **introdu**ce a **codeblo**ck.

**The**se **langua**ge **abbreviati**ons **ar**e **rath**er **intuiti**ve. **Fo**r **examp**le, **th**e **cod**e **blo**ck **bel**ow **wou**ld **highlig**ht **th**e **synt**ax **fo**r **Haske**ll **regardle**ss **o**f **wheth**er I **us**e `hs` **o**r `haskell` **a**s **abbreviati**on.

```hs
primes = filterPrime [2..]
  where filterPrime (p:xs) =
          p : filterPrime [x | x <- xs, x `mod` p /= 0]
```

**Th**e **standa**rd **codeblo**ck **witho**ut **an**y **langua**ge **specifi**ed **loo**ks **lik**e **thi**s:

    This is a standard codeblock.
    It doesn't support syntax highlighting.

## **Mat**h **Equatio**ns

I **integrat**ed **th**e **KaT**eX **Gats**by **plug**in **wit**h **thi**s **blo**g **whi**ch **enabl**es **th**e **parsi**ng **o**f **LaT**eX **synt**ax **i**n **Markdo**wn **fil**es. **The**re **ar**e **tw**o **differe**nt **mod**es:

1.  **Inli**ne **mod**e
2.  **Blo**ck **mod**e, **als**o **kno**wn **a**s **displ**ay **mod**e

### **Inli**ne **Mod**e

Use this mode to express equations or symbols within your flowing text. For instance, we could write $40+2=42$ by using this syntax: `$40+2=42$`.

### **Blo**ck **mod**e

**Us**e **thi**s **mod**e **t**o **le**t **mathematic**al **equatio**ns **sta**nd **ou**t **i**n **the**ir **ow**n **blo**ck:

$$
40+2=42
$$

```md
$$
  40+2=42
$$
```

## **Tab**le **o**f **Conten**ts (**To**C)

**Gatb**sy **ha**s a **han**dy **To**C **plug**in **whi**ch **allo**ws **t**o **automatica**lly **crea**te a **To**C **b**y **writi**ng **thi**s:

````md
[```]toc
from-heading: n
to-heading: m
[```]
````

The limits $n$ and $m$ determine which headings of which degree are included in the ToC, where

$$
n≤m, n≤1, m≥6.
$$

**Th**e **squa**re **bracke**ts **nee**d **t**o **b**e **omitt**ed, **the**y **ar**e **onl**y **her**e **becau**se **otherwi**se **th**e **cod**e **abo**ve **wou**ld **b**e **pars**ed **a**s **a**n **actu**al **To**C.

## **Grap**hs

**I**n [**m**y **pos**t **abo**ut **gra**ph **algorith**ms](/understanding-graph-algorithms-i/) I **reli**ed **o**n **Merma**id **t**o **crea**te **grap**hs. **Howev**er, **the**re **wer**e **cro**ss-**platfo**rm / -**brows**er **issu**es **wit**h **tha**t, **s**o I **i**n **th**e **futu**re I'**l**l **dra**w **grap**hs **b**y **han**d (**mor**e **fu**n + **les**s **tim**e-**consumi**ng **anyw**ay).
