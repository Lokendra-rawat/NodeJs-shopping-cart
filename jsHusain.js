//jsHusain ARRAY PROBLEMS

function _(string) {
	console.log(string);
}


if(Array.prototype.concatAll === undefined) {
	Array.prototype.concatAll = function() {
		var subArray = subArray || undefined;	
		var results = [];
		this.forEach(function(subArray) {
	    subArray.forEach(function(arr) {
	      results.push(arr);
	    });
			// ------------ INSERT CODE HERE! ----------------------------
			// Add all the items in each subArray to the results array.
			// ------------ INSERT CODE HERE! ----------------------------
		});

		return results;
	};
}

Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
	return this.
		map(function(item) {
			return projectionFunctionThatReturnsArray(item);
		}).
		// apply the concatAll function to flatten the two-dimensional array
		concatAll();
};

Array.zip = function(left, right, combinerFunction) {
	var counter,
		results = [];
	for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
    results.push(combinerFunction( left[counter] , right[counter] ) );
	}
	return results;
};



function third() {
	var newReleases = [
		{
			"id": 70111470,
			"title": "Die Hard",
			"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 654356453,
			"title": "Bad Boys",
			"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id: 432534, time: 65876586 }]
		}, 
		{
			"id": 65432445,
			"title": "The Chamber",
			"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 675465,
			"title": "Fracture",
			"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id: 432534, time: 65876586 }]
		}
	],
	videoAndTitlePairs = [];
  
  newReleases.forEach( data => ( videoAndTitlePairs.push({id : data.id , title : data.title}) ));
  
  // newReleases.map(x => videoAndTitlePairs.push( {id: x.id,title : x.title }));

  
	// ------------ INSERT CODE HERE! -----------------------------------
	// Use forEach function to accumulate {id, title} pairs from each video.
	// Put the results into the videoAndTitlePairs array using the Array's
	// push() method. Example: videoAndTitlePairs.push(newItem);
	// ------------ INSERT CODE HERE! -----------------------------------
 
	return videoAndTitlePairs;
}

// _(third());


function eleven() {
	var movieLists = [
			{
				name: "New Releases",
				videos: [
					{
						"id": 70111470,
						"title": "Die Hard",
						"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
						"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 654356453,
						"title": "Bad Boys",
						"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
						"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id: 432534, time: 65876586 }]
					}
				]
			},
			{
				name: "Dramas",
				videos: [
					{
						"id": 65432445,
						"title": "The Chamber",
						"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
						"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 675465,
						"title": "Fracture",
						"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
						"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id: 432534, time: 65876586 }]
					}
				]
			}
		];

	// ------------   INSERT CODE HERE!  -----------------------------------
	// Use map and concatAll to flatten the movieLists in a list of video ids.
	// ------------   INSERT CODE HERE!  -----------------------------------

	return movieLists.map(arr => arr.videos.map(x => x.id)).concatAll();

}

// _(eleven())

// _( [ [2,4,5] , [1,5,3,7] ].concatAll() );


function twelve() {
	var movieLists = [
			{
				name: "Instant Queue",
				videos : [
					{
						"id": 70111470,
						"title": "Die Hard",
						"boxarts": [
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 654356453,
						"title": "Bad Boys",
						"boxarts": [
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id: 432534, time: 65876586 }]
					}
				]
			},
			{
				name: "New Releases",
				videos: [
					{
						"id": 65432445,
						"title": "The Chamber",
						"boxarts": [
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 675465,
						"title": "Fracture",
						"boxarts": [
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
							{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id: 432534, time: 65876586 }]
					}
				]
			}
		];


	// Use one or more map, concatAll, and filter calls to create an array with the following items
	// [
	//	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
	//	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
	//	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
	//	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
	// ];

	return movieLists.
		map(movieList => movieList.videos.
			map(video => video.boxarts.
				filter(boxart => boxart.width === 150).
					map(boxart => ({id:video.id , title:video.title , boxart: boxart.url}))
				).concatAll()
			).concatAll()

}

// _(twelve())



function thirteen() {
	var movieLists = [
			{
				name: "Instant Queue",
				videos : [
					{
						"id": 70111470,
						"title": "Die Hard",
						"boxarts": [
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 654356453,
						"title": "Bad Boys",
						"boxarts": [
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id: 432534, time: 65876586 }]
					}
				]
			},
			{
				name: "New Releases",
				videos: [
					{
						"id": 65432445,
						"title": "The Chamber",
						"boxarts": [
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 675465,
						"title": "Fracture",
						"boxarts": [
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
							{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id: 432534, time: 65876586 }]
					}
				]
			}
		];


	// Use one or more concatMap, map, and filter calls to create an array with the following items
	// [
	//	 {"id": 675465, "title": "Fracture", "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
	//	 {"id": 65432445, "title": "The Chamber", "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
	//	 {"id": 654356453, "title": "Bad Boys", "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
	//	 {"id": 70111470, "title": "Die Hard", "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
	// ];

	return movieLists.
		concatMap(movieList => movieList.videos.
			concatMap(video => video.boxarts.
				filter(x => x.width === 150).
					map(x => ({id:video.id,title:video.title,boxart:x.url}) )
					)
				)

}
// _(thirsteen());

function eighteen() {
	var boxarts = [
			{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
			{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
			{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
			{ width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
		];

	// You should return an array containing only the URL of the largest box art. Remember that reduce always
	// returns an array with one item.
	return boxarts.
    reduce( (x , y ) => (x.width*x.height > y.width*y.height ? x.url : y.url) );
}
		
// _(eighteen())


// Exercise 24: Retrieve each video's id, title, middle interesting moment time, and smallest box art url.

/* 
This is a variation of the problem we solved earlier. This time each video has an interesting moments collection, each representing
 a time during which a screenshot is interesting or representative of the title as a whole. Notice that both the boxarts
  and interestingMoments arrays are located at the same depth in the tree. Retrieve the time of the middle interesting moment and the
   smallest box art url simultaneously with zip(). Return an {id, title, time, url} object for each video.
*/

function twentyFour() {
	var movieLists = [
			{
				name: "New Releases",
				videos: [
					{
						"id": 70111470,
						"title": "Die Hard",
						"boxarts": [
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"interestingMoments": [
							{ type: "End", time:213432 },
							{ type: "Start", time: 64534 },
							{ type: "Middle", time: 323133}
						]
					},
					{
						"id": 654356453,
						"title": "Bad Boys",
						"boxarts": [
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
							{ width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }

						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"interestingMoments": [
							{ type: "End", time:54654754 },
							{ type: "Start", time: 43524243 },
							{ type: "Middle", time: 6575665}
						]
					}
				]
			},
			{
				name: "Instant Queue",
				videos: [
					{
						"id": 65432445,
						"title": "The Chamber",
						"boxarts": [
							{ width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"interestingMoments": [
							{ type: "End", time:132423 },
							{ type: "Start", time: 54637425 },
							{ type: "Middle", time: 3452343}
						]
					},
					{
						"id": 675465,
						"title": "Fracture",
						"boxarts": [
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
							{ width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
							{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"interestingMoments": [
							{ type: "End", time:45632456 },
							{ type: "Start", time: 234534 },
							{ type: "Middle", time: 3453434}
						]
					}
				]
			}
		];

	//------------ COMPLETE THIS EXPRESSION --------------
	return movieLists.
		concatMap(function(movieList) {
			movieList.videos.
        map(video => {video.boxarts.reduce((x,y)=>(x.width*x.height > y.width*y.height ? x.url : y.url) ) } )
		});

}

// _(twentyFour());

/*

We have 2 arrays each containing lists, and videos respectively. Each video has a listId field indicating its parent list. We want to 
build an array of list objects, each with a name and a videos array. The videos array will contain the video's id and title. In other 
words we want to build the following structure:

[
	{
		"name": "New Releases",
		"videos": [
			{
				"id": 65432445,
				"title": "The Chamber"
			},
			{
				"id": 675465,
				"title": "Fracture"
			}
		]
	},
	{
		"name": "Thrillers",
		"videos": [
			{
				"id": 70111470,
				"title": "Die Hard"
			},
			{
				"id": 654356453,
				"title": "Bad Boys"
			}
		]
	}
]

*/

function twentyFive() {
	var lists = [
			{
				"id": 5434364,
				"name": "New Releases"
			},
			{
				"id": 65456475,
				"name": "Thrillers"
			}
		],
		videos = [
			{
				"listId": 5434364,
				"id": 65432445,
				"title": "The Chamber"
			},
			{
				"listId": 5434364,
				"id": 675465,
				"title": "Fracture"
			},
			{
				"listId": 65456475,
				"id": 70111470,
				"title": "Die Hard"
			},
			{
				"listId": 65456475,
				"id": 654356453,
				"title": "Bad Boys"
			}
		];

	return lists.map(list => ({
		name : list.name,
		videos : videos.
			filter(video => video.listId === list.id).
				map( video => ({ id : video.id, title : video.title }) )
		})
	);
}

// _( twentyFive() );

/*
[
	{
		"name": "New Releases",
		"videos": [
			{
				"id": 65432445,
				"title": "The Chamber",
				"time": 32432,
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg"
			},
			{
				"id": 675465,
				"title": "Fracture",
				"time": 3534543,
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg"
				}
			]
		},
		{
			"name": "Thrillers",
			"videos": [
				{
					"id": 70111470,
					"title": "Die Hard",
					"time": 645243,
					"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
				},
				{
					"id": 654356453,
					"title": "Bad Boys",
					"time": 984934,
					"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg"
				}
			]
		}
	]
	*/

function twentySix() {
	var lists = [
			{
				"id": 5434364,
				"name": "New Releases"
			},
			{
				"id": 65456475,
				name: "Thrillers"
			}
		],
		videos = [
			{
				"listId": 5434364,
				"id": 65432445,
				"title": "The Chamber"
			},
			{
				"listId": 5434364,
				"id": 675465,
				"title": "Fracture"
			},
			{
				"listId": 65456475,
				"id": 70111470,
				"title": "Die Hard"
			},
			{
				"listId": 65456475,
				"id": 654356453,
				"title": "Bad Boys"
			}
		],
		boxarts = [
			{ videoId: 65432445, width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
			{ videoId: 65432445, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" },
			{ videoId: 675465, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
			{ videoId: 675465, width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
			{ videoId: 675465, width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
			{ videoId: 70111470, width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
			{ videoId: 70111470, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" },
			{ videoId: 654356453, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
			{ videoId: 654356453, width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }
		],
		bookmarks = [
			{ videoId: 65432445, time: 32432 },
			{ videoId: 675465, time: 3534543 },
			{ videoId: 70111470, time: 645243 },
			{ videoId: 654356453, time: 984934 }
		];


	return lists.map(list => ({
		name : list.name,
		videos : videos.filter(video => video.listId === list.id).
        map(video => ({ 
            id : video.id, 
            title : video.title ,
            time : bookmarks.filter(bm => bm.videoId === video.id).map(bm => bm.time),
						boxart : boxarts.filter(boxart => boxart.videoId === video.id).
										reduce( (x,y) => (x.width < y.width ? x.url : y.url) )
            }) )
		})
	)

}

_( twentySix() );



