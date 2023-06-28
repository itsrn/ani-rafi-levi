# Ani Rafi Levi...
Random sentence of "Rafi Levi", from Zehu Ze (or some senteces I made up). Deployed on vercel.

## ⚙ Technologies used
- React
- Nextjs
- Tailwindcss
- react-hot-toast
- next-share

## 🚀 Building locally
- Clone the repo
- Install the packages with your package manager
- Run the project using `next dev`.

## ☕ How it works
There are 3 JSON files in the `/api` directory (although there is no API, I do prefer to put these files there):
- `episode.json`: The episode and season number of every sentence
- `first_part.json`: The first part of every sentence. (The X in `אני רפי לוי. בילדותי, לא היה לנו X`).
- `second_part.json`: The second part of every sentence. (The Y in `.. אז Y`)

When a user clicks on the button in the website a number between 1 and the length of the `first_part.json` file is chosen and then it shows the index of the string from 3 of these arrays. Pretty simple. 

## 🙏 Credits
Thanks Shirley for the idea to this website.

## 📑 Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
