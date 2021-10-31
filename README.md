# IR-Assignment # 2 
## Implementation:
- Classify and Cluster Given Documents of BBC Sport using a Knn and K-means. 

## Files:
### Jupyter Notebook:
The Notebook Contains a KNN and K-means Implementation.

- Check Notebook : IR-A3-K173654.ipynb

#### KNN Algorithm 
**Approach:** Supervised

A k-nearest-neighbor is a data classification algorithm that attempts to determine what group a data point is in by looking at the data points around it.

An algorithm, looking at one point on a grid, trying to determine if a point is in group A or B, looks at the states of the points that are near it. The range is arbitrarily determined, but the point is to take a sample of the data. If the majority of the points are in group A, then it is likely that the data point in question will be A rather than B, and vice versa.

#### K-Mean Algorithm
**Approach:** Unsupervised
K-means clustering is a method used for clustering analysis, especially in data mining and statistics. It aims to partition a set of observations into a number of clusters (k), resulting in the partitioning of the data into Voronoi cells. It can be considered a method of finding out which group a certain object really belongs to.


### Desktop System:
A GUI Based Executable is present that provides a Desktop Interface to the Django based web server which holds the implementation of KNN and Kmeans hosted on Heroku. It can classify and cluster documents and return results.

- Check Zip File For Desktop GUI Code : IR-SYS-A3
    - Repo Link: [Click Here](https://github.com/hassan11196/IR-SYS-A3)
- Check Folder For Desktop GUI Executable : IR-APP-A3

- Check Folder For Python Django Web Server : IR-SERVER-A3
    - Repo Link: [Click Here](https://github.com/hassan11196/IR-A3/tree/master/IR-SERVER-A3/IRA3)


### Web System:
A Web Application is hosted at  [https://ira3.netlify.com/#/](https://ira3.netlify.com/#/) .

- Check Folder for Web Interface Code : IR-WEB-A3 
    - Repo Link : [Click Here](https://github.com/hassan11196/IR-WEB-A3)


### ScreenShots:

- ![](Screenshots/Annotation%202020-05-18%20080928.png)


### References:
[http://mlg.ucd.ie/datasets/bbc.html](http://mlg.ucd.ie/datasets/bbc.html)


### Built Using:

<div align="center">
<a href="https://www.djangoproject.com/"><img height='114' width='100' src="./internals/img/django.svg" /></a>
<a href="https://jupyter.org/"><img height='114' width='100' src="./internals/img/jupyter.png" /></a>
<br/>
  <a href="https://facebook.github.io/react/"><img src="./internals/img/react-padded-90.png" /></a>
  <a href="https://webpack.github.io/"><img src="./internals/img/webpack-padded-90.png" /></a>
  <a href="https://redux.js.org/"><img src="./internals/img/redux-padded-90.png" /></a>
  <a href="https://github.com/ReactTraining/react-router"><img src="./internals/img/react-router-padded-90.png" /></a>
  <a href="https://eslint.org/"><img src="./internals/img/eslint-padded-90.png" /></a>
  <a href="https://facebook.github.io/jest/"><img src="./internals/img/jest-padded-90.png" /></a>
  <a href="https://yarnpkg.com/"><img src="./internals/img/yarn-padded-90.png" /></a>
</div>

<hr />
<br />

### Template:
- [electron react boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate)


