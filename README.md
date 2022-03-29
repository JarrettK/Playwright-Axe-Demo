# playwright-axe-demo
This repository contains some sample playwright code written in TypeScript, which can be used for automated accessibility testing powered by [playwright] and [axe-core] (via [axe-playwright]).

## SETUP

**If not cloning the repository:**  
Unzip project and note file path where you put the unzipped folder.  
Make sure that when unzipping the files you do not have the 
axe-playwright folder nested in another axe-playwright folder.  
  
**Install Root Dependencies:**

**1)** Install Node.js LTS - https://nodejs.org/en/download/  
    * *Note:* During install keep all the defaults. You should only need to click the "Next" button and on the 2nd screen the "I accept the terms in the License Agreement" checkbox.  
  
    a) Verify Node installed correctly. Run the following in Command Prompt (cmd.exe on Windows) and it should print your version number:  
    * **node -v**  
  
  
**2)** Install NPM: Command Prompt (cmd.exe on Windows)  
    * *Note:* You must be running this command inside the project folder.  
> * Getting cmd to your folder in Windows *(your folder pathing will be unique so adjust accordingly)*:  
> C:\Users\WDAGUtilityAccount>**cd C:\Users\WDAGUtilityAccount\Desktop\axe-playwright**
* Command: C:\Users\WDAGUtilityAccount\Desktop\axe-playwright> **npm install**  
  
    a) You may get a message there is a "New patch version of npm available!" It is fine to run the command it says to.  
  
    b) Verify NPM installed correctly. Run this command in the same cmd window as used in Step 2 and it should print a version number:  
    * **npm -v**  
  
  
**3)** Install TypeScript: Command Prompt (cmd.exe on Windows) 
    * *Note:* You must be running this command from inside the project folder.
> * Getting to your folder in Windows (your folder pathing will be unique so adjust accordingly):  
> C:\Users\WDAGUtilityAccount>**cd C:\Users\WDAGUtilityAccount\Desktop\axe-playwright**  
* Command: **npm install -g typescript**
 
    a) Verify TypeScript installed correctly. Run this command in the same cmd window as used in Step 3 and it should print a version number:
    * **tsc --version**


**4)** Install VS Code - https://code.visualstudio.com/  

    a) Install NPM Extension: https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script  

    b) Open the folder for the project in VS Code. (Example: C:\Users\WDAGUtilityAccount\Desktop\axe-playwright)  
    > If VS Code asks if you trust the authors of the files in the folder, click the "Yes, I trust the authors" button.  

    c) Close VS Code completely. (Make sure no terminal windows are open. If you did not open any, there shouldn't be any open.)  

    d) Make sure Node is working in the VS Code Terminal by entering the following command (you should get a version number):  
    * *Note:* In VS Code to open a Terminal use: Terminal > New Terminal or (CTRL + Shift + `).
    * **node -v**


**5)** Install playwright files. Run the following command in a VS Code Terminal.
    * **npx playwright install**


**6)** Try running first test!
    * *Note:* You can do this either from cmd.exe/powershell.exe in Windows, or in VS Code (it is easier to just use VS Code).
    * **npx playwright test**
    * **npx playwright test --project=chromium** *(this will only run 1 of the 3 projects/browsers)*
    > * *Note:* You will likely see a prompt in the VS Code terminal to press CTRL+C to quit. You can do that and then type Y + ENTER.


**7)** If test ran, look over the report.html that opens to view results.
    * *Note:* If the report didn't open for you, you can enter the following command in the terminal:
    * **npx playwright show-report**


**8)** Start automating!

## RESOURCES

Playwright Docs:
* https://playwright.dev/docs/intro

Debugging Help:
* https://playwright.dev/docs/debug#visual-studio-code-debugger-nodejs

VIEW TEST CODE:
* /src/tests/  
    * a11y.spec.ts
    * example.spec.ts

GENERATE CODE:
* https://playwright.dev/docs/codegen
* Example: **npx playwright codegen wikipedia.org**

CONFIGURE AXE:
* https://github.com/abhinaba-ghosh/axe-playwright#configureaxe

WATCH:
* https://www.aspnetmonsters.com/2021/07/monsters-weekly%5Cep218/
* https://www.youtube.com/playlist?list=PLQ6Buerc008dhme8fC80zmhohqpkA0aXI
* https://playwright.dev/blog
* https://www.youtube.com/watch?v=VMl8aV-ddMA
* https://www.youtube.com/watch?v=_Jla6DyuEu4

READ:
* https://medium.com/@praveenpeiris95/accessibility-testing-using-playwright-694437178ed5 *(caution - has some inaccurate information)*
