random_pic_15=getRandomPic(15);


function getRandomPic(num){
    var random_pic=[];
    var all_pic=[];
    // var random_pic_id=[];
    for (var i=0 ; i<59; i++){
        all_pic.push(`${i}`);   
    }

    for (var j=0 ; j<num; j++){
        var r_index=Math.floor(Math.random()*all_pic.length)
        random_pic.push(`${all_pic[r_index]}`);
        all_pic.splice(r_index, 1); 
    }
    // console.log(random_pic)
    for (let i in random_pic){
        random_pic[i] = "../media/pic/"+random_pic[i]+".jpg";
    }
    
    random_pic=random_pic.concat(random_pic);
    return random_pic;
}

