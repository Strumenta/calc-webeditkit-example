# calc-webeditkit-example

This is an example of web editor for MPS.

To make it work you need [MPS Server](https://github.com/Strumenta/MPSServer). The example uses the [WebEditKit](https://github.com/Strumenta/webeditkit) framework, which is available on NPM.

## Verify MPS Server is working

1. clone the repo (https://github.com/Strumenta/MPSServer)
2. if you had cloned before run a git pull and clean everything (git clean -fdX)
3. execute './gradlew runLauncher'
4. visit http://localhost:2904/modules 
   -> You should see a large JSON file, this means MPS Server can get the list of modules 
5. visit http://localhost:2904/models/com.strumenta.financialcalc.sandbox.company/324292001770075100
   -> You should see JSON data describing the root node used in the example, this means MPS Server is exposing it correctly

## Verify calc-webeditik-example is working 

We will be using the version of WebEditKit released on NPM, instead of building it ourselves.

1. clone the repo (https://github.com/Strumenta/calc-webeditkit-example)
2. if you had cloned before run a git pull and clean everything (git clean -fdX)
3. execute `npm install`
4. execute `sh build.sh`
5. open index.html in the browser (on mac I run `open index.html` or click on it)
   -> You should see a model displayed and no errors in the console
6. edit the name of the calculations
7. reload the page
   -> You should see the name of the calculations as you changed, it means the MPS models have been actually changed

## Integrate MPS Server into your system

You want to typically edit your own solutions using your own languages.

The simplest way to do so is to create a project, include the MPS Server modules in it, and launch MPS Server from the MPS IDE (look for "Launch MPS Server" in your menu).

## Build your own editors

You can build your own editors, using the WebEditKit framework. Take inspiration from what you see in calc-webeditkit-example, looks for different types of cells in the source of WebEditKit.

# Give feedback

This is in a very early development stage, so please share your thoughts and provide feedback writing at federico@strumenta.com
