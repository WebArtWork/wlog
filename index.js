module.exports = function(config){
	if(!config||config.production) return function(req, res, next){
		next();
	};
	return function(req, res, next){
		if(config.urls){
			for (var i = 0; i < config.urls.length; i++) {
				if(req.originalUrl.indexOf(config.urls[i])>-1){
					console.log(req.originalUrl);
					break;
				}
			}
		}
		/*
		https://www.w3schools.com/jsref/obj_console.asp
		var json = res.json;
		res.json = function(param){
			json(param);
		}
		*/
		next();
	}
}