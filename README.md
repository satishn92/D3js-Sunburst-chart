# Sunburst-Graph

This Project is an analysis of a data written in the form of a tree structure. It is a pie chart showing the sizes of parent elements and child elements according to size and count of all the nodes.

## Getting Started

To get you started you can simply clone the D3js-Sunburst-chart repository and install the dependencies:

### Prerequisites

You need git to clone the D3js-Sunburst-chart repository. 

We also use a number of node.js tools to initialize and test D3js-Sunburst-chart. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone D3js-Sunburst-chart

Clone the D3js-Sunburst-chart repository using [git]:

```
git clone https://github.com/satishn92/D3js-Sunburst-chart.git
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.

