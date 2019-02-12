module.exports = function diff(array, data){
    
    var local_difference = 0;
    var total_difference = [];

    for(var i = 0; i<data.length; i++){
        for(var j=0;j<array.length;j++){
            local_difference += Math.abs( data[i].scores[j] - array[j] );
            console.log(data[i].scores[j], array[j], local_difference);
        }
        total_difference.push(local_difference);
        local_difference = 0;
    }
          
    console.log('Total difference array: ' + total_difference);
    index = total_difference.indexOf(Math.min(...total_difference));
    console.log('Index of Friend: '+ index);
    console.log('Name of Friend: '+ data[index].name);
    console.log('Foto of Friend: '+ data[index].photo);
    return index
    
};

