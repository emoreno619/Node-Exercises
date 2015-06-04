var fs = require("fs")

var contents = fs.readFileSync(process.argv[2])

var arr = contents.toString().split("\n")

console.log(arr.length-1)

fs.readFile(process.argv[2], function (err, data){

	if(err) throw err

	arr = data.toString().split("\n")

	console.log(arr.length-1)

})

var http = require("http")

http.get("http://omdbapi.com/?i=tt0241527", function(res){
    res.setEncoding("utf8");
    res.on("data", function(data){
        arr.push(data);
        console.log('first get done')

        http.get("http://omdbapi.com/?i=tt0295297", function(res){
        	res.setEncoding("utf8");
        	res.on("data", function(data){
        	    arr.push(data);
        	    console.log('second get done')
        	    console.log(arr);

        	})
        })
    })
});

