const campus = {
KF_pic:["0","1","2","3","4","16",'17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','45','47'],
CK_pic:['5','6','7','11','12','13','33','34','35','36','37','48','58'],
TC_pic:['8','9','10','40','41'],
LH_pic:['14','15','38','54'],
CH_pic:['42','43','44','46','55','56'],
SL_pic:['39','57'],
OTHER_pic:['49','50','51','52','53'],
}


function findCampus(number) {
    for (const [category, list] of Object.entries(campus)) {
        if (list.includes(number)) {
            return category; // 回傳列表名稱
        }
    }
    return "Not Found"; // 如果未找到，回傳 Not Found
}