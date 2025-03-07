1.write vs code terminal (npm init -y)

2.npm install -D tailwindcss
error solve(npm install -D tailwindcss@3 postcss autoprefixer)
3.npx tailwindcss init

4. open tailwind confing.js file and paste content
(content: ["./src/**/*.{html,js}"],)

5. open file package.json and paste upper main lower script file below paste ("type": "module",)

6. make a folder src name

7.and make a html file any name

8. make a file input.css and paste this three lines
(@tailwind base;
@tailwind components;
@tailwind utilities;)

9. run the file enter code in terminal
(npx tailwindcss -i ./src/input.css -o ./src/output.css --watch)

10. and open html file in you make in src folder in paste this code in <head> to  </head> 
(<link href="./output.css" rel="stylesheet">)