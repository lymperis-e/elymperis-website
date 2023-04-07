#  in-Athens: A Virtual Tour of Lost Neoclassical Buildings
### powered by PMTiles 

> you can see the working project [here](https://stories.in-athens.gr/stories/demolished/) (unfortunately it is only available in greek )

I recently had the pleasure of working on a project that combined my love of history and geospatial technology. The product is a virtual tour of the Athenian streets of Vassilissis Sofias and Syntagma Square, focused on neoclassical buildings that were demolished over the years, and was developed as part of the [in-Athens](https://www.in-athens.gr/el/) project, by [Geospatial Enabling Technologies](https://www.getmap.eu/) (my team 💪) along with [HERMeS](http://www.thinkhermes.com/), [DIPYLON](http://www.dipylon.org/), [Monumenta](https://www.monumenta.org/), [Melissa](http://www.melissabooks.com/) and [Commonspace](http://www.commonspace.gr/)

As a developer, I found the project to be a joy. We used [MapLibre](https://maplibre.org/), which is my go-to browser mapping library, but stepped on a bit of a problem with regards to the tiles our app was going to consume. The problem was that we did not know the deployment target ahead of time. It could be a Virtual Machine, serverless infrastructure, or a plain folder served by *Apache*. We also wanted a brandable solution.

This is where [PMTiles](https://protomaps.com/) came in. I had heard about the project some time ago, and really wanted to give it a try, and I thought we had a solid use case. We needed a very small area, downtown Athens, just a few square kilometers wide. We wanted to customize the style and we needed to ensure that we could serve the data even with no geospatial backend.

So we went ahead and downloaded our area of interest from the PMTiles [data download page](https://app.protomaps.com/downloads/small_map), and installed the javascript library
```npm install pmtiles```

We also used [pmtiles-basemaps](https://github.com/protomaps/basemaps) to get an initial working style for the tiles (as PMTiles attributes' schema does not conform with Mapbox's or MapTiler's, which is understandable), which we modified to our liking.

Serving the tiles was as easy as:
**Copy** the *.pmtiles* file to our frontend **public** directory, then point MapLibre to *pmtiles://ourawesometiles.pmtiles*
**BOOM**, DONE!

Having a working, and frankly pleasing, map we developed the story-map mechanism on top of it using [scrollmagic](https://scrollmagic.io/).

The finished product is a responsive web app that takes the user on a walk through the heart of Athens in pseudo-3D (basically extruded OpenStreetMap building footprints), presenting the sites of 24 demolished neoclassical gems, along with compelling photos and historical context.
