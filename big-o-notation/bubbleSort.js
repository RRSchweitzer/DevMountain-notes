console.time('test');

var args = process.argv;

var bubbleSort = function(args) {
	var swapped;
    do {
        swapped = false;
        for (var i=0; i < args.length-1; i++) {
            if (args[i] > args[i+1]) {
                var temp = args[i];
                args[i] = args[i+1];
                args[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
};

bubbleSort(args);

console.timeEnd('test');