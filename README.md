# Ani Rafi Levi...
Random sentence of "Rafi Levi", from Zehu Ze (or some senteces I made up). Deployed on vercel.

## ⚙ Technologies used
- React
- Nextjs
- Tailwindcss
- react-hot-toast

## ✨ API
The API is very simple, just fetch `/api` of the website using GET, and the response will be in this structre:
```json
{"first":"the first part of the sentence","second":"the second part of the sentence","episode":"episode number, season number"}
```
With that structre, you can build the full sentence of Rafi Levi, like this:
```
אני רפי לוי, בילדותי לא היה לנו X, אז Y
```
Where X stands for the first part of the sentence, and Y stands for the second part of the sentence. You can use the episode string (which look like this: "פרק X, עונה Y") also.

## 🚀 Building locally
- Clone the repo
- Install the packages with your package manager
- Run the project using `next dev`.

## 🙏 Credits
Thanks Shirley for the idea to this website.
