let section = document.querySelectorAll(".section")
let hftr = document.getElementById("hftr")
let hft = document.getElementById("hft")
let hftl = document.getElementById("hftl")
let hfc = document.getElementById("hfc")
let hfbl = document.getElementById("hfbl")
let hfbr = document.getElementById("hfbr")
let hfbd = document.getElementById("hfbd")
let hst = document.getElementById("hst")
let hstr = document.getElementById("hstr")
let hstl = document.getElementById("hstl")
let hsc = document.getElementById("hsc")
let hsbl = document.getElementById("hsbl")
let hsbr = document.getElementById("hsbr")
let hsbd = document.getElementById("hsbd")
let mftr = document.getElementById("mftr")
let mftl = document.getElementById("mftl")
let mfc = document.getElementById("mfc")
let mft = document.getElementById("mft")
let mfbl = document.getElementById("mfbl")
let mfbr = document.getElementById("mfbr")
let mfbd = document.getElementById("mfbd")
let mst = document.getElementById("mst")
let mstr = document.getElementById("mstr")
let mstl = document.getElementById("mstl")
let msc = document.getElementById("msc")
let msbl = document.getElementById("msbl")
let msbr = document.getElementById("msbr")
let msbd = document.getElementById("msbd")
let sst = document.getElementById("sst")
let sstr = document.getElementById("sstr")
let sstl = document.getElementById("sstl")
let ssc = document.getElementById("ssc")
let ssbl = document.getElementById("ssbl")
let ssbr = document.getElementById("ssbr")
let ssbd = document.getElementById("ssbd")
let sft = document.getElementById("sft")
let sftr = document.getElementById("sftr")
let sftl = document.getElementById("sftl")
let sfc = document.getElementById("sfc")
let sfbl = document.getElementById("sfbl")
let sfbr = document.getElementById("sfbr")
let sfbd = document.getElementById("sfbd")
let now = 0;
let second = 0;
let hour = 0;
let minut = 0;
let years = 0;
let mounth = 0;
let day = 0;
let param = 0;
let transmounth = 0;
let paramnumb = 0;


function onload () {setInterval ( function saytime() {
    let now = new Date();
    let second = now.getSeconds();
    
    let minut = now.getMinutes();
    let years = now.getFullYear();
    let day = now.getDate();

    actdeact()
    time(); 
    tmounths(param.transmounth);
    mounths.textContent = String(transmounth)
}, 1000);}

function tmounths(param) {
    let now = new Date();
    let mounth = now.getMonth();
    if (mounth == 5 ) {
        transmounth = "july";
       
        } else {
        transmounth = "2"
        };
    param = {
        transmounth
    }
    return param
}

function actdeact () {
    for (let i = 0; i<section.length; i++) {
        section[i].classList.add('deactive');
    }   
}

function time () {
    let now = new Date();
    let hour = now.getHours();
    let minut = now.getMinutes();
    let second = now.getSeconds();
    if (second == 0) {
        second = '00';
    } else if (second == 1) {
        second = '01';
    } else if (second == 2) {
        second = '02';
    } else if (second == 3) {
        second = '03';
    } else if (second == 4) {
        second = '04';
    } else if (second == 5) {
        second = '05';
    } else if (second == 6) {
        second = '06';
    } else if (second == 7) {
        second = '07';
    } else if (second == 8) {
        second = '08';
    } else if (second == 9) {
        second = '09';
    }

    if (minut == 0) {
        minut = '00';
    } else if (minut == 1) {
        minut = '01';
    } else if (minut == 2) {
        minut = '02';
    } else if (minut == 3) {
        minut = '03';
    } else if (minut == 4) {
        minut = '04';
    } else if (minut == 5) {
        minut = '05';
    } else if (minut == 6) {
        minut = '06';
    } else if (minut == 7) {
        second = '07';
    } else if (minut == 8) {
        minut = '08';
    } else if (minut == 9) {
        minut = '09';
    }

    if (hour == 0) {
        hour = '00';
    } else if (hour == 1) {
        hour = '01';
    } else if (hour == 2) {
        hour = '02';
    } else if (hour == 3) {
        hour = '03';
    } else if (hour == 4) {
        hour = '04';
    } else if (hour == 5) {
        hour = '05';
    } else if (hour == 6) {
        hour = '06';
    } else if (hour == 7) {
        hour = '07';
    } else if (hour == 8) {
        hour = '08';
    } else if (hour == 9) {
        hour = '09';
    }
    let alldate = String(hour)+String(minut)+String(second);
    let result = alldate.split('');
    let A = result[0];
    let B = result[1];
    let C = result[2];
    let D = result[3];
    let E = result[4];
    let F = result[5];
    if ( A == 0) {
        hfbr.classList.remove('deactive')
        hfbr.classList.add('active')
        hfbl.classList.remove('deactive')
        hfbl.classList.add('active')
        hftl.classList.remove('deactive')
        hftl.classList.add('active')
        hftr.classList.remove('deactive')
        hftr.classList.add('active')
        hft.classList.remove('deactive')
        hft.classList.add('active')
        hfbd.classList.remove('deactive')
        hfbd.classList.add('active')    
    } else if (A == 1) {
        hftr.classList.remove('deactive')
        hftr.classList.add('active')
        hfbr.classList.remove('deactive')
        hfbr.classList.add('active')        
    } else if (A == 2) {
        hft.classList.remove('deactive')
        hft.classList.add('active')
        hftr.classList.remove('deactive')
        hftr.classList.add('active')
        hfbl.classList.remove('deactive')
        hfbl.classList.add('active')
        hfbd.classList.remove('deactive')
        hfbd.classList.add('active')
        hfc.classList.remove('deactive')
        hfc.classList.add('active')
    };
    if (B == 0) {
        hsbr.classList.remove('deactive')
        hsbr.classList.add('active')
        hsbl.classList.remove('deactive')
        hsbl.classList.add('active')
        hstl.classList.remove('deactive')
        hstl.classList.add('active')
        hstr.classList.remove('deactive')
        hstr.classList.add('active')
        hst.classList.remove('deactive')
        hst.classList.add('active')
        hsbd.classList.remove('deactive')
        hsbd.classList.add('active')
    } else if (B == 1) {
        hstr.classList.remove('deactive')
        hstr.classList.add('active')
        hsbr.classList.remove('deactive')
        hsbr.classList.add('active')
    } else if (B == 2) {
        hst.classList.remove('deactive')
        hst.classList.add('active')
        hstr.classList.remove('deactive')
        hstr.classList.add('active')
        hsbl.classList.remove('deactive')
        hsbl.classList.add('active')
        hsbd.classList.remove('deactive')
        hsbd.classList.add('active')
        hsc.classList.remove('deactive')
        hsc.classList.add('active')        
    } else if (B == 3) {
        hsbr.classList.remove('deactive')
        hsbr.classList.add('active')
        hstr.classList.remove('deactive')
        hstr.classList.add('active')
        hst.classList.remove('deactive')
        hst.classList.add('active')
        hsbd.classList.remove('deactive')
        hsbd.classList.add('active')
        hsc.classList.remove('deactive')
        hsc.classList.add('active')        
    } else if (B == 4) {
        hstr.classList.remove('deactive')
        hstr.classList.add('active')
        hstl.classList.remove('deactive')
        hstl.classList.add('active')
        hsbr.classList.remove('deactive')
        hsbr.classList.add('active')
        hsc.classList.remove('deactive')
        hsc.classList.add('active')        
    } else if (B == 5) {
        hsbr.classList.remove('deactive')
        hsbr.classList.add('active')
        hstl.classList.remove('deactive')
        hstl.classList.add('active')
        hst.classList.remove('deactive')
        hst.classList.add('active')
        hsbd.classList.remove('deactive')
        hsbd.classList.add('active')
        hsc.classList.remove('deactive')
        hsc.classList.add('active')        
    } else if (B == 6) {
        hsbr.classList.remove('deactive')
        hsbr.classList.add('active')
        hsbl.classList.remove('deactive')
        hsbl.classList.add('active')
        hstl.classList.remove('deactive')
        hstl.classList.add('active')
        hst.classList.remove('deactive')
        hst.classList.add('active')
        hsbd.classList.remove('deactive')
        hsbd.classList.add('active')
        hsc.classList.remove('deactive')
        hsc.classList.add('active')       
    } else if (B == 7) {
        hstr.classList.remove('deactive')
        hstr.classList.add('active')
        hsbr.classList.remove('deactive')
        hsbr.classList.add('active')
        hst.classList.remove('deactive')
        hst.classList.add('active')
    } else if (B == 8) {
        hsbr.classList.remove('deactive')
        hsbr.classList.add('active')
        hsbl.classList.remove('deactive')
        hsbl.classList.add('active')
        hstl.classList.remove('deactive')
        hstl.classList.add('active')
        hstr.classList.remove('deactive')
        hstr.classList.add('active')
        hst.classList.remove('deactive')
        hst.classList.add('active')
        hsbd.classList.remove('deactive')
        hsbd.classList.add('active')
        hsc.classList.remove('deactive')
        hsc.classList.add('active')        
    } else if (B == 9) {
        hsbr.classList.remove('deactive')
        hsbr.classList.add('active')
        hstl.classList.remove('deactive')
        hstl.classList.add('active')
        hstr.classList.remove('deactive')
        hstr.classList.add('active')
        hst.classList.remove('deactive')
        hst.classList.add('active')
        hsbd.classList.remove('deactive')
        hsbd.classList.add('active')
        hsc.classList.remove('deactive')
        hsc.classList.add('active')        
    };
    if (C == 0) {
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mfbl.classList.remove('deactive')
        mfbl.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')
    } else if (C == 1) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
    } else if (C == 2) {
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfbl.classList.remove('deactive')
        mfbl.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')        
    } else if (C == 3) {
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')        
    } else if (C == 4) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')        
    } else if (C == 5) {
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')          
    } else if (C == 6) {
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mfbl.classList.remove('deactive')
        mfbl.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')        
    } else if (C == 7) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
    } else if (C == 8) {
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mfbl.classList.remove('deactive')
        mfbl.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')        
    } else if (C == 9) {
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')        
    };
    if (D == 0) {
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
    } else if (D == 1) {
        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
    } else if (D == 2) {
        mst.classList.remove('deactive')
        mst.classList.add('active')
        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')        
    } else if (D == 3) {
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')        
    } else if (D == 4) {
        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')        
    } else if (D == 5) {
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')       
    } else if (D == 6) {
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')       
    } else if (D == 7) {
        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
    } else if (D == 8) {
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')        
    } else if (D == 9) {
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')        
    };
    if (E == 0) {
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sfbl.classList.remove('deactive')
        sfbl.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')
    } else if (E == 1) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
    } else if (E == 2) {
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfbl.classList.remove('deactive')
        sfbl.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')        
    } else if (E == 3) {
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')        
    } else if (E == 4) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')        
    } else if (E == 5) {
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')          
    } else if (E == 6) {
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sfbl.classList.remove('deactive')
        sfbl.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')       
    } else if (E == 7) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
    } else if (E == 8) {
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sfbl.classList.remove('deactive')
        sfbl.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')        
    } else if (E == 9) {
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')        
    };
    if (F == 0) {
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
    } else if (F == 1) {
        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
    } else if (F == 2) {
        sst.classList.remove('deactive')
        sst.classList.add('active')
        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')        
    } else if (F == 3) {
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')        
    } else if (F == 4) {
        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')        
    } else if (F == 5) {
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')       
    } else if (F == 6) {
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')        
    } else if (F == 7) {
        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
    } else if (F == 8) {
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')        
    } else if (F == 9) {
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')        
    };
}

window.onload(onload());