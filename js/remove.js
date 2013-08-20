var oldTimeout = setTimeout;
setTimeout = function(execute, timeout) {
    stringExecute = ""+execute;
    if(stringExecute.indexOf("xThePage") == -1) {
        oldTimeout(execute, timeout);
    } else {
        console.log("Solita Oy");
    }
};
