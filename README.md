
## Getting Started
 Firstly, Open the Visual Studio and Create wordCount.ts file and write the code according to the requirement.

 If you haven't installed TypeScript globally, you can do so using npm. Open your terminal and run the command: npm install -g typescript

 Create ts.config.json file to configure the typescript compilation, In this where the compilation output directory path is provided here.

 As browser wont understand the typescript where it should be initially compiled to javascript. for this we need to run "tsc wordCount.ts". It will generate a JavaScript file "wordCount.js".

 Later to execute the code we need to open the terminal and run the below command:

 "node wordCount.js sample.txt"
 
 Before that we need to make sure that "wordCount.js" and "sample.txt" file are in same folder. Later we need to navigate to the directory containing the "wordCount.js" using 'cd' command:

    Example:

    cd C:\Users\**\**\rootDir\src

    node <wordCount path> <sample.txt path>

It will give you the results in Terminal. If you want to test it with different txt you can change the paragraph in "sample.txt" file.

For running the test cases. Initially run 'npm install' and 'npm run test'                                            

Thank you!


## End 
