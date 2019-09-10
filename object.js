//arr
var movies = [
{	
	name: "IT Chapter Two",
	rating: 7.1,
	watched: true
},
{
	name: "The Lion King",
	rating: 7.1,
	watched: false
},
{
	name: " Scary Stories to Tell in the Dark",
	rating: 6.4,
	watched: true
},
{
	name: "Hustlers",
	rating: 4.9,
	watched: false
},
{
	name: "47 Meters Down: Uncaged",
	rating: 5.1,
	watched: true
},
{
	name: "Ready or Not",
	rating: 7.2,
	watched: false
},
{
	name: "Men in Black: International",
	rating: 5.6,
	watched: false
},

{
	name: "Annabelle",
	rating: 5.4,
	watched: true
}];

function buildString(movie){
	var result = "I have ";
	if(movie.watched){
		result += "wached the movie ";
	} else{
		result += "not seen the movie ";
	}
	result += "\"" + movie.name + "\" - ";
	result += movie.rating + " stars IMDb"

	return result;
}

movies.forEach(function(movie){
	console.log(buildString(movie));
})



