echo -n " name your folder : "
read folder
cd ..
npx create-react-app $folder
cd $folder
rm -rf .git public/* src/*
npm install sass
echo "
<!DOCTYPE html>
<html lang='en'>
    <head>
    <meta charset='utf-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta name='theme-color' content='#000000' />
    <meta
        name='description'
        content='Web site created using create-react-app'
    />
    <title>React App</title>
    </head>
    <body>
    <div id='root'></div>
    </body>
</html>" > ./public/index.html
touch ./src/index.jsx
mkdir -p ./src/assets/{img,videos}
mkdir ./src/{layouts,utils,pages}
mkdir -p $_/Home/components
touch ./src/layouts/{header.jsx,footer.jsx}
touch ./src/pages/Home/home.jsx
touch ./src/pages/Home/components/{firstSection.jsx,firstSection.sass}

echo "
import './firstSection.sass'
export const FirstSection = () => {
    return (
        <>
        <h1>Hello World!</h1>
        </>
    );
}" > ./src/pages/Home/components/firstSection.jsx

echo "
import { FirstSection } from './components/firstSection';
export const HomePage = () => {
    return (
        <>
            <FirstSection/>
        </>
    );
}" > ./src/pages/Home/home.jsx

echo "
import { HomePage } from './pages/Home/home';
function App() {
  return (
    <HomePage/>
  );
}
export default App;" > ./src/App.jsx

echo "
import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);" > ./src/index.jsx

npm install react-icons --save
npm install -D tailwindcss
npx tailwindcss init
echo "
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}" > ./tailwind.config.js

echo "
@tailwind base;
@tailwind components;
@tailwind utilities;" > ./src/index.css

