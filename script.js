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
    hours();
    minuts();
    seconds(); 
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


function hours () {
    let now = new Date();
    let hour = now.getHours();
    
    if (hour == 1) {
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

        hstr.classList.remove('deactive')
        hstr.classList.add('active')
        hsbr.classList.remove('deactive')
        hsbr.classList.add('active')

    } else if (hour == 2) {
        fhnumb ();
        shnumb();

    } else if (hour == 3) {
        fhnumb ();
        shnumb();

    } else if (hour == 4) {
        fhnumb ();
        shnumb();

    } else if (hour == 5) {
        fhnumb ();
        shnumb();

    } else if (hour == 6) {
        fhnumb ();
        shnumb();

    } else if (hour == 7) {
        fhnumb ();
        shnumb();

    } else if (hour == 8) {
        fhnumb ();
        shnumb();

    } else if (hour == 9) {
        fhnumb ();
        shnumb();

    } else if (hour == 10) {
        fhnumb ();
        shnumb();

    } else if (hour == 11) {
        fhnumb ();
        shnumb();

    } else if (hour == 12) {
        fhnumb ();
        shnumb();

    } else if (hour == 13) {
        fhnumb ();
        shnumb();

    } else if (hour == 14) {
        fhnumb ();
        shnumb();
        
    } else if (hour == 15) {
        fhnumb ();
        shnumb();
       
    } else if (hour == 16) {
        fhnumb ();
        shnumb();

    } else if (hour == 17) {
        fhnumb ();
        shnumb();
    } else if (hour == 18) {
        fhnumb ();
        shnumb();
    } else if (hour == 19) {
        fhnumb ();
        shnumb();
    } else if (hour == 20) {
        fhnumb ();
        shnumb();

    } else if (hour == 21) {
        fhnumb ();
        shnumb();
    } else if (hour == 22) {
        fhnumb ();
        shnumb();

    } else if (hour == 23) {
        fhnumb ();
        shnumb();
    } else if (hour == 0) {
        fhnumb ();
        shnumb();
    } else {

    }

}

function minuts () {
    let now = new Date();
    let minut = now.getMinutes();
   
    if (minut == 1) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbl.classList.remove('deactive')
        mfbl.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')

    } else if (minut == 2) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbl.classList.remove('deactive')
        mfbl.classList.add('active')

        mst.classList.remove('deactive')
        mst.classList.add('active')
        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')

    } else if (minut == 3) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbl.classList.remove('deactive')
        mfbl.classList.add('active')

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

    } else if (minut == 4) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbl.classList.remove('deactive')
        mfbl.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')

    } else if (minut == 5) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbl.classList.remove('deactive')
        mfbl.classList.add('active')

        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')

    } else if (minut == 6) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbl.classList.remove('deactive')
        mfbl.classList.add('active')


        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')

    } else if (minut == 7) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbl.classList.remove('deactive')
        mfbl.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')

    } else if (minut == 8) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbl.classList.remove('deactive')
        mfbl.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')

    } else if (minut == 9) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbl.classList.remove('deactive')
        mfbl.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')

    } else if (minut == 10) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')

    } else if (minut == 11) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')

    } else if (minut == 12) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')

        mst.classList.remove('deactive')
        mst.classList.add('active')
        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')

    } else if (minut == 13) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')

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

    } else if (minut == 14) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')
        
    } else if (minut == 15) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')

        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
       
    } else if (minut == 16) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')

        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')

    } else if (minut == 17) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
    
    } else if (minut == 18) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')

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
    } else if (minut == 19) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')

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
    } else if (minut == 20) {
        
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')
        mfbl.classList.remove('deactive')
        mfbl.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
    } else if (minut == 21) {
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')
        mfbl.classList.remove('deactive')
        mfbl.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')

    } else if (minut == 22) {
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')
        mfbl.classList.remove('deactive')
        mfbl.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')

        mst.classList.remove('deactive')
        mst.classList.add('active')
        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')

    } else if (minut == 23) {
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')
        mfbl.classList.remove('deactive')
        mfbl.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')

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

    } else if (minut == 24) {
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')
        mfbl.classList.remove('deactive')
        mfbl.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')

    } else if (minut == 25) {
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')
        mfbl.classList.remove('deactive')
        mfbl.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')

        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')

    } else if (minut == 26) {
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')
        mfbl.classList.remove('deactive')
        mfbl.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')

        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')

    } else if (minut == 27) {
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')
        mfbl.classList.remove('deactive')
        mfbl.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')

    } else if (minut == 28) {
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')
        mfbl.classList.remove('deactive')
        mfbl.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')

    } else if (minut == 29) {
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')
        mfbl.classList.remove('deactive')
        mfbl.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')

    } else if (minut == 30) {
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

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')

    } else if (minut == 31) {
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

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')

    } else if (minut == 32) {
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

        mst.classList.remove('deactive')
        mst.classList.add('active')
        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')

    } else if (minut == 33) {
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

    } else if (minut == 34) {
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

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')

    } else if (minut == 35) {
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

        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')

    } else if (minut == 36) {
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

        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')

    } else if (minut == 37) {
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

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')

    } else if (minut == 38) {
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
        
        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')

    } else if (minut == 39) {
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

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')

    } else if (minut == 40) {

        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')

    } else if (minut == 41) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')

    } else if (minut == 42) {

        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')

        mst.classList.remove('deactive')
        mst.classList.add('active')
        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')

    } else if (minut == 43) {

        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')

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

    } else if (minut == 44) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')

    } else if (minut == 45) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')

        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')

    } else if (minut == 46) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')

        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')

    } else if (minut == 47) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')

    } else if (minut == 48) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')

    } else if (minut == 49) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')

    } else if (minut == 50) {

        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')

    } else if (minut == 51) {

        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')

    } else if (minut == 52) {
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')

        mst.classList.remove('deactive')
        mst.classList.add('active')
        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')

    } else if (minut == 53) {
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')

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

    } else if (minut == 54) {
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')

    } else if (minut == 55) {
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')
        
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')

    } else if (minut == 56) {
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')

        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')

    } else if (minut == 57) {
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')

    } else if (minut == 58) {
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')

    } else if (minut == 59) {
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfc.classList.remove('deactive')
        mfc.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        msc.classList.remove('deactive')
        msc.classList.add('active')

    } else if (minut == 0) {
        mftr.classList.remove('deactive')
        mftr.classList.add('active')
        mfbr.classList.remove('deactive')
        mfbr.classList.add('active')
        mft.classList.remove('deactive')
        mft.classList.add('active')
        mfbd.classList.remove('deactive')
        mfbd.classList.add('active')
        mftl.classList.remove('deactive')
        mftl.classList.add('active')
        mfbl.classList.remove('deactive')
        mfbl.classList.add('active')

        mstr.classList.remove('deactive')
        mstr.classList.add('active')
        msbr.classList.remove('deactive')
        msbr.classList.add('active')
        mst.classList.remove('deactive')
        mst.classList.add('active')
        msbd.classList.remove('deactive')
        msbd.classList.add('active')
        mstl.classList.remove('deactive')
        mstl.classList.add('active')
        msbl.classList.remove('deactive')
        msbl.classList.add('active')

    } else { 

    }

}

function seconds () {
    let now = new Date();
    let second = now.getSeconds();
   
    if (second == 1) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbl.classList.remove('deactive')
        sfbl.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')

    } else if (second == 2) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbl.classList.remove('deactive')
        sfbl.classList.add('active')

        sst.classList.remove('deactive')
        sst.classList.add('active')
        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')

    } else if (second == 3) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbl.classList.remove('deactive')
        sfbl.classList.add('active')

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

    } else if (second == 4) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbl.classList.remove('deactive')
        sfbl.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')

    } else if (second == 5) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbl.classList.remove('deactive')
        sfbl.classList.add('active')

        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')

    } else if (second == 6) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbl.classList.remove('deactive')
        sfbl.classList.add('active')


        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')

    } else if (second == 7) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbl.classList.remove('deactive')
        sfbl.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')

    } else if (second == 8) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbl.classList.remove('deactive')
        sfbl.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')

    } else if (second == 9) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbl.classList.remove('deactive')
        sfbl.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')

    } else if (second == 10) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')

    } else if (second == 11) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')

    } else if (second == 12) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')

        sst.classList.remove('deactive')
        sst.classList.add('active')
        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')

    } else if (second == 13) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')

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

    } else if (second == 14) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')
        
    } else if (second == 15) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')

        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
       
    } else if (second == 16) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')

        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')

    } else if (second == 17) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
    
    } else if (second == 18) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')

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
    } else if (second == 19) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')

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
    } else if (second == 20) {
        
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')
        sfbl.classList.remove('deactive')
        sfbl.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
    } else if (second == 21) {
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')
        sfbl.classList.remove('deactive')
        sfbl.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')



    } else if (second == 22) {
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')
        sfbl.classList.remove('deactive')
        sfbl.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')

        sst.classList.remove('deactive')
        sst.classList.add('active')
        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')

    } else if (second == 23) {
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')
        sfbl.classList.remove('deactive')
        sfbl.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')

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

    } else if (second == 24) {
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')
        sfbl.classList.remove('deactive')
        sfbl.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')

    } else if (second == 25) {
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')
        sfbl.classList.remove('deactive')
        sfbl.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')

        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')

    } else if (second == 26) {
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')
        sfbl.classList.remove('deactive')
        sfbl.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')

        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')

    } else if (second == 27) {
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')
        sfbl.classList.remove('deactive')
        sfbl.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')

    } else if (second == 28) {
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')
        sfbl.classList.remove('deactive')
        sfbl.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')

    } else if (second == 29) {
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')
        sfbl.classList.remove('deactive')
        sfbl.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')

    } else if (second == 30) {
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

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')

    } else if (second == 31) {
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

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')

    } else if (second == 32) {
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

        sst.classList.remove('deactive')
        sst.classList.add('active')
        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')

    } else if (second == 33) {
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

    } else if (second == 34) {
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

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')

    } else if (second == 35) {
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

        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')

    } else if (second == 36) {
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

        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')

    } else if (second == 37) {
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

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')

    } else if (second == 38) {
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
        
        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')

    } else if (second == 39) {
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

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')

    } else if (second == 40) {

        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')

    } else if (second == 41) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')

    } else if (second == 42) {

        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')

        sst.classList.remove('deactive')
        sst.classList.add('active')
        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')

    } else if (second == 43) {

        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')

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

    } else if (second == 44) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')

    } else if (second == 45) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')

        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')

    } else if (second == 46) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')

        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')

    } else if (second == 47) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')

    } else if (second == 48) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')

    } else if (second == 49) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')

    } else if (second == 50) {

        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')

    } else if (second == 51) {

        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')

    } else if (second == 52) {
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')

        sst.classList.remove('deactive')
        sst.classList.add('active')
        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')

    } else if (second == 53) {
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')

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

    } else if (second == 54) {
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')

    } else if (second == 55) {
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')
        
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')

    } else if (second == 56) {
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')

        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')

    } else if (second == 57) {
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')

    } else if (second == 58) {
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')

    } else if (second == 59) {
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfc.classList.remove('deactive')
        sfc.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        ssc.classList.remove('deactive')
        ssc.classList.add('active')

    } else if (second == 0) {
        sftr.classList.remove('deactive')
        sftr.classList.add('active')
        sfbr.classList.remove('deactive')
        sfbr.classList.add('active')
        sft.classList.remove('deactive')
        sft.classList.add('active')
        sfbd.classList.remove('deactive')
        sfbd.classList.add('active')
        sftl.classList.remove('deactive')
        sftl.classList.add('active')
        sfbl.classList.remove('deactive')
        sfbl.classList.add('active')

        sstr.classList.remove('deactive')
        sstr.classList.add('active')
        ssbr.classList.remove('deactive')
        ssbr.classList.add('active')
        sst.classList.remove('deactive')
        sst.classList.add('active')
        ssbd.classList.remove('deactive')
        ssbd.classList.add('active')
        sstl.classList.remove('deactive')
        sstl.classList.add('active')
        ssbl.classList.remove('deactive')
        ssbl.classList.add('active')

    } else { 

    }

}

function firone (paramnumb) {
    let now = new Date();
    let hour = now.getHours();
    let minut = now.getMinutes();
    let second = now.getSeconds();
    if (hour == 9) {
    
    } else if (hour == 10) {
        
    } else (
        console.log('Error')
    );
}

function fhnumb () {
    let now = new Date();
    let hour = now.getHours();
    if (hour == 0 ||
        hour == 1 || 
        hour == 2 || 
        hour == 3 || 
        hour == 4 || 
        hour == 5 || 
        hour == 6 || 
        hour == 7 || 
        hour == 8 || 
        hour == 9) {
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
    } else if (hour == 10 ||
        hour == 11 ||
        hour == 12 ||
        hour == 13 ||
        hour == 14 ||
        hour == 15 ||
        hour == 16 ||
        hour == 17 ||
        hour == 18 ||
        hour == 19) {
            hftr.classList.remove('deactive')
            hftr.classList.add('active')
            hfbr.classList.remove('deactive')
            hfbr.classList.add('active')        
    } else if (
        hour == 20 ||
        hour == 21 ||
        hour == 22 ||
        hour == 23) {
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
    } else {
        console.log('Error')

    }
}

function shnumb () {
    let now = new Date();
    let hour = now.getHours();
    if (hour == 0 ||
        hour == 10 ||
        hour == 20
    ) {
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
    } else if (
        hour == 1 ||
        hour == 11 ||
        hour == 21
    )  {
        hstr.classList.remove('deactive')
        hstr.classList.add('active')
        hsbr.classList.remove('deactive')
        hsbr.classList.add('active')
    } else if (
        hour == 2 ||
        hour == 12 ||
        hour == 22
    ) {
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
    } else if (
        hour == 3 ||
        hour == 13 ||
        hour == 23
    ) {
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
    } else if (
        hour == 4 ||
        hour == 14
    ) {
        hstr.classList.remove('deactive')
        hstr.classList.add('active')
        hstl.classList.remove('deactive')
        hstl.classList.add('active')
        hsbr.classList.remove('deactive')
        hsbr.classList.add('active')
        hsc.classList.remove('deactive')
        hsc.classList.add('active')
    } else if (
        hour == 5 ||
        hour == 15
    ) {
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
    } else if (
        hour == 6 ||
        hour == 16
    ) {
        hsbr.classList.remove('deactive')
        hsbr.classList.add('active')
        hsbl.classList.remove('deactive')
        hsbl.classList.add('active')
        hstr.classList.remove('deactive')
        hstr.classList.add('active')
        hst.classList.remove('deactive')
        hst.classList.add('active')
        hsbd.classList.remove('deactive')
        hsbd.classList.add('active')
        hsc.classList.remove('deactive')
        hsc.classList.add('active')
    } else if (
        hour == 7 ||
        hour == 17
    ) {
        hstr.classList.remove('deactive')
        hstr.classList.add('active')
        hsbr.classList.remove('deactive')
        hsbr.classList.add('active')
        hst.classList.remove('deactive')
        hst.classList.add('active')
    } else if (
        hour == 8 ||
        hour == 18
    ) {
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
    } else if (
        hour == 9 ||
        hour == 19
    ) {
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
    } else {
        console.log('Error')
    }
}

window.onload(onload());
